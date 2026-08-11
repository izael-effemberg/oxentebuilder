import { siteConfig } from "@/lib/site-config";
import { TrackedLink } from "./tracked-link";

export function Footer() {
  return (
    <footer className="pb-9 pt-10 text-center">
      <p className="font-serif text-2xl text-ink">{siteConfig.profile.name}</p>
      <p className="mt-2 text-sm text-graphite/62">Produto · Tecnologia · IA · Creator Economy</p>
      <nav aria-label="Links do rodape" className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2">
        {siteConfig.socialLinks
          .filter((link) => link.label !== "TikTok")
          .map((link) => (
            <TrackedLink
              key={link.label}
              href={link.href}
              event={link.event}
              label={link.label}
              className="text-sm font-semibold text-graphite/72 transition duration-200 hover:text-brass focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
            >
              {link.label}
            </TrackedLink>
          ))}
      </nav>
      <p className="mt-6 text-xs text-graphite/45">© {new Date().getFullYear()}</p>
    </footer>
  );
}
