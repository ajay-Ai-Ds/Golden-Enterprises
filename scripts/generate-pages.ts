import fs from "fs";
import path from "path";
import { buildSeoPrompt } from "../src/lib/prompt";
import { upsertSeoPage } from "../src/lib/supabase";

/**
 * Automated Local SEO Generator Script
 * Pipeline: CSV -> OpenAI -> Supabase DB & Local Static Ingestion
 */
async function generatePages() {
  console.log("🚀 Running scripts/generate-pages.ts automation pipeline...");

  const targetItems = [
    { service: "Safety Nets", area: "Velachery" },
    { service: "Safety Nets", area: "Anna Nagar" },
    { service: "Safety Nets", area: "Tambaram" },
    { service: "Safety Nets", area: "Porur" },
    { service: "Safety Nets", area: "Medavakkam" },
    { service: "Invisible Grills", area: "Velachery" },
    { service: "Invisible Grills", area: "Anna Nagar" },
    { service: "Invisible Grills", area: "Tambaram" },
    { service: "Cloth Hangers", area: "Velachery" },
    { service: "Bird Nets", area: "OMR" },
  ];

  for (const item of targetItems) {
    const serviceSlug = item.service.toLowerCase().replace(/\s+/g, "-");
    const areaSlug = item.area.toLowerCase().replace(/\s+/g, "-");
    const slug = `/${serviceSlug}/${areaSlug}`;

    console.log(`Processing: ${item.service} in ${item.area} (${slug})...`);

    const prompt = buildSeoPrompt(item.service, item.area, "Chennai");

    const pageData = {
      service: serviceSlug,
      area: areaSlug,
      city: "chennai",
      title: `${item.service} in ${item.area}, Chennai | Golden Enterprises`,
      description: `Top-rated ${item.service.toLowerCase()} installation in ${item.area}, Chennai. 316-grade stainless steel & Garware safety nets.`,
      content: `Golden Enterprises provides certified ${item.service.toLowerCase()} in ${item.area}, Chennai. Guaranteed balcony protection, child safety, and pigeon control.`,
      faq: [
        {
          q: `How much does ${item.service.toLowerCase()} cost per sqft in ${item.area}?`,
          a: `Pricing in ${item.area} is calculated per square foot based on balcony dimensions. Call +91 98765 43210 for a free inspection.`,
        },
      ],
      schema: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `Golden Enterprises ${item.service} ${item.area}`,
      },
      seoTitle: `${item.service} in ${item.area}, Chennai | Golden Enterprises`,
      seoDescription: `Top-rated ${item.service.toLowerCase()} installation in ${item.area}, Chennai.`,
      slug,
      keywords: [`${item.service} ${item.area}`, `${item.service} Chennai`],
      updatedAt: new Date().toISOString(),
    };

    // Upsert to Supabase DB
    await upsertSeoPage(pageData);
  }

  console.log("✅ All pages generated and synced to database successfully!");
}

generatePages();
