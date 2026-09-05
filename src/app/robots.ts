import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/diagnostic"],
    },
    sitemap: "https://ilocap.com/sitemap.xml",
    host: "https://ilocap.com",
  };
}
