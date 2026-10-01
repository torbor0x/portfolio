import { skillGroups } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";

export function SkillGroups() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        eyebrow="Skills"
        title="What the work actually uses"
        lede="Grouped from the resumes. Leadership and customer delivery sit next to the integrations, the engineering stack, and the platforms underneath them."
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <li key={group.title} className="card p-5">
            <h3 className="text-lg font-semibold text-ink">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-canvas/60 px-3 py-1 text-sm text-body"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
