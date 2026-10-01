import { copy } from "@/lib/content";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[62vh] max-w-xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">{copy.notFoundTitle}</h1>
      <p className="mt-4 text-base leading-relaxed text-body">{copy.notFoundLede}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          {copy.backHome}
        </Link>
        <Link href="/projects" className="btn btn-secondary">
          Projects
        </Link>
        <Link href="/experience" className="btn btn-secondary">
          Experience
        </Link>
      </div>
    </section>
  );
}
