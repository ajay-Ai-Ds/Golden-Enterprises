import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalLandingPage from "@/components/templates/LocalLandingPage";
import {
  CITIES,
  SERVICES,
  getCityBySlug,
  getServiceBySlug,
  getAreaBySlug,
  generateLocalFaqs,
  generateLocalReviews,
} from "@/lib/locationData";

interface PageProps {
  params: Promise<{
    city: string;
    service: string;
    area: string;
  }>;
}

// Generate static params at build time for instant loading & 100% SEO indexation!
export async function generateStaticParams() {
  const paramsList: { city: string; service: string; area: string }[] = [];

  for (const city of CITIES) {
    for (const service of SERVICES) {
      for (const area of city.areas) {
        paramsList.push({
          city: city.slug,
          service: service.slug,
          area: area.slug,
        });
      }
    }
  }

  return paramsList;
}

// Dynamic SEO Metadata Generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: cityParam, service: serviceParam, area: areaParam } = await params;
  const city = getCityBySlug(cityParam);
  const service = getServiceBySlug(serviceParam);
  const area = getAreaBySlug(cityParam, areaParam);

  if (!city || !service || !area) {
    return { title: "Page Not Found | Golden Enterprises" };
  }

  const title = `${service.title} in ${area.name}, ${city.name} | Golden Enterprises`;
  const description = `Top-rated ${service.title.toLowerCase()} installation in ${area.name}, ${city.name}. 316-grade stainless steel & UV-stabilized nets. Call +91 98765 43210 for free inspection.`;

  return {
    title,
    description,
    keywords: [
      `${service.category} ${area.name}`,
      `${service.title} ${area.name} ${city.name}`,
      `Balcony Safety Nets ${area.name} near me`,
      `Invisible Grills ${area.name} ${city.name}`,
    ],
    openGraph: {
      title,
      description,
      url: `https://goldenenterpriseschennai.com/${city.slug}/${service.slug}/${area.slug}`,
      siteName: "Golden Enterprises",
      type: "website",
    },
    alternates: {
      canonical: `https://goldenenterpriseschennai.com/${city.slug}/${service.slug}/${area.slug}`,
    },
  };
}

export default async function DynamicAreaPage({ params }: PageProps) {
  const { city: cityParam, service: serviceParam, area: areaParam } = await params;
  const city = getCityBySlug(cityParam);
  const service = getServiceBySlug(serviceParam);
  const area = getAreaBySlug(cityParam, areaParam);

  if (!city || !service || !area) {
    notFound();
  }

  const faqs = generateLocalFaqs(service.title, area.name, city.name);
  const reviews = generateLocalReviews(service.title, area.name);

  // Sister area links in the same city for internal linking
  const nearbyAreas = city.areas
    .filter((a) => a.slug !== area.slug)
    .map((a) => ({
      name: `${service.category} in ${a.name}`,
      href: `/${city.slug}/${service.slug}/${a.slug}`,
    }));

  return (
    <LocalLandingPage
      city={city.name}
      area={area.name}
      serviceTitle={service.title}
      serviceCategory={service.category}
      canonicalUrl={`https://goldenenterpriseschennai.com/${city.slug}/${service.slug}/${area.slug}`}
      metaDescription={`${service.title} installation in ${area.name}, ${city.name}.`}
      keywords={[`${service.category} ${area.name}`]}
      mainImage={service.image}
      altText={service.altText}
      nearbyAreas={nearbyAreas}
      faqs={faqs}
      reviews={reviews}
    />
  );
}
