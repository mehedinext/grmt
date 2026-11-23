import type { MetadataRoute } from "next";

const BASE = "https://greenroommusiccamp.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "",                          priority: 1.0, changeFrequency: "weekly" },
    { path: "/courses",                  priority: 0.9, changeFrequency: "weekly" },
    { path: "/courses/piano",            priority: 0.9, changeFrequency: "weekly" },
    { path: "/courses/music-theory",     priority: 0.9, changeFrequency: "weekly" },
    { path: "/courses/singing-performance", priority: 0.9, changeFrequency: "weekly" },
    { path: "/faculty",                  priority: 0.8, changeFrequency: "monthly" },
    { path: "/residential-life",         priority: 0.8, changeFrequency: "monthly" },
    { path: "/international-travellers", priority: 0.8, changeFrequency: "monthly" },
    { path: "/fees",                     priority: 0.8, changeFrequency: "monthly" },
    { path: "/faqs",                     priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact",                  priority: 0.6, changeFrequency: "monthly" },
    { path: "/policies",                 priority: 0.4, changeFrequency: "yearly" },
    { path: "/privacy-policy",           priority: 0.3, changeFrequency: "yearly" },
  ];

  return staticRoutes.map(r => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
