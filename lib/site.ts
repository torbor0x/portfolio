export function getSiteUrl(): URL {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    const withProtocol = /^https?:\/\//.test(candidate)
      ? candidate
      : `https://${candidate}`;
    return new URL(withProtocol);
  }

  return new URL("http://localhost:3000");
}
