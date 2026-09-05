import type { MetadataRoute } from "next";
import { solutions } from "@/lib/solutions";

const baseUrl = "https://ilocap.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();
  const pages = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/realisations", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/methodologie", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/institutions", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/pme", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/insights/ia-et-expertise", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return [
    ...pages.map(({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}${path}`,
      lastModified: updatedAt,
      changeFrequency,
      priority,
    })),
    ...solutions.map((solution) => ({
      url: `${baseUrl}/solutions/${solution.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
