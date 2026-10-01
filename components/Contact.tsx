"use client";

import { DownloadCv, TalkLink } from "@/components/Actions";
import { SectionHeading } from "@/components/SectionHeading";
import { copy, profile } from "@/lib/content";
import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        eyebrow="Contact"
        title={copy.letsTalk}
        lede={profile.availability}
        action={
          <>
            <TalkLink />
            <DownloadCv />
          </>
        }
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="card p-6">
          <dl className="space-y-5">
            <div>
              <dt className="eyebrow">LinkedIn</dt>
              <dd className="mt-2">
                <a
                  className="text-body underline decoration-white/20 underline-offset-4 hover:text-cyan"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {profile.linkedin.replace(/^https:\/\//, "")}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Location</dt>
              <dd className="mt-2 text-body">{profile.location}</dd>
            </div>
            <div>
              <dt className="eyebrow">Also</dt>
              <dd className="mt-2 flex flex-col gap-2 text-sm">
                <a
                  className="font-mono text-body hover:text-cyan"
                  href={profile.x}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {profile.xLabel}
                </a>
                <a
                  className="font-mono text-body hover:text-cyan"
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub · {profile.githubHandle}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form className="card p-6" onSubmit={onSubmit}>
          <h3 className="text-lg font-semibold text-ink">{copy.contactFormTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{copy.contactFormLede}</p>
          <div className="mt-5 space-y-4">
            <label className="block text-sm text-body" htmlFor="contact-name">
              Name
              <input
                id="contact-name"
                className="field mt-2"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={200}
              />
            </label>
            <label className="block text-sm text-body" htmlFor="contact-email">
              Email
              <input
                id="contact-email"
                className="field mt-2"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={320}
              />
            </label>
            <label className="block text-sm text-body" htmlFor="contact-message">
              Message
              <textarea
                id="contact-message"
                className="field mt-2 min-h-32 resize-y"
                name="message"
                required
                maxLength={5000}
              />
            </label>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending" : "Send message"}
            </button>
            <p role="status" className="text-sm text-muted">
              {status === "sent" ? copy.contactSent : null}
              {status === "error" ? copy.contactError : null}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
