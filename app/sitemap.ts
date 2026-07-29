import type { MetadataRoute } from "next";

const BASE = "https://nexoai.mx";

/**
 * Sitemap del sitio. Next.js lo sirve en /sitemap.xml.
 * Al agregar una página nueva en app/, agrégala también aquí.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "",                     priority: 1.0, changeFrequency: "weekly"  },
    { path: "/ia",                  priority: 0.9, changeFrequency: "monthly" },
    { path: "/modulos",             priority: 0.9, changeFrequency: "monthly" },
    { path: "/precios",             priority: 0.9, changeFrequency: "monthly" },
    { path: "/comparativa",         priority: 0.8, changeFrequency: "monthly" },
    { path: "/propiedades",         priority: 0.8, changeFrequency: "daily"   },
    { path: "/contacto",            priority: 0.7, changeFrequency: "yearly"  },
    { path: "/sobre-nosotros",      priority: 0.6, changeFrequency: "yearly"  },
    { path: "/aviso-de-privacidad", priority: 0.3, changeFrequency: "yearly"  },
    { path: "/terminos",            priority: 0.3, changeFrequency: "yearly"  },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
