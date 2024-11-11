import fs from 'fs/promises';
import path from 'path';
import { CacheOptions, Opts, getCacheMap, getMountArgsString, getTargetPath, getUID, getGID } from './opts.js';
import { run } from './run.js';
import { notice } from '@actions/core';

async function injectCache(cacheSource: string, cacheOptions: CacheOptions, scratchDir: string, containerImage: string) {
    // Clean Scratch Directory
    await fs.rm(scratchDir, { recursive: true, force: true });
    await fs.mkdir(scratchDir, { recursive: true });

    // Prepare Cache Source Directory
    await fs.mkdir(cacheSource, { recursive: true });

    // Prepare Timestamp for Layer Cache Busting
    const date = new Date().toISOString();
    await fs.writeFile(path.join(cacheSource, 'buildstamp'), date);

    const targetPath = getTargetPath(cacheOptions);
    const mountArgs = getMountArgsString(cacheOptions);

    // If UID OR GID are set, then add chown to restore files ownership.
    let ownershipCommand = "";
    const uid = getUID(cacheOptions);
    const gid = getGID(cacheOptions);
    if (uid !== "" || gid !== "") {
        ownershipCommand = `&& chown -R ${uid}:${gid} ${targetPath}`
    }

    // Prepare Dancefile to Access Caches
    const dancefileContent = `
FROM ${containerImage}
COPY buildstamp buildstamp
RUN --mount=${mountArgs} \
    --mount=type=bind,source=.,target=/var/dance-cache \
    cp -p -R /var/dance-cache/. ${targetPath} ${ownershipCommand} || true
`;
    await fs.writeFile(path.join(scratchDir, 'Dancefile.inject'), dancefileContent);
    console.log(dancefileContent);

    // Inject Data into Docker Cache
    await run('docker', ['buildx', 'build', '-f', path.join(scratchDir, 'Dancefile.inject'), '--tag', 'dance:inject', cacheSource]);

    // Clean Directories
    try {
        await fs.rm(cacheSource, { recursive: true, force: true });
    } catch (err) {
        // Ignore Cleaning Errors
        notice(`Error while cleaning cache source directory: ${err}. Ignoring...`);
    }
}


export async function injectCaches(opts: Opts) {
    const cacheMap = getCacheMap(opts);
    const scratchDir = opts['scratch-dir'];
    const containerImage = opts['utility-image'];

    // Inject Caches for each source-target pair
    for (const [cacheSource, cacheOptions] of Object.entries(cacheMap)) {
        await injectCache(cacheSource, cacheOptions, scratchDir, containerImage);
    }
}
