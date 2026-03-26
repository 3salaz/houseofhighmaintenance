import type {
  ActionLink,
  ExperienceCard,
  FaqItem,
  GalleryCard,
  NavItem,
  ServiceCategory,
  StoryPoint,
  TestimonialCard,
} from "../types";

const squareBookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL?.trim();

export const bookingAction: ActionLink = squareBookingUrl
  ? {
      label: "Book Now",
      href: squareBookingUrl,
      external: true,
    }
  : {
      label: "Plan Your Visit",
      href: "/contact",
    };

export const servicesAction: ActionLink = {
  label: "View Services",
  href: "/services",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceCategories: ServiceCategory[] = [
  {
    title: "Signature Styling",
    description:
      "Refined finishing, event-ready styling, and elevated everyday hair that holds its shape and presence.",
    services: [
      "Silk press and movement-focused finishes",
      "Blowouts with long-wear polish",
      "Soft glam and occasion styling",
    ],
  },
  {
    title: "Healthy Hair Rituals",
    description:
      "Treatment-led appointments designed to restore softness, strength, shine, and long-term manageability.",
    services: [
      "Moisture and repair treatments",
      "Scalp-focused care rituals",
      "Trim and shape maintenance",
    ],
  },
  {
    title: "Transformational Sessions",
    description:
      "For clients who want a more intentional shift in their look, with consultation and service clarity from the start.",
    services: [
      "Custom correction planning",
      "Major shape refreshes",
      "Service plans for recurring maintenance",
    ],
  },
];

const brandPillars: StoryPoint[] = [
  {
    title: "Luxury without confusion",
    description:
      "The experience is meant to feel elevated, but the path to booking stays simple and direct.",
  },
  {
    title: "Service clarity first",
    description:
      "Clients should understand what you do, who it is for, and how to book within the first few scrolls.",
  },
  {
    title: "Results with presence",
    description:
      "Every touchpoint should feel considered, from the first CTA to the final reveal in the mirror.",
  },
];

const galleryCards: GalleryCard[] = [
  {
    title: "Editorial polish",
    description: "Placeholder visual direction for clean finishes and camera-ready detail.",
    tone: "warm",
  },
  {
    title: "Healthy texture",
    description: "Placeholder space for detail shots, treatment moments, and movement.",
    tone: "neutral",
  },
  {
    title: "Luxury ritual",
    description: "Placeholder space for atmosphere, client experience, and premium cues.",
    tone: "dark",
  },
];

const testimonialCards: TestimonialCard[] = [
  {
    quote:
      "The consultation felt intentional, the service felt calm, and the final result looked expensive.",
    source: "Placeholder testimonial",
  },
  {
    quote:
      "Everything about the appointment felt polished, from booking to finish, without ever feeling complicated.",
    source: "Placeholder testimonial",
  },
  {
    quote:
      "This is the kind of beauty experience that makes clients want to rebook before they leave.",
    source: "Placeholder testimonial",
  },
];

const contactFaq: FaqItem[] = [
  {
    question: "How should booking work for the first release?",
    answer:
      "Use Square as the booking source of truth first. The website should push clients into a clear hosted booking path instead of recreating scheduling logic.",
  },
  {
    question: "Do all services need custom flows right away?",
    answer:
      "No. Start with strong service descriptions and direct entry points, then layer in service-specific booking or availability later if it improves conversion.",
  },
  {
    question: "What should clients know before they book?",
    answer:
      "They should understand the brand, the type of appointment they need, and what the next click does. The site should remove hesitation, not add steps.",
  },
];

const experienceCards: ExperienceCard[] = [
  {
    eyebrow: "Hero + CTA",
    title: "A homepage that sells the appointment fast",
    description:
      "Luxury tone, clear service framing, and an obvious booking path should be visible within seconds.",
  },
  {
    eyebrow: "Hosted Booking",
    title: "Square handles the operational layer",
    description:
      "The site leads with brand and clarity, then hands scheduling off to a trusted hosted flow when it is time to reserve.",
  },
  {
    eyebrow: "Future Expansion",
    title: "Built to grow without a rewrite",
    description:
      "The structure leaves room for API-driven booking features and owner tools later, without overbuilding the MVP.",
  },
];

export const siteContent = {
  brand: {
    name: "House of High Maintenance",
    shortName: "HOHM",
    city: "San Francisco",
    tagline: "Luxury haircare, strong identity, and a booking path that feels effortless.",
    description:
      "House of High Maintenance is positioned as a premium salon brand with a polished digital experience, strong service clarity, and hosted booking through Square when ready.",
  },
  hero: {
    eyebrow: "Premium Salon Website MVP",
    title: "A luxury salon site that sells first and books second.",
    description:
      "House of High Maintenance should feel confident, elevated, and conversion-ready: strong brand direction, clear service previews, and booking CTAs that lead naturally into Square.",
    highlights: [
      "Mobile-first premium presentation",
      "Strong conversion cues in every section",
      "Square-ready booking path without custom scheduling",
    ],
  },
  stats: [
    { value: "10s", label: "to understand the brand and booking path" },
    { value: "MVP", label: "focus on the public website before deeper systems" },
    { value: "Square", label: "hosted booking source of truth for launch" },
  ],
  servicesPreview: {
    eyebrow: "Services Preview",
    title: "Clarity before complexity",
    description:
      "The first release should help clients quickly recognize the kind of appointment they need and feel confident moving toward booking.",
    categories: serviceCategories,
  },
  aboutPreview: {
    eyebrow: "Brand Direction",
    title: "The site should feel as polished as the service itself",
    description:
      "Luxury here is not about noise. It is about confidence, control, warmth, and a visual identity that feels intentional on every screen.",
    pillars: brandPillars,
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Placeholder imagery with a clear premium mood",
    description:
      "The site can launch with strong layout and visual rhythm now, then swap in final portfolio photography later without redesigning the sections.",
    cards: galleryCards,
  },
  testimonials: {
    eyebrow: "Trust Signals",
    title: "Space for social proof when the site is ready",
    description:
      "Testimonials are included as a design section now so real client feedback can drop in later without changing the page structure.",
    cards: testimonialCards,
  },
  booking: {
    eyebrow: "Booking CTA",
    title: "The website sells. Square handles the operations.",
    description:
      "For the MVP, the cleanest path is a strong hosted booking handoff. Service-specific entry points and custom API work can follow once the public site converts well.",
    notes: [
      "Keep Square hosted booking as the launch path.",
      "Add service-specific CTAs where they support conversion.",
      "Leave custom booking logic for a later phase.",
    ],
  },
  aboutPage: {
    title: "A premium salon brand needs premium presentation",
    description:
      "House of High Maintenance is being built in the right order: strong public-facing brand experience first, deeper tooling later. The early site should communicate confidence, service quality, and a friction-light path to reserve.",
    pillars: brandPillars,
    experienceCards,
  },
  servicesPage: {
    title: "Services should read clearly and book cleanly",
    description:
      "Clients should not need to decode your offer. Each category should signal the type of transformation, the appointment mindset, and the right next click.",
    categories: serviceCategories,
    process: [
      "Choose the service category that matches the result you want.",
      "Use the primary booking CTA to move into the hosted Square flow.",
      "Add custom availability or package logic later only if the live flow needs it.",
    ],
  },
  contactPage: {
    title: "Booking path, trust cues, and next-step clarity",
    description:
      "This page should support decision-making, reduce hesitation, and make the booking path feel obvious. It does not need a custom contact system before the public site is working.",
    cards: experienceCards,
    faq: contactFaq,
  },
};
