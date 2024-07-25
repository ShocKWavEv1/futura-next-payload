import { generateSlug } from "@/app/(app)/lib/slugify/slugify";
import { revalidatePage } from "@/payloadSyncData/payloadSyncData";
import { CollectionConfig } from "payload";

export const CategoriesCollection: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "text",
  },
  hooks: {
    beforeValidate: [
      ({ data }: any) => {
        return generateSlug(data);
      },
    ],
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
      name: "description",
      type: "textarea",
      required: false,
    },
  ],
};
