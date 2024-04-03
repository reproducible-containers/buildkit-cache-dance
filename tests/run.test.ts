import { expect, test } from 'vitest'
import { run, runPiped } from '../src/run.js'

test('run with valid command', async () => {
    expect(await run('echo', ['hello'])).toStrictEqual({ stdout: 'hello\n', stderr: '' })
})

test('run with invalid command', async () => {
    await expect(run('invalid', [])).rejects.toThrow()
})

test('runPiped with valid commands', async () => {
    await expect(runPiped(['echo', ['hello']], ['cat', []])).resolves.not.toThrow()
})

test('runPiped with invalid first command', async () => {
    await expect(runPiped(['invalid', []], ['cat', []])).rejects.toThrow()
})

test('runPiped with invalid second command', async () => {
    await expect(runPiped(['echo', ['hello']], ['invalid', []])).rejects.toThrow()
})
