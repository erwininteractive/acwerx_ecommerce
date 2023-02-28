import { defineType } from 'sanity'

export default defineType({
    title: 'Product',
    name: 'product',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        }
    ]

})
