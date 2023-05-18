import { readdir, stat } from "node:fs/promises"

export async function getFilesToRead(): Promise<string[]> {
    const toReturn: string[] = []
    const read = await readdir("./.chngr")
    for (const el in read){
        if ((await stat(`./.chngr/${read[el]}`)).isFile()){
            toReturn.push(read[el])
        }
    }
    return toReturn;
}