import { appendFile } from "fs/promises";
import { EOL } from "os";
import { injectCaches } from "./inject-cache.js";
import { extractCaches } from "./extract-cache.js";
import { help, parseOpts } from "./opts.js";

async function main(args: string[]) {
  const opts = parseOpts(args);

  if (opts.help) {
    return help();
  }

  if (opts.extract) {
    // Run the post step
    extractCaches(opts);
  } else {
    // Otherwise, this is the main step
    if (process.env.GITHUB_STATE !== undefined) {
      await appendFile(process.env.GITHUB_STATE, `POST=true${EOL}`);
    }
    await injectCaches(opts);
  }
}

await main(process.argv);
