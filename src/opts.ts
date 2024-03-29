import mri from 'mri';

export type Opts = {
  "cache-map": string
  "scratch-dir": string
  "skip-extraction": boolean
}

export function parseOpts(args: string[]): mri.Argv<Opts> {
  return mri<Opts>(args, {
    default: {
      "cache-map": getInput("cache-map"),
      "scratch-dir": getInput("scratch-dir"),
      "skip-extraction": getInput("skip-extraction") === "true",
    },
    string: ["cache-map", "scratch-dir"],
    boolean: ["skip-extraction"],
  })
}

/**
 * Get the action input value from the environment (INPUT_NAME)
 */
function getInput(name: string) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    return val.trim();
}

export function getCacheMap(opts: Opts): Record<string, string> {
  try {
    return JSON.parse(opts["cache-map"]) as Record<string, string>;
  } catch (e) {
    throw new Error(`Failed to parse cache map. Expected JSON, got:\n${opts["cache-map"]}\n${e}`);
  }
}
