import { CollectionConfig } from 'payload'

export const UserCollection: CollectionConfig = {
  slug: 'users',
  auth: true,
  access: {
    delete: () => true,
    update: () => true,
  },
  fields: [],
}
