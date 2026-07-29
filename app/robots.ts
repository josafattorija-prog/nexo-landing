import type { MetadataRoute } from "next";

/** Next.js lo sirve en /robots.txt. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nexoai.mx/sitemap.xml",
    host: "https://nexoai.mx",
  };
}
