"use client";

import { DownloadCv, TalkLink } from "@/components/Actions";
import { profile } from "@/lib/content";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export function Hero() {
  const reduce = useReducedMotion();
  const [photoFailed, setPhotoFailed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 56]);

  return (
    <section
      ref={sectionRef}
      className="mx-auto grid max-w-6xl items-start gap-10 px-5 pb-8 pt-12 sm:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14 lg:pt-16"
    >
      <motion.div
        initial={{ y: reduce ? 0 : 16 }}
        animate={{ y: 0 }}
        transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div style={{ y: photoY }} className="mx-auto w-full max-w-[280px] lg:mx-0">
          <div className="rounded-3xl bg-gradient-to-br from-cyan/50 via-white/10 to-magenta/40 p-px">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-surface">
            {photoFailed ? (
              <div className="absolute inset-0 grid place-items-center" aria-hidden>
                <span className="font-mono text-6xl font-semibold text-cyan">{profile.monogram}</span>
              </div>
            ) : (
              <Image
                src={profile.photo}
                alt={profile.photoAlt}
                fill
                priority
                sizes="280px"
                className="object-cover object-[center_18%]"
                onError={() => setPhotoFailed(true)}
              />
            )}
          </div>
        </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ y: reduce ? 0 : 12 }}
        animate={{ y: 0 }}
        transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut", delay: reduce ? 0 : 0.05 }}
      >
        <p className="eyebrow">{profile.location}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-cyan sm:text-2xl">{profile.title}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          {profile.subtitle}
        </p>

        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          {profile.tracks.map((track) => (
            <div key={track.label} className="card px-4 py-3">
              <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-magenta">
                {track.label}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-body">{track.text}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 space-y-3">
          {profile.pitch.map((line) => (
            <p key={line} className="max-w-2xl text-sm leading-relaxed text-body sm:text-base">
              {line}
            </p>
          ))}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {profile.heroChips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-line bg-white/5 px-3 py-1 text-sm text-ink"
            >
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <TalkLink />
          <DownloadCv />
        </div>

        <p className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <a
            className="text-body underline decoration-white/20 underline-offset-4 hover:text-cyan"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            {profile.linkedinLabel}
          </a>
          <a
            className="font-mono text-body hover:text-cyan"
            href={profile.x}
            target="_blank"
            rel="noreferrer noopener"
          >
            {profile.xLabel}
          </a>
        </p>
      </motion.div>
    </section>
  );
}
