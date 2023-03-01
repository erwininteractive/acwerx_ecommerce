import { Image, Slug } from "sanity"

declare module 'common-types' {
    type Base = {
        _createdAt: string
        _id: string
        _rev: string
        _type: string
        _updatedAt: string
    }

    interface Product extends Base {
        name: string
        slug: Slug
        image: Image
        description: string
        price: Number
    }
}
