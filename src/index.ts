import { newChange } from "./parts/newChange.js";
import { startUp } from "./parts/startup.js";
import { toTemplate } from "./parts/templateToWrite.js";
import { choose } from "./parts/choose.js";

import { readFile, writeFile } from "fs/promises";
import arg  from 'arg'

const args = arg({
    "--interactive": Boolean,
})

await startUp()

async function create() {
    const { title, author, type, } = await newChange()
    
    const template = toTemplate(title, author, type)
    let num = Number(JSON.parse((await readFile("./.chngr/.chngr.json")).toString()).num)
    await writeFile(`./.chngr/${num}.md`, template)
    
    
    const toWrite = {
        num: num += 1
    }
    await writeFile("./.chngr/.chngr.json", JSON.stringify(toWrite, null, 2))
}


if (args["--interactive"]){
    const option = await choose()
    if (option === "create"){
        await create()
    }
}
