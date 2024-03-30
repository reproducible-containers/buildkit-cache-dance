import mri from 'mri';
import { getInput, warning } from '@actions/core';

export type Opts = {
  "extract": boolean
  "cache-map": string
  "scratch-dir": string
  "skip-extraction": boolean
  help: boolean
  /** @deprecated Use `cache-map` instead */
  "cache-source"?: string
  /** @deprecated Use `cache-map` instead */
  "cache-target"?: string
}

export function parseOpts(args: string[]): mri.Argv<Opts> {
  const opts = mri<Opts>(args, {
    default: {
      "cache-map": getInput("cache-map"),
      "scratch-dir": getInput("scratch-dir"),
      "skip-extraction": getInput("skip-extraction") === "true",
      "extract": process.env[`STATE_POST`] !== undefined,
    },
    string: ["cache-map", "scratch-dir", "cache-source", "cache-target"],
    boolean: ["skip-extraction", "help", "extract"],
    alias: {
      "help": ["h"],
    },
  })

  if (opts["cache-source"] && opts["cache-target"]) {
    warning("The `cache-source` and `cache-target` options are deprecated. Use `cache-map` instead.")

    opts["cache-map"] = JSON.stringify({
      [opts["cache-source"]]: opts["cache-target"],
    });
  }

  return opts;
}

export function help() {
  console.log(`build-cache-dance [options]
Save 'RUN --mount=type=cache' caches on GitHub Actions or other CI platforms

Options:
  --extract      Extract the cache from the docker container (extract step). Otherwise, inject the cache (main step)
  --cache-map    The map of actions source to container destination paths for the cache paths
  --scratch-dir  Where the action is stores some temporary files for its processing. Default: 'scratch'
  --skip-extraction  Skip the extraction of the cache from the docker container
  --help         Show this help
`);
}

export function getCacheMap(opts: Opts): Record<string, string> {
  try {
    return JSON.parse(opts["cache-map"]) as Record<string, string>;
  } catch (e) {
    throw new Error(`Failed to parse cache map. Expected JSON, got:\n${opts["cache-map"]}\n${e}`);
  }
}
