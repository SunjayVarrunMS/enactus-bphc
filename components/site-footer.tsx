import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Image
            src="/media/logo-dark.png"
            alt={site.name}
            width={627}
            height={382}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            {site.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-cream">Pages</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-cream">Find us</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={site.socials.instagram}
                className="text-muted transition-colors hover:text-brand"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.socials.linkedin}
                className="text-muted transition-colors hover:text-brand"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-muted transition-colors hover:text-brand"
              >
                {site.email}
              </a>
            </li>
          </ul>
          <address className="mt-4 text-sm not-italic leading-relaxed text-muted">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Chapter founded{" "}
            {site.founded}.
          </p>
          <p>Built by the Technical team.</p>
        </div>
      </div>
    </footer>
  );
}
