import { siteConfig } from "@/lib/site-config";
import { AppIcon } from "./icons";
import { TrackedLink } from "./tracked-link";

export function SpeakingCard() {
  const { speaking } = siteConfig;

  return (
    <section className="mt-10 rounded-[24px] bg-graphite p-5 text-paper shadow-editorial" aria-labelledby="speaking">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Palestras</p>
      <h2 id="speaking" className="mt-4 font-serif text-4xl leading-none">
        {speaking.title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-paper/75">{speaking.description}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <TrackedLink
          href={speaking.primary.href}
          event={speaking.primary.event}
          label={speaking.primary.label}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-paper px-5 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 focus:ring-offset-graphite active:scale-95"
        >
          {speaking.primary.label} <AppIcon name="ArrowRight" className="h-4 w-4" />
        </TrackedLink>
        <TrackedLink
          href={speaking.secondary.href}
          event={speaking.secondary.event}
          label={speaking.secondary.label}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-paper/18 px-5 text-sm font-semibold text-paper transition duration-200 hover:-translate-y-0.5 hover:border-brass/60 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 focus:ring-offset-graphite active:scale-95"
        >
          {speaking.secondary.label}
        </TrackedLink>
      </div>
    </section>
  );
}
