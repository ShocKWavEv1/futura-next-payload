import { generateSlug } from "@/app/(app)/lib/slugify/slugify";
import { revalidatePage } from "@/payloadSyncData/payloadSyncData";
import { CollectionConfig } from "payload";

export const CatalogCollection: CollectionConfig = {
  slug: "catalog",
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
        revalidatePage("catalog");
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
      name: "body",
      type: "richText",
      required: false,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "maxQuantity",
      type: "number",
      required: true,
    },
    {
      name: "maxDays",
      type: "number",
      required: true,
    },
    {
      name: "categories",
      label: "Categories for this product",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      required: true,
    },
    {
      name: "mainImage",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
