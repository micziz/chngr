import prompt from 'prompts'

export async function choose(): Promise<string> {
    const whatToDo: string = (await prompt({
        type: "select",
        name: "whatToDo",
        message: "What do you want to do today?",
        choices: [
            {title: "Create a new change", value: "create"},
            {title: "Bump to a new version", value: "bump"},
        ]
    })).whatToDo  
    if (whatToDo === undefined){
        throw new Error("Please selcet an option")
    }
    return whatToDo
}