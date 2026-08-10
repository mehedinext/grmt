import { courseSchema } from "./course";
import { tutorSchema } from "./tutor";
import { faqSchema } from "./faq";
import { feeItemSchema } from "./feeItem";
import { resFeatureSchema } from "./resFeature";
import { galleryImageSchema } from "./galleryImage";
import { partnerSchema } from "./partner";
import { siteSettingsSchema } from "./siteSettings";

export const schemas = [
  siteSettingsSchema,
  courseSchema,
  tutorSchema,
  faqSchema,
  feeItemSchema,
  resFeatureSchema,
  galleryImageSchema,
  partnerSchema,
];
