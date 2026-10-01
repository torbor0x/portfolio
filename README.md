# portfolio

Tor Borgen — CTO, product, integrations, and Web3 engineering.
Next.js · TypeScript · Vercel

## Local run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production check:

```bash
npm run build
npm start
```

## Vercel

Import `git@github.com:torbor0x/portfolio.git` and keep the default Next.js preset. The site is static-first: no database and no auth.

`NEXT_PUBLIC_SITE_URL` is optional. Set it to the canonical origin, including `https://`, when you want sitemap and Open Graph URLs pinned. When it is unset, the site uses the Vercel production host, then the deployment host, then `http://localhost:3000`.

Static files:

- Headshot: `public/img/tor.png` (also served as `/img/tor.png`)
- CV: `public/cv/CV_General_Eng_Updated.pdf`, linked as `/cv/CV_General_Eng_Updated.pdf`

`app/api/contact` accepts JSON `{ name, email, message }` and sends it with [Resend](https://resend.com). The visitor’s address is the reply-to. The route does not store the message. Set these in the Vercel project (or in `.env.local` for local sending). Do not prefix them with `NEXT_PUBLIC_`, or they would ship to the browser.

- `RESEND_API_KEY` — API key from Resend
- `CONTACT_TO` — inbox that receives the message. This stays off the website.
- `CONTACT_FROM` — optional. Until a domain is verified, Resend only allows `Portfolio <onboarding@resend.dev>`, and `CONTACT_TO` must be the inbox on that Resend account.

Until those are set, Contact Me stays on the page and a submit tells the visitor the message was not sent. LinkedIn remains on the page either way.

## Publish

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:torbor0x/portfolio.git
git push -u origin main
```
