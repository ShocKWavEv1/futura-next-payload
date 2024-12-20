import { CollectionConfig } from "payload";

export const CartCollection: CollectionConfig = {
  slug: "cart",
  admin: {
    useAsTitle: "user",
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "user",
      type: "text",
      required: true,
    },
    {
      name: "items",
      type: "array",
      fields: [
        {
          name: "catalogItem",
          type: "relationship",
          relationTo: "catalog",
          required: true,
        },
        {
          name: "quantity",
          type: "number",
          required: true,
        },
        {
          name: "mainImageUrl",
          type: "text",
          required: false,
        },
        {
          name: "base64",
          type: "text",
          required: false,
        },
      ],
      required: false,
    },
  ],
};
