import { revalidatePage } from "@/payloadSyncData/payloadSyncData";
import { CollectionConfig } from "payload";

export const RequirementsCollection: CollectionConfig = {
  slug: "requirements",
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
        revalidatePage("reel");
      },
    ],
  },
  fields: [
    {
      name: "requirements",
      type: "array",
      fields: [
        {
          name: "description",
          type: "text",
          required: true,
        },
      ],
      required: true,
    },
  ],
};
