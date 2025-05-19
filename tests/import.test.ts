import { describe, it } from "vitest"

describe("import", () => {
    it("buildkit-cache-dance should be able to run", async () => {
        process.chdir("./tests/fixtures/import")
        await import("../dist/index.js")
    })
})

