import { AppIcon } from "./icons";
import { TrackedLink } from "./tracked-link";

const toneClass: Record<string, string> = {
  sage: "from-sage/22 via-white to-white",
  brass: "from-brass/24 via-white to-white",
  ink: "from-ink/14 via-white to-white"
};

type FeaturedCardProps = {
  title: string;
  description: string;
  cta: string;
  href: string;
  event: string;
  tone: string;
};

export function FeaturedCard({ title, description, cta, href, event, tone }: FeaturedCardProps) {
  return (
    <TrackedLink
      href={href}
      event={event}
      label={title}
      className={`group block min-h-[220px] overflow-hidden rounded-[22px] border border-ink/8 bg-gradient-to-br ${toneClass[tone]} p-5 transition duration-200 hover:-translate-y-1 hover:border-brass/30 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 active:scale-[0.99]`}
    >
      <div className="mb-9 h-20 rounded-2xl bg-[linear-gradient(135deg,rgba(23,22,19,0.10),rgba(173,139,85,0.18)),radial-gradient(circle_at_70%_30%,rgba(96,112,100,0.28),transparent_34%)] transition duration-200 group-hover:scale-[1.02]" />
      <h3 className="font-serif text-3xl leading-none text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-graphite/76">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink">
        {cta} <AppIcon name="ArrowRight" className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </span>
    </TrackedLink>
  );
}
