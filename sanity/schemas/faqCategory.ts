import { defineField, defineType } from "sanity";

export const faqCategorySchema = defineType({
  name: "faqCategory",
  title: "FAQ Category",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order (lower = shown first)",
      type: "number",
      initialValue: 1,
    }),
    defineField({
      name: "key",
      title: "Key (unique id, lowercase, dashes)",
      type: "string",
      description:
        "Used internally. Examples: general, piano, music-theory, singing-performance. Change with care.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "label",
      title: "Tab label",
      type: "string",
      description: "Short label on the tab, e.g. 'General', 'Piano'.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tab tagline",
      type: "text",
      rows: 2,
      description: "Small text under the tab label.",
    }),
    defineField({
      name: "icon",
      title: "Tab icon",
      type: "string",
      options: {
        list: [
          { title: "People (General)", value: "people" },
          { title: "Piano / Keyboard", value: "piano" },
          { title: "Music note (Theory)", value: "music-note" },
          { title: "Microphone (Singing)", value: "microphone" },
        ],
        layout: "dropdown",
      },
      initialValue: "people",
    }),
    defineField({
      name: "eyebrow",
      title: "Section eyebrow",
      type: "string",
      description: "Small uppercase label above the heading, e.g. 'General'.",
    }),
    defineField({
      name: "heading",
      title: "Section heading",
      type: "string",
      description: "Big heading, e.g. 'General FAQs'.",
    }),
    defineField({
      name: "intro",
      title: "Section intro paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "faqs",
      title: "Questions & Answers",
      type: "array",
      of: [
        {
          type: "object",
          name: "qa",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
              rows: 4,
            }),
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "label", subtitle: "key" },
  },
});
