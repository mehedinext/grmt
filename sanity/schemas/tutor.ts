import { defineField, defineType } from "sanity";

export const tutorSchema = defineType({
  name: "tutor",
  title: "Tutor",
  type: "document",
  fields: [
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({ name: "bio", title: "Short Bio (homepage card)", type: "text", rows: 2 }),
    defineField({ name: "bioFull", title: "Full Bio Paragraphs (faculty page)", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "teaches", title: "Teaches (e.g. Piano · Chamber Music)", type: "string" }),
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});
