import type { Metadata } from "next";
import LocalLandingPage from "@/components/templates/LocalLandingPage";

export const metadata: Metadata = {
  title: "Pigeon & Balcony Safety Nets in Velachery, Chennai | Golden Enterprises",
  description:
    "Top-rated pigeon safety nets and invisible grills installation in Velachery, Chennai. 316-grade SS wire & Garware nets. Call +91 98765 43210.",
};

const FAQS = [
  { q: "How quickly can you install pigeon nets in Velachery?", a: "We offer same-day inspection and installation within 24 to 48 hours for apartment complexes in Velachery." },
  { q: "Do you install safety nets in high-rise apartments near Velachery Bypass Road?", a: "Yes, our team is equipped with high-rise safety harnesses and specializes in multi-story balcony installations." },
  { q: "What is the cost per sqft for pigeon netting in Velachery?", a: "Pigeon safety netting starts from competitive per-sqft pricing depending on balcony height and wire thickness." },
];

const REVIEWS = [
  { name: "Karthik Raja", locality: "Velachery Main Road", rating: 5, text: "Fixed balcony pigeon nets in 2 hours. Very polite technicians and strong net quality.", date: "1 week ago" },
  { name: "Divya N.", locality: "Vijayanagar, Velachery", rating: 5, text: "Clean work! My balcony is now bird-free and safe for my toddler.", date: "3 weeks ago" },
];

const NEARBY = [
  { name: "Anna Nagar Safety Nets", href: "/chennai/safety-nets/anna-nagar" },
  { name: "Tambaram Safety Nets", href: "/chennai/safety-nets/tambaram" },
  { name: "OMR Safety Nets", href: "/chennai/safety-nets/omr" },
  { name: "Porur Safety Nets", href: "/chennai/safety-nets/porur" },
  { name: "Invisible Grills Chennai", href: "/chennai/invisible-grills" },
];

export default function VelacheryPage() {
  return (
    <LocalLandingPage
      city="Chennai"
      area="Velachery"
      serviceTitle="Pigeon & Balcony Safety Nets"
      serviceCategory="Safety Nets"
      canonicalUrl="https://goldenenterpriseschennai.com/chennai/safety-nets/velachery"
      metaDescription="Top-rated pigeon safety nets and invisible grills installation in Velachery, Chennai."
      keywords={["Pigeon Nets Velachery", "Balcony Safety Nets Velachery Chennai", "Invisible Grills Velachery"]}
      mainImage="/images/pigeon_nets.png"
      altText="Pigeon safety net installation in Velachery Chennai balcony"
      nearbyAreas={NEARBY}
      faqs={FAQS}
      reviews={REVIEWS}
    />
  );
}
