import { AppIcon } from "./icons";
import { TrackedLink } from "./tracked-link";

type ContentCardProps = {
  category: string;
  title: string;
  description: string;
  href: string;
  event: string;
  index: number;
};

export function ContentCard({ category, title, description, href, event, index }: ContentCardProps) {
  const fills = [
    "bg-[radial-gradient(circle_at_25%_35%,rgba(96,112,100,0.46),transparent_28%),linear-gradient(135deg,#171613,#64523a)]",
    "bg-[radial-gradient(circle_at_70%_20%,rgba(173,139,85,0.44),transparent_30%),linear-gradient(135deg,#f7f3ea,#cfc2aa)]",
    "bg-[radial-gradient(circle_at_35%_20%,rgba(23,22,19,0.24),transparent_28%),linear-gradient(135deg,#607064,#f7f3ea)]"
  ];

  return (
    <TrackedLink
      href={href}
      event={event}
      label={title}
      className="group grid grid-cols-[112px_1fr] gap-4 rounded-[22px] border border-ink/8 bg-white p-3 transition duration-200 hover:-translate-y-1 hover:border-brass/30 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 active:scale-[0.99]"
    >
      <div className={`h-full min-h-[126px] overflow-hidden rounded-[18px] ${fills[index % fills.length]}`}>
        <div className="h-full w-full bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.28))] transition duration-200 group-hover:scale-105" />
      </div>
      <div className="py-2 pr-1">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brass">{category}</p>
        <h3 className="mt-3 text-[17px] font-semibold leading-5 text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-5 text-graphite/70">{description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">
          Ler <AppIcon name="ArrowRight" className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </TrackedLink>
  );
}
