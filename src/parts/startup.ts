import { mkdir } from 'fs/promises'

import { dirExists } from 'dir-exists-safe'

export async function startUp(): Promise<void> {
    if (!(await dirExists("./.chngr"))){
        console.log("Creating .chngr directory!")
        await mkdir("./.chngr")
    }
}