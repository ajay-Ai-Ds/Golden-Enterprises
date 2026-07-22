import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll";
import LoadingScreen from "@/components/common/LoadingScreen";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Golden Enterprises | Pigeon Safety Nets & Invisible Grills Chennai",
  description:
    "Premium pigeon safety net installation and high-tensile 316 stainless steel invisible grills in Chennai. Protect your balcony with unobtrusive, high-end architecture security.",
  keywords: [
    "Pigeon Safety Nets Chennai",
    "Invisible Grills Chennai",
    "Balcony Safety Nets",
    "Golden Enterprises Chennai",
    "Stainless Steel Invisible Grills",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="bg-[#0A1218] text-white antialiased selection:bg-[#2E86FF] selection:text-white">
        <LoadingScreen />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
