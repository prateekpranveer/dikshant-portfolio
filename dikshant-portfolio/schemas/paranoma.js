export default {
    name: "photo",
    title: "Photo", // name of the model
    type: "document",
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug'
        },
        {
            name: "image",
            title: "Portfolio Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        // {
        //     title: 'Category',
        //     name: 'category',
        //     type: 'reference',
        //     to: [{type: 'categories'}]
        //   }
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },

    ],
};