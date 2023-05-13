import prompt from 'prompts'

export async function choose() {
    const { whatToDo } = await prompt({
        type: "select",
        name: "whatToDo",
        message: "What do you want to do today?",
        choices: [
            {title: "Create a new change", value: "create"},
            {title: "Bump to a new version", value: "bump"},
        ]
    })   
    return whatToDo
}