import fs from 'fs/promises';
import path from 'path';
import { Opts, getCacheMap } from './opts.js';
import { run } from './run.js';

async function extractCache(cacheSource: string, cacheTarget: string, scratchDir: string) {
    // Prepare Timestamp for Layer Cache Busting
    const { stdout: date } = await run('date', ['--iso=ns']);
    await fs.writeFile(path.join(scratchDir, 'buildstamp'), date);

    // Prepare Dancefile to Access Caches
    const dancefileContent = `
FROM busybox:1
COPY buildstamp buildstamp
RUN --mount=type=cache,target=${cacheTarget} \
    mkdir -p /var/dance-cache/ \
    && cp -p -R ${cacheTarget}/. /var/dance-cache/ || true
`;
    await fs.writeFile(path.join(scratchDir, 'Dancefile.extract'), dancefileContent);
    console.log(dancefileContent);

    // Extract Data into Docker Image
    await run('docker', ['buildx', 'build', '-f', path.join(scratchDir, 'Dancefile.extract'), '--tag', 'dance:extract', '--load', scratchDir]);

    // Create Extraction Image
    try {
        await run('docker', ['rm', '-f', 'cache-container']);
    } catch (error) {
        // Ignore error if container does not exist
    }
    await run('docker', ['create', '-ti', '--name', 'cache-container', 'dance:extract']);

    // Unpack Docker Image into Scratch
    const { stdout: tarOutput } = await run('docker', ['cp', '-L', 'cache-container:/var/dance-cache', '-']);
    await fs.writeFile(path.join(scratchDir, 'dance-cache.tar'), tarOutput);
    await run('tar', ['-H', 'posix', '-x', '-C', scratchDir, '-f', path.join(scratchDir, 'dance-cache.tar')]);

    // Move Cache into Its Place
    await fs.rm(cacheSource, { recursive: true, force: true });
    await fs.rename(path.join(scratchDir, 'dance-cache'), cacheSource);
}

export async function extractCaches(opts: Opts) {
    if (opts["skip-extraction"]) {
        console.log("skip-extraction is set. Skipping extraction step...");
        return;
    }

    const cacheMap = getCacheMap(opts);
    const scratchDir = opts['scratch-dir'];

    // Extract Caches for each source-target pair
    for (const [cacheSource, cacheTarget] of Object.entries(cacheMap)) {
        await extractCache(cacheSource, cacheTarget, scratchDir);
    }
}
