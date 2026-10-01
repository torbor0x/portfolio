import { caseStudies } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function CaseStudyList() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        eyebrow="Work"
        title="Case studies"
        lede="Career initiatives at CVM, Keystone, and Muuh, together with the delivery patterns that run through them: integrations, stakeholders, documented APIs, serverless jobs, and Solana Pay."
      />
      <ol className="mt-10 space-y-5">
        {caseStudies.map((study, index) => (
          <li key={study.id}>
            <article className="card p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-mono text-sm text-magenta">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {study.context}
                </p>
              </div>
              <h3 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-ink">
                {study.title}
              </h3>
              <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)] lg:gap-10">
                <p className="text-base leading-relaxed text-body">{study.summary}</p>
                <ul className="space-y-2.5">
                  {study.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-body">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
