import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { AppIcon } from "./icons";
import { TrackedLink } from "./tracked-link";

export function ProfileHeader() {
  const { profile, socialLinks } = siteConfig;

  return (
    <header className="pt-5">
      <div className="relative overflow-hidden rounded-[24px] bg-ink text-paper shadow-editorial">
        <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_30%_10%,rgba(173,139,85,0.32),transparent_48%)]" />
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={profile.image}
              alt="Retrato editorial de Izael Effemberg"
              fill
              priority
              sizes="(min-width: 760px) 680px, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/28 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="mb-3 inline-flex rounded-full border border-paper/20 bg-paper/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-paper/82 backdrop-blur">
              {profile.positioning}
            </p>
            <h1 className="font-serif text-[42px] leading-[0.95] text-paper">{profile.name}</h1>
          </div>
        </div>
      </div>

      <div className="px-1 pt-6">
        <h2 className="max-w-[11ch] font-serif text-[44px] leading-[0.92] text-ink sm:max-w-[13ch] sm:text-6xl">
          {profile.headline}
        </h2>
        <p className="mt-5 text-[17px] leading-7 text-graphite/82">{profile.subheadline}</p>
        <p className="mt-4 border-l border-brass/50 pl-4 text-sm leading-6 text-graphite/68">{profile.credentials}</p>
      </div>

      <nav aria-label="Redes sociais" className="mt-6 flex gap-2">
        {socialLinks.map((link) => (
          <TrackedLink
            key={link.label}
            href={link.href}
            event={link.event}
            label={link.label}
            ariaLabel={`Abrir ${link.label} de ${profile.name}`}
            className="group grid h-12 w-12 place-items-center rounded-full border border-ink/10 bg-white text-ink transition duration-200 hover:-translate-y-0.5 hover:border-brass/50 hover:text-brass focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 active:scale-95"
          >
            <AppIcon name={link.icon ?? "ArrowRight"} className="h-5 w-5 transition duration-200 group-hover:scale-110" />
          </TrackedLink>
        ))}
      </nav>
    </header>
  );
}
