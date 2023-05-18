import { mkdir } from 'node:fs/promises'

import { dirExists } from 'dir-exists-safe'

/**
 * Runs at startup
 * 
 * Checks if the .chngr directory exists and creates if it does not exist
 * 
 * @async
 */
export async function startUp(): Promise<void> {
    if (!(await dirExists("./.chngr"))){
        console.log("Creating .chngr directory!")
        await mkdir("./.chngr")
    }
}