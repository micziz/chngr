export function toTemplate(title: string, author: string, type: string) {
    return `---
title: ${title}
author: ${author}
type: ${type}
---
    `
}