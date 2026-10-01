import { education } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        eyebrow="Education"
        title={education.credential}
        lede={`${education.school} · ${education.years}`}
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="card p-5">
          <h3 className="text-lg font-semibold text-ink">Languages</h3>
          <ul className="mt-4 space-y-3">
            {education.languages.map((language) => (
              <li key={language.name} className="flex items-baseline justify-between gap-4">
                <span className="text-body">{language.name}</span>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                  {language.level}
                </span>
              </li>
            ))}
          </ul>
        </article>
        <article className="card p-5">
          <h3 className="text-lg font-semibold text-ink">Courses</h3>
          <ul className="mt-4 space-y-2">
            {education.courses.map((course) => (
              <li key={course} className="text-sm leading-relaxed text-body">
                {course}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
