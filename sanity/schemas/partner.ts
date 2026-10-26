import { defineField, defineType } from "sanity";

export const partnerSchema = defineType({
  name: "partner",
  title: "Partner / Affiliate",
  type: "document",
  fields: [
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "name", title: "Partner Name", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "url", title: "External URL", type: "url" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", media: "logo" } },
});
