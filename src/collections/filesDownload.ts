import { generateSlug } from "@/app/(app)/lib/slugify/slugify";
import { revalidatePage } from "@/payloadSyncData/payloadSyncData";
import { CollectionConfig } from "payload";

export const FilesDownloadCollection: CollectionConfig = {
  slug: "filesDownload",
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
      name: "data",
      type: "array",
      required: true,
      fields: [
        {
          name: "fileDownload",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
