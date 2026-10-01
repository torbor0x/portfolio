import { ProjectGrid } from "@/components/ProjectGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Eleven live sites. CVM Solutions is an on-chain services studio; the rest are shipped product surfaces.",
};

export default function ProjectsPage() {
  return <ProjectGrid titleAs="h1" />;
}
