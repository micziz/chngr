import { readFile } from "fs/promises"
import { fileURLToPath } from "url"
import { join } from 'path'

const dirname = fileURLToPath(new URL(".", import.meta.url))

export async function help(){
    const {version} = JSON.parse(await readFile(join(dirname.replace("dist", ""), "package.json"), "utf-8"))
    return `
chngr version ${version}

commands:

create:
    Creates a new commit file

bump:
    Unites all commit files into changelog with bumped version!


options:
    --interactive: Will launch interactive mode, takes priority over the other two!
    `
}