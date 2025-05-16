import { expect, test } from 'vitest'
import { getCacheMap, getTargetPath, getMountArgsString, parseOpts, getUID, getGID } from '../src/opts.js'
import { promises as fs } from 'fs'

test('parseOpts with no arguments', () => {
    const opts = parseOpts([])
    expect(opts).toEqual({
        "_": [],
        "cache-map": "{}",
        "dockerfile": "Dockerfile",
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": false,
        "help": false,
        "utility-image": "ghcr.io/containerd/busybox:latest",
        "builder": "default"
    })
})

test('parseOpts with cache-map argument', () => {
    const opts = parseOpts(['--cache-map', '{"key": "value"}'])
    expect(opts).toEqual({
        "_": [],
        "cache-map": '{"key": "value"}',
        "dockerfile": "Dockerfile",
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": false,
        "help": false,
        "utility-image": "ghcr.io/containerd/busybox:latest",
        "builder": "default"
    })
})

test('parseOpts with deprecated cache-source and cache-target arguments', () => {
    const opts = parseOpts(['--cache-source', 'source', '--cache-target', 'target'])
    expect(opts).toEqual({
        "_": [],
        "cache-map": '{"source":"target"}',
        "dockerfile": "Dockerfile",
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": false,
        "help": false,
        "cache-source": 'source',
        "cache-target": 'target',
        "utility-image": "ghcr.io/containerd/busybox:latest",
        "builder": "default"
    })
})

test('parseOpts with utility-image argument', () => {
    const opts = parseOpts(['--utility-image', 'alpine:1'])
    expect(opts).toEqual({
        "_": [],
        "cache-map": '{}',
        "dockerfile": "Dockerfile",
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": false,
        "help": false,
        "utility-image": "alpine:1",
        "builder": "default"
    })
})

test('parseOpts with builder argument', () => {
    const opts = parseOpts(['--builder', 'another-builder'])
    expect(opts).toEqual({
        "_": [],
        "cache-map": '{}',
        "dockerfile": "Dockerfile",
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": false,
        "help": false,
        "utility-image": "ghcr.io/containerd/busybox:latest",
        "builder": "another-builder"
    })
})

test('parseOpts with dockerfile argument', () => {
    const opts = parseOpts(['--dockerfile', 'Dockerfile.custom'])
    expect(opts).toEqual({
        "_": [],
        "cache-map": "{}",
        "dockerfile": "Dockerfile.custom",
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": false,
        "help": false,
        "utility-image": "ghcr.io/containerd/busybox:latest",
        "builder": "default"
    })
})

test('parseOpts with help argument', () => {
    const opts = parseOpts(['-h'])
    expect(opts).toEqual({
        "_": [],
        "cache-map": "{}",
        "dockerfile": "Dockerfile",
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": true,
        "help": true,
        "utility-image": "ghcr.io/containerd/busybox:latest",
        "builder": "default"
    })
})

test('getCacheMap', async () => {
    const opts = parseOpts(['--cache-map', '{"key": "value"}'])
    const cacheMap = await getCacheMap(opts)
    expect(cacheMap).toEqual({ key: 'value' })
})

test('getCacheMap with both cache-map and dockerfile specified', async () => {
    const opts = parseOpts(['--cache-map', '{"key": "value"}', '--dockerfile', 'Dockerfile.custom'])
    const cacheMap = await getCacheMap(opts)
    expect(cacheMap).toEqual({ key: 'value' })
})

test('getCacheMapFromDockerfile', async () => {
    const tmpDir = await fs.mkdtemp('/tmp/dockerfile-test-');
    const dockerfilePath = `${tmpDir}/Dockerfile`
    await fs.writeFile(dockerfilePath, `
FROM alpine:latest AS builder

# Target absolute path, no id
RUN --mount=type=cache,target=/tmp/cache \
    echo "Hello, World!" > /tmp/cache/hello.txt

# Target relative path with workdir, no id
WORKDIR /app
RUN --mount=type=cache,target=cache1 \
    echo "Hello, World!" > cache/hello.txt

# Multi-stage build
FROM alpine:latest

# Target absolute path with id
RUN --mount=type=cache,id=cache2,target=/tmp/cache \
    echo "Hello, World!" > /tmp/cache/hello.txt

# Target relative path with workdir and id
WORKDIR /app2
RUN --mount=type=cache,id=cache3,target=cache \
    echo "Hello, World!" > cache/hello.txt
`);

    const opts = parseOpts(['--dockerfile', dockerfilePath])
    const cacheMap = await getCacheMap(opts)
    await fs.rm(tmpDir, { recursive: true })

    expect(cacheMap).toEqual(
        {
            '/tmp/cache': {
                'id': '/tmp/cache',
                'target': '/var/cache-target'
            },
            'cache1': {
                'id': 'cache1',
                'target': '/var/cache-target'
            },
            'cache2': {
                'id': 'cache2',
                'target': '/var/cache-target'
            },
            'cache3': {
                'id': 'cache3',
                'target': '/var/cache-target'
            }
        }
    )
})

test('getCacheMap with invalid JSON', async() => {
    const opts = parseOpts(['--cache-map', 'invalid'])
    await expect(getCacheMap(opts)).rejects.toThrowError()
})

test('getTargetPath with string', () => {
    const cacheOptions = 'targetPath'
    const targetPath = getTargetPath(cacheOptions)
    expect(targetPath).toBe('targetPath')
})

test('getTargetPath with object', () => {
    const cacheOptions = { target: 'targetPath' }
    const targetPath = getTargetPath(cacheOptions)
    expect(targetPath).toBe('targetPath')
})

test('getTargetPath with invalid object', () => {
    const cacheOptions = {} as any
    expect(() => getTargetPath(cacheOptions)).toThrowError()
})

test('getMountArgsString with string', () => {
    const cacheOptions = 'targetPath'
    const mountString = getMountArgsString(cacheOptions)
    expect(mountString).toBe('type=cache,target=targetPath')
})

test('getMountArgsString with object', () => {
    const cacheOptions = { target: 'targetPath', shared: true, id: 1 }
    const mountString = getMountArgsString(cacheOptions)
    expect(mountString).toBe('type=cache,target=targetPath,shared=true,id=1')
})

test('getUID with string', () => {
    const cacheOptions = 'targetPath'
    const uid = getUID(cacheOptions)
    expect(uid).toBe('')
})


test('getUID with object without uid', () => {
    const cacheOptions = { target: 'targetPath', shared: true, id: 1 }
    const uid = getUID(cacheOptions)
    expect(uid).toBe('')
})

test('getUID with object with uid', () => {
    const cacheOptions = { target: 'targetPath', shared: true, id: 1, uid: 1000 }
    const uid = getUID(cacheOptions)
    expect(uid).toBe('1000')
})

test('getGID with string', () => {
    const cacheOptions = 'targetPath'
    const gid = getGID(cacheOptions)
    expect(gid).toBe('')
})


test('getGID with object without gid', () => {
    const cacheOptions = { target: 'targetPath', shared: true, id: 1 }
    const gid = getGID(cacheOptions)
    expect(gid).toBe('')
})

test('getGID with object with gid', () => {
    const cacheOptions = { target: 'targetPath', shared: true, id: 1, gid: 1000 }
    const gid = getGID(cacheOptions)
    expect(gid).toBe('1000')
})
