/**
 * Structured OpenAI Prompt Builder matching exact JSON schema contract:
 * {
 *   seo: { title, description },
 *   hero: { title, subtitle },
 *   benefits: [],
 *   faq: [],
 *   content: [],
 *   schema: {}
 * }
 */
export function buildSeoPrompt(service: string, area: string, city: string = "Chennai") {
  return `
You are an expert Local SEO Strategist, Conversion Copywriter, and E-E-A-T Specialist for Golden Enterprises.

Target Service: ${service}
Target Area: ${area}
Target City: ${city}

Return ONLY JSON matching this exact structure:

{
  "seo": {
    "title": "${service} in ${area}, ${city} | Golden Enterprises",
    "description": "Top-rated ${service.toLowerCase()} installation in ${area}, ${city}. 316-grade SS wire & Garware nets. Call +91 98765 43210 for free inspection."
  },
  "hero": {
    "title": "${service} in ${area}, ${city}",
    "subtitle": "Protect your balcony in ${area} with 316-grade marine stainless steel invisible grills and UV-stabilized nets."
  },
  "benefits": [
    "100% Unobstructed View",
    "400 kg Tensile Breaking Force",
    "Marine Grade 316 Anti-Rust Cable",
    "Multi-Year Warranty Certificate"
  ],
  "faq": [
    { "q": "How much does ${service.toLowerCase()} cost per sqft in ${area}?", "a": "Pricing in ${area} is calculated per square foot based on balcony dimensions and cable specification." },
    { "q": "How long does installation take in ${area}?", "a": "Installation in ${area} is completed within 2 to 4 hours." }
  ],
  "content": [
    "Golden Enterprises provides certified ${service.toLowerCase()} installation across ${area}, ${city}.",
    "Our 316 stainless steel wires provide complete fall safety for children and pets without blocking air or sunlight."
  ],
  "schema": {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Golden Enterprises ${service} ${area}",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "${area}",
      "addressRegion": "${city}",
      "addressCountry": "IN"
    }
  }
}
`;
}
