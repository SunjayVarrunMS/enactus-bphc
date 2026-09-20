import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { secondaryStats } from "@/content/impact";
import { media } from "@/content/media";
import { mentors, site, teams } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Enactus BITS Hyderabad has run student-led social enterprise projects out of BITS Pilani's Hyderabad campus since 2013.",
};

export default function AboutPage() {
  return (
    <>
      <section className="wrap pt-20 pb-14 lg:pt-28">
        <p className="eyebrow">About the chapter</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-bold tracking-tight text-cream sm:text-5xl lg:text-6xl">
          Business skills, pointed at problems that do not pay well.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {site.tagline}
        </p>
      </section>

      <section className="wrap pb-16">
        <Reveal>
          <Image
            src={media.teamCampusNight.src}
            alt={media.teamCampusNight.alt}
            width={media.teamCampusNight.width}
            height={media.teamCampusNight.height}
            sizes="(min-width: 1024px) 72rem, 100vw"
            className="aspect-[16/9] w-full rounded-2xl border border-line object-cover sm:aspect-[21/9]"
          />
        </Reveal>
      </section>

      <section className="wrap grid gap-12 pb-20 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
            What Enactus is
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-cream/80">
            <p>
              Enactus is a student-led non-profit running in more than 36
              countries, and the largest experiential learning platform of its
              kind. Students, academics and business leaders use entrepreneurial
              action to take on social problems — energy access, livelihoods,
              education — with the same habits a startup uses. Pitch the idea,
              test it, find out where it breaks.
            </p>
            <p>
              The point is not charity. It is building something that keeps
              working once the people who started it have graduated.
            </p>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
            This chapter
          </h2>
          <div className="mt-5 space-y-4 leading-relaxed text-cream/80">
            <p>
              Enactus BITS Hyderabad has been running out of BITS Pilani&apos;s
              Hyderabad campus since {site.founded}. It is a student chapter of
              50-odd people who spot where value can be created for a community
              and then put in the unglamorous work to get there.
            </p>
            <p>
              In practice that means a season like 2025-26: a donation drive
              that reached close to 200 people, a national case competition with
              over a thousand entrants, a photo contest on campus, and two
              projects in active development.
            </p>
          </div>

          <dl className="mt-8 space-y-4 border-t border-line pt-6">
            {secondaryStats.map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-4">
                <dt className="font-display text-2xl font-bold text-brand">
                  {stat.value}
                </dt>
                <dd className="text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="border-t border-line bg-surface py-20">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Structure</p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
              Five teams
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              Inductions run a multi-round process — written assessments,
              team-specific tasks, then interviews — because coding, design,
              case analysis and negotiation are not things one generic test
              picks up.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team, i) => (
              <li key={team.name} className="bg-ink p-6">
                <Reveal delay={Math.min(i, 4) * 60}>
                  <h3 className="font-display text-lg font-semibold text-cream">
                    {team.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {team.blurb}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
              Mentors and support
            </h2>
            <p className="mt-5 leading-relaxed text-cream/80">
              Project SOLVE is backed by{" "}
              <span className="text-brand">{mentors.join(" and ")}</span>, who
              came in with both mentorship and funding, and runs in
              collaboration with Kriti Social Initiatives.
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h2 className="font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
              Reach us
            </h2>
            <div className="mt-5 space-y-3 text-cream/80">
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-brand hover:underline"
                >
                  {site.email}
                </a>
              </p>
              <address className="text-sm not-italic leading-relaxed text-muted">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="flex gap-4 pt-2 text-sm">
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:underline"
                >
                  Instagram
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
