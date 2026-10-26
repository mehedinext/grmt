import { defineField, defineType } from "sanity";

export const tutorSchema = defineType({
  name: "tutor",
  title: "Tutor",
  type: "document",
  fields: [
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "role", title: "Role / Title", type: "string" }),
    defineField({
      name: "category",
      title: "Section / Category",
      description: "Which faculty section they appear in",
      type: "string",
      options: {
        list: [
          { title: "Main Faculty", value: "main" },
          { title: "Honorary Guest Visiting Lecturer", value: "honorary" },
          { title: "Junior Teaching Artists", value: "junior" },
          { title: "Boarding & Pastoral Team", value: "boarding" },
        ],
      },
    }),
    defineField({ name: "bio", title: "Short Bio (homepage card)", type: "text", rows: 2 }),
    defineField({ name: "shortBio", title: "Section Bio (used in Honorary Guest block)", type: "text", rows: 4 }),
    defineField({ name: "bioFull", title: "Full Bio Paragraphs (profile modal)", type: "array", of: [{ type: "text" }] }),
    defineField({ name: "teaches", title: "Teaches — single string (legacy)", type: "string" }),
    defineField({ name: "teachesTags", title: "Teaches — pill tags (card)", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "profileTags", title: "Profile Modal tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "isDSL", title: "Designated Safeguarding Lead (DSL)?", type: "boolean" }),
    defineField({ name: "isDeputyDSL", title: "Deputy Safeguarding Lead?", type: "boolean" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "role", media: "image" } },
});
