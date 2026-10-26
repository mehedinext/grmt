import { defineField, defineType } from "sanity";

export const staffMemberSchema = defineType({
  name: "staffMember",
  title: "Staff Member",
  type: "document",
  fields: [
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "department", title: "Department", type: "string" }),
    defineField({ name: "image", title: "Photo (optional)", type: "image", options: { hotspot: true } }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});
