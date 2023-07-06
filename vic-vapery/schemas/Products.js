export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Product',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Short description',
            validation: (Rule) => Rule.required(),
            validation: (Rule) => Rule.max(200),
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price of the product in USD'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the Product',
            options: {
                hotspot: true,
            }
        },
    ],
}
