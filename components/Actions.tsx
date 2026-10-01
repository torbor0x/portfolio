import { copy, profile } from "@/lib/content";

type ActionProps = {
  className?: string;
};

export function DownloadCv({ className = "btn btn-secondary" }: ActionProps) {
  return (
    <a className={className} href={profile.cvHref} download={profile.cvFileName}>
      {copy.downloadCv}
    </a>
  );
}

export function TalkLink({ className = "btn btn-primary" }: ActionProps) {
  return (
    <a className={className} href="/#contact">
      {copy.letsTalk}
    </a>
  );
}
