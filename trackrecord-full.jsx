/* ============================================
   Oxente Builder — Track Record (full page)
   A self-contained, dynamic version of the track record:
   every case inline, a BUILD-layer legend (instructional),
   and live environment / layer filters. Used ONLY on
   track-record.html — the homepage drawer version
   (TrackRecord in sections-2) is left untouched.
   ============================================ */

const LAYER_LEGEND = [
  { letter: "B", name: { en: "Business", pt: "Negócio" }, hint: { en: "Strategy & outcomes", pt: "Estratégia & resultado" } },
  { letter: "U", name: { en: "Unlock Product", pt: "Produto" }, hint: { en: "Journeys & specs", pt: "Jornadas & specs" } },
  { letter: "I", name: { en: "Infrastructure", pt: "Infraestrutura" }, hint: { en: "Architecture & data", pt: "Arquitetura & dados" } },
  { letter: "L", name: { en: "Leadership & Org", pt: "Liderança & Org" }, hint: { en: "Teams & governance", pt: "Times & governança" } },
  { letter: "D", name: { en: "Deliver with AI", pt: "Entrega com IA" }, hint: { en: "Specs & execution", pt: "Specs & execução" } },
];

function TrackRecordFull() {
  const t = useT();
  const [env, setEnv] = React.useState("all");
  const [layer, setLayer] = React.useState(null);
  const casesRef = React.useRef(null);

  const proof = [
    { num: "15+", label: { en: "years in high-scale operations", pt: "anos em operações de alta escala" } },
    { num: "8", label: { en: "companies operated", pt: "empresas operadas" } },
    { num: "200", label: { en: "people led", pt: "pessoas lideradas" } },
    { num: "5/5", label: { en: "BUILD layers applied", pt: "camadas BUILD aplicadas" } },
  ];

  const featured = TR_BY_ID[FEATURED_ID];

  // env chip counts
  const envChips = [
    { key: "all", label: { en: "All environments", pt: "Todos os ambientes" }, count: TR_CASES.length },
    ...TR_GROUPS.map((g) => ({ key: g.key, label: g.label, count: g.ids.length })),
  ];

  // layer chip counts
  const layerCount = (L) => TR_CASES.filter((c) => c.layers.includes(L)).length;

  const matchesLayer = (c) => !layer || c.layers.includes(layer);

  const groups = TR_GROUPS
    .filter((g) => env === "all" || g.key === env)
    .map((g) => ({ ...g, list: g.ids.map((id) => TR_BY_ID[id]).filter(matchesLayer) }))
    .filter((g) => g.list.length > 0);

  const totalShown = groups.reduce((n, g) => n + g.list.length, 0);
  const filtered = env !== "all" || layer;

  const scrollToCases = () => {
    const el = casesRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const resetFilters = () => { setEnv("all"); setLayer(null); };

  return (
    <section className="section section--palha" id="track-record" data-screen-label="Track record">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">04</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Track Record", pt: "Track Record" })}
          </div>
          <h2 className="h1">{t({ en: "Fifteen years of operating, case by case.", pt: "Quinze anos de operação, case a case." })}</h2>
          <p className="lead" style={{ marginTop: 24 }}>
            {t({
              en: "Positioning without evidence is a promise. Below is the full record — global consultancies, LATAM unicorns, and zero-to-scale product building — with the real numbers behind each engagement.",
              pt: "Posicionamento sem evidência é promessa. Abaixo está o histórico completo — consultorias globais, unicórnios LATAM e produto do zero à escala — com os números reais por trás de cada engajamento.",
            })}
          </p>
        </div>

        <div className="tr-proof">
          {proof.map((p, i) => (
            <div className="tr-proof__stat" key={i}>
              <div className="tr-proof__num">{p.num}</div>
              <div className="tr-proof__label">{t(p.label)}</div>
            </div>
          ))}
        </div>

        <CompanyMarquee />

        {/* Flagship spotlight */}
        <div className="tr-featured">
          <div className="tr-featured__main">
            <div className="tr-featured__top">
              <span className="tr-featured__tag">{t({ en: "Flagship engagement", pt: "Engajamento de destaque" })}</span>
              <span className="tr-featured__badge"><img src={featured.logo} alt={featured.logoAlt} loading="lazy" /></span>
            </div>
            <h3 className="tr-featured__name">{featured.company}</h3>
            <div className="tr-featured__meta">
              <span>{featured.role} · {t(featured.period)}</span>
              <span className="tr-featured__layers" aria-hidden="true">{featured.layers.map((l) => <span className="tr-featured__layer" key={l}>{l}</span>)}</span>
            </div>
            <p className="tr-featured__story">{t(featured.story)}</p>
            <button className="btn btn--primary tr-featured__cta" type="button" onClick={scrollToCases}>
              <span>{t({ en: "Jump to all cases", pt: "Ir para todos os cases" })}</span>
              <span className="arrow">↓</span>
            </button>
          </div>
          <div className="tr-featured__metrics">
            <div className="tr-featured__hero">
              <span className="tr-featured__hero-num">{t(featured.metric)}</span>
              <span className="tr-featured__hero-label">{t(featured.metricLabel)}</span>
            </div>
            <div className="tr-featured__subs">
              {[featured.subStats[3], featured.subStats[0], featured.subStats[4]].map((s, i) => (
                <div className="tr-featured__sub" key={i}>
                  <span className="tr-featured__sub-val">{t(s.value)}</span>
                  <span className="tr-featured__sub-label">{t(s.label)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BUILD layer legend — teaches the badges before the cases */}
        <div className="trf-legend" ref={casesRef}>
          <div className="trf-legend__head">
            <span className="trf-legend__label">{t({ en: "Reading the cases", pt: "Como ler os cases" })}</span>
            <span className="trf-legend__text">
              {t({ en: "Each case is tagged with the BUILD layers it touched. Filter by layer to see where a given capability was applied.", pt: "Cada case é marcado com as camadas BUILD que tocou. Filtre por camada para ver onde cada capacidade foi aplicada." })}
            </span>
          </div>
          <div className="trf-legend__keys">
            {LAYER_LEGEND.map((l) => (
              <div className="trf-legend__key" key={l.letter}>
                <span className="trf-legend__letter">{l.letter}</span>
                <span className="trf-legend__meta">
                  <span className="trf-legend__name">{t(l.name)}</span>
                  <span className="trf-legend__hint">{t(l.hint)}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="trf-filters" role="region" aria-label={t({ en: "Filter cases", pt: "Filtrar cases" })}>
          <div className="trf-filter-row">
            <span className="trf-filter-row__label">{t({ en: "Environment", pt: "Ambiente" })}</span>
            <div className="trf-chips">
              {envChips.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  className={`trf-chip ${env === c.key ? "is-active" : ""}`}
                  onClick={() => setEnv(c.key)}
                  aria-pressed={env === c.key}
                >
                  {t(c.label)}<span className="trf-chip__count">{c.count}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="trf-filter-row">
            <span className="trf-filter-row__label">{t({ en: "BUILD layer", pt: "Camada BUILD" })}</span>
            <div className="trf-chips">
              <button
                type="button"
                className={`trf-chip ${!layer ? "is-active" : ""}`}
                onClick={() => setLayer(null)}
                aria-pressed={!layer}
              >
                {t({ en: "All layers", pt: "Todas" })}
              </button>
              {LAYER_LEGEND.map((l) => (
                <button
                  key={l.letter}
                  type="button"
                  className={`trf-chip trf-chip--layer ${layer === l.letter ? "is-active" : ""}`}
                  onClick={() => setLayer(layer === l.letter ? null : l.letter)}
                  aria-pressed={layer === l.letter}
                  title={t(l.name)}
                >
                  <span className="trf-chip__letter">{l.letter}</span>
                  <span className="trf-chip__layer-name">{t(l.name)}</span>
                  <span className="trf-chip__count">{layerCount(l.letter)}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="trf-result">
            <span className="trf-result__count">
              {t({
                en: `Showing ${totalShown} of ${TR_CASES.length} cases`,
                pt: `Mostrando ${totalShown} de ${TR_CASES.length} cases`,
              })}
            </span>
            {filtered && (
              <button type="button" className="trf-result__reset" onClick={resetFilters}>
                {t({ en: "Clear filters", pt: "Limpar filtros" })} <span aria-hidden="true">✕</span>
              </button>
            )}
          </div>
        </div>

        {/* Full cases, grouped by environment */}
        <div className="trf-cases" key={`${env}-${layer}`}>
          {groups.length === 0 && (
            <div className="trf-empty">
              {t({ en: "No cases match this combination.", pt: "Nenhum case corresponde a esta combinação." })}
              <button type="button" className="trf-result__reset" onClick={resetFilters}>
                {t({ en: "Clear filters", pt: "Limpar filtros" })} <span aria-hidden="true">✕</span>
              </button>
            </div>
          )}
          {groups.map((g) => (
            <section className="trf-group" key={g.key}>
              <div className="trf-group__head">
                <span className="tr-group__label">{t(g.label)}</span>
                <span className="tr-group__blurb">{t(g.blurb)}</span>
                <span className="trf-group__count">{g.list.length} {g.list.length === 1 ? t({ en: "case", pt: "case" }) : t({ en: "cases", pt: "cases" })}</span>
              </div>
              <div className="cases">
                {g.list.map((c) => <Case key={c.id} domId={`case-${g.key}-${c.id}`} {...c} />)}
              </div>
            </section>
          ))}
        </div>

        <p className="tr-footnote">
          {t({
            en: "These numbers are proof of the founder's experience. They are not an automatic promise of results for every client. Each Oxente Builder engagement defines target metrics in the initial BRD, calibrated by the diagnosis.",
            pt: "Estes números são prova de experiência do fundador. Não são promessa automática de resultado para todo cliente. Cada engajamento da Oxente Builder define metas-alvo no BRD inicial, calibradas pelo diagnóstico.",
          })}
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { TrackRecordFull });
