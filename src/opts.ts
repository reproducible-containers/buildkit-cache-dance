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
      "cache-map": getInput("cache-map") || "{}",
      "scratch-dir": getInput("scratch-dir") || "scratch",
      "skip-extraction": (getInput("skip-extraction") || "false") === "true",
      "extract": process.env[`STATE_POST`] !== undefined,
      "help": false,
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
  --cache-map    The map of actions source paths to container destination paths or mount arguments
  --scratch-dir  Where the action is stores some temporary files for its processing. Default: 'scratch'
  --skip-extraction  Skip the extraction of the cache from the docker container
  --help         Show this help
`);
}

export type SourcePath = string
export type TargetPath = string
export type ToStringable = {
  toString(): string;
}
export type CacheOptions = TargetPath | { target: TargetPath } & Record<string, ToStringable>
export type CacheMap = Record<SourcePath, CacheOptions>

export function getCacheMap(opts: Opts): CacheMap {
  try {
    return JSON.parse(opts["cache-map"]) as CacheMap;
  } catch (e) {
    throw new Error(`Failed to parse cache map. Expected JSON, got:\n${opts["cache-map"]}\n${e}`);
  }
}

export function getTargetPath(cacheOptions: CacheOptions): TargetPath {
  if (typeof cacheOptions === "string") {
    // only the target path is provided
    return cacheOptions;
  } else {
    // object is provided
    if ("target" in cacheOptions) {
      return cacheOptions.target;
    } else {
      throw new Error(`Expected the 'target' key in the cache options, got:\n${cacheOptions}`);
    }
  }
}

export function getUID(cacheOptions: CacheOptions): string {
  if (typeof cacheOptions === "string") {
    // only the target path is provided
    return "";
  } else {
    // object is provided
    if ("uid" in cacheOptions && cacheOptions.uid !== undefined) {
      return cacheOptions.uid.toString();
    } else {
      return "";
    }
  }
}

export function getGID(cacheOptions: CacheOptions): string {
  if (typeof cacheOptions === "string") {
    // only the target path is provided
    return "";
  } else {
    // object is provided
    if ("gid" in cacheOptions && cacheOptions.gid !== undefined) {
      return cacheOptions.gid.toString();
    } else {
      return "";
    }
  }
}

/**
 * Convert a cache options to a string that is passed to --mount=
 * @param CacheOptions The cache options to convert to a string
 */
export function getMountArgsString(cacheOptions: CacheOptions): string {
  if (typeof cacheOptions === "string") {
    // only the target path is provided
    return `type=cache,target=${cacheOptions}`;
  } else {
    // other options are provided
    const otherOptions = Object.entries(cacheOptions).map(([key, value]) => `${key}=${value}`).join(",");
    return `type=cache,${otherOptions}`;
  }
}
