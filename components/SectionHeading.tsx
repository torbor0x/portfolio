import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lede?: string;
  titleAs?: "h1" | "h2";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  titleAs = "h2",
  action,
}: SectionHeadingProps) {
  const Title = titleAs;

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <Title className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </Title>
        {lede ? (
          <p className="mt-4 text-base leading-relaxed text-body sm:text-lg">{lede}</p>
        ) : null}
      </div>
      {action ? <div className="flex shrink-0 flex-wrap gap-3">{action}</div> : null}
    </div>
  );
}
