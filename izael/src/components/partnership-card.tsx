import { siteConfig } from "@/lib/site-config";
import { AppIcon } from "./icons";
import { TrackedLink } from "./tracked-link";

export function PartnershipCard() {
  const { partnerships } = siteConfig;

  return (
    <section className="mt-4 rounded-[24px] border border-ink/8 bg-white p-5" aria-labelledby="partnerships">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Creator</p>
      <h2 id="partnerships" className="mt-4 font-serif text-4xl leading-none text-ink">
        {partnerships.title}
      </h2>
      <p className="mt-4 text-sm leading-6 text-graphite/72">{partnerships.description}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <TrackedLink
          href={partnerships.primary.href}
          event={partnerships.primary.event}
          label={partnerships.primary.label}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-semibold text-paper transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 active:scale-95"
        >
          {partnerships.primary.label} <AppIcon name="ArrowRight" className="h-4 w-4" />
        </TrackedLink>
        <TrackedLink
          href={partnerships.secondary.href}
          event={partnerships.secondary.event}
          label={partnerships.secondary.label}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/10 px-5 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-brass/40 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 active:scale-95"
        >
          {partnerships.secondary.label}
        </TrackedLink>
      </div>
    </section>
  );
}
