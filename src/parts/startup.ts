import { dirExists } from 'dir-exists-safe'
import { mkdir } from 'fs/promises'

export async function startUp() {
    if (!(await dirExists("./.chngr"))){
        console.log("Creating .chngr directory!")
        await mkdir("./.chngr")
    }
}