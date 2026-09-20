import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { StatBand } from "@/components/stat-band";
import { Timeline } from "@/components/timeline";
import { events } from "@/content/events";
import { media } from "@/content/media";
import { projects } from "@/content/projects";
import { partners, site } from "@/content/site";

export default function HomePage() {
  // Newest first, just the tail of the season for the homepage.
  const recent = [...events].reverse().slice(0, 3);

  return (
    <>
      <section className="relative isolate flex min-h-[86svh] items-end overflow-hidden">
        <Image
          src={media.teamGroup.src}
          alt={media.teamGroup.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/85 to-ink/45"
        />

        <div className="wrap pt-28 pb-16 sm:pb-20">
          <p className="eyebrow">Enactus · BITS Pilani, Hyderabad Campus</p>

          <h1 className="mt-5 max-w-3xl font-display text-6xl leading-[0.92] font-bold tracking-tight text-cream sm:text-7xl lg:text-8xl">
            We all win.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            A student chapter putting entrepreneurial action behind education
            access and livelihoods — seven projects, and a 2025-26 season that
            ran from a donation drive to a six-hour crisis simulation.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-deep"
            >
              See the projects
            </Link>
            <Link
              href="/events"
              className="rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-cream/60"
            >
              This season&apos;s events
            </Link>
          </div>
        </div>
      </section>

      <StatBand />

      <section className="wrap py-20 lg:py-24">
        <Reveal>
          <p className="eyebrow">Projects</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Two projects far enough along to talk about properly.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            One took the chapter to the top 20 at the Enactus India National
            Exposition. The other is in prototyping, funded off a problem
            statement the team wrote themselves.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface">
        <div className="wrap py-20 lg:py-24">
          <Reveal>
            <p className="eyebrow">Recently</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              How the season ended.
            </h2>
          </Reveal>

          <div className="mt-12">
            <Timeline items={recent} />
          </div>

          <Reveal>
            <Link
              href="/events"
              className="mt-10 inline-block text-sm font-medium text-brand hover:underline"
            >
              See the full 2025-26 season →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="wrap py-20 lg:py-24">
        <Reveal>
          <p className="eyebrow">Partners</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            Who we ran this season with.
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, i) => (
            <li key={partner.name} className="bg-ink p-6">
              <Reveal delay={Math.min(i, 5) * 50}>
                <p className="font-display text-lg font-semibold text-cream">
                  {partner.name}
                </p>
                <p className="mt-1 text-sm text-muted">{partner.note}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="wrap pb-24">
        <Reveal>
          <div className="rounded-3xl bg-brand px-8 py-14 text-ink sm:px-12">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Inductions run at the start of the year, across five teams.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-ink/75">
              Technical, Design &amp; Publicity, Sponsorship, Events &amp;
              Logistics, and Research &amp; Content. If you want in — or you
              want to work with us — start here.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-opacity hover:opacity-85"
              >
                Email the chapter
              </a>
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold transition-colors hover:border-ink/70"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
