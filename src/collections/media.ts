import { revalidatePage } from "@/payloadSyncData/payloadSyncData";
import { CollectionConfig } from "payload";

export const MediaCollection: CollectionConfig = {
  slug: "media",
  upload: true,
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePage("media");
      },
    ],
  },
  fields: [
    {
      name: "text",
      type: "text",
    },
  ],
};
