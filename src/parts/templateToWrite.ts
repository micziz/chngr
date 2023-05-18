/**
 * 
 * Returns the formatted template to write.
 * 
 * 
 * @param title The title of the change
 * @param author The author of the change
 * @param type The type of cahnge
 * @returns The formatted template
 * 
 * @async
 */
export function toTemplate(title: string, author: string, type: string): string {
    return `---
title: ${title}
author: ${author}
type: ${type}
---
    `
}