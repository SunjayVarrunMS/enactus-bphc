import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { earlierProjects, projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Project SkillSetGo and Project SOLVE, plus the chapter's earlier initiatives.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="wrap pt-20 pb-14 lg:pt-28">
        <p className="eyebrow">Projects</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-bold tracking-tight text-cream sm:text-5xl lg:text-6xl">
          Work that has to hold up outside a slide deck.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Enactus projects are run like early-stage startups — a problem worth
          solving, field research, a prototype, then whatever the evidence says
          next.
        </p>
      </section>

      {projects.map((project) => (
        <section
          key={project.slug}
          id={project.slug}
          className="scroll-mt-20 border-t border-line py-16 lg:py-20"
        >
          <div className="wrap">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-brand/40 px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide text-brand uppercase">
                  {project.status}
                </span>
                <span className="text-xs text-muted">Since {project.since}</span>
                {project.partner && (
                  <span className="text-xs text-muted">
                    With {project.partner}
                  </span>
                )}
              </div>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl">
                {project.name}
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-brand">
                {project.tagline}
              </p>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
              <Reveal>
                <div className="space-y-5">
                  {project.body.map((para) => (
                    <p
                      key={para.slice(0, 32)}
                      className="max-w-prose leading-relaxed text-cream/80"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <ul className="mt-8 space-y-3 border-t border-line pt-6">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-cream/90">
                      <span aria-hidden="true" className="mt-px text-brand">
                        ◆
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={90}>
                <div className="grid grid-cols-2 gap-3">
                  {project.gallery.map((shot, i) => (
                    <Image
                      key={shot.src}
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      sizes="(min-width: 1024px) 15rem, 45vw"
                      className={`w-full rounded-xl border border-line object-cover ${
                        i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                      }`}
                    />
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line bg-surface py-16 lg:py-20">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Also in the chapter</p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
              Earlier initiatives
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              These are named in the chapter&apos;s annual report. Full
              write-ups are still being put together, so we have left them as
              they are rather than guessing at the detail.
            </p>
          </Reveal>

          <ul className="mt-8 flex flex-wrap gap-3">
            {earlierProjects.map((project) => (
              <li
                key={project.name}
                className="rounded-xl border border-line bg-ink px-5 py-4"
              >
                <p className="font-display font-semibold text-cream">
                  {project.name}
                </p>
                <p className="mt-0.5 text-xs text-muted">{project.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
