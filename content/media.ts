// Images pulled from the chapter's 2025-26 annual report. Sizes are baked in so
// next/image can reserve space and we never ship a layout shift.
export type Media = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

function img(name: string, width: number, height: number, alt: string): Media {
  return { src: `/media/${name}.webp`, width, height, alt };
}

export const media = {
  teamGroup: img("team-group", 1200, 675, "The Enactus BITS Hyderabad team together on campus"),
  teamCampusNight: img("team-campus-night", 562, 422, "Chapter members on campus after an evening event"),

  donationDrive: img("donation-drive", 564, 422, "Residents gathering at an Enactus donation drive"),
  daanUtsavStall: img("daan-utsav-stall", 512, 384, "The Daan Utsav collection stall run on campus"),

  expo2025: img("expo-2025", 662, 665, "Enactus India National Exposition 2025 branding"),
  winnerLeague6: img("winner-league-6", 585, 729, "Winner card for League 6, Early Stage category"),
  league1Standings: img("league-1-standings", 585, 729, "League 1 standings with BITS Pilani Hyderabad placed first"),

  freshersStall: img("freshers-stall", 800, 450, "The Enactus stall at the Fresher's Fair"),
  freshersFairStalls: img("freshers-fair-stalls", 512, 384, "Club stalls and crowds at the Fresher's Fair"),
  earthThroughMyLens: img("earth-through-my-lens", 584, 820, "Poster for The Earth Through My Lens photo contest"),
  inductionsTechnical: img("inductions-technical", 640, 480, "Candidates working through the technical round of inductions"),

  zenith: img("zenith", 950, 952, "Zenith, the Ideathon Beyond Boundaries, and its winners"),
  prizeDistribution: img("prize-distribution", 915, 941, "Prize distribution after a chapter competition"),
  breakTheCase: img("break-the-case", 1058, 592, "Break The Case '25 banner and winning team"),
  breakTheCaseFinals: img("break-the-case-finals", 479, 581, "The Break The Case '25 finals on stage at ATMOS"),
  atmosSession: img("atmos-session", 480, 360, "A session under way in a campus lecture hall"),

  impactus26: img("impactus-26", 633, 354, "IMPACTUS '26 branding: Innovate, Adapt, Solve"),
  impactusHall: img("impactus-hall", 512, 384, "Participants working through the IMPACTUS '26 simulation"),

  solveWorkingSession: img("solve-working-session", 480, 360, "A Project SOLVE working session"),
  solvePresentation: img("solve-presentation", 480, 640, "Presenting Project SOLVE research findings"),
  solveClassroom: img("solve-classroom", 640, 360, "A classroom visited during Project SOLVE field research"),
} as const;
