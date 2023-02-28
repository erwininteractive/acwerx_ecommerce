'use client'

import { usePreview } from '../lib/sanity.preview'
import Products from './Products'

type Props = {
    query: string
}

export default function PreviewProducts({ query }: Props) {
    const products = usePreview(null, query)
    console.log('loading products...', products)

    return <Products products={ products } />
}
