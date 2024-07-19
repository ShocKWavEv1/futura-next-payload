import { CollectionConfig } from 'payload'

export const CategoriesCollection: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
    },
    {
      name: 'label',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
  ],
}
