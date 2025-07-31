import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "price",
      type: "number",
      required: true,
      admin: {
        description: "Price in INR",
      },
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
        hasMany: false,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
        hasMany: true,
    },
    {
      name: "images",
      type: "upload",
      relationTo: "media",
    },
    {
        name:"refundPolicy",
        type:"select",
        options:["no-refunds", "1-day", "3-days", "7-days", "14-days", "30-days"],
        defaultValue: "no-refunds",
    }
  ],
};
