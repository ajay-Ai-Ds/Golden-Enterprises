import { MetadataRoute } from "next";
import { CITIES, SERVICES } from "@/lib/locationData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goldenenterpriseschennai.com";
  const routes: MetadataRoute.Sitemap = [];

  // Home route
  routes.push({
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1.0,
  });

  // Hub routes & Dynamic area routes
  for (const city of CITIES) {
    routes.push({
      url: `${baseUrl}/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });

    for (const service of SERVICES) {
      routes.push({
        url: `${baseUrl}/${city.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.85,
      });

      for (const area of city.areas) {
        routes.push({
          url: `${baseUrl}/${city.slug}/${service.slug}/${area.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.8,
        });
      }
    }
  }

  return routes;
}
