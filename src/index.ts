import fs from "fs/promises";
import os from "os";
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
    await extractCaches(opts);
  } else {
    // Otherwise, this is the main step
    if (process.env.GITHUB_STATE !== undefined) {
      await fs.appendFile(process.env.GITHUB_STATE, `POST=true${os.EOL}`);
    }
    await injectCaches(opts);
  }
}

try {
  await main(process.argv);
} catch (err) {
  console.error(err);
  if (err instanceof Error) {
    console.error(err.stack);
  }
  process.exit(1);
}
