export type ServiceIconName =
  | "compass"
  | "spark"
  | "layers"
  | "code"
  | "window"
  | "chart";

export interface Service {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  priceFrom: number;
  icon: ServiceIconName;
}

const services: Service[] = [
  {
    slug: "brand-strategy",
    title: "Brand strategy",
    summary: "Find your point of view and give your business a clear direction.",
    description:
      "We uncover what makes your business distinct, then turn that insight into a focused position and story your team can use to move forward.",
    features: [
      "Audience and category research",
      "Positioning and brand architecture",
      "Purpose, vision, and values",
      "Messaging framework and brand story",
    ],
    priceFrom: 8500,
    icon: "compass",
  },
  {
    slug: "brand-identity",
    title: "Brand identity",
    summary: "Create a distinctive visual and verbal world for your brand.",
    description:
      "From a memorable first impression to a flexible system for every touchpoint, we build identities that make your strategy tangible.",
    features: [
      "Naming and verbal identity",
      "Logo and visual identity system",
      "Typography and color palette",
      "Brand guidelines and launch assets",
    ],
    priceFrom: 12000,
    icon: "spark",
  },
  {
    slug: "digital-design",
    title: "Digital design",
    summary: "Make every interaction feel intuitive, useful, and unmistakably yours.",
    description:
      "We connect user needs with business goals to shape thoughtful websites and digital experiences, from the first wireframe to polished handoff.",
    features: [
      "Experience strategy and user journeys",
      "Information architecture",
      "Responsive interface design",
      "Interactive prototypes and design systems",
    ],
    priceFrom: 14000,
    icon: "layers",
  },
  {
    slug: "web-development",
    title: "Web development",
    summary: "Build a fast, accessible website ready to grow with your business.",
    description:
      "Our team turns considered design into dependable digital products, using modern technology and a careful focus on performance and accessibility.",
    features: [
      "Next.js website development",
      "Content management integration",
      "Accessibility and performance testing",
      "Launch support and team handoff",
    ],
    priceFrom: 18000,
    icon: "code",
  },
  {
    slug: "digital-products",
    title: "Digital products",
    summary: "Turn complex ideas into products people can use with confidence.",
    description:
      "We partner with product teams to define the right opportunity, map the experience, and create a digital product that makes everyday tasks easier.",
    features: [
      "Product discovery and definition",
      "User research and usability testing",
      "Product UX and interface design",
      "Design system and engineering collaboration",
    ],
    priceFrom: 22000,
    icon: "window",
  },
  {
    slug: "creative-growth",
    title: "Creative growth",
    summary: "Keep good ideas moving with clear, consistent creative support.",
    description:
      "We help ambitious teams build momentum through focused campaigns and ongoing creative partnership, always grounded in your brand and goals.",
    features: [
      "Campaign strategy and concepts",
      "Content and art direction",
      "Social and digital creative",
      "Ongoing optimization and support",
    ],
    priceFrom: 6000,
    icon: "chart",
  },
];

export function getServices(): Service[] {
  return services;
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function formatPriceFrom(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}
