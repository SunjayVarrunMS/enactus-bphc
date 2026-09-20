import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Timeline } from "@/components/timeline";
import { alsoThisSeason, events } from "@/content/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "The 2025-26 season at Enactus BITS Hyderabad, from the National Exposition to IMPACTUS '26.",
};

export default function EventsPage() {
  return (
    <>
      <section className="wrap pt-20 pb-14 lg:pt-28">
        <p className="eyebrow">June 2025 — June 2026</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-tight font-bold tracking-tight text-cream sm:text-5xl lg:text-6xl">
          One season, start to finish.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Competitions we ran, events we co-organised, and the drives that did
          not come with a prize pool.
        </p>
      </section>

      <section className="wrap pb-16">
        <Timeline items={events} />
      </section>

      <section className="border-t border-line bg-surface py-16 lg:py-20">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Also this season</p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-cream sm:text-3xl">
              Ran during the year, undated in the report.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {alsoThisSeason.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    sizes="(min-width: 640px) 30rem, 100vw"
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.summary}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
