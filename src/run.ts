import spawn from 'spawn-please'

export async function run(command: string, args: string[]) {
    try {
        return await spawn(command, args, {}, { stdout: 'inherit', stderr: 'inherit' });
    } catch (error) {
        console.error(`Error running command: ${command} ${args.join(' ')}`);
        throw error;
    }
}
