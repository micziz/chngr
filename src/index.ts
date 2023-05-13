import { newChange } from "./parts/newChange.js";
import { startUp } from "./parts/startup.js";
import { toTemplate } from "./parts/templateToWrite.js";
import { readFile, writeFile } from "fs/promises";

await startUp()

const { title, author, type, } = await newChange()

const template = toTemplate(title, author, type)
let num = Number(JSON.parse((await readFile("./.chngr/.chngr.json")).toString()).num)
await writeFile(`./.chngr/${num}.md`, template)


const toWrite = {
    num: num += 1
}
await writeFile("./.chngr/.chngr.json", JSON.stringify(toWrite, null, 2))