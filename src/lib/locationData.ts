export interface AreaData {
  slug: string;
  name: string;
  landmark: string;
  localityDescription: string;
  housingType: string;
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
  benefits: string[];
}

export const CITIES: CityData[] = [
  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    lat: 13.0067,
    lng: 80.2452,
    areas: [
      {
        slug: "velachery",
        name: "Velachery",
        landmark: "Near Vijayanagar Junction, Velachery Bypass Road & Grand Mall",
        localityDescription: "Velachery is one of Chennai's fastest-growing residential hubs with high-density gated apartment communities like CeeDeeYes, Phoenix One, and Appaswamy Cityside.",
        housingType: "High-rise apartments, multi-story flats & independent duplex villas",
      },
      {
        slug: "anna-nagar",
        name: "Anna Nagar",
        landmark: "Near Anna Nagar Roundtana, Tower Park, 2nd Avenue & Shanthi Colony",
        localityDescription: "Anna Nagar is a premium planned residential neighborhood featuring luxury apartment complexes, independent bungalows, and high-value residential properties.",
        housingType: "Luxury multi-story apartments, penthouses & independent houses",
      },
      {
        slug: "omr",
        name: "OMR IT Corridor",
        landmark: "Stretching across Perungudi, Kandanchavadi, Thoraipakkam, Sholinganallur to Siruseri",
        localityDescription: "The OMR IT Corridor houses tens of thousands of tech professionals in massive high-rise residential towers including Hiranandani Parks, Olympia Opaline, and DLF Garden City.",
        housingType: "Ultra high-rise residential townships (15 to 35 floors) & gated IT communities",
      },
      {
        slug: "tambaram",
        name: "Tambaram",
        landmark: "East Tambaram, West Tambaram, Near MCC & Railway Station Road",
        localityDescription: "Tambaram is a key residential gateway in South Chennai with sprawling housing colonies, apartment complexes, and independent homes.",
        housingType: "Residential apartments, builder floors & independent houses",
      },
      {
        slug: "porur",
        name: "Porur",
        landmark: "Mount-Poonamallee High Road, Near Ramachandra Hospital & DLF Cybercity",
        localityDescription: "Porur is a prominent IT and medical hub featuring large residential townships and modern apartment communities.",
        housingType: "High-rise gated communities, IT employee apartments & individual houses",
      },
      {
        slug: "perungudi",
        name: "Perungudi",
        landmark: "Near RMZ Millenia, Toll Plaza & Perungudi Lake",
        localityDescription: "Perungudi offers high-density apartment living right on OMR, making balcony bird protection essential for high-floor residents.",
        housingType: "High-rise modern apartments & gated residential complexes",
      },
      {
        slug: "medavakkam",
        name: "Medavakkam",
        landmark: "Medavakkam-Mambakkam Main Road & Perumbakkam Junction",
        localityDescription: "Medavakkam is a rapidly expanding South Chennai suburb with new residential apartment towers and gated communities.",
        housingType: "Multi-story flats, housing society apartments & villas",
      },
      {
        slug: "sholinganallur",
        name: "Sholinganallur",
        landmark: "ELCOT IT SEZ Junction & ECR Link Road",
        localityDescription: "Sholinganallur is the heart of Chennai's IT SEZ corridor with soaring high-rise residential towers exposed to strong sea winds.",
        housingType: "High-rise towers (20+ floors) & luxury gated townships",
      },
      {
        slug: "adyar",
        name: "Adyar",
        landmark: "LB Road, Kasturba Nagar, Gandhi Nagar & Besant Avenue",
        localityDescription: "Adyar is one of Chennai's most affluent coastal neighborhoods, requiring anti-corrosive marine-grade 316 stainless steel balcony grills.",
        housingType: "Luxury coastal apartments, sea-facing penthouses & heritage homes",
      },
      {
        slug: "ecr",
        name: "ECR (East Coast Road)",
        landmark: "Palavakkam, Neelankarai, Injambakkam to ECR Beach Road",
        localityDescription: "ECR features luxury oceanfront villas and high-end beach apartments where coastal salt air demands 316-grade anti-rust steel cables.",
        housingType: "Oceanfront villas, luxury beach houses & gated sea-view apartments",
      },
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
    altText: "Pigeon safety net installation on high-rise balcony",
    spec: "Garware UV Stabilized Copolymer Nylon",
    benefits: [
      "100% Bird & Pigeon Exclusion",
      "UV-Stabilized Weather Resistance",
      "High Breaking Strength (>90 kg load per mesh)",
      "Unobstructed Airflow & Breeze",
    ],
  },
  {
    slug: "invisible-grills",
    title: "316 Stainless Steel Invisible Grills",
    category: "Invisible Grills",
    description: "Ultra-thin 316 marine-grade stainless steel wire grills offering 100% view clarity and high-tensile security.",
    image: "/images/invisible_grills.png",
    altText: "316 stainless steel invisible grill installation on balcony window",
    spec: "316 Marine Grade SS Wire + Transparent Nylon Casing",
    benefits: [
      "Zero Obstruction of Architectural View",
      "Marine Grade 316 Anti-Rust Cable Spec",
      "Certified Child & Pet Safety",
      "Integrated Emergency Egress Safety",
    ],
  },
  {
    slug: "cloth-hangers",
    title: "Ceiling & Wall Cloth Drying Hangers",
    category: "Cloth Hangers",
    description: "Space-saving pulley-operated ceiling pull-down stainless steel cloth drying racks for apartment balconies.",
    image: "/images/about_installation.png",
    altText: "Ceiling cloth hanger installation on apartment balcony",
    spec: "Stainless Steel 304 Heavy Duty Rods",
    benefits: [
      "Frees Up 100% Balcony Floor Space",
      "Easy Pulley-Operated Lowering Mechanism",
      "Rust-Proof SS 304 Construction",
      "Supports Heavy Laundry Weight (up to 30 kg)",
    ],
  },
  {
    slug: "mosquito-mesh",
    title: "Window & Door Mosquito Mesh Screens",
    category: "Mosquito Mesh",
    description: "Sliding, velcro, and magnetic mosquito mesh screens in SS 304 and high-visibility fiberglass.",
    image: "/images/balcony_safety.png",
    altText: "Mosquito mesh window screen installation",
    spec: "SS 304 & High Visibility Fiberglass",
    benefits: [
      "Complete Mosquito & Dengue Protection",
      "Washable & Detachable Screen Frames",
      "Custom Powder-Coated Aluminum Frames",
      "High Clarity Airflow Mesh",
    ],
  },
  {
    slug: "pigeon-spikes",
    title: "Anti-Pigeon Bird Deterrent Spikes",
    category: "Pigeon Spikes",
    description: "Polycarbonate base stainless steel bird spikes for parapet walls, AC outdoor units, and window ledges.",
    image: "/images/duct_area_nets.png",
    altText: "Anti-pigeon bird deterrent spikes on AC ledge",
    spec: "Polycarbonate UV Base + SS 304 Spikes",
    benefits: [
      "Humane & Non-Lethal Bird Deterrent",
      "Weatherproof Anti-UV Polycarbonate Base",
      "Prevents Nesting on AC Ledges & Beams",
      "Zero Maintenance Required",
    ],
  },
];

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
      a: `Pricing in ${areaName} is calculated per square foot based on your balcony dimensions, wire gauge, and bracket type. Golden Enterprises provides a 100% free on-site measurement and exact custom quote for all homes in ${areaName}.`,
    },
    {
      q: `How quickly can your technicians install ${serviceTitle.toLowerCase()} in ${areaName}?`,
      a: `We provide same-day balcony inspection and complete installation within 24 to 48 hours across ${areaName} and surrounding localities.`,
    },
    {
      q: `Are 316-grade invisible grills safe for high-rise apartment balconies in ${areaName}?`,
      a: `Yes! Our 316 marine-grade stainless steel cables are tested to support over 400 kg tensile breaking strain. They withstand severe coastal winds and provide complete fall protection for children and pets.`,
    },
    {
      q: `Do you offer a warranty on ${serviceTitle.toLowerCase()} installations in ${areaName}?`,
      a: `Yes, we issue an official multi-year written warranty covering anti-rust properties, wire tension, and mounting bracket durability.`,
    },
    {
      q: `Will installing safety nets or invisible grills affect my balcony view in ${areaName}?`,
      a: `Not at all! Our invisible grills use 2mm to 3mm ultra-thin high-tensile wire cables that become nearly invisible from just a few feet away, preserving 100% of your view.`,
    },
  ];
}

export function generateLocalReviews(serviceTitle: string, areaName: string) {
  return [
    {
      name: "Anand & Family",
      locality: `${areaName}, Chennai`,
      rating: 5,
      text: `Golden Enterprises installed ${serviceTitle.toLowerCase()} on our balcony in ${areaName}. The installation was completed in 3 hours with super clean finishing. Extremely satisfied!`,
      date: "1 week ago",
    },
    {
      name: "Mrs. Meenakshi S.",
      locality: `${areaName}, Chennai`,
      rating: 5,
      text: `No more pigeon trouble on our balcony in ${areaName}! Very polite staff, transparent per-sqft pricing, and sturdy 316 stainless steel quality.`,
      date: "2 weeks ago",
    },
  ];
}
