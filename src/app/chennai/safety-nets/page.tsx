import type { Metadata } from "next";
import LocalLandingPage from "@/components/templates/LocalLandingPage";

export const metadata: Metadata = {
  title: "Pigeon Safety Nets Installation in Chennai | Golden Enterprises",
  description:
    "Professional UV-stabilized pigeon safety nets for balconies, apartments, and open ducts across Chennai. Call +91 98765 43210 for free inspection.",
};

const FAQS = [
  { q: "What is the lifespan of pigeon safety nets in Chennai?", a: "Our Garware UV-stabilized nylon safety nets last 5 to 8 years under intense Chennai sun and coastal monsoon conditions." },
  { q: "Will pigeon nets block air circulation or natural light?", a: "No, our high-density transparent nylon mesh has 1mm fine strands that allow 100% natural breeze and sunlight into your balcony." },
  { q: "Do you offer free on-site balcony measurements?", a: "Yes, our technical team provides 100% free on-site inspection and instant custom quotes across all areas in Chennai." },
  { q: "How long does pigeon net installation take?", a: "Standard apartment balcony netting takes approximately 2 to 3 hours to install." },
  { q: "What is the warranty period for safety nets?", a: "We provide a 3-year to 5-year replacement warranty on netting strength and mounting brackets." },
];

const REVIEWS = [
  { name: "Suresh Kumar", locality: "Velachery", rating: 5, text: "Excellent pigeon net installation in our 8th floor Velachery flat. No birds enter our balcony now!", date: "2 weeks ago" },
  { name: "Meenakshi Sundaram", locality: "Anna Nagar", rating: 5, text: "Very prompt service from Golden Enterprises. Neat finishing and sturdy stainless steel hooks.", date: "1 month ago" },
];

const NEARBY = [
  { name: "Velachery Safety Nets", href: "/chennai/safety-nets/velachery" },
  { name: "Anna Nagar Safety Nets", href: "/chennai/safety-nets/anna-nagar" },
  { name: "Tambaram Safety Nets", href: "/chennai/safety-nets/tambaram" },
  { name: "OMR IT Corridor Safety Nets", href: "/chennai/safety-nets/omr" },
  { name: "Porur Safety Nets", href: "/chennai/safety-nets/porur" },
];

export default function SafetyNetsCategoryPage() {
  return (
    <LocalLandingPage
      city="Chennai"
      area="All Neighborhoods"
      serviceTitle="Pigeon & Balcony Safety Nets"
      serviceCategory="Safety Nets"
      canonicalUrl="https://goldenenterpriseschennai.com/chennai/safety-nets"
      metaDescription="Professional UV-stabilized pigeon safety nets for balconies, apartments, and open ducts across Chennai."
      keywords={["Pigeon Safety Nets Chennai", "Balcony Netting Chennai", "Garware Safety Nets"]}
      mainImage="/images/pigeon_nets.png"
      altText="Pigeon safety net installation on balcony in Chennai"
      nearbyAreas={NEARBY}
      faqs={FAQS}
      reviews={REVIEWS}
    />
  );
}
