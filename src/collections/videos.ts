import { revalidatePage } from "@/payloadSyncData/payloadSyncData";
import { CollectionConfig } from "payload";

export const VideoCollection: CollectionConfig = {
  slug: "videos",
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
        revalidatePage("videos");
      },
    ],
  },
  fields: [
    {
      name: "videos",
      type: "array",
      fields: [
        {
          name: "videoName",
          type: "text",
          required: true,
        },
        {
          name: "videoUrl",
          type: "text",
          required: true,
        },
      ],
      required: true,
    },
  ],
};
