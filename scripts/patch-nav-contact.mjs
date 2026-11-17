// Add Contact Us to navItems (after FAQs). Replace footer "Apply Now" with "Contact Us".
import { createClient } from "@sanity/client";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) { console.error("Missing SANITY_API_WRITE_TOKEN"); process.exit(1); }

const client = createClient({
  projectId: "ji1ggnuz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token,
});

const settings = await client.fetch(`*[_type == "siteSettings"][0]{_id, navItems, footerColumns}`);
if (!settings?._id) { console.error("siteSettings not found"); process.exit(1); }

// NAV: insert Contact Us right after FAQs
const navItems = [...(settings.navItems ?? [])];
const faqsIdx = navItems.findIndex((n) => n.href === "/faqs");
const contactNav = { _key: "nav-contact", label: "Contact Us", href: "/contact" };
if (!navItems.some((n) => n.href === "/contact")) {
  navItems.splice(faqsIdx + 1, 0, contactNav);
}

// FOOTER: in the "Information" column replace Apply Now -> Contact Us
const footerColumns = (settings.footerColumns ?? []).map((col) => {
  if (col.heading?.toLowerCase() !== "information") return col;
  const links = (col.links ?? [])
    .filter((l) => l.href !== "/apply")
    .concat(col.links?.some((l) => l.href === "/contact") ? [] : [{ _key: "fc-contact", href: "/contact", label: "Contact Us" }]);
  return { ...col, links };
});

await client.patch(settings._id).set({ navItems, footerColumns }).commit();
console.log("Patched siteSettings nav + footer");
