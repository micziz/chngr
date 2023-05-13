import { readdir, stat } from "fs/promises"

export async function getFilesToRead(): Promise<string[]> {
    const toReturn: string[] = []
    const read = await readdir("./.chngr")
    read.forEach(async (el) => {
        if ((await stat(el)).isFile()){
            toReturn.push(el)
        }
    })
    return toReturn;
}