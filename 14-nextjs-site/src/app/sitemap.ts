import type { MetadataRoute } from "next";
import { getServices } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

const staticPages: MetadataRoute.Sitemap = [
  { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
  { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.7 },
  { url: absoluteUrl("/services"), changeFrequency: "monthly", priority: 0.9 },
  { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages,
    ...getServices().map(({ slug }) => ({
      url: absoluteUrl(`/services/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
