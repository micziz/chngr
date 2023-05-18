import { fileURLToPath } from "node:url"
import { join } from 'node:path'
import { readFile } from "node:fs/promises"
import { execa } from 'execa'

const dirname = fileURLToPath(new URL(".", import.meta.url))
const { version } = JSON.parse(await readFile(join(dirname.replace("scripts", ""), "package.json"), "utf-8"))

await execa("git", ["add", "."])
await execa("git", ["commit", "-m", version])
await execa("pnpm", ["publish"])
await execa("git", ["push", "origin", "HEAD"])