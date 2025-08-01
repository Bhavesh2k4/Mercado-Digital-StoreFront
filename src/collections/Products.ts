import type { CollectionConfig } from "payload";
import { Tenant } from "@/payload-types";
import { isSuperAdmin } from "@/lib/access";

export const Products: CollectionConfig = {
  slug: "products",
  access: {
    create: ({ req }) => {
      if (isSuperAdmin(req.user)) return true;

      //const tenant = req.user?.tenants?.[0]?.tenant as Tenant

      // return Boolean(tenant?.stripeDetailsSubmitted);
      return true; // For now, allow all users to create products
    },
    delete: ({ req }) => isSuperAdmin(req.user),
  },
  admin: {
    useAsTitle: "name",
    description: "You must verify your account before creating products( Not implemented yet (Indian Payment Regulations doesnt allow stripe accounts to be created) - Allowing all users to create products)",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
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
      name: "image",
      type: "upload",
      relationTo: "media",
    },
    {
        name:"refundPolicy",
        type:"select",
        options:["no-refunds", "1-day", "3-days", "7-days", "14-days", "30-days"],
        defaultValue: "no-refunds",
    },
    {
      name: "content",
      type: "richText",
      admin: {
        description:
          "Protected content only visible to customers after purchase. Add product documentation, downloadable files, getting started guides, and bonus materials. Supports Markdown formatting"
      },
    },
    {
      name: "isPrivate",
      label: "Private",
      defaultValue: false,
      type: "checkbox",
      admin: {
        description: "If checked, this product will not be shown on the public storefront"
      },
    },
    {
      name: "isArchived",
      label: "Archive",
      defaultValue: false,
      type: "checkbox",
      admin: {
        description: "If checked, this product will be archived"
      },
    },
  ],
};
