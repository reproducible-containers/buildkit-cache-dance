import { promises as fs } from 'fs';
import path from 'path';
import { CacheOptions, Opts, getBuilder, getCacheMap, getMountArgsString, getTargetPath } from './opts.js';
import { run, runPiped } from './run.js';

async function extractCache(cacheSource: string, cacheOptions: CacheOptions, scratchDir: string, containerImage: string, builder: string) {
    // Prepare Timestamp for Layer Cache Busting
    const date = new Date().toISOString();

    await fs.mkdir(scratchDir, { recursive: true });
    await fs.writeFile(path.join(scratchDir, 'buildstamp'), date);

    // Prepare Dancefile to Access Caches
    const targetPath = getTargetPath(cacheOptions);
    const mountArgs = getMountArgsString(cacheOptions);

    const dancefileContent = `
FROM ${containerImage}
COPY buildstamp buildstamp
RUN --mount=${mountArgs} \
    mkdir -p /var/dance-cache/ \
    && cp -p -R ${targetPath}/. /var/dance-cache/ || true
`;
    await fs.writeFile(path.join(scratchDir, 'Dancefile.extract'), dancefileContent);
    console.log(dancefileContent);

    // Extract Data into Docker Image
    await run('docker', ['buildx', 'build', ...(builder ? ['--builder', builder] : []), '-f', path.join(scratchDir, 'Dancefile.extract'), '--tag', 'dance:extract', '--load', scratchDir]);

    // Create Extraction Image
    try {
        await run('docker', ['rm', '-f', 'cache-container']);
    } catch (error) {
        // Ignore error if container does not exist
    }
    await run('docker', ['create', '-ti', '--name', 'cache-container', 'dance:extract']);

    // Unpack Docker Image into Scratch
    await runPiped(
        ['docker', ['cp', '-L', 'cache-container:/var/dance-cache', '-']],
        ['tar', ['-H', 'posix', '-x', '-C', scratchDir]]
    );

    // Replace old cache with newly extracted cache
    try {
        await fs.rm(cacheSource, { recursive: true, force: true });
    } catch (err: any) {
        if (err?.code === 'EACCES' || err?.code === 'EPERM') {
            // Use a container w/ bind mount to remove the cache directory
            console.log(`fs.rm failed with ${err.code} on ${cacheSource}, falling back to Docker container for cache removal...`);
            const absSource = path.resolve(cacheSource);
            console.log(`Running: docker run --rm --mount type=bind,source=${path.dirname(absSource)},target=/host-parent ${containerImage} rm -rf /host-parent/${path.basename(absSource)}`);
            await run('docker', [
                'run', '--rm',
                '--mount', `type=bind,source=${path.dirname(absSource)},target=/host-parent`,
                containerImage,
                'rm', '-rf', `/host-parent/${path.basename(absSource)}`
            ]);
            console.log(`Docker container cache removal completed for ${cacheSource}`);
        } else {
            throw err;
        }
    }
    await fs.rename(path.join(scratchDir, 'dance-cache'), cacheSource);
}

export async function extractCaches(opts: Opts) {
    if (opts["skip-extraction"]) {
        console.log("skip-extraction is set. Skipping extraction step...");
        return;
    }

    const cacheMap = await getCacheMap(opts);
    const scratchDir = opts['scratch-dir'];
    const containerImage = opts['utility-image'];
    const builder = getBuilder(opts);

    // Extract Caches for each source-target pair
    for (const [cacheSource, cacheOptions] of Object.entries(cacheMap)) {
        await extractCache(cacheSource, cacheOptions, scratchDir, containerImage, builder);
    }
}
