import spawn from 'spawn-please'

export function run(command: string, args: string[]) {
    return spawn(command, args, {}, { stdout: 'inherit' });
}
