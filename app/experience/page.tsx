import { Education } from "@/components/Education";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Roles at CVM Solutions, Keystone.no, Muuh AS, OpenSource UiA, NextGenTel, and IBM, with the dates from the CV.",
};

export default function ExperiencePage() {
  return (
    <>
      <ExperienceTimeline variant="full" />
      <Education />
    </>
  );
}
