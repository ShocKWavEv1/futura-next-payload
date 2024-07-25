import { generateSlug } from "@/app/(app)/lib/slugify/slugify";
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
    beforeValidate: [
      ({ data }: any) => {
        return generateSlug(data);
      },
    ],
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
      required: true,
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
          required: true,
        },
        {
          name: "price",
          type: "number",
          required: true,
        },
        {
          name: "temporality",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};
