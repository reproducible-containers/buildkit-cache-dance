import mri from 'mri';
import fs from 'fs';
import { getInput, warning } from '@actions/core';
import { DockerfileParser, ModifiableInstruction } from 'dockerfile-ast';

export type Opts = {
  "extract": boolean
  "cache-map": string
  "dockerfile": string
  "scratch-dir": string
  "skip-extraction": boolean
  "utility-image": string
  "builder"?: string
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
      "dockerfile": getInput("dockerfile") || "Dockerfile",
      "scratch-dir": getInput("scratch-dir") || "scratch",
      "skip-extraction": (getInput("skip-extraction") || "false") === "true",
      "extract": process.env[`STATE_POST`] !== undefined,
      "utility-image": getInput("utility-image") || "ghcr.io/containerd/busybox:latest",
      "builder": getInput("builder") || "default",
      "help": false,
    },
    string: ["cache-map", "dockerfile", "scratch-dir", "cache-source", "cache-target", "utility-image", "builder"],
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
  --dockerfile   The Dockerfile to use for the auto-discovery of cache-map. Default: 'Dockerfile'
  --scratch-dir  Where the action is stores some temporary files for its processing. Default: 'scratch'
  --skip-extraction  Skip the extraction of the cache from the docker container
  --utility-image  The container image to use for injecting and extracting the cache. Default: 'ghcr.io/containerd/busybox:latest'
  --builder      The name of the buildx builder to use for the cache injection
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

function getCacheMapFromDockerfile(dockerfilePath: string): CacheMap {
  const dockerfileContent = fs.readFileSync(dockerfilePath, "utf-8");
  const dockerfile = DockerfileParser.parse(dockerfileContent);

  const cacheMap: CacheMap = {};

  const runInstructions = dockerfile.getInstructions().filter(i => i.getKeyword() == 'RUN') as Array<ModifiableInstruction>;
  for (const run of runInstructions) {
    for (const flag of run.getFlags()) {
      if (flag.getName() == 'mount' && flag.getOption('type')?.getValue() == 'cache') {
        // Extract the `id` flag which defaults to `target` when `id` is not set
        // https://docs.docker.com/reference/dockerfile/#run---mounttypecache
        const id = flag.getOption('id')?.getValue() || flag.getOption('target')?.getValue();
        if (id == null) {
          throw new Error('cache mount must define id or target: ' + flag.toString() + ' in ' + run.toString());
        }

        // The target in this action does not matter as long as it is
        // different than /var/dance-cache of course
        const target = "/var/cache-target";

        cacheMap[id] = {
          id,
          target,
        };
      }
    }
  }

  return cacheMap;
}

export function getCacheMap(opts: Opts): CacheMap {
  try {
    const cacheMap = JSON.parse(opts["cache-map"]) as CacheMap;
    if (Object.keys(cacheMap).length !== 0) {
      return cacheMap;
    }

    console.log(`No cache map provided. Trying to parse the Dockerfile to find the cache mount instructions...`);
    const cacheMapFromDockerfile = getCacheMapFromDockerfile(opts["dockerfile"]);
    console.log(`Cache map parsed from Dockerfile: ${JSON.stringify(cacheMapFromDockerfile)}`);
    return cacheMapFromDockerfile;
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

export function getBuilder(opts: Opts): string {
    return opts["builder"] == null || opts["builder"] == "" ? "default" : opts["builder"];
}
