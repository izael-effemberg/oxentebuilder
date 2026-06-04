/* ============================================
   Oxente Builder — Sections (Part 2)
   Reusable Drawer · Method BUILD (lite + full) ·
   Before/After (condensed) · Track record (lite + drawer)
   ============================================ */

/* ---------------------------------------------------------
   Reusable slide-in Drawer.
   Mirrors the modal/lightbox host contract: ESC + backdrop
   close, body scroll-lock, focus the close button on open.
--------------------------------------------------------- */
function Drawer({ open, onClose, title, eyebrow, dark = false, scrollToId = null, children }) {
  const t = useT();
  const closeRef = React.useRef(null);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const f = setTimeout(() => closeRef.current && closeRef.current.focus(), 80);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      clearTimeout(f);
    };
  }, [open, onClose]);

  // Deep-link scroll — separate from the lifecycle effect so it isn't
  // re-run (and reset) when the inline onClose identity changes.
  React.useEffect(() => {
    if (!open) return;
    const c = scrollRef.current;
    if (!c) return;
    if (!scrollToId) { c.scrollTop = 0; return; }
    const id = setTimeout(() => {
      const el = c.querySelector("#" + scrollToId);
      if (!el) return;
      const top = el.getBoundingClientRect().top - c.getBoundingClientRect().top + c.scrollTop;
      c.scrollTop = Math.max(0, top - 12);
    }, 160);
    return () => clearTimeout(id);
  }, [open, scrollToId]);

  if (!open) return null;

  return (
    <div className="drawer" role="dialog" aria-modal="true" aria-label={title}>
      <div className="drawer__backdrop" onClick={onClose}></div>
      <div className={`drawer__panel ${dark ? "drawer__panel--dark" : ""}`}>
        <div className="drawer__bar">
          <div className="drawer__bar-meta">
            {eyebrow && <span className="drawer__eyebrow">{eyebrow}</span>}
            <h3 className="drawer__title">{title}</h3>
          </div>
          <button
            ref={closeRef}
            className="drawer__close"
            onClick={onClose}
            aria-label={t({ en: "Close", pt: "Fechar" })}
            type="button"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>
        <div className="drawer__scroll" ref={scrollRef}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   BUILD method — shared phase data
--------------------------------------------------------- */
const BUILD_STEPS = [
  {
    step: { en: "Phase 01", pt: "Fase 01" },
    letter: "B",
    title: "Business Context",
    sub: { en: "Understand the business before touching the product", pt: "Entender o negócio antes de tocar no produto" },
    detail: {
      en: "Business model, strategy, revenue, customers, and priorities. We map where the company wants to go, what the success criteria are, and what's blocking growth. Without clarity here, product and engineering work in the wrong direction.",
      pt: "Modelo de negócio, estratégia, receita, clientes e prioridades. Mapeamos onde a empresa quer chegar, quais são os critérios de sucesso e o que está impedindo o crescimento. Sem clareza aqui, produto e engenharia trabalham na direção errada.",
    },
    question: { en: "What business outcome are we trying to unlock?", pt: "Qual resultado de negócio estamos tentando destravar?" },
    artifactName: "BRD",
    artifactDesc: {
      en: "Business Requirements Document, approved by the Sponsor before advancing to the next phase.",
      pt: "Business Requirements Document, aprovado pelo Sponsor antes de avançar para a próxima fase.",
    },
  },
  {
    step: { en: "Phase 02", pt: "Fase 02" },
    letter: "U",
    title: "Unlock Product",
    sub: { en: "Translate business into product with surgical precision", pt: "Traduzir negócio em produto com precisão cirúrgica" },
    detail: {
      en: "User journeys, pains, product metrics, and opportunities. MoSCoW prioritization and acceptance criteria in Given/When/Then format. Product translates the business into experience, with no loose interpretation by engineering.",
      pt: "Jornadas de usuário, dores, métricas de produto e oportunidades. Priorização MoSCoW e critérios de aceite em formato Given/When/Then. O produto traduz o negócio em experiência, sem interpretação livre da engenharia.",
    },
    question: { en: "What experience must exist to generate the expected outcome?", pt: "Qual experiência precisa existir para gerar o resultado esperado?" },
    artifactName: "PRD",
    artifactDesc: {
      en: "Product Requirements Document with User Stories and explicit acceptance criteria.",
      pt: "Product Requirements Document com User Stories e critérios de aceite explícitos.",
    },
  },
  {
    step: { en: "Phase 03", pt: "Fase 03" },
    letter: "I",
    title: "Infrastructure Design",
    sub: { en: "Structure before you build", pt: "Estruturar antes de construir" },
    detail: {
      en: "Architecture assessment, data model, technical debt, AI capability, and infrastructure gaps. Definition of entities, relationships, and business rules that sustain the product. Eliminates improvisation and ad hoc decisions.",
      pt: "Avaliação de arquitetura, modelo de dados, dívida técnica, capacidade de IA e gaps de infraestrutura. Definição de entidades, relacionamentos e regras de negócio que sustentam o produto. Elimina improviso e decisões ad hoc.",
    },
    question: { en: "What technical structure sustains the experience and the business model?", pt: "Que estrutura técnica sustenta a experiência e o modelo de negócio?" },
    artifactName: "ERD",
    artifactDesc: {
      en: "Entity Requirements Document, validated by engineering before execution begins.",
      pt: "Entity Requirements Document, validado pela engenharia antes da execução começar.",
    },
  },
  {
    step: { en: "Phase 04", pt: "Fase 04" },
    letter: "L",
    title: "Leadership & Org Redesign",
    sub: { en: "Redesign the structure that keeps the problem alive", pt: "Redesenhar a estrutura que mantém o problema vivo" },
    detail: {
      en: "Organization of roles, rituals, governance, and decision-making for the AI era. Redefinition of teams around business domains, not functions. This is the step no other consultant takes — and the one that determines whether the gains last.",
      pt: "Organização de papéis, rituais, governança e tomada de decisão para a era da IA. Redefinição de times em torno de domínios de negócio, não de funções. Este é o passo que nenhum outro consultor dá — e o que determina se os ganhos vão durar.",
    },
    question: { en: "What organizational structure sustains the velocity we want?", pt: "Que estrutura organizacional sustenta a velocidade que queremos?" },
    artifactName: "Org Design Blueprint",
    artifactDesc: {
      en: "Team model, redefined roles, and governance mechanisms.",
      pt: "Modelo de times, papéis redefinidos e mecanismos de governança.",
    },
  },
  {
    step: { en: "Phase 05", pt: "Fase 05" },
    letter: "D",
    title: "Deliver with AI",
    sub: { en: "Execute fast with AI as a real co-pilot", pt: "Executar rápido com IA como co-piloto real" },
    detail: {
      en: "Atomic specs per feature: context, behavior, done criteria, and examples. Formatted for AI to execute with precision. A 30/60/90 plan with priorities, owners, and metrics. Every PR linked to its Spec — full traceability.",
      pt: "Specs atômicas por feature: contexto, comportamento, critério de done e exemplos. Formatadas para a IA executar com precisão. Plano 30/60/90 com prioridades, responsáveis e métricas. Cada PR linkado à Spec — rastreabilidade total.",
    },
    question: { en: "How do we make the business decision reach the code with less noise?", pt: "Como fazer a decisão de negócio chegar até o código com menos ruído?" },
    artifactName: "Spec Library + Roadmap 30/60/90",
    artifactDesc: {
      en: "Reusable specs that teach the internal team to run the method without us. Documented exit criteria.",
      pt: "Specs reutilizáveis que ensinam o time interno a operar o método sem nós. Critério de saída documentado.",
    },
  },
];

/* ---------------------------------------------------------
   MethodFull — the interactive 5-phase stepper + artifacts.
   Lives inside the dark "Ver método completo" drawer.
--------------------------------------------------------- */
function MethodFull({ showcase = true }) {
  const t = useT();
  const [active, setActive] = React.useState(0);
  const [lightbox, setLightbox] = React.useState(null);
  const openArtifacts = () => setLightbox("images/artifacts.webp");
  const steps = BUILD_STEPS;

  return (
    <>
      <p className="method-full__intro">
        {t({
          en: <>Five sequential phases. Each with one main question, one intervention, and one artifact that feeds the next.<strong> No phase begins until the previous one is documented and approved.</strong></>,
          pt: <>Cinco fases sequenciais. Cada uma com uma pergunta principal, uma intervenção e um artefato que alimenta a próxima.<strong> Nenhuma fase começa sem a anterior estar documentada e aprovada.</strong></>,
        })}
      </p>

      <div className="method2">
        <div className="method2__tabs" role="tablist" aria-label={t({ en: "BUILD phases", pt: "Fases do BUILD" })}>
          <div className="method2__progress" style={{ "--steps": steps.length, "--active": active }} aria-hidden="true"></div>
          {steps.map((s, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              className={`m-tab ${i === active ? "is-active" : ""} ${i < active ? "is-done" : ""}`}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") { e.preventDefault(); setActive(Math.min(steps.length - 1, i + 1)); }
                if (e.key === "ArrowLeft") { e.preventDefault(); setActive(Math.max(0, i - 1)); }
              }}
              type="button"
              tabIndex={i === active ? 0 : -1}
            >
              <span className="m-tab__letter">{s.letter}</span>
              <span className="m-tab__meta">
                <span className="m-tab__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="m-tab__name">{s.title}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="method2__panel" key={active} role="tabpanel">
          <div className="method2__main">
            <div className="m-panel__meta">
              <span className="m-panel__phase">{t(steps[active].step)}</span>
              <span className="m-panel__sub">{t(steps[active].sub)}</span>
            </div>
            <h3 className="m-panel__question">{t(steps[active].question)}</h3>
            <p className="m-panel__detail">{t(steps[active].detail)}</p>
          </div>

          <aside className="method2__artifact">
            <div className="m-artifact__label">{t({ en: "Phase artifact", pt: "Artefato da fase" })}</div>
            <div className="m-artifact__doc">
              <span className="m-artifact__doc-letter">{steps[active].letter}</span>
              <span className="m-artifact__name">{steps[active].artifactName}</span>
            </div>
            <p className="m-artifact__desc">{t(steps[active].artifactDesc)}</p>
            <div className="m-artifact__feeds">
              {active < steps.length - 1 ? (
                <>
                  <span className="m-artifact__feeds-label">{t({ en: "Feeds the next phase", pt: "Alimenta a próxima fase" })}</span>
                  <span className="m-artifact__feeds-next">{steps[active + 1].letter} · {steps[active + 1].artifactName} →</span>
                </>
              ) : (
                <>
                  <span className="m-artifact__feeds-label">{t({ en: "End of the chain", pt: "Fim da cadeia" })}</span>
                  <span className="m-artifact__feeds-next m-artifact__feeds-next--done">{t({ en: "Documented exit criterion ✓", pt: "Critério de saída documentado ✓" })}</span>
                </>
              )}
            </div>
          </aside>
        </div>

        <p className="method2__thread">
          {t({
            en: <>One thread runs through all five — a decision in the <b>BRD</b> shapes the <b>PRD</b>, the <b>ERD</b>, the org redesign, and how AI executes the Specs. <strong>No layer is optional.</strong> Skipping one is why most interventions fail to last.</>,
            pt: <>Um fio percorre as cinco — uma decisão no <b>BRD</b> molda o <b>PRD</b>, o <b>ERD</b>, o redesenho organizacional e como a IA executa as Specs. <strong>Nenhuma camada é opcional.</strong> Pular uma é o motivo de a maioria das intervenções não durar.</>,
          })}
        </p>
      </div>

      <div className="method2__showcase" style={showcase ? undefined : { display: "none" }} aria-hidden={showcase ? undefined : "true"}>
        <div
          className="method2__media method2__media--zoom"
          role="button"
          tabIndex={0}
          aria-label={t({ en: "View the artifacts image full size", pt: "Ver a imagem dos artefatos em tamanho cheio" })}
          onClick={openArtifacts}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openArtifacts(); } }}
        >
          <img
            id="build-artifacts"
            className="method2__slot"
            src="images/artifacts.webp"
            alt={t({ en: "BUILD method artifacts", pt: "Artefatos do método BUILD" })}
            loading="lazy"
          />
          <span className="method2__media-zoom" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6.5 1H1v5.5M9.5 1H15v5.5M6.5 15H1V9.5M9.5 15H15V9.5" />
            </svg>
            {t({ en: "View", pt: "Ampliar" })}
          </span>
        </div>
        <div className="method2__showcase-copy">
          <div className="eyebrow eyebrow--dark" style={{ color: "var(--sertao)" }}>
            <span style={{ width: 0, height: 0 }}></span>
            {t({ en: "Method artifacts", pt: "Artefatos do método" })}
          </div>
          <h3 className="h2" style={{ color: "var(--branco)", marginTop: 18, fontSize: "clamp(26px, 3vw, 40px)" }}>
            {t({
              en: <>Every phase leaves an artifact.<br/><span style={{ color: "rgba(255,255,255,0.55)" }}>No decision stays oral.</span></>,
              pt: <>Cada fase deixa um artefato.<br/><span style={{ color: "rgba(255,255,255,0.55)" }}>Nenhuma decisão fica oral.</span></>,
            })}
          </h3>
          <p className="lead" style={{ marginTop: 20, color: "rgba(255,255,255,0.7)", fontSize: "clamp(15px, 1.2vw, 18px)" }}>
            {t({
              en: "Living documents that outlast the engagement and stay inside the company — versioned, evolving, teaching your team to run the method without us.",
              pt: "Documentos vivos que sobrevivem ao engajamento e ficam dentro da empresa — versionados, evoluindo, ensinando seu time a operar o método sem nós.",
            })}
          </p>
          <div className="method2__artifact-tags" aria-hidden="true">
            {["BRD", "PRD", "ERD", "Org Design Blueprint", "Spec Library"].map((a, i) => (
              <span className="method2__artifact-tag" key={a}>
                <span className="method2__artifact-tag-letter">{["B", "U", "I", "L", "D"][i]}</span>
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ImageLightbox
        src={lightbox}
        alt={t({ en: "BUILD method artifacts", pt: "Artefatos do método BUILD" })}
        onClose={() => setLightbox(null)}
      />
    </>
  );
}

function ImageLightbox({ src, alt, onClose }) {
  const t = useT();
  const closeRef = React.useRef(null);

  React.useEffect(() => {
    if (!src) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const f = setTimeout(() => closeRef.current && closeRef.current.focus(), 60);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      clearTimeout(f);
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt}>
      <div className="lightbox__backdrop" onClick={onClose}></div>
      <button ref={closeRef} className="lightbox__close" onClick={onClose} aria-label={t({ en: "Close", pt: "Fechar" })} type="button">
        <span aria-hidden="true">✕</span>
      </button>
      <figure className="lightbox__figure">
        <img className="lightbox__img" src={src} alt={alt} onClick={onClose} />
        <figcaption className="lightbox__caption">{alt}</figcaption>
      </figure>
    </div>
  );
}

/* ---------------------------------------------------------
   MethodBuild — condensed on-page summary (dark).
   Five phases on one row + "Ver método completo" → drawer.
--------------------------------------------------------- */
function MethodBuild() {
  const t = useT();
  const [open, setOpen] = React.useState(false);

  return (
    <section className="section section--dark" id="metodo" data-screen-label="06 Método BUILD">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter eyebrow--dark section-header__eyebrow">
            <span className="eyebrow__num">06</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "The BUILD Method", pt: "O Método BUILD" })}
          </div>
          <h2 className="h1" style={{ color: "var(--branco)" }}>
            {t({
              en: <>Into the business<span style={{ color: "var(--sertao)" }}> and all the way to the code</span> — in five layers.</>,
              pt: <>Do negócio<span style={{ color: "var(--sertao)" }}> até o código</span> — em cinco camadas.</>,
            })}
          </h2>
          <p className="lead" style={{ marginTop: 28, color: "rgba(255,255,255,0.7)" }}>
            {t({
              en: "Each layer asks one question and leaves one artifact that feeds the next. No layer is optional.",
              pt: "Cada camada faz uma pergunta e deixa um artefato que alimenta a próxima. Nenhuma camada é opcional.",
            })}
          </p>
        </div>

        <div className="method-lite">
          {BUILD_STEPS.map((s, i) => (
            <div className="method-lite__phase" key={s.letter}>
              <span className="method-lite__letter">{s.letter}</span>
              <div className="method-lite__num">{t(s.step)}</div>
              <div className="method-lite__name">{s.title}</div>
              <div className="method-lite__sub">{t(s.sub)}</div>
              <div className="method-lite__artifact">{s.artifactName.split(" + ")[0]}</div>
            </div>
          ))}
        </div>

        <div className="method-lite__foot">
          <button className="btn btn--primary" type="button" onClick={() => setOpen(true)}>
            <span>{t({ en: "See the full method", pt: "Ver o método completo" })}</span>
            <span className="arrow">→</span>
          </button>
          <span className="method-lite__note">
            {t({ en: "5 phases · 5 artifacts · one connecting thread", pt: "5 fases · 5 artefatos · um fio que conecta" })}
          </span>
        </div>
      </div>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        dark
        eyebrow={t({ en: "The BUILD Method", pt: "O Método BUILD" })}
        title={t({ en: "The five layers, in detail", pt: "As cinco camadas, em detalhe" })}
      >
        <MethodFull />
      </Drawer>
    </section>
  );
}

/* ---------------------------------------------------------
   Before / After — condensed to four transformations + 3 stats
--------------------------------------------------------- */
function BeforeAfter() {
  const t = useT();
  const rows = [
    [{ en: "Squad of 8–12 per feature", pt: "Squad de 8–12 por feature" }, { en: "Team of 3–4 + AI with equivalent capacity", pt: "Time de 3–4 + IA com capacidade equivalente" }],
    [{ en: "30–50% of engineering time on rework", pt: "30–50% do tempo de engenharia em retrabalho" }, { en: "Under 10%, with clear acceptance criteria", pt: "Menos de 10%, com critérios de aceite claros" }],
    [{ en: "A feature takes 8–12 weeks from discovery to deploy", pt: "Feature leva 8–12 semanas do discovery ao deploy" }, { en: "A feature takes 3–4 weeks with Spec + AI", pt: "Feature leva 3–4 semanas com Spec + IA" }],
    [{ en: "6–8 week onboarding per new dev", pt: "Onboarding de 6–8 semanas por novo dev" }, { en: "5-day onboarding via Spec Library", pt: "Onboarding de 5 dias via Spec Library" }],
  ];

  return (
    <section className="section" id="antes-depois" data-screen-label="06 Antes e depois">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">06</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Before and after", pt: "Antes e depois" })}
          </div>
          <h2 className="h1">
            {t({ en: "What changes when business, product, and engineering run on the same thread.", pt: "O que muda quando negócio, produto e engenharia operam no mesmo fio." })}
          </h2>
          <p className="lead" style={{ marginTop: 24 }}>
            {t({
              en: "Lean teams aren't a cost cut — they're the consequence of a well-designed structure.",
              pt: "Times enxutos não são corte de custo — são consequência de uma estrutura bem desenhada.",
            })}
          </p>
        </div>

        <div className="beforeafter">
          <div className="beforeafter__head">
            <div>{t({ en: "Before", pt: "Antes" })}</div>
            <div>{t({ en: "With the BUILD method", pt: "Com o método BUILD" })}</div>
          </div>
          {rows.map(([b, a], i) => (
            <div className="beforeafter__row" key={i}>
              <div className="beforeafter__before">{t(b)}</div>
              <div className="beforeafter__after">{t(a)}</div>
            </div>
          ))}
        </div>

        <div className="beforeafter__synthesis">
          <div className="beforeafter__synth-stat">
            <div className="beforeafter__synth-num">3–4×</div>
            <div className="beforeafter__synth-label">
              {t({ en: <><strong>Delivery velocity</strong> on new features with Spec + AI.</>, pt: <><strong>Velocidade de entrega</strong> em features novas com Spec + IA.</> })}
            </div>
          </div>
          <div className="beforeafter__synth-stat">
            <div className="beforeafter__synth-num">−60–70%</div>
            <div className="beforeafter__synth-label">
              {t({ en: <><strong>Team size</strong> for the same delivery capacity.</>, pt: <><strong>Tamanho do time</strong> para a mesma capacidade de entrega.</> })}
            </div>
          </div>
          <div className="beforeafter__synth-stat">
            <div className="beforeafter__synth-num">{t({ en: "5 days", pt: "5 dias" })}</div>
            <div className="beforeafter__synth-label">
              {t({ en: <><strong>Onboarding</strong> via Spec Library, previously 6–8 weeks.</>, pt: <><strong>Onboarding</strong> via Spec Library, antes 6–8 semanas.</> })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyMarquee() {
  const t = useT();
  const logos = [
    { src: "logos/thoughtworks-opt.png", alt: "ThoughtWorks" },
    { src: "logos/ifood-opt.png", alt: "iFood" },
    { src: "logos/stone-opt.png", alt: "Stone" },
    { src: "logos/creditas-opt.png", alt: "Creditas" },
    { src: "logos/willbank-opt.png", alt: "Will Bank" },
    { src: "logos/vertigo-opt.png", alt: "Vertigo" },
    { src: "logos/semparar-opt.png", alt: "Sem Parar · Corpay" },
    { src: "logos/veecode-opt.png", alt: "Veecode Platform" },
  ];
  const seq = [...logos, ...logos];
  return (
    <div className="marquee" aria-label={t({ en: "Companies where Izael Effemberg operated", pt: "Empresas onde Izael Effemberg operou" })}>
      <div className="marquee__track">
        {seq.map((l, i) => (
          <img
            key={i}
            className="marquee__logo"
            src={l.src}
            alt={l.alt}
            aria-hidden={i >= logos.length ? "true" : undefined}
            loading="lazy"
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Track record — full case data (used in the drawer)
--------------------------------------------------------- */
const TR_CASES = [
  {
    num: "01",
    id: "corpay",
    sector: { en: "Vehicle payments", pt: "Pagamentos veiculares" },
    logo: "logos/semparar-opt.png",
    logoAlt: "Corpay · Sem Parar",
    period: { en: "2022–Present", pt: "2022–Presente" },
    company: "Corpay · Sem Parar",
    role: "Senior Manager, Technical Product Management",
    layers: ["U", "I", "D"],
    story: {
      en: "Vehicle-debt platform (Gringo + Zapay) with inconsistent fallback between acquirers and low settlement traceability. Redesign of payment flows, continuous monitoring across acquirers, and end-to-end tax automation.",
      pt: "Plataforma de débitos veiculares (Gringo + Zapay) com fallback inconsistente entre adquirentes e baixa rastreabilidade de settlement. Redesenho de fluxos de pagamento, monitoramento contínuo entre adquirentes e automação fiscal ponta a ponta.",
    },
    metric: "20M+",
    metricLabel: { en: "queries/month operated", pt: "consultas/mês operadas" },
    metricContext: "Gringo · Zapay",
    subStats: [
      { label: { en: "API success", pt: "Sucesso em APIs" }, value: "87 → 95%", arrow: true },
      { label: { en: "Conversion", pt: "Conversão" }, value: { en: "+3.5 pts", pt: "+3,5 p.p." }, arrow: true },
      { label: { en: "Payment approval", pt: "Aprovação pgto" }, value: "78 → 84%", arrow: true },
      { label: { en: "Protected TPV", pt: "TPV protegido" }, value: { en: "$3.3M/mo", pt: "R$ 18M/mês" } },
      { label: { en: "Traceability", pt: "Rastreabilidade" }, value: "70 → 96%", arrow: true },
      { label: { en: "Tax issuance", pt: "Emissão fiscal" }, value: "62 → 88%", arrow: true },
      { label: { en: "Manual load", pt: "Carga manual" }, value: "−40%", arrow: true },
      { label: { en: "Issuance SLA", pt: "SLA emissão" }, value: "36h → 8h", arrow: true },
    ],
  },
  {
    num: "02",
    id: "vertigo",
    sector: { en: "Consulting", pt: "Consultoria" },
    logo: "logos/vertigo-opt.png",
    logoAlt: "Vertigo",
    period: "2020–2022",
    company: "Vertigo",
    role: "Head of Product and Tech Strategy",
    layers: ["B", "L"],
    story: {
      en: "Founded and scaled the Technology Delivery Management practice. Led organizational blueprints, operating models, and technical governance for Fortune-grade companies in digital transformation.",
      pt: "Fundou e escalou a prática de Technology Delivery Management. Liderou blueprints organizacionais, operating models e governança técnica para empresas Fortune-grade em transformação digital.",
    },
    clients: "P&G · Banco Master · Itaú · Sankhya · Credsystem",
    metric: "5",
    metricLabel: { en: "organizational redesigns", pt: "redesenhos organizacionais" },
    metricContext: { en: "Fortune-grade companies", pt: "Empresas Fortune-grade" },
    subStats: [
      { label: { en: "Delivery lead time", pt: "Lead time de entrega" }, value: "−40%", arrow: true },
      { label: { en: "Platform uptime", pt: "Uptime de plataforma" }, value: "+60%", arrow: true },
      { label: { en: "TDM practice", pt: "Prática TDM" }, value: { en: "Built from zero", pt: "Criada do zero" } },
    ],
  },
  {
    num: "03",
    id: "willbank",
    sector: { en: "Digital bank", pt: "Banco digital" },
    logo: "logos/willbank-opt.png",
    logoAlt: "Will Bank",
    period: "2021–2022",
    company: "Will Bank",
    role: "Head of Product and Engineering",
    layers: ["I", "L"],
    story: {
      en: "Created the Technical Program Management function at the digital bank. Designed technical governance between product and engineering, with planning cadence, risk management, and dependencies across tribes.",
      pt: "Criou a função de Technical Program Management no banco digital. Desenhou governança técnica entre produto e engenharia, com cadência de planejamento, gestão de riscos e dependências entre tribos.",
    },
    metric: "53",
    metricLabel: { en: "indirect reports led", pt: "indiretos liderados" },
    metricContext: { en: "Engineering · Product · Platform", pt: "Engenharia · Produto · Plataforma" },
  },
  {
    num: "04",
    id: "stone",
    sector: { en: "Acquiring", pt: "Adquirência" },
    logo: "logos/stone-opt.png",
    logoAlt: "Stone",
    period: "2019–2020",
    company: "Stone Pagamentos",
    role: "Principal Technical Product Manager",
    layers: ["I"],
    story: {
      en: "Architectural refinements on the acquiring platform. Technical governance, operational resilience, and reduction of SLA violations in critical payment flows.",
      pt: "Refinamentos arquiteturais na plataforma de adquirência. Governança técnica, resiliência operacional e redução de violações de SLA em fluxos críticos de pagamento.",
    },
    metric: "−30%",
    metricLabel: { en: "SLA violations", pt: "violações de SLA" },
    metricContext: { en: "Acquiring platform", pt: "Plataforma de adquirência" },
  },
  {
    num: "05",
    id: "veecode",
    sector: { en: "Dev platform", pt: "Plataforma dev" },
    logo: "logos/veecode-opt.png",
    logoAlt: "Veecode Platform",
    period: { en: "Vertigo spin-off", pt: "Spin-off da Vertigo" },
    company: "VeeCode Platform",
    role: "Interim CPO",
    layers: ["B", "U", "D"],
    story: {
      en: "Internal developer platform (IDP) created inside Vertigo and turned into a product. I was responsible for defining the product from the ground up and for brand awareness — through active participation in the engineering community (talks, podcasts, and conferences) — converting that reach into a B2B pipeline.",
      pt: "Plataforma interna de desenvolvimento (IDP) criada dentro da Vertigo e transformada em produto. Fui responsável pela definição do produto do zero e pelo brand awareness — com participação ativa na comunidade de engenharia (palestras, podcasts e conferências) — convertendo esse alcance em pipeline B2B.",
    },
    metric: "2 → 8",
    metricLabel: { en: "B2B clients", pt: "clientes B2B" },
    metricContext: { en: "Veecode Platform", pt: "Veecode Platform" },
    subStats: [
      { label: { en: "B2B clients", pt: "Clientes B2B" }, value: "2 → 8", arrow: true },
      { label: { en: "Product definition", pt: "Definição de produto" }, value: { en: "From zero", pt: "Do zero" } },
      { label: { en: "Brand awareness", pt: "Brand awareness" }, value: { en: "Community-led", pt: "Via comunidade" } },
    ],
  },
  {
    num: "06",
    id: "thoughtworks",
    sector: { en: "Global consulting", pt: "Consultoria global" },
    logo: "logos/thoughtworks-opt.png",
    logoAlt: "ThoughtWorks",
    period: "2010–2016",
    company: "ThoughtWorks",
    role: "Senior Consultant · Software Engineer",
    layers: ["I"],
    story: {
      en: "Six years as a consultant developer across global delivery engagements. Architecture and infrastructure automation that cut AWS costs by 70% — the engineering foundation the rest of the career was built on.",
      pt: "Seis anos como consultor desenvolvedor em engajamentos globais de entrega. Arquitetura e automação de infraestrutura que reduziram custos de AWS em 70% — a base de engenharia sobre a qual o resto da carreira foi construída.",
    },
    metric: "−70%",
    metricLabel: { en: "AWS costs via infra automation", pt: "custos AWS via automação de infra" },
    metricContext: { en: "Global delivery", pt: "Entrega global" },
    subStats: [
      { label: { en: "AWS costs", pt: "Custos AWS" }, value: "−70%", arrow: true },
      { label: { en: "Tenure", pt: "Tempo de casa" }, value: { en: "6 years", pt: "6 anos" } },
    ],
  },
  {
    num: "07",
    id: "ifood",
    sector: { en: "Marketplace", pt: "Marketplace" },
    logo: "logos/ifood-opt.png",
    logoAlt: "iFood",
    period: "2017–2019",
    company: "iFood",
    role: "Tech Lead & Senior Product Manager",
    layers: ["U", "I"],
    story: {
      en: "Tech lead and senior product manager for the food-delivery marketplace at 9M+ orders/month. Drove platform reliability and product at hyper-growth scale, raising uptime by 42%.",
      pt: "Tech lead e senior product manager no marketplace de delivery com 9M+ pedidos/mês. Liderou confiabilidade de plataforma e produto em escala de hipercrescimento, elevando o uptime em 42%.",
    },
    metric: "+42%",
    metricLabel: { en: "platform uptime · 9M+ orders/month", pt: "uptime de plataforma · 9M+ pedidos/mês" },
    metricContext: { en: "Marketplace", pt: "Marketplace" },
    subStats: [
      { label: { en: "Platform uptime", pt: "Uptime" }, value: "+42%", arrow: true },
      { label: { en: "Orders", pt: "Pedidos" }, value: { en: "9M+/mo", pt: "9M+/mês" } },
    ],
  },
  {
    num: "08",
    id: "creditas",
    sector: { en: "Lending", pt: "Crédito" },
    logo: "logos/creditas-opt.png",
    logoAlt: "Creditas",
    period: "2016–2017",
    company: "Creditas",
    role: "Staff Technical Program Manager",
    layers: ["I", "L"],
    story: {
      en: "Staff technical program manager at the lending unicorn. Technical governance across product and engineering that lifted the app rating from 2.1 to 4.2★ and cut delivery lead time in half.",
      pt: "Staff technical program manager no unicórnio de crédito. Governança técnica entre produto e engenharia que elevou o rating do app de 2,1 para 4,2★ e reduziu o lead time de entrega pela metade.",
    },
    metric: { en: "2.1 → 4.2★", pt: "2,1 → 4,2★" },
    metricLabel: { en: "app rating · lead time halved", pt: "rating do app · lead time pela metade" },
    metricContext: { en: "Lending", pt: "Crédito" },
    subStats: [
      { label: { en: "App rating", pt: "Rating do app" }, value: { en: "2.1 → 4.2★", pt: "2,1 → 4,2★" }, arrow: true },
      { label: { en: "Lead time", pt: "Lead time" }, value: "−50%", arrow: true },
    ],
  },
];

const TR_GROUPS = [
  {
    key: "global",
    label: { en: "Global Companies", pt: "Empresas Globais" },
    blurb: { en: "World-class consulting and enterprise scale.", pt: "Consultoria de classe mundial e escala enterprise." },
    ids: ["thoughtworks", "vertigo", "corpay"],
  },
  {
    key: "latam",
    label: { en: "LATAM Unicorns", pt: "Unicórnios LATAM" },
    blurb: { en: "High-growth fintech and marketplaces.", pt: "Fintech e marketplaces de alto crescimento." },
    ids: ["ifood", "creditas", "stone"],
  },
  {
    key: "startup",
    label: { en: "Startup Growth", pt: "Crescimento de Startup" },
    blurb: { en: "Zero-to-scale product building.", pt: "Produto do zero à escala." },
    ids: ["willbank", "veecode"],
  },
];

const TR_BY_ID = Object.fromEntries(TR_CASES.map((c) => [c.id, c]));
const FEATURED_ID = "corpay";

const TR_OTHERS = [
  {
    logo: "logos/ifood-opt.png",
    logoAlt: "iFood",
    role: "Tech Lead & Senior Product Manager · 2017–2019",
    metric: "+42%",
    metricLabel: { en: "platform uptime · 9M+ orders/month", pt: "uptime de plataforma · 9M+ pedidos/mês" },
    arrow: true,
  },
  {
    logo: "logos/creditas-opt.png",
    logoAlt: "Creditas",
    role: "Staff Technical Program Manager · 2016–2017",
    metric: { en: "2.1 → 4.2★", pt: "2,1 → 4,2★" },
    metricLabel: { en: "app rating · lead time cut in half", pt: "rating do app · lead time reduzido pela metade" },
    arrow: true,
  },
  {
    logo: "logos/thoughtworks-opt.png",
    logoAlt: "ThoughtWorks",
    role: "Senior Consultant · Software Engineer · 2010–2016",
    metric: "−70%",
    metricLabel: { en: "AWS costs via infra automation", pt: "custos AWS via automação de infra" },
    arrow: true,
  },
];

/* ---------------------------------------------------------
   TrackRecord — condensed on-page (logos + compact cards),
   full case studies revealed in a side drawer.
--------------------------------------------------------- */
function TrackRecord() {
  const t = useT();
  const [open, setOpen] = React.useState(false);
  const [target, setTarget] = React.useState(null);
  const openCase = (num) => { setTarget(num || null); setOpen(true); };

  const proof = [
    { num: "15+", label: { en: "years in high-scale operations", pt: "anos em opera\u00e7\u00f5es de alta escala" } },
    { num: "8", label: { en: "companies operated", pt: "empresas operadas" } },
    { num: "200", label: { en: "people led", pt: "pessoas lideradas" } },
    { num: "5/5", label: { en: "BUILD layers applied", pt: "camadas BUILD aplicadas" } },
  ];

  const featured = TR_BY_ID[FEATURED_ID];

  return (
    <section className="section section--palha" id="track-record" data-screen-label="04 Track record">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">04</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Track Record", pt: "Track Record" })}
          </div>
          <h2 className="h1">{t({ en: "Real results in high-scale environments.", pt: "Resultado real em ambientes de alta escala." })}</h2>
          <p className="lead" style={{ marginTop: 24 }}>
            {t({
              en: "Positioning without evidence is a promise. Operated across global companies, LATAM unicorns, and startup growth.",
              pt: "Posicionamento sem evidência é promessa. Atuação em empresas globais, unicórnios LATAM e crescimento de startups.",
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
            <button className="btn btn--primary tr-featured__cta" type="button" onClick={() => openCase(`global-${FEATURED_ID}`)} aria-haspopup="dialog">
              <span>{t({ en: "View full case", pt: "Ver case completo" })}</span>
              <span className="arrow">→</span>
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

        <div className="tr-seg-intro">
          <span className="tr-seg-intro__label">{t({ en: "Find your scenario", pt: "Reconheça o seu cenário" })}</span>
          <span className="tr-seg-intro__text">{t({ en: "Proven across three kinds of environment — pick the one closest to yours.", pt: "Operação comprovada em três tipos de ambiente — escolha o mais próximo do seu." })}</span>
        </div>

        <div className="tr-segs">
          {TR_GROUPS.map((g) => (
            <div className="tr-seg" key={g.key}>
              <div className="tr-seg__head">
                <span className="tr-seg__label">{t(g.label)}</span>
                <span className="tr-seg__blurb">{t(g.blurb)}</span>
              </div>
              <div className="tr-seg__list">
                {g.ids.filter((id) => id !== FEATURED_ID).map((id) => {
                  const c = TR_BY_ID[id];
                  return (
                    <button className="tr-seg__row" key={id} type="button" onClick={() => openCase(`${g.key}-${id}`)} aria-haspopup="dialog" aria-label={`${c.company} — ${t(c.metric)} ${t(c.metricLabel)}`}>
                      <img className="tr-seg__logo" src={c.logo} alt={c.logoAlt} loading="lazy" />
                      <span className="tr-seg__info">
                        <span className="tr-seg__name">{c.company}</span>
                        <span className="tr-seg__role">{c.role}</span>
                      </span>
                      <span className="tr-seg__metric">{t(c.metric)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="tr-reveal">
          <button className="btn btn--primary" type="button" onClick={() => openCase(null)} aria-haspopup="dialog">
            <span>{t({ en: "See the full track record", pt: "Ver track record completo" })}</span>
            <span className="arrow">→</span>
          </button>
          <span className="tr-reveal__note">
            {t({ en: "Full cases · every sub-metric · grouped by environment", pt: "Cases completos · cada sub-métrica · agrupado por ambiente" })}
          </span>
        </div>
      </div>

      <Drawer
        open={open}
        onClose={() => { setOpen(false); setTarget(null); }}
        scrollToId={target ? `case-${target}` : null}
        eyebrow={t({ en: "Track Record", pt: "Track Record" })}
        title={t({ en: "Track record, by environment", pt: "Track record, por ambiente" })}
      >
        {TR_GROUPS.map((g) => (
          <section className="tr-dgroup" key={g.key}>
            <div className="tr-dgroup__head">
              <span className="tr-group__label">{t(g.label)}</span>
              <span className="tr-group__blurb">{t(g.blurb)}</span>
            </div>
            <div className="cases">
              {g.ids.map((id) => <Case key={id} domId={`case-${g.key}-${id}`} {...TR_BY_ID[id]} />)}
            </div>
          </section>
        ))}

        <p className="tr-footnote">
          {t({
            en: "These numbers are proof of the founder's experience. They are not an automatic promise of results for every client. Each Oxente Builder engagement defines target metrics in the initial BRD, calibrated by the diagnosis.",
            pt: "Estes números são prova de experiência do fundador. Não são promessa automática de resultado para todo cliente. Cada engajamento da Oxente Builder define metas-alvo no BRD inicial, calibradas pelo diagnóstico.",
          })}
        </p>
      </Drawer>
    </section>
  );
}

function Case({ domId, sector, logo, logoAlt, period, company, role, layers, story, clients, metric, metricLabel, metricContext, subStats }) {
  const t = useT();
  return (
    <article className="case" id={domId}>
      <div className="case__head">
        <div className="case__num">{t(sector)}</div>
        <div className="case__period">{t(period)}</div>
        <img className="case__logo" src={logo} alt={logoAlt} loading="lazy" />
      </div>

      <div className="case__body">
        <div>
          <div className="case__head-line">
            <h3 className="case__company">{company}</h3>
            <div className="case__layers" aria-label={t({ en: "BUILD method layers applied", pt: "Camadas do método BUILD aplicadas" })}>
              {layers.map(l => <span className="case__layer" key={l}>{l}</span>)}
            </div>
          </div>
          <div className="case__role">{role}</div>
        </div>

        <p className="case__story">{t(story)}</p>

        {clients && (
          <div className="case__clients">
            <span className="case__clients-label">{t({ en: "Clients", pt: "Clientes" })}</span>{clients}
          </div>
        )}

        {subStats && (
          <div className="case__sub-stats">
            {subStats.map((s, i) => (
              <div className="case__sub-stat" key={i}>
                <div className="case__sub-stat-label">{t(s.label)}</div>
                <div className={`case__sub-stat-value ${s.arrow ? "has-arrow" : ""}`}>{t(s.value)}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="case__primary">
        <div className="case__metric">{t(metric)}</div>
        <div className="case__metric-label">{t(metricLabel)}</div>
        {metricContext && <div className="case__metric-context">{t(metricContext)}</div>}
      </div>
    </article>
  );
}

Object.assign(window, { Drawer, MethodFull, MethodBuild, BeforeAfter, TrackRecord, CompanyMarquee, Case, ImageLightbox });
