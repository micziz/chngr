import { newChange } from "./parts/newChange.js";
import { startUp } from "./parts/startup.js";
import { toTemplate } from "./parts/templateToWrite.js";
import { choose } from "./parts/choose.js";
import emptyDir from 'empty-dir'
import { parse } from 'path'

import { readFile, readdir, writeFile } from "fs/promises";
import arg  from 'arg'

const args = arg({
    "--interactive": Boolean,
})

await startUp()

async function create() {
    const { title, author, type, } = await newChange()
    
    const template = toTemplate(title, author, type)
    if (await emptyDir("./.chngr")){
        await writeFile(`./.chngr/1.md`, template) 
    } else {
        const files = await readdir("./.chngr")
        let num = Number(parse(String(files.at(-1))).name)
        await writeFile(`./.chngr/${num += 1}.md`, template)
    }
}


if (args["--interactive"]){
    const option = await choose()
    if (option === "create"){
        await create()
    }
} else if (args._.includes("create")){
    await create()
} else if (args._.includes("bump")){
}