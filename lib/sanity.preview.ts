'use client'

import { definePreview } from 'next-sanity/preview'

const projectId = 'zx1zb80n'
const dataset = 'production'

function onPublicAccessOnly() {
    throw new Error(`please log in to load preview`)
}

if (!projectId || !dataset) {
    throw new Error(`missing projectId or dataset`)
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly
})
