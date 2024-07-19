import { revalidatePage } from "@/payloadSyncData/payloadSyncData";
import { CollectionConfig } from "payload";

export const TeamCollection: CollectionConfig = {
  slug: "team",
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
        revalidatePage("categories");
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
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "mainImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "instagram",
      type: "text",
      required: false,
    },
    {
      name: "vimeo",
      type: "text",
      required: false,
    },
  ],
};
