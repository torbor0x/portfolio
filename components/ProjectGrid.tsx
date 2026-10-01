"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { copy, projectHost, projectThumbSrc, projects } from "@/lib/content";
import Image from "next/image";
import { useState, type SyntheticEvent } from "react";

type ProjectGridProps = {
  titleAs?: "h1" | "h2";
};

function isMostlyBlank(image: HTMLImageElement): boolean {
  const canvas = document.createElement("canvas");
  const size = 24;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return false;

  context.drawImage(image, 0, 0, size, size);
  const { data } = context.getImageData(0, 0, size, size);
  let blank = 0;
  const pixels = size * size;

  for (let index = 0; index < data.length; index += 4) {
    const red = data[index] ?? 0;
    const green = data[index + 1] ?? 0;
    const blue = data[index + 2] ?? 0;
    const alpha = data[index + 3] ?? 0;
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    if (alpha < 12 || (max > 246 && max - min < 8)) blank += 1;
  }

  return blank / pixels > 0.9;
}

function ProjectShot({ url, mark }: { url: string; mark: string }) {
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  function onLoad(event: SyntheticEvent<HTMLImageElement>) {
    try {
      if (isMostlyBlank(event.currentTarget)) {
        setFailed(true);
        return;
      }
    } catch {
      setReady(true);
      return;
    }
    setReady(true);
  }

  return (
    <div className="relative aspect-[3/2] bg-canvas">
      <div className="absolute inset-0 grid place-items-center" aria-hidden>
        <span className="font-mono text-2xl font-semibold tracking-wide text-cyan/80">{mark}</span>
      </div>
      {failed ? null : (
        <Image
          src={projectThumbSrc(url)}
          alt=""
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
          onLoad={onLoad}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export function ProjectGrid({ titleAs = "h2" }: ProjectGridProps) {
  return (
    <section
      id={titleAs === "h2" ? "projects" : undefined}
      className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Live work"
        titleAs={titleAs}
        lede={copy.projectsLede}
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.url}>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card flex h-full flex-col overflow-hidden no-underline transition hover:border-cyan/40"
            >
              <ProjectShot url={project.url} mark={project.mark} />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{projectHost(project.url)}</p>
                <p className="mt-3 text-sm leading-relaxed text-body">{project.summary}</p>
                <p className="mt-4 text-sm font-medium text-cyan">
                  Visit site
                  <span className="sr-only">, {project.name}, opens in a new tab</span>
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
