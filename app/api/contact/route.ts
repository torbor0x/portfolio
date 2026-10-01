import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readPayload(value: unknown): ContactPayload | null {
  if (!isRecord(value)) return null;
  const { name, email, message } = value;
  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return null;
  }
  return { name: name.trim(), email: email.trim(), message: message.trim() };
}

function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const payload = readPayload(body);
  const emailLooksValid = payload ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) : false;

  if (!payload || !payload.name || !payload.message || !emailLooksValid) {
    return NextResponse.json(
      { ok: false, error: "Expected name, email, and message." },
      { status: 400 },
    );
  }

  if (payload.name.length > 200 || payload.email.length > 320 || payload.message.length > 5000) {
    return NextResponse.json({ ok: false, error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json({ ok: false, error: "Contact is not configured." }, { status: 503 });
  }

  const name = singleLine(payload.name);
  const email = singleLine(payload.email);

  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [singleLine(to)],
      reply_to: email,
      subject: `Contact Me — ${name}`.slice(0, 200),
      text: `${payload.message}\n\n— ${name}\n${email}`,
    }),
  });

  if (!sent.ok) {
    console.error("Contact send failed", sent.status);
    return NextResponse.json({ ok: false, error: "Message was not sent." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
