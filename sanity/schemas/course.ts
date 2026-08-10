import { defineField, defineType } from "sanity";

export const courseSchema = defineType({
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    defineField({ name: "order", title: "Order", type: "number" }),
    defineField({ name: "num", title: "Number (01, 02…)", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "grade", title: "Grade / Level", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "excerpt", title: "Excerpt (card description)", type: "text", rows: 3 }),
    defineField({ name: "image", title: "Card Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "imagePosition", title: "Image Position (CSS)", type: "string", description: 'e.g. "center 30%"' }),
    defineField({ name: "heroColor", title: "Hero Background Colour (hex)", type: "string" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "heroStats",
      title: "Hero Stats",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "label", type: "string", title: "Label" },
        { name: "value", type: "string", title: "Value" },
      ]}],
    }),
    defineField({ name: "aboutHeading", title: "About Section Heading", type: "string" }),
    defineField({ name: "about", title: "About Paragraphs", type: "array", of: [{ type: "text" }] }),
    defineField({
      name: "detailType",
      title: "Detail Page Layout",
      type: "string",
      options: { list: [{ title: "Schedule (timetable rows)", value: "schedule" }, { title: "Topics (tag grid)", value: "topics" }] },
    }),
    defineField({
      name: "schedule",
      title: "Schedule",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "time", type: "string", title: "Time" },
        { name: "activity", type: "string", title: "Activity" },
      ]}],
    }),
    defineField({ name: "topics", title: "Topics", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "includes", title: "What's Included", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "requirements", title: "Requirements", type: "text", rows: 2 }),
    defineField({ name: "highlights", title: "Highlights", type: "array", of: [{ type: "string" }] }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "grade" } },
});
