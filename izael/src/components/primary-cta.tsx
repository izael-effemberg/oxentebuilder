import { siteConfig } from "@/lib/site-config";
import { TrackedLink } from "./tracked-link";
import { AppIcon } from "./icons";

export function PrimaryCTA() {
  const cta = siteConfig.primaryCta;

  return (
    <section className="mt-8" aria-labelledby="work-with-me">
      <TrackedLink
        href={cta.href}
        event={cta.event}
        label={cta.cta}
        className="group block rounded-[24px] bg-ink p-5 text-paper shadow-editorial transition duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 active:scale-[0.99]"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">{cta.label}</p>
            <h2 id="work-with-me" className="mt-4 font-serif text-3xl leading-none">
              {cta.description}
            </h2>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-paper text-ink transition duration-200 group-hover:translate-x-1">
            <AppIcon name="ArrowRight" className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-paper">
          {cta.cta} <AppIcon name="ArrowRight" className="h-4 w-4" />
        </p>
      </TrackedLink>
    </section>
  );
}
