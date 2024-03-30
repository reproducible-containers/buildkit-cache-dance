import spawn from 'spawn-please'

export async function run(command: string, args: string[], captureOutput = false) {
    try {
        const spawnOpts = captureOutput ?
            { stdout: 'pipe', stderr: 'pipe', } :
            { stdout: 'inherit', stderr: 'inherit' };
        return await spawn(command, args, {}, spawnOpts);
    } catch (error) {
        console.error(`Error running command: ${command} ${args.join(' ')}`);
        throw error;
    }
}
