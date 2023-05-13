import { fileURLToPath } from "node:url"
import { join } from 'node:path'
import { readFile } from "node:fs/promises"

const dirname = fileURLToPath(new URL(".", import.meta.url))
export const {version} = JSON.parse(await readFile(join(dirname.replace("dist", ""), "package.json"), "utf-8"))