import type { TrackedLink as TrackedLinkType } from "@/lib/site-config";
import { AppIcon } from "./icons";
import { TrackedLink } from "./tracked-link";

export function LinkCard({ link }: { link: TrackedLinkType }) {
  const isMajor = link.prominence === "primary";
  const isSecondary = link.prominence === "secondary";

  return (
    <TrackedLink
      href={link.href}
      event={link.event}
      label={link.label}
      className={[
        "group flex items-center gap-4 rounded-[20px] border border-ink/8 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-brass/30 hover:shadow-editorial focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 active:scale-[0.99]",
        isMajor ? "col-span-2 min-h-[112px] p-5" : isSecondary ? "col-span-2 p-4" : "p-4"
      ].join(" ")}
    >
      <span
        className={[
          "grid shrink-0 place-items-center rounded-2xl text-ink transition duration-200 group-hover:text-brass",
          isMajor ? "h-12 w-12 bg-ivory" : "h-10 w-10 bg-ivory/70"
        ].join(" ")}
      >
        <AppIcon name={link.icon ?? "ArrowRight"} className={isMajor ? "h-6 w-6" : "h-5 w-5"} />
      </span>
      <span className="min-w-0 flex-1">
        <span className={isMajor ? "block font-serif text-2xl leading-none text-ink" : "block text-sm font-semibold leading-5 text-ink"}>
          {link.label}
        </span>
        {link.description ? <span className="mt-2 block text-sm leading-5 text-graphite/68">{link.description}</span> : null}
      </span>
      <AppIcon name="ArrowRight" className="h-4 w-4 shrink-0 text-graphite/45 transition duration-200 group-hover:translate-x-1 group-hover:text-brass" />
    </TrackedLink>
  );
}
