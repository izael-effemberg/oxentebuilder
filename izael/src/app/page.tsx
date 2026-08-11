import { Footer } from "@/components/footer";
import { LinkCard } from "@/components/link-card";
import { PartnershipCard } from "@/components/partnership-card";
import { PrimaryCTA } from "@/components/primary-cta";
import { ProfileHeader } from "@/components/profile-header";
import { SocialProof } from "@/components/social-proof";
import { SpeakingCard } from "@/components/speaking-card";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[720px] px-4 sm:px-6">
      <ProfileHeader />
      <PrimaryCTA />

      <SocialProof />

      <SpeakingCard />
      <PartnershipCard />

      <section className="mt-10" aria-labelledby="links">
        <div className="mb-4 px-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">Meus links</p>
          <h2 id="links" className="mt-2 font-serif text-4xl leading-none text-ink">
            Acesse por intenção.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {siteConfig.primaryLinks.map((link) => (
            <LinkCard key={link.label} link={link} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
