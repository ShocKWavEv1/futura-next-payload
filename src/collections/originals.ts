import { generateSlug } from "@/app/(app)/lib/slugify/slugify";
import { revalidatePage } from "@/payloadSyncData/payloadSyncData";
import { CollectionConfig } from "payload";

export const OriginalsCollection: CollectionConfig = {
  slug: "originals",
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
        revalidatePage("originals");
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
      name: "originals",
      type: "array",
      required: true,
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },
        {
          name: "urlVideo",
          type: "text",
          required: true,
        },
        {
          name: "description",
          type: "richText",
          required: false,
        },
        {
          name: "thumbnail",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "duration",
          type: "text",
          required: false,
        },
      ],
    },
  ],
};
