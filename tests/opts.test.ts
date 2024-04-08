import { expect, test } from 'vitest'
import { getCacheMap, getTargetPath, getMountArgsString, parseOpts } from '../src/opts.js'

test('parseOpts with no arguments', () => {
    const opts = parseOpts([])
    expect(opts).toEqual({
        "_": [],
        "cache-map": "{}",
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": false,
        "help": false
    })
})

test('parseOpts with cache-map argument', () => {
    const opts = parseOpts(['--cache-map', '{"key": "value"}'])
    expect(opts).toEqual({
        "_": [],
        "cache-map": '{"key": "value"}',
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": false,
        "help": false
    })
})

test('parseOpts with deprecated cache-source and cache-target arguments', () => {
    const opts = parseOpts(['--cache-source', 'source', '--cache-target', 'target'])
    expect(opts).toEqual({
        "_": [],
        "cache-map": '{"source":"target"}',
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": false,
        "help": false,
        "cache-source": 'source',
        "cache-target": 'target'
    })
})

test('parseOpts with help argument', () => {
    const opts = parseOpts(['-h'])
    expect(opts).toEqual({
        "_": [],
        "cache-map": "{}",
        "scratch-dir": "scratch",
        "skip-extraction": false,
        "extract": false,
        "h": true,
        "help": true,
    })
})

test('getCacheMap', () => {
    const opts = parseOpts(['--cache-map', '{"key": "value"}'])
    const cacheMap = getCacheMap(opts)
    expect(cacheMap).toEqual({ key: 'value' })
})

test('getCacheMap with invalid JSON', () => {
    const opts = parseOpts(['--cache-map', 'invalid'])
    expect(() => getCacheMap(opts)).toThrowError()
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
