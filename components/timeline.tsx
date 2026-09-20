import Image from "next/image";
import type { EventItem } from "@/content/events";
import { Reveal } from "./reveal";

export function Timeline({ items }: { items: EventItem[] }) {
  return (
    <ol className="relative">
      {/* The rail. Hidden from AT since the list already carries the order. */}
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[7px] w-px bg-line sm:left-[9px]"
      />

      {items.map((event, i) => (
        <li key={event.id} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
          <span
            aria-hidden="true"
            className="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-brand bg-ink sm:h-[19px] sm:w-[19px]"
          />

          <Reveal delay={Math.min(i, 3) * 60}>
            <p className="text-xs tracking-wider text-brand uppercase">
              {event.dateLabel}
            </p>

            <h3 className="mt-2 font-display text-xl font-bold text-cream sm:text-2xl">
              {event.title}
            </h3>

            {event.partner && (
              <p className="mt-1 text-sm text-muted">With {event.partner}</p>
            )}

            <div className="mt-4 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <p className="max-w-prose leading-relaxed text-cream/80">
                  {event.summary}
                </p>

                {event.facts && (
                  <ul className="mt-4 space-y-1.5">
                    {event.facts.map((fact) => (
                      <li
                        key={fact}
                        className="flex gap-2.5 text-sm text-muted"
                      >
                        <span aria-hidden="true" className="text-brand">
                          —
                        </span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {event.image && (
                <Image
                  src={event.image.src}
                  alt={event.image.alt}
                  width={event.image.width}
                  height={event.image.height}
                  sizes="(min-width: 640px) 16rem, 100vw"
                  className="w-full rounded-xl border border-line object-cover sm:w-64"
                />
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
