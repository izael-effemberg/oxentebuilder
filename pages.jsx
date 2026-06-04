/* ============================================
   Oxente Builder — Secondary pages
   Founder · Track Record · Social Proof · Method
   Reuses the homepage components (loaded as globals).
   The page is chosen by <body data-page="…">.
   ============================================ */

function Crumb({ label }) {
  const t = useT();
  return (
    <div className="crumb">
      <div className="container crumb__inner">
        <a href="index.html" className="crumb__home">← Oxente Builder</a>
        <span className="crumb__sep">/</span>
        <span className="crumb__here">{t(label)}</span>
      </div>
    </div>
  );
}

function SubCTA({ links }) {
  const t = useT();
  return (
    <section className="subcta">
      <div className="container">
        <div className="subcta__inner">
          <h2 className="subcta__title">
            {t({ en: "Turn ambition into a scalable operation.", pt: "Transforme ambição em operação escalável." })}
          </h2>
          <p className="subcta__sub">
            {t({ en: "A 30-minute strategic conversation — no sales deck, no commitment.", pt: "Uma conversa estratégica de 30 minutos — sem deck de venda, sem compromisso." })}
          </p>
          <div className="subcta__actions">
            <a className="btn btn--primary" href={window.BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <span>{t({ en: "Book a strategic call", pt: "Agendar conversa estratégica" })}</span>
              <span className="arrow">→</span>
            </a>
            {(links || []).map((l, i) => (
              <a key={i} className="btn btn--ghost subcta__ghost" href={l.href}>
                {t(l.label)} <span className="arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderPage() {
  return (
    <div className="subpage">
      <Nav home={false} />
      <Crumb label={{ en: "About the founder", pt: "Sobre o fundador" }} />
      <Founder />
      <SubCTA links={[{ href: "track-record.html", label: { en: "See the track record", pt: "Ver o track record" } }]} />
      <Footer />
    </div>
  );
}

function TrackRecordPage() {
  return (
    <div className="subpage">
      <Nav home={false} />
      <Crumb label={{ en: "Track record", pt: "Track record" }} />
      <TrackRecordFull />
      <SubCTA links={[{ href: "social-proof.html", label: { en: "Read endorsements", pt: "Ver depoimentos" } }]} />
      <Footer />
    </div>
  );
}

function SocialProofPage() {
  return (
    <div className="subpage">
      <Nav home={false} />
      <Crumb label={{ en: "Social proof", pt: "Prova social" }} />
      <Testimonials />
      <SubCTA links={[{ href: "track-record.html", label: { en: "See the track record", pt: "Ver o track record" } }]} />
      <Footer />
    </div>
  );
}

function MethodPage() {
  return (
    <div className="subpage">
      <Nav home={false} />
      <Crumb label={{ en: "How we work", pt: "Como operamos" }} />
      <MethodPageContent />
      <SubCTA links={[{ href: "track-record.html", label: { en: "See the proof", pt: "Ver a prova" } }]} />
      <Footer />
    </div>
  );
}

Object.assign(window, { Crumb, SubCTA, FounderPage, TrackRecordPage, SocialProofPage, MethodPage });

(function () {
  const map = {
    founder: FounderPage,
    "track-record": TrackRecordPage,
    "social-proof": SocialProofPage,
    method: MethodPage,
  };
  const key = document.body && document.body.dataset ? document.body.dataset.page : null;
  const Page = map[key] || FounderPage;
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <LangProvider>
      <Page />
    </LangProvider>
  );
})();
