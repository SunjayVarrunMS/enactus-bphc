import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/content/site";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enactus-bphc.vercel.app"),
  title: {
    default: `${site.name} — entrepreneurial action, on campus`,
    template: `%s — ${site.name}`,
  },
  description:
    "The Enactus chapter at BITS Pilani, Hyderabad Campus. Student-led projects in education access and livelihoods, plus the competitions we run on campus.",
  openGraph: {
    title: site.name,
    description:
      "Student-led social entrepreneurship at BITS Pilani, Hyderabad Campus. Founded 2013.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
