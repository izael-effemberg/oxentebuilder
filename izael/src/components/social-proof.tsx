import { siteConfig } from "@/lib/site-config";

export function SocialProof() {
  return (
    <section className="mt-10 rounded-[24px] border border-ink/8 bg-white p-5" aria-labelledby="authority">
      <h2 id="authority" className="font-serif text-3xl leading-none text-ink">
        Repertório aplicado em produto, plataformas e crescimento.
      </h2>
      <p className="mt-4 text-sm leading-6 text-graphite/72">
        Experiência construindo produtos, plataformas e organizações em empresas de tecnologia e serviços financeiros.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {siteConfig.brands.map((brand) => (
          <div key={brand} className="grid min-h-12 place-items-center rounded-2xl border border-ink/6 bg-ivory/55 px-3 text-xs font-semibold uppercase tracking-[0.16em] text-graphite/48 grayscale">
            {brand}
          </div>
        ))}
      </div>
    </section>
  );
}
