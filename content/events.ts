import { media, type Media } from "./media";

export type EventItem = {
  id: string;
  date: string; // ISO, used only for ordering
  dateLabel: string;
  title: string;
  partner?: string;
  summary: string;
  facts?: string[];
  image?: Media;
};

// The 2025-26 season, in the order it happened.
export const events: EventItem[] = [
  {
    id: "skillsetgo-exposition",
    date: "2025-08-02",
    dateLabel: "2 August 2025",
    title: "SkillSetGo goes to the National Exposition",
    summary:
      "The submission the team had spent the summer break on - documentation, research, app design and a final video that went through more edits than anyone wants to count.",
    facts: ["Top 20 nationally, Early Stage category", "Winner, League 6"],
    image: media.expo2025,
  },
  {
    id: "earth-through-my-lens",
    date: "2025-08-08",
    dateLabel: "8-24 August 2025",
    title: "The Earth Through My Lens",
    partner: "Photography Club",
    summary:
      "A photo journalism contest and exhibition on nature, pollution and the people quietly doing something about both. Selected entries were exhibited on campus.",
    facts: ["75+ entries", "Certificates tied to the Ministry of Environment, Forest and Climate Change"],
    image: media.earthThroughMyLens,
  },
  {
    id: "freshers",
    date: "2025-08-09",
    dateLabel: "9 & 23 August 2025",
    title: "Fresher's Fair and orientation",
    summary:
      "A stall at the fair and a formal session in the auditorium for the 2025 batch - mostly spent explaining what social entrepreneurship means in practice rather than on a slide.",
    image: media.freshersStall,
  },
  {
    id: "inductions",
    date: "2025-09-01",
    dateLabel: "1 September 2025",
    title: "Inductions across five teams",
    summary:
      "A multi-round process - written assessments, team-specific tasks, then interviews - built to test coding, design, case analysis, negotiation and creative thinking rather than a single generic aptitude.",
    facts: ["Technical, Design & Publicity, Sponsorship, Events & Logistics, Research & Content"],
    image: media.inductionsTechnical,
  },
  {
    id: "zenith",
    date: "2025-11-07",
    dateLabel: "7 November 2025",
    title: "Zenith - Ideation Beyond Boundaries",
    partner: "Mental Health Support Group, at ATMOS",
    summary:
      "A national ideathon on social impact, mental health and community resilience, with the chapter running planning, outreach and day-of execution.",
    facts: ["Prize pool worth ₹40,000"],
    image: media.zenith,
  },
  {
    id: "break-the-case",
    date: "2025-11-08",
    dateLabel: "8 November 2025",
    title: "Break The Case '25",
    partner: "BITS Hyderabad Consulting Group and the Economics Association, at ATMOS",
    summary:
      "The flagship consulting case competition at ATMOS, run over three rounds: an online quiz, a case submission, then on-campus final presentations.",
    facts: [
      "1,000+ participants",
      "Prize pool worth ₹1.25 lakh+",
      "Judged by industry professionals from BCG and Deloitte",
    ],
    image: media.breakTheCase,
  },
  {
    id: "solve-kickoff",
    date: "2026-01-01",
    dateLabel: "January 2026",
    title: "Project SOLVE begins",
    partner: "Kriti Social Initiatives",
    summary:
      "Work starts on IoT-based teaching and learning tools, after the chapter's own problem statement was picked among the top 75 nationally for funding.",
    image: media.solveWorkingSession,
  },
  {
    id: "impactus-26",
    date: "2026-04-03",
    dateLabel: "3 April 2026",
    title: "IMPACTUS '26",
    partner: "Under Launchpad, sponsored by EaseMyTrip",
    summary:
      "Six hours, one escalating crisis. Teams played policymaker and founder at once against a brief on artificial intelligence in travel and hospitality, with the scenario shifting under them as they worked.",
    facts: [
      "Theme: Innovate • Adapt • Solve",
      "Biased recommendations, over-automation and fading visibility for local businesses",
      "A geopolitical turn mid-simulation: travel restrictions and swinging flight prices",
    ],
    image: media.impactus26,
  },
];

// Ran this season, but the report does not date them.
export const alsoThisSeason = [
  {
    title: "Donation drive",
    summary: "A large-scale collection campaign that met the immediate needs of close to 200 people.",
    image: media.daanUtsavStall,
  },
  {
    title: "Brand Horizon, FINNOVATE '25",
    summary:
      "A marketing strategy event on building go-to-market plans for both new and existing products, with a ₹15,000 prize pool.",
    image: media.atmosSession,
  },
] as const;
