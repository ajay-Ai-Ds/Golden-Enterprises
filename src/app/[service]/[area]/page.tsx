import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { getServiceBySlug, getAreaBySlug, generateLocalFaqs } from "@/lib/locationData";

interface ServiceAreaProps {
  params: Promise<{
    service: string;
    area: string;
  }>;
}

export async function generateStaticParams() {
  const targetItems = [
    { service: "safety-nets", area: "velachery" },
    { service: "safety-nets", area: "anna-nagar" },
    { service: "safety-nets", area: "tambaram" },
    { service: "safety-nets", area: "porur" },
    { service: "safety-nets", area: "medavakkam" },
    { service: "invisible-grills", area: "velachery" },
    { service: "invisible-grills", area: "anna-nagar" },
    { service: "invisible-grills", area: "tambaram" },
    { service: "cloth-hangers", area: "velachery" },
    { service: "bird-nets", area: "omr" },
  ];
  return targetItems;
}

export async function generateMetadata({ params }: ServiceAreaProps): Promise<Metadata> {
  const { service: serviceParam, area: areaParam } = await params;
  const service = getServiceBySlug(serviceParam);
  const area = getAreaBySlug("chennai", areaParam);

  const title = service && area
    ? `${service.title} in ${area.name}, Chennai | Golden Enterprises`
    : `${serviceParam} in ${areaParam}, Chennai | Golden Enterprises`;

  const description = service && area
    ? `Top-rated ${service.title.toLowerCase()} installation in ${area.name}, Chennai. 316-grade SS wire & Garware nets. Call +91 98765 43210.`
    : `Top-rated ${serviceParam} in ${areaParam}, Chennai. Call +91 98765 43210.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://goldenenterpriseschennai.com/${serviceParam}/${areaParam}`,
    },
  };
}

export default async function ServiceAreaPage({ params }: ServiceAreaProps) {
  const { service: serviceParam, area: areaParam } = await params;
  const service = getServiceBySlug(serviceParam);
  const area = getAreaBySlug("chennai", areaParam);

  if (!service || !area) {
    notFound();
  }

  const faqs = generateLocalFaqs(service.title, area.name, "Chennai");

  return (
    <main className="min-h-screen bg-[#0A1218] text-white">
      <Header />
      <Hero serviceTitle={service.title} areaName={area.name} imageSrc={service.image} />
      <Benefits serviceTitle={service.title} areaName={area.name} />
      <Gallery areaName={area.name} />
      <FAQ faqs={faqs} areaName={area.name} />
      <CTA areaName={area.name} serviceTitle={service.title} />
      <Footer />
    </main>
  );
}
