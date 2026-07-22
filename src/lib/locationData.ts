export interface AreaData {
  slug: string;
  name: string;
  landmark?: string;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
  areas: AreaData[];
}

export interface ServiceData {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  altText: string;
  spec: string;
}

export const CITIES: CityData[] = [
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    lat: 13.0067,
    lng: 80.2452,
    areas: [
      { slug: "velachery", name: "Velachery", landmark: "Near Vijayanagar & Bypass Road" },
      { slug: "omr", name: "OMR IT Corridor", landmark: "Perungudi to Siruseri" },
      { slug: "tambaram", name: "Tambaram", landmark: "East & West Tambaram" },
      { slug: "porur", name: "Porur", landmark: "Near Mount-Poonamallee Road" },
      { slug: "anna-nagar", name: "Anna Nagar", landmark: "Roundtana & Tower Park" },
      { slug: "perungudi", name: "Perungudi", landmark: "RMZ Millenia & OMR" },
      { slug: "medavakkam", name: "Medavakkam", landmark: "Medavakkam-Mambakkam Road" },
      { slug: "sholinganallur", name: "Sholinganallur", landmark: "ELCOT IT Park" },
      { slug: "adyar", name: "Adyar", landmark: "LB Road & Kasturba Nagar" },
      { slug: "ecr", name: "ECR", landmark: "Palavakkam to Neelankarai" },
      { slug: "t-nagar", name: "T. Nagar", landmark: "Pondy Bazaar & Panagal Park" },
      { slug: "nungambakkam", name: "Nungambakkam", landmark: "Sterling Road & RK Salai" },
      { slug: "guindy", name: "Guindy", landmark: "Race Course & Kathipara" },
      { slug: "vadapalani", name: "Vadapalani", landmark: "Arcot Road & Forum Mall" },
      { slug: "koyambedu", name: "Koyambedu", landmark: "CMBT & Market Area" },
      { slug: "chromepet", name: "Chromepet", landmark: "GST Road & MIT" },
      { slug: "pallavaram", name: "Pallavaram", landmark: "Radha Nagar & GST Road" },
      { slug: "madipakkam", name: "Madipakkam", landmark: "Koot Road & Lake Area" },
      { slug: "thoraipakkam", name: "Thoraipakkam", landmark: "200 Feet Radial Road" },
      { slug: "navallur", name: "Navalur", landmark: "Vivira Mall & OMR" },
    ],
  },
];

export const SERVICES: ServiceData[] = [
  {
    slug: "safety-nets",
    title: "Pigeon & Balcony Safety Nets",
    category: "Safety Nets",
    description: "UV-stabilized copolymer nylon netting for high-rise balconies, open spaces, and residential windows.",
    image: "/images/pigeon_nets.png",
    altText: "Pigeon safety net installation on high-rise balcony in Chennai",
    spec: "Garware UV Stabilized Nylon",
  },
  {
    slug: "invisible-grills",
    title: "316 Stainless Steel Invisible Grills",
    category: "Invisible Grills",
    description: "Ultra-thin 316 marine-grade stainless steel wire grills offering 100% view clarity and high-tensile security.",
    image: "/images/invisible_grills.png",
    altText: "316 stainless steel invisible grill installation on balcony window in Chennai",
    spec: "316 Marine Grade SS Wire",
  },
  {
    slug: "cloth-hangers",
    title: "Ceiling & Wall Cloth Drying Hangers",
    category: "Cloth Hangers",
    description: "Space-saving pulley-operated ceiling pull-down stainless steel cloth drying racks for apartment balconies.",
    image: "/images/about_installation.png",
    altText: "Ceiling cloth hanger installation on apartment balcony in Chennai",
    spec: "Stainless Steel 304 Pipes",
  },
  {
    slug: "mosquito-mesh",
    title: "Window & Door Mosquito Mesh Screens",
    category: "Mosquito Mesh",
    description: "Sliding, velcro, and magnetic mosquito mesh screens in SS 304 and high-visibility fiberglass.",
    image: "/images/balcony_safety.png",
    altText: "Mosquito mesh window screen installation in Chennai",
    spec: "SS 304 & Fiberglass Netting",
  },
  {
    slug: "pigeon-spikes",
    title: "Anti-Pigeon Bird Deterrent Spikes",
    category: "Pigeon Spikes",
    description: "Polycarbonate base stainless steel bird spikes for parapet walls, AC outdoor units, and window ledges.",
    image: "/images/duct_area_nets.png",
    altText: "Anti-pigeon bird deterrent spikes on AC ledge in Chennai",
    spec: "Polycarbonate Base + SS Spikes",
  },
];

// Helper functions for dynamic resolution
export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
}

export function getAreaBySlug(citySlug: string, areaSlug: string): AreaData | undefined {
  const city = getCityBySlug(citySlug);
  return city?.areas.find((a) => a.slug.toLowerCase() === areaSlug.toLowerCase());
}

export function generateLocalFaqs(serviceTitle: string, areaName: string, cityName: string = "Chennai") {
  return [
    {
      q: `How much does ${serviceTitle.toLowerCase()} cost per sqft in ${areaName}, ${cityName}?`,
      a: `Pricing for ${serviceTitle.toLowerCase()} in ${areaName} depends on your balcony square footage, mounting bracket type, and wire/netting specification. Contact Golden Enterprises for a 100% free on-site measurement and exact quote.`,
    },
    {
      q: `How long does installation take for homes in ${areaName}, ${cityName}?`,
      a: `Most residential balconies in ${areaName} are completed within 2 to 4 hours. We offer same-week and express 48-hour installation.`,
    },
    {
      q: `Is ${serviceTitle.toLowerCase()} safe for high-rise apartments in ${areaName}?`,
      a: `Yes, our installations are engineered for high-rise wind loads. Our 316-grade stainless steel cables support up to 400 kg breaking strain and are certified child and pet safe.`,
    },
    {
      q: `Do you provide a warranty on installation in ${areaName}?`,
      a: `Yes, we provide a multi-year warranty covering material strength, anti-rust properties, and bracket mounting tension.`,
    },
    {
      q: `Will ${serviceTitle.toLowerCase()} block my balcony view in ${areaName}?`,
      a: `No! Our products are designed for maximum aesthetic transparency. From a few feet away, invisible grills are nearly invisible, giving you an unobstructed panoramic view.`,
    },
  ];
}

export function generateLocalReviews(serviceTitle: string, areaName: string) {
  return [
    {
      name: "Ramesh Chandran",
      locality: `${areaName}, Chennai`,
      rating: 5,
      text: `Golden Enterprises installed ${serviceTitle.toLowerCase()} on our balcony in ${areaName}. Neat craftsmanship, very punctual technicians, and reasonable pricing!`,
      date: "1 week ago",
    },
    {
      name: "Sowmya N.",
      locality: `${areaName}, Chennai`,
      rating: 5,
      text: `Very reliable service! My balcony in ${areaName} is now completely safe for my kids and protected from pigeons. Highly recommended!`,
      date: "3 weeks ago",
    },
  ];
}
