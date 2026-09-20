import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.gallery[0];

  return (
    <Link
      href={`/projects#${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-brand/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-raised">
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          sizes="(min-width: 1024px) 34rem, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-brand/40 px-2.5 py-0.5 text-[0.7rem] font-medium tracking-wide text-brand uppercase">
            {project.status}
          </span>
          <span className="text-xs text-muted">Since {project.since}</span>
        </div>

        <h3 className="mt-3 font-display text-xl font-bold text-cream">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.tagline}
        </p>

        <span className="mt-4 text-sm font-medium text-brand">
          Read the case study{" "}
          <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
