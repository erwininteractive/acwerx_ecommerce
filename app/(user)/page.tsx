import { previewData } from 'next/headers'
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'
import PreviewSuspense from '../../components/PreviewSuspense'
import PreviewProducts from '../../components/PreviewProducts'
import Products from '../../components/Products'

const query = groq`
    *[_type=='product'] {
        ...
    }
`

export default async function HomePage() {
    let preview: string = ""

    if (previewData()) {
        return (
            <PreviewSuspense fallback= {
                <div role='status'>
                    <p className='text-center text-lg text-red-200 animate-pulse'>
                        Loading Preview
                    </p>
                </div>
            }>
                <PreviewProducts query={ query } />
            </PreviewSuspense>
        )
    }

    const products = await client.fetch(query)

    return (
        <>
            <Products products={ products } />
        </>
    )
}
