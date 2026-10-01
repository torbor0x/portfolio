import { CaseStudyList } from "@/components/CaseStudyList";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProofStrip } from "@/components/ProofStrip";
import { Reveal } from "@/components/Reveal";
import { SkillGroups } from "@/components/SkillGroups";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <ProofStrip />
      </Reveal>
      <Reveal>
        <SkillGroups />
      </Reveal>
      <Reveal>
        <CaseStudyList />
      </Reveal>
      <Reveal>
        <ProjectGrid />
      </Reveal>
      <Reveal>
        <ExperienceTimeline variant="home" />
      </Reveal>
      <Reveal>
        <Education />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}
