import { DownloadCv } from "@/components/Actions";
import { copy, navigation, profile } from "@/lib/content";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
        <div>
          <p className="font-mono text-sm text-cyan">{profile.monogram}</p>
          <p className="mt-2 text-lg font-semibold text-ink">{profile.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{copy.footerLine}</p>
          <p className="mt-4 text-sm text-body">{profile.location}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-body no-underline hover:text-cyan">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-3 text-sm">
          <a
            className="block text-body hover:text-cyan"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            {profile.linkedinLabel}
          </a>
          <a
            className="block font-mono text-body hover:text-cyan"
            href={profile.x}
            target="_blank"
            rel="noreferrer noopener"
          >
            {profile.xLabel}
          </a>
          <div className="pt-2">
            <DownloadCv />
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-4 font-mono text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
