/* ============================================
   Oxente Builder — Engagements (Offers)
   Price-gated cards → "Learn more" opens a modal
   that reveals the engagement, deliverables, and
   the value (scramble reveal). EN ($) / PT (R$).
   ============================================ */

/* ---- Reduced motion helper (local) ---- */
function prefersReducedMotion() {
  try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; }
  catch (e) { return false; }
}

/* ---- Scramble-to-target text reveal ---- */
function ScrambleText({ text, active, className, duration = 720 }) {
  const [display, setDisplay] = React.useState(active ? "" : text);
  const frame = React.useRef(0);
  const raf = React.useRef(null);

  React.useEffect(() => {
    if (!active) { setDisplay(text); return; }
    if (prefersReducedMotion()) { setDisplay(text); return; }

    const glyphs = "0123456789$RK#%/—.";
    const start = performance.now();
    const total = text.length;

    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      // ease-out
      const eased = 1 - Math.pow(1 - p, 3);
      const revealed = Math.floor(eased * total);
      let out = "";
      for (let i = 0; i < total; i++) {
        const ch = text[i];
        if (ch === " ") { out += " "; continue; }
        if (i < revealed) out += ch;
        else out += glyphs[(Math.floor(now / 40) + i) % glyphs.length];
      }
      setDisplay(out);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    raf.current = requestAnimationFrame(tick);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [active, text, duration]);

  return <span className={className} aria-label={text}>{display}</span>;
}

/* ---- The modal ---- */
function PackageModal({ pack, onClose }) {
  const t = useT();
  const closeRef = React.useRef(null);
  const [revealValue, setRevealValue] = React.useState(false);

  React.useEffect(() => {
    if (!pack) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    // focus close after the panel settles
    const f = setTimeout(() => closeRef.current && closeRef.current.focus(), 60);
    // reveal the value after the panel animation
    const v = setTimeout(() => setRevealValue(true), 360);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      clearTimeout(f); clearTimeout(v);
    };
  }, [pack, onClose]);

  if (!pack) return null;

  return (
    <div className="pkmodal" role="dialog" aria-modal="true" aria-label={pack.name}>
      <div className="pkmodal__backdrop" onClick={onClose}></div>
      <div className={`pkmodal__panel ${pack.featured ? "pkmodal__panel--featured" : ""}`}>
        <button ref={closeRef} className="pkmodal__close" onClick={onClose} aria-label={t({ en: "Close", pt: "Fechar" })} type="button">
          <span aria-hidden="true">✕</span>
        </button>

        <div className="pkmodal__scroll">
          <div className="pkmodal__head">
            <div className="pkmodal__tag">{t(pack.tag)}</div>
            <h3 className="pkmodal__name">{pack.name}</h3>
            <div className="pkmodal__layers" aria-label={t({ en: "BUILD layers activated", pt: "Camadas BUILD ativadas" })}>
              {pack.layers.map((l) => <span className="pkmodal__layer" key={l}>{l}</span>)}
              <span className="pkmodal__layers-cap">{t({ en: "BUILD layers", pt: "Camadas BUILD" })}</span>
            </div>
          </div>

          <div className="pkmodal__grid">
            <div className="pkmodal__main">
              <div className="pkmodal__block">
                <div className="pkmodal__block-label">{t({ en: "The engagement", pt: "O engajamento" })}</div>
                <p className="pkmodal__about">{t(pack.about)}</p>
              </div>

              <div className="pkmodal__block">
                <div className="pkmodal__block-label">{t({ en: "What you get", pt: "O que você recebe" })}</div>
                <ul className="pkmodal__deliverables">
                  {pack.deliverables.map((d, i) => (
                    <li key={i} style={{ "--i": i }}>{t(d)}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="pkmodal__aside">
              <div className="pkmodal__value">
                <div className="pkmodal__value-label">{t({ en: "Investment", pt: "Investimento" })}</div>
                <div className="pkmodal__price">
                  <ScrambleText text={t(pack.price)} active={revealValue} />
                </div>
                <div className="pkmodal__price-cap">{t(pack.priceCaption)}</div>
              </div>

              <div className="pkmodal__outcome">
                <div className="pkmodal__outcome-label">{t({ en: "Exit criterion", pt: "Critério de saída" })}</div>
                <p>{t(pack.outcome)}</p>
              </div>

              <a href="#cta" className="btn btn--primary pkmodal__cta" onClick={onClose}>
                <span>{t({ en: "Book a 30-minute call", pt: "Agendar conversa de 30 min" })}</span>
                <span className="arrow">→</span>
              </a>
              <div className="pkmodal__reassure">{t({ en: "No sales deck. No commitment.", pt: "Sem deck de venda. Sem compromisso." })}</div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

function Packages() {
  const t = useT();
  const [openId, setOpenId] = React.useState(null);

  const packs = [
    {
      id: "blueprint",
      tag: { en: "Diagnosis", pt: "Diagnóstico" },
      name: "Blueprint Session",
      layers: ["B", "L"],
      short: {
        en: "A diagnosis of the five BUILD layers, delivered as an executable plan — not a slideshow.",
        pt: "Diagnóstico das cinco camadas do BUILD, entregue como plano executável — não um slideshow.",
      },
      duration: { en: "10 business days · Fixed price", pt: "10 dias úteis · Preço fixo" },
      when: {
        en: "When you need to understand where product and engineering are blocking the business.",
        pt: "Quando você precisa entender onde produto e engenharia estão travando o negócio.",
      },
      about: {
        en: "A focused 10-business-day diagnosis across all five BUILD layers. We map where business, product, engineering, organization, and delivery are blocking one another — then hand you a prioritized, executable plan you can act on immediately.",
        pt: "Um diagnóstico focado de 10 dias úteis nas cinco camadas do BUILD. Mapeamos onde negócio, produto, engenharia, organização e entrega estão travando uns aos outros — e entregamos um plano priorizado e executável para agir imediatamente.",
      },
      deliverables: [
        { en: "Diagnosis across the 5 BUILD layers", pt: "Diagnóstico das 5 camadas do BUILD" },
        { en: "Organizational gap map", pt: "Mapa de gaps organizacionais" },
        { en: "Prioritized action plan", pt: "Plano de ação priorizado" },
        { en: "Initial Org Design Blueprint", pt: "Org Design Blueprint inicial" },
      ],
      price: { en: "$4K – 6K", pt: "R$ 20k – 35k" },
      priceCaption: { en: "Fixed price · one-time", pt: "Preço fixo · pagamento único" },
      outcome: {
        en: "Entry product. 80% of Blueprints convert into a Build Engagement.",
        pt: "Produto de entrada. 80% dos Blueprints convertem em Build Engagement.",
      },
    },
    {
      id: "build",
      tag: { en: "Core model", pt: "Modelo principal" },
      name: "Build Engagement",
      featured: true,
      layers: ["B", "U", "I", "L", "D"],
      short: {
        en: "A fractional CPO/CTO embedded in your operation, walking all five layers and producing every artifact.",
        pt: "Fractional CPO/CTO embarcado na operação, percorrendo as cinco camadas e produzindo cada artefato.",
      },
      duration: { en: "3–6 months · Renewable", pt: "3–6 meses · Renovável" },
      when: {
        en: "When you need an embedded executive to redesign and deliver.",
        pt: "Quando você precisa de um executivo embarcado para redesenhar e entregar.",
      },
      about: {
        en: "A fractional CPO/CTO embedded in your operation. We walk all five BUILD layers, produce every artifact, redesign the organization, and train your internal leaders to run the method after we leave. Strategy that reaches the code — and stays.",
        pt: "Um fractional CPO/CTO embarcado na sua operação. Percorremos as cinco camadas do BUILD, produzimos cada artefato, redesenhamos a organização e treinamos os líderes internos para operar o método após nossa saída. Estratégia que chega até o código — e permanece.",
      },
      deliverables: [
        { en: "Full BRD + PRD + ERD", pt: "BRD + PRD + ERD completos" },
        { en: "Org Design Blueprint", pt: "Org Design Blueprint" },
        { en: "Spec Library + 30/60/90 Roadmap", pt: "Spec Library + Roadmap 30/60/90" },
        { en: "Internal leadership training", pt: "Treinamento de líderes internos" },
        { en: "Documented exit criteria", pt: "Critério de saída documentado" },
      ],
      price: { en: "$6K – 12K/mo", pt: "R$ 30k – 65k/mês" },
      priceCaption: { en: "Monthly · 3–6 month engagement", pt: "Mensal · engajamento de 3–6 meses" },
      outcome: {
        en: "Impact starts in week 2. Exit on a documented, binary criterion.",
        pt: "O impacto começa na semana 2. Saída com critério binário documentado.",
      },
    },
    {
      id: "steady",
      tag: { en: "Maintenance", pt: "Manutenção" },
      name: "Steady State",
      layers: ["L", "D"],
      short: {
        en: "Biweekly executive advisory that keeps the thread between layers intact as the product scales.",
        pt: "Advisory executivo quinzenal que mantém o fio entre as camadas conforme o produto escala.",
      },
      duration: { en: "Recurring · 30-day cancellation", pt: "Recorrente · Cancelável com 30 dias" },
      when: {
        en: "When the internal team runs the method and you want to sustain the evolution.",
        pt: "Quando o time interno opera o método, e você quer sustentar a evolução.",
      },
      about: {
        en: "Biweekly executive advisory after the Build Engagement. We keep the thread between the five layers intact, review critical decisions, and evolve the method as the product and the organization scale.",
        pt: "Advisory executivo quinzenal após o Build Engagement. Mantemos o fio entre as cinco camadas intacto, revisamos decisões críticas e evoluímos o método conforme o produto e a organização escalam.",
      },
      deliverables: [
        { en: "Biweekly executive advisory", pt: "Advisory quinzenal executivo" },
        { en: "Critical-decision reviews", pt: "Revisão de decisões críticas" },
        { en: "Continuous method evolution", pt: "Evolução contínua do método" },
        { en: "Key-metric tracking", pt: "Acompanhamento de métricas-chave" },
      ],
      price: { en: "$2K – 4K/mo", pt: "R$ 10k – 22k/mês" },
      priceCaption: { en: "Monthly · cancel with 30 days", pt: "Mensal · cancelável com 30 dias" },
      outcome: {
        en: "Available only to clients who completed the Build Engagement.",
        pt: "Disponível apenas para clientes que completaram o Build Engagement.",
      },
    },
  ];

  const openPack = packs.find((p) => p.id === openId) || null;

  return (
    <section className="section" id="ofertas" data-screen-label="10 Ofertas">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">12</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "How we work", pt: "Como operamos" })}
          </div>
          <h2 className="h1">
            {t({ en: "Three ways to work with Oxente Builder.", pt: "Três formas de trabalhar com a Oxente Builder." })}
          </h2>
          <p className="lead" style={{ marginTop: 24 }}>
            {t({
              en: "Every engagement has an explicit exit criterion: your team runs the BUILD method with full autonomy. No permanent dependency.",
              pt: "Todo engajamento tem um critério de saída explícito: o time opera o método BUILD com autonomia total. Sem dependência permanente.",
            })}
          </p>
        </div>

        <div className="pack-flow">
          <span className="pack-flow__step">Blueprint Session</span>
          <span className="pack-flow__arrow">→</span>
          <span className="pack-flow__step pack-flow__step--featured">Build Engagement</span>
          <span className="pack-flow__arrow">→</span>
          <span className="pack-flow__step">Steady State</span>
        </div>

        <div className="packs-grid">
          {packs.map((p) => (
            <article className={`pack ${p.featured ? "pack--featured" : ""}`} key={p.id}>
              {p.featured && <div className="pack__ribbon">{t({ en: "Most chosen", pt: "Mais escolhido" })}</div>}
              <div className="pack__tag">{t(p.tag)}</div>
              <h3 className="pack__name">{p.name}</h3>
              <div className="pack__layers" aria-label={t({ en: "BUILD layers activated", pt: "Camadas BUILD ativadas" })}>
                {p.layers.map((l) => <span className="pack__layer" key={l}>{l}</span>)}
              </div>
              <p className="pack__desc">{t(p.short)}</p>
              <div className="pack__duration pack__duration--card">{t(p.duration)}</div>
              <div className="pack__when">{t(p.when)}</div>

              <div className="pack__reveal">
                <div className="pack__reveal-price" aria-hidden="true">
                  <span className="pack__reveal-dots">$ •• – ••</span>
                  <span className="pack__reveal-hint">{t({ en: "Pricing", pt: "Investimento" })}</span>
                </div>
                <button
                  type="button"
                  className="pack__learnmore"
                  onClick={() => setOpenId(p.id)}
                  aria-haspopup="dialog"
                >
                  <span>{t({ en: "Learn more", pt: "Saiba mais" })}</span>
                  <span className="pack__learnmore-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="packs-note">
          {t({
            en: "Click an engagement to see its full scope, deliverables, and investment.",
            pt: "Clique em um engajamento para ver escopo completo, entregas e investimento.",
          })}
        </div>

        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <CTAButton />
          <RiskReversal />
        </div>
      </div>

      <PackageModal pack={openPack} onClose={() => setOpenId(null)} />
    </section>
  );
}

/* ---- Risk-reversal trust row (used near CTAs) ---- */
function RiskReversal({ onDark = false }) {
  const t = useT();
  const items = [
    { en: "30-min call, no commitment", pt: "Conversa de 30 min, sem compromisso" },
    { en: "No sales deck", pt: "Sem deck de venda" },
    { en: "Documented exit criterion", pt: "Critério de saída documentado" },
  ];
  return (
    <div className={`riskrev ${onDark ? "riskrev--dark" : ""}`}>
      {items.map((it, i) => (
        <span className="riskrev__item" key={i}>
          <span className="riskrev__check" aria-hidden="true">✓</span>
          {t(it)}
        </span>
      ))}
    </div>
  );
}

Object.assign(window, { Packages, PackageModal, ScrambleText, RiskReversal });
