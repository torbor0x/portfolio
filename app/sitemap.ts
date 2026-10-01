import { getSiteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl().origin;
  const lastModified = new Date();

  return [
    { url: `${origin}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${origin}/experience`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${origin}/projects`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
