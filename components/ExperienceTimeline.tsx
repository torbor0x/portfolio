import { DownloadCv } from "@/components/Actions";
import { SectionHeading } from "@/components/SectionHeading";
import { copy, experience, type Role } from "@/lib/content";
import Link from "next/link";

type ExperienceTimelineProps = {
  variant: "home" | "full";
};

function RoleArticle({ role, heading }: { role: Role; heading: "h2" | "h3" }) {
  const Heading = heading;

  return (
    <article className="relative">
      <p className="font-mono text-xs text-cyan">
        {role.dates}
        {role.location ? ` · ${role.location}` : ""}
      </p>
      <Heading className="mt-2 text-xl font-semibold tracking-tight text-ink">
        {role.title}
      </Heading>
      <p className="mt-1 text-sm text-muted">{role.organisation}</p>
      {role.note ? (
        <p className="mt-3 inline-flex rounded-full border border-magenta/40 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-magenta">
          {role.note}
        </p>
      ) : null}
      <ul className="mt-4 space-y-2">
        {role.bullets.map((bullet) => (
          <li key={bullet} className="text-sm leading-relaxed text-body">
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

function RoleList({ roles, heading }: { roles: readonly Role[]; heading: "h2" | "h3" }) {
  return (
    <ol className="relative space-y-10 border-l border-white/20 pl-8">
      {roles.map((role) => (
        <li key={role.id} className="relative">
          <span
            aria-hidden
            className="absolute -left-8 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan bg-canvas"
          />
          <RoleArticle role={role} heading={heading} />
        </li>
      ))}
    </ol>
  );
}

export function ExperienceTimeline({ variant }: ExperienceTimelineProps) {
  const primary = experience.filter((role) => !role.foundation);
  const foundation = experience.filter((role) => role.foundation);
  const heading = variant === "full" ? "h2" : "h3";

  return (
    <section
      id={variant === "home" ? "experience" : undefined}
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading
        eyebrow="Experience"
        title={variant === "full" ? "Every role" : "Experience"}
        titleAs={variant === "full" ? "h1" : "h2"}
        lede={
          variant === "full"
            ? "CVM Solutions and the Keystone.no product roles overlap. Both are listed. Dates and scope follow the CV."
            : "Recent product and technical leadership. NextGenTel and IBM are grouped below so this page stays scannable."
        }
        action={
          <>
            <DownloadCv />
            {variant === "home" ? (
              <Link href="/experience" className="btn btn-secondary">
                {copy.fullTimeline}
              </Link>
            ) : null}
          </>
        }
      />

      <div className="mt-12">
        <RoleList roles={primary} heading={heading} />
      </div>

      {variant === "home" ? (
        <details className="card group mt-8 p-5 sm:p-6">
          <summary className="flex cursor-pointer items-center justify-between gap-4">
            <span>
              <span className="block text-lg font-semibold text-ink">{copy.earlierFoundation}</span>
              <span className="mt-1 block text-sm text-muted">{copy.earlierFoundationLede}</span>
            </span>
            <span aria-hidden className="font-mono text-xl text-cyan transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="mt-8">
            <RoleList roles={foundation} heading="h3" />
          </div>
        </details>
      ) : (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">{copy.earlierFoundation}</h2>
          <p className="mt-3 max-w-2xl text-body">{copy.earlierFoundationLede}</p>
          <div className="mt-8">
            <RoleList roles={foundation} heading="h3" />
          </div>
        </div>
      )}
    </section>
  );
}
