import prompt from 'prompts'

export async function newChange() {

    const { title } = await prompt(
        {
            type: "text",
            name: "title",
            message: "What is the title of the change?"            
        }
    )
    const { author } = await prompt(
        {
            type: "text",
            name: "author",
            message: "What is the author of the change?"
        },
    )
    const { type } = await prompt(
        {
            type: "select",
            name: "type",
            message: "What is the type of change?",
            choices: [
                {title: "fix", value: "fix"},
                {title: "feat", value: "feat"},
                {title: "build", value: "build"},
                {title: "chore", value: "chore"},
                {title: "ci", value: "ci"},
                {title: "style", value: "style"},
                {title: "refactor", value: "refactor"},
                {title: "perf", value: "perf"},
                {title: "test", value: "test"}
            ]
        }
    )
    return {
        title: String(title),
        author: String(author),
        type: String(type)
    }
}