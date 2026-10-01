import { Footer } from "@/components/Footer";
import { ScrollGlow } from "@/components/ScrollGlow";
import { SiteNav } from "@/components/SiteNav";
import { copy, profile } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: copy.metadataTitle,
    template: "%s — Tor Borgen",
  },
  description: copy.metadataDescription,
  authors: [{ name: profile.name }],
  openGraph: {
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    type: "website",
    url: siteUrl,
    images: [
      {
        url: profile.photo,
        width: 1086,
        height: 1448,
        alt: profile.photoAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.metadataTitle,
    description: copy.metadataDescription,
    images: [profile.photo],
  },
};

export const viewport: Viewport = {
  themeColor: "#070B12",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "CTO, Product and Technical Lead",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NO",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Agder",
    },
    knowsLanguage: ["Norwegian", "English"],
    sameAs: [profile.linkedin, profile.x, profile.githubUrl],
    image: new URL(profile.photo, siteUrl).toString(),
    url: siteUrl.toString(),
  };

  return (
    <html lang="en" className={`${geist.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="font-sans">
        <ScrollGlow />
        <div className="relative z-10">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyan focus:px-4 focus:py-2 focus:font-semibold focus:text-canvas"
          >
            Skip to content
          </a>
          <SiteNav />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </div>
      </body>
    </html>
  );
}
