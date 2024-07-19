import { revalidatePage } from "@/payloadSyncData/payloadSyncData";
import { CollectionConfig } from "payload";

export const CategoriesCollection: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "text",
  },
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePage(doc.slug);
      },
    ],
  },
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
    },
    {
      name: "label",
      type: "text",
      required: false,
    },
    {
      name: "description",
      type: "textarea",
      required: false,
    },
  ],
};
