import prompt from "prompts";

/**
 * Asks what type of bump is.
 * 
 * @returns A Promise with either patch, minor or major.
 */
export async function chooseBumpType(): Promise<("patch" | "minor" | "major")> {
    const { bumpType } = await prompt({
        type: "select",
        name: "bumpType",
        message: "Type of version change?",
        choices: [
            { title: "Patch", value: "patch"},
            { title: "Minor", value: "minor"},
            { title: "Major", value: "major"},
        ]
    })    
    if (bumpType === undefined){
        throw new Error("Please selcet an option")
    }
    return bumpType
}

