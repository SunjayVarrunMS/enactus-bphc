export const site = {
  name: "Enactus BITS Hyderabad",
  shortName: "Enactus BPHC",
  // The Enactus backronym, used by the chapter on LinkedIn.
  tagline: "ENtrepreneurial ACTion for others creates a better world for US all.",
  motto: "We all win.",
  founded: 2013,
  email: "enactus@hyderabad.bits-pilani.ac.in",
  address: [
    "BITS Pilani, Hyderabad Campus",
    "Shameerpet-Keesara Road, Jawahar Nagar",
    "Hyderabad, Telangana 500078",
  ],
  socials: {
    instagram: "https://www.instagram.com/enactus.bitshyd/",
    linkedin: "https://www.linkedin.com/company/enactus-bits-hyderabad",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
] as const;

// The five teams juniors are inducted into, from the Sept 2025 induction drive.
export const teams = [
  { name: "Technical", blurb: "Builds and maintains what the chapter ships, this site included." },
  { name: "Design & Publicity", blurb: "Brand, posters, and how a campaign actually reads on a feed." },
  { name: "Sponsorship", blurb: "Brings partners on board and keeps those relationships warm." },
  { name: "Events & Logistics", blurb: "Turns a plan into a room full of people on the right day." },
  { name: "Research & Content", blurb: "Field research, case analysis, and the words behind every project." },
] as const;

export const partners = [
  { name: "EaseMyTrip", note: "Prime partner, IMPACTUS '26" },
  { name: "Kriti Social Initiatives", note: "Collaborator, Project SOLVE" },
  { name: "BITS Hyderabad Consulting Group", note: "Co-organiser, Break The Case '25" },
  { name: "Economics Association, BPHC", note: "Co-organiser, Break The Case '25" },
  { name: "Mental Health Support Group", note: "Co-organiser, Zenith" },
  { name: "Photography Club", note: "Co-organiser, The Earth Through My Lens" },
] as const;

export const mentors = ["Phanindra Sama", "Raju Reddy"] as const;
