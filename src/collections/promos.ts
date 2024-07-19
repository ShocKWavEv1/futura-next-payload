import { revalidatePage } from "@/payloadSyncData/payloadSyncData";
import { CollectionConfig } from "payload";

export const PromosCollection: CollectionConfig = {
  slug: "promos",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePage("promos");
      },
    ],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "promos",
      type: "array",
      required: true,
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "description",
          type: "text",
        },
      ],
    },
  ],
};
