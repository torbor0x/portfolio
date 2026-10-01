"use client";

import { proof } from "@/lib/content";
import { motion, useReducedMotion } from "framer-motion";

export function ProofStrip() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="proof-heading" className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <h2 id="proof-heading" className="eyebrow">
        Proof
      </h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {proof.map((point, index) => (
          <motion.li
            key={point.id}
            className="card flex h-full flex-col p-5"
            initial={{ y: reduce ? 0 : 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{
              duration: reduce ? 0 : 0.55,
              delay: reduce ? 0 : index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cyan">
              {point.context}
            </p>
            <div className="mt-4 space-y-4">
              {point.figures.map((figure) => (
                <p key={figure.caption}>
                  <span
                    className={`block font-semibold tracking-tight text-ink ${
                      point.figures.length > 1 ? "text-xl" : "text-4xl"
                    }`}
                  >
                    {figure.value}
                  </span>
                  <span className="mt-1 block text-sm text-muted">{figure.caption}</span>
                </p>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
