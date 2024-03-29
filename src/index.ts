// Forked from https://github.com/pyTooling/Actions/blob/v0.4.6/with-post-step/main.js
// The following copyright header is from the upstream.

/* ================================================================================================================== *
 * Authors:                                                                                                           *
 *   Unai Martinez-Corral                                                                                             *
 *   Amin Yahyaabadi                                                                                                  *
 *                                                                                                                    *
 * ================================================================================================================== *
 * Copyright 2021-2022 Unai Martinez-Corral <unai.martinezcorral@ehu.eus>                                             *
 * Copyright 2022 Unai Martinez-Corral <umartinezcorral@antmicro.com>                                                 *
 *                                                                                                                    *
 * Licensed under the Apache License, Version 2.0 (the "License");                                                    *
 * you may not use this file except in compliance with the License.                                                   *
 * You may obtain a copy of the License at                                                                            *
 *                                                                                                                    *
 *     http://www.apache.org/licenses/LICENSE-2.0                                                                     *
 *                                                                                                                    *
 * Unless required by applicable law or agreed to in writing, software                                                *
 * distributed under the License is distributed on an "AS IS" BASIS,                                                  *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                           *
 * See the License for the specific language governing permissions and                                                *
 * limitations under the License.                                                                                     *
 *                                                                                                                    *
 * SPDX-License-Identifier: Apache-2.0                                                                                *
 * ================================================================================================================== *
 *                                                                                                                    *
 * Context:                                                                                                           *
 * * https://github.com/docker/login-action/issues/72                                                                 *
 * * https://github.com/actions/runner/issues/1478                                                                    *
 * ================================================================================================================== */
import { appendFile } from "fs/promises";
import { EOL } from "os";
import { injectCaches } from "./inject-cache.js";
import { extractCaches } from "./extract-cache.js";
import { parseOpts } from "./opts.js";

async function main(args: string[]) {
  const opts = parseOpts(args);

  const is_post_step = process.env[`STATE_POST`] !== undefined;

  if (is_post_step) {
    // Run the post step
    extractCaches(opts);
  } else {
    // Otherwise, this is the main step
    if (process.env.GITHUB_STATE === undefined) {
      throw new Error("GITHUB_STATE is not defined");
    }
    await appendFile(process.env.GITHUB_STATE, `POST=true${EOL}`);
    await injectCaches(opts);
  }
}

await main(process.argv);
