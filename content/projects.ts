import { media, type Media } from "./media";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: "Prototyping" | "Competing" | "Ongoing";
  since: string;
  partner?: string;
  body: string[];
  highlights: string[];
  gallery: Media[];
};

// Two projects have enough published material for a real case study. The rest of
// the chapter's roster is in `earlierProjects` below - named, but not written up.
export const projects: Project[] = [
  {
    slug: "skillsetgo",
    name: "Project SkillSetGo",
    tagline: "Connecting underserved communities to work they can actually reach.",
    status: "Competing",
    since: "2025",
    body: [
      "SkillSetGo started over a summer break with a question worth sitting with: people looking for daily work and people looking to hire are often a few kilometres apart and still never find each other. The gap is not effort, it is discovery.",
      "Second and third year students built the project entirely online - regular calls, several drafts, a long editing cycle - and came out with idea documentation, research reports, an app design, data collection forms and a response analysis. The work meant spending real time with the communities involved and designing something simpler and more accessible than what already existed.",
    ],
    highlights: [
      "Top 20 nationally at the Enactus India National Exposition 2025, Early Stage category",
      "Winner of League 6 in the Early Stage bracket",
      "Drawn into League 1 alongside IIT Bombay, BITS Pilani and Shaheed Sukhdev College of Business Studies",
    ],
    gallery: [media.expo2025, media.winnerLeague6, media.league1Standings],
  },
  {
    slug: "solve",
    name: "Project SOLVE",
    tagline: "IoT-enabled classrooms, built for schools that do not have much to work with.",
    status: "Prototyping",
    since: "January 2026",
    partner: "Kriti Social Initiatives",
    body: [
      "SOLVE asks what a classroom can do when the technology in it is cheap, rugged and actually designed for the room it sits in. The chapter wrote the problem statement itself, and it was picked among the top 75 nationally for funding and development support.",
      "The team has finished ideation and research - extensive surveys and field-level analysis to work out what teachers and students actually run into day to day - and has moved into prototyping. The prototype is due to be built and tested by the start of the next semester.",
    ],
    highlights: [
      "Selected among the top 75 problem statements for funding and development support",
      "Mentorship and funding from Phanindra Sama and Raju Reddy",
      "Ideation and field research complete; prototype in progress",
    ],
    gallery: [media.solveClassroom, media.solveWorkingSession, media.solvePresentation],
  },
];

// Named in the 2025-26 annual report. We are not going to invent descriptions for
// real community projects, so these stay a roster until the chapter writes them up.
export const earlierProjects = [
  { name: "Project Tejas", note: "Recent initiative" },
  { name: "Project Medha", note: "Established initiative" },
  { name: "Project Vikalp", note: "Established initiative" },
  { name: "Project Oorja", note: "Established initiative" },
  { name: "Project Maithri", note: "Established initiative" },
] as const;
