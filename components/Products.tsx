import type { Product } from 'common-types'

type Props = {
    products: Product[]
}

export default function Products({ products }: Props) {
    return (
        <>
            {/* Products */}
            {products.map(product => (
                <p>{ product.name }</p>
            ))}
        </>
    )
}
