import { dirExists } from 'dir-exists-safe'
import empteyDir from 'empty-dir'
import { mkdir, writeFile } from 'fs/promises'

export async function startUp() {
    if (!(await dirExists("./.chngr"))){
        console.log("Creating .chngr directory!")
        await mkdir("./.chngr")
        const toWrite = {
            num: 1
        }
        await writeFile("./.chngr/.chngr.json", JSON.stringify(toWrite, null, 2))
    } else{
        if (empteyDir("./.chngr")){
            const toWrite = {
                num: 1
            }
            await writeFile("./.chngr/.chngr.json", JSON.stringify(toWrite, null, 2)) 
        }
    }
}