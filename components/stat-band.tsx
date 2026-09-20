import { impactStats } from "@/content/impact";
import { Reveal } from "./reveal";

export function StatBand() {
  return (
    <section aria-label="Impact at a glance" className="border-y border-line bg-surface">
      <div className="wrap grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-4 lg:py-14">
        {impactStats.map((stat, i) => (
          <Reveal key={stat.sub} delay={i * 70}>
            <p className="font-display text-4xl leading-none font-bold text-brand sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-cream">{stat.label}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{stat.sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
