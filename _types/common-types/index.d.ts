declare module 'common-types' {

    type Base = {
        _createdAt: string
        _id: string
        _rev: string
        _type: string
        _updatedAt: string
    }

    interface Name {
        _type: 'string'
        current: string
    }

    interface Slug {
        _type: 'slug'
        current: string
    }

    interface Image {
        _type: 'image'
        asset: Reference
    }

    interface Description {
        _type: 'text'
        current: string
    }

    interface Price {
        _type: 'number'
        current: string
    }

    interface Reference {
        _ref: string
        _type: 'reference'
    }

    interface Product extends Base {
        name: string
        slug: Slug
        image: Image
        description: Text
        price: Number
    }

}
