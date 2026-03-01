export const ROUTE_PATHS = {
  HOME: "/",
  SECURITY: "/security",
} as const;

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  excludedFeatures?: string[];
  badge?: string;
  ctaText: string;
  ctaLink: string;
  highlighted?: boolean;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface CompetitorComparison {
  feature: string;
  replyra: string | boolean;
  birdeye: string | boolean;
  podium: string | boolean;
  reputation: string | boolean;
}

export interface IndustryTile {
  id: string;
  icon: string;
  label: string;
  description: string;
}

export interface RiskClassification {
  id: string;
  level: "respond" | "careful" | "report";
  color: string;
  title: string;
  description: string;
}

export const COMPETITOR_DATA: CompetitorComparison[] = [
  {
    feature: "Starting price",
    replyra: "$49/mo",
    birdeye: "$299/mo",
    podium: "$399/mo",
    reputation: "$500+/mo",
  },
  {
    feature: "Free trial, no card",
    replyra: true,
    birdeye: false,
    podium: false,
    reputation: false,
  },
  {
    feature: "'Don't respond' classifier",
    replyra: true,
    birdeye: false,
    podium: false,
    reputation: false,
  },
  {
    feature: "Transparent public pricing",
    replyra: true,
    birdeye: false,
    podium: false,
    reputation: false,
  },
  {
    feature: "Setup time",
    replyra: "5 minutes",
    birdeye: "Requires demo call",
    podium: "Requires demo call",
    reputation: "Requires demo call",
  },
  {
    feature: "Cancel anytime",
    replyra: true,
    birdeye: "Annual contract",
    podium: "Annual contract",
    reputation: "Annual contract",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 49,
    period: "month",
    description: "Perfect for single-location businesses getting started",
    features: [
      "Unlimited reviews handled",
      "Google Business Profile",
      "AI response drafts",
      "🟢🟡🔴 Basic risk classification",
      "Email notifications",
      "Mandatory 2FA security",
    ],
    excludedFeatures: [
      "Response tone customization",
      "Fake review detection",
      "Monthly report",
    ],
    ctaText: "Start Free",
    ctaLink: "https://stripe.com/starter",
  },
  {
    id: "growth",
    name: "Growth",
    price: 129,
    period: "month",
    description: "Everything in Starter, plus advanced features",
    badge: "⭐ Most Popular",
    highlighted: true,
    features: [
      "5 platforms (Google, Yelp, TripAdvisor, Trustpilot, Healthgrades)",
      "Response tone customization",
      "Advanced fake review detection",
      "SMS + email notifications",
      "High-liability review flagging",
      "Full activity audit log",
      "Monthly reputation report",
      "Reviews checked every 30 minutes",
    ],
    ctaText: "Start Free",
    ctaLink: "https://stripe.com/growth",
  },
  {
    id: "pro",
    name: "Pro",
    price: 249,
    period: "month",
    description: "Everything in Growth, plus enterprise features",
    features: [
      "All review platforms",
      "Positive review collection (auto-outreach)",
      "Multi-location (up to 3 locations)",
      "Competitor review tracking",
      "HIPAA-ready response mode",
      "Data residency choice (US or EU)",
      "Monthly security report",
      "Reviews checked every 5 minutes",
      "Priority support",
    ],
    ctaText: "Start Free",
    ctaLink: "https://stripe.com/pro",
  },
  {
    id: "concierge",
    name: "Concierge",
    price: 399,
    period: "month",
    description: "For businesses where one wrong word is expensive",
    features: [
      "Every AI draft reviewed by a human Replyra specialist before sending",
      "Guaranteed response within 1 hour",
      "Dedicated account manager",
      "Ideal for medical clinics, law firms, and high-end hospitality",
    ],
    ctaText: "Talk to Us",
    ctaLink: "/contact",
  },
];

export const FEATURES: Feature[] = [
  {
    id: "unlimited",
    icon: "🎯",
    title: "Unlimited Review Handling",
    description:
      "All plans handle unlimited reviews across all connected platforms. No daily caps, no surprise overages, no artificial limits.",
  },
  {
    id: "tone",
    icon: "🎨",
    title: "Response Tone Customization (Growth & Pro)",
    description:
      "Tell the AI how your business likes to sound — formal, warm, brief, or detailed. Every response is written in your voice, not a generic template.",
  },
  {
    id: "collection",
    icon: "⭐",
    title: "Positive Review Collection (Pro)",
    description:
      "After every great customer interaction, Replyra automatically nudges happy customers to share their experience. Businesses using this feature see 3–5x more review volume within 60 days.",
  },
  {
    id: "report",
    icon: "📊",
    title: "Monthly Reputation Report (Growth & Pro)",
    description:
      "A plain-English monthly summary: your star rating trend, response rate, top complaint patterns, and platform-by-platform breakdown. Turns review data into business intelligence.",
  },
  {
    id: "multilocation",
    icon: "🏢",
    title: "Multi-Location Management (Pro)",
    description:
      "Manage up to 3 separate business locations inside one Replyra account. One dashboard, one monthly invoice, complete visibility across every location.",
  },
  {
    id: "realtime",
    icon: "⚡",
    title: "Real-Time Detection",
    description:
      "Starter checks for new reviews every 2 hours. Growth checks every 30 minutes. Pro checks every 5 minutes — so your response appears before the review even finishes trending.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Owner",
    company: "Chen's Bistro",
    content:
      "We went from dreading Google alerts to actually looking forward to them. Replyra caught a fake review before we even saw it and flagged it for reporting. That alone paid for itself.",
    rating: 5,
  },
  {
    id: "2",
    name: "Dr. Michael Torres",
    role: "Practice Manager",
    company: "Torres Dental Group",
    content:
      "The HIPAA-ready mode is a game-changer. We can respond to patient reviews without worrying about accidentally disclosing protected information. The liability flagging gives us peace of mind.",
    rating: 5,
  },
  {
    id: "3",
    name: "James Wilson",
    role: "General Manager",
    company: "Riverside Hotel",
    content:
      "Before Replyra, we were paying $450/month for a tool that did less. The positive review collection feature alone has increased our review volume by 4x in two months. Guests actually want to leave reviews now.",
    rating: 5,
  },
];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "How long does setup take?",
    answer:
      "5 minutes. You connect your Google Business Profile (or other platforms), set your preferences, and you're done. No demo calls, no onboarding meetings, no waiting.",
  },
  {
    id: "2",
    question: "What happens if I get more reviews than expected?",
    answer:
      "Nothing. All plans handle unlimited reviews. There are no daily caps, no overage fees, no throttling. If you get 10 reviews or 1,000 reviews in a day, Replyra handles them all.",
  },
  {
    id: "3",
    question: "Can I cancel anytime?",
    answer:
      "Yes. No contracts, no cancellation fees, no questions asked. Cancel from your account dashboard and you won't be charged again. Your data remains accessible for 30 days after cancellation.",
  },
  {
    id: "4",
    question: "How do you detect fake reviews?",
    answer:
      "Our AI looks for a combination of signals: reviewer account age, whether the review has suspiciously vague language, unusual timing patterns (multiple 1-star reviews in one day), and language similarities to other suspicious reviews. We never claim certainty — we flag the combination of signals and recommend reporting rather than responding, which avoids giving the review additional visibility.",
  },
  {
    id: "5",
    question: "Will my responses sound like they came from a robot?",
    answer:
      "No — and this is the one thing we're most proud of. The AI reads the specific details of each review and writes a response tailored to that situation. Growth and Pro customers can also customise the tone to match their brand voice precisely. Nothing generic ever goes out.",
  },
  {
    id: "6",
    question: "Does Replyra work for businesses outside the US?",
    answer:
      "Yes. We support businesses globally. Pro plan customers can choose whether their data is stored on US or EU servers, which is important for GDPR compliance in Europe.",
  },
  {
    id: "7",
    question: "What platforms do you support?",
    answer:
      "Starter supports Google Business Profile. Growth adds Yelp, TripAdvisor, Trustpilot, and Healthgrades. Pro supports all major review platforms. If there's a platform you need that we don't support yet, contact us — we add new integrations based on customer requests.",
  },
  {
    id: "8",
    question: "Do I need to approve every response before it's sent?",
    answer:
      "That's up to you. You can set Replyra to auto-send responses, require approval for all responses, or require approval only for reviews flagged as high-risk. Most customers start with approval-required and switch to auto-send after they trust the AI.",
  },
];

export const INDUSTRIES: IndustryTile[] = [
  {
    id: "restaurants",
    icon: "🍽️",
    label: "Restaurants & Cafes",
    description:
      "One 1-star review on a slow Monday can cost you a full week of bookings.",
  },
  {
    id: "medical",
    icon: "🏥",
    label: "Medical & Dental Clinics",
    description:
      "HIPAA-ready mode and high-liability flagging built in to Pro.",
  },
  {
    id: "salons",
    icon: "✂️",
    label: "Salons & Barbershops",
    description: "Your reputation lives on Google Maps. Own it.",
  },
  {
    id: "hotels",
    icon: "🏨",
    label: "Hotels & Short-Term Rentals",
    description: "Guests check reviews before they even look at your price.",
  },
  {
    id: "legal",
    icon: "⚖️",
    label: "Legal & Financial Services",
    description:
      "One publicly mishandled review can undermine years of professional credibility.",
  },
  {
    id: "home",
    icon: "🔧",
    label: "Home Services",
    description:
      "Plumbers, electricians, and contractors live and die by their Angi and Google ratings.",
  },
];

export const RISK_CLASSIFICATIONS: RiskClassification[] = [
  {
    id: "respond",
    level: "respond",
    color: "green",
    title: "Respond",
    description:
      "A genuine customer with a fixable complaint. Responding publicly shows you care and can turn the situation around.",
  },
  {
    id: "careful",
    level: "careful",
    color: "amber",
    title: "Respond Carefully",
    description:
      "The review contains emotional language or potential legal implications. Draft is ready, but human review recommended before sending.",
  },
  {
    id: "report",
    level: "report",
    color: "red",
    title: "Report, Don't Respond",
    description:
      "Likely fake, competitor sabotage, or designed to provoke. Responding publicly gives them the stage they want. Report to platform instead.",
  },
];

export const SECURITY_BADGES = [
  { icon: "🔒", text: "SSL Encrypted" },
  { icon: "💳", text: "Payments by Stripe" },
  { icon: "🛡️", text: "Security Guarantee" },
  { icon: "✓", text: "No contracts" },
];

export const TRUST_SIGNALS = [
  "Setup in 5 minutes",
  "Google, Yelp & more",
  "Cancel anytime",
  "🔒 Independently security-audited",
];

export function formatPrice(price: number): string {
  return `$${price}`;
}

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
