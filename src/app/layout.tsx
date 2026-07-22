import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll";
import LoadingScreen from "@/components/common/LoadingScreen";
import FloatingCTA from "@/components/common/FloatingCTA";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Golden Enterprises | Pigeon Safety Nets & 316 Invisible Grills Chennai",
  description:
    "Chennai's premier installer of high-tensile 316-grade stainless steel invisible grills and UV-stabilized pigeon safety nets for balconies, windows, and high-rise apartments.",
  keywords: [
    "Pigeon Safety Nets Chennai",
    "Invisible Grills Chennai",
    "Balcony Invisible Grills",
    "316 Stainless Steel Invisible Grills",
    "Balcony Protection Nets Chennai",
    "Golden Enterprises Chennai",
    "Adyar Invisible Grills",
    "Anna Nagar Pigeon Nets",
    "OMR Balcony Safety Nets",
  ],
  openGraph: {
    title: "Golden Enterprises | Pigeon Safety Nets & Invisible Grills Chennai",
    description:
      "Protect your balcony with 316-grade stainless steel invisible grills and UV-stabilized pigeon safety nets in Chennai.",
    url: "https://goldenenterpriseschennai.com",
    siteName: "Golden Enterprises Chennai",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Golden Enterprises Chennai",
    image: "https://goldenenterpriseschennai.com/images/about_installation.png",
    telePhone: "+919876543210",
    url: "https://goldenenterpriseschennai.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Main Road, Adyar",
      addressLocality: "Chennai",
      addressRegion: "TN",
      postalCode: "600020",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0067,
      longitude: 80.2452,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
    areaServed: [
      "Adyar",
      "Anna Nagar",
      "Velachery",
      "OMR",
      "ECR",
      "Porur",
      "Tambaram",
      "T. Nagar",
      "Nungambakkam",
      "Chennai",
    ],
    priceRange: "₹₹",
  };

  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A1218] text-white antialiased selection:bg-[#2E86FF] selection:text-white">
        <LoadingScreen />
        <SmoothScroll>{children}</SmoothScroll>
        <FloatingCTA />
      </body>
    </html>
  );
}
