import { CollectionConfig } from 'payload'

export const ReelCollection: CollectionConfig = {
  slug: 'reel',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'reels',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'mainImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      required: true,
    },
  ],
}
