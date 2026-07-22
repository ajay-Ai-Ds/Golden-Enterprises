"use client";

interface SchemaProps {
  serviceTitle: string;
  areaName: string;
  cityName?: string;
  faqs?: { q: string; a: string }[];
  canonicalUrl?: string;
}

export default function Schema({
  serviceTitle,
  areaName,
  cityName = "Chennai",
  faqs = [],
  canonicalUrl = "https://goldenenterpriseschennai.com",
}: SchemaProps) {
  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Golden Enterprises",
    url: "https://goldenenterpriseschennai.com",
    logo: "https://goldenenterpriseschennai.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "ta"],
    },
  };

  // 2. LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Golden Enterprises ${serviceTitle} ${areaName}`,
    image: "https://goldenenterpriseschennai.com/images/pigeon_nets.png",
    telephone: "+91-9876543210",
    url: canonicalUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: areaName,
      addressRegion: cityName,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0067,
      longitude: 80.2452,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
    priceRange: "₹₹",
  };

  // 3. Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceTitle,
    provider: {
      "@type": "LocalBusiness",
      name: "Golden Enterprises",
    },
    areaServed: {
      "@type": "City",
      name: areaName,
    },
    description: `${serviceTitle} installation in ${areaName}, ${cityName} with 316 grade stainless steel and UV netting.`,
  };

  // 4. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  // 5. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://goldenenterpriseschennai.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: cityName,
        item: `https://goldenenterpriseschennai.com/${cityName.toLowerCase()}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${serviceTitle} ${areaName}`,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
