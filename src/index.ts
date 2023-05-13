// Imports

// Local Imports
import { newChange } from "./parts/newChange.js";
import { startUp } from "./parts/startup.js";
import { toTemplate } from "./parts/templateToWrite.js";
import { choose } from "./parts/choose.js";
import { getFilesToRead } from "./parts/getFilesToRead.js";
import { chooseBumpType } from "./parts/chooseBumpType.js";
import { help } from './parts/help.js'
import { version } from "./utils/version.js";

// Node Imports
import { parse } from 'node:path'
import { appendFile, readFile, readdir, writeFile, rm } from "node:fs/promises";

// Npm imports
import emptyDir from 'empty-dir'
import arg  from 'arg'
import gm from 'gray-matter'
import { inc } from 'semver'

const args = arg({
    "--interactive": Boolean,
    "--version": Boolean
})

await startUp()

async function create() {
    const { title, author, type, } = await newChange()
    let file;
    const template = toTemplate(title, author, type)
    if (await emptyDir("./.chngr")){
        await writeFile(`./.chngr/1.md`, template) 
        file = `./.chngr/1.md` 
    } else {
        const files = await readdir("./.chngr")
        let num = Number(parse(String(files.at(-1))).name)
        await writeFile(`./.chngr/${num += 1}.md`, template)
        file = `./.chngr/${num += 1}.md`
    }
    console.log(`Created change in ${file}. Modify the content of the page to write the changelog message!`)
}

async function bump() {
    const bumpType = await chooseBumpType()
    const { version } = JSON.parse(await readFile("./package.json", "utf-8"))
    const versionToWrite = inc(version, bumpType)
    await appendFile("./changelog.md", String(versionToWrite) + "\n")

    const files = await getFilesToRead()

    for (const el in files){
        const writeEl = files[el]
        const { data: { title, author, type }, content} = gm(await readFile(`./.chngr/${writeEl}`, "utf-8"))
        await appendFile("./changelog.md", `
${type}: ${title} by ${author}

${content}
        `)
        await rm(`./.chngr/${writeEl}`)
    }
    console.log("Successfully appended changelog.md!")
}

if (args["--version"]){
    console.log(version)
} else if (args["--interactive"]){
    const option = await choose()
    if (option === "create"){
        await create()
    }
} else if (args._.includes("create")){
    await create()
} else if (args._.includes("bump")){
    await bump()
} else if (args._.length === 0){
    console.log(await help())
}