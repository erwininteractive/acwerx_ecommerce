import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: 'zx1zb80n',
    dataset: 'production',
    apiVersion: 'v2021-10-21',
    useCdn: false
})

