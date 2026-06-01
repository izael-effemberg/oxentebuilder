/* ============================================
   Oxente Builder — Sections (Part 1)
   Nav, Hero, EditorialBand, Pain, Cost, WhyNow, ICP, NotFor
   ============================================ */

const CTA_PRIMARY_LABEL = { en: "Book a 30-minute call", pt: "Agendar conversa de 30 minutos" };

function CTAButton({ label, variant = "primary", className = "" }) {
  const t = useT();
  return (
    <a
      href="#cta"
      className={`btn btn--${variant} ${className}`}
    >
      <span>{t(label || CTA_PRIMARY_LABEL)}</span>
      <span className="arrow">→</span>
    </a>
  );
}

function Nav() {
  const t = useT();
  const links = [
    { href: "#metodo", label: { en: "Method", pt: "Método" } },
    { href: "#track-record", label: { en: "Proof", pt: "Prova" } },
    { href: "#para-quem", label: { en: "Who it's for", pt: "Para quem" } },
    { href: "#ofertas", label: { en: "Engagements", pt: "Ofertas" } },
    { href: "#faq", label: { en: "FAQ", pt: "FAQ" } },
  ];
  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label="Oxente Builder">
          <LogoLockup iconSize={36} />
        </a>
        <div className="nav__links">
          {links.map((l) => <a href={l.href} key={l.href}>{t(l.label)}</a>)}
        </div>
        <div className="nav__actions">
          <LangToggle />
          <a href="#cta" className="btn btn--primary nav__cta">
            {t({ en: "Talk to us", pt: "Conversar" })} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const t = useT();
  const companies = "ThoughtWorks · iFood · Stone · Creditas · WillBank · Vertigo · Corpay";
  const metrics = [
    {
      num: "20M+",
      unit: { en: "/mo", pt: "/mês" },
      label: { en: "Monthly queries on products operated by the founder", pt: "Consultas/mês em produtos operados pelo fundador" },
    },
    {
      num: { en: "$3.3M", pt: "R$ 18M" },
      unit: { en: "/mo", pt: "/mês" },
      label: { en: "Payment volume protected in acquirer fallback", pt: "TPV protegido em fallback entre adquirentes" },
    },
    {
      num: "200",
      unit: { en: "people", pt: "pessoas" },
      label: { en: "Led across product and engineering", pt: "Lideradas entre produto e engenharia" },
    },
  ];
  return (
    <header className="section hero" id="top" data-screen-label="01 Hero">
      <div className="container hero__split">
        <div className="hero__brandpanel" aria-hidden="false">
          <div className="hero__brandpanel-glow" aria-hidden="true"></div>
          <HeroBrand stacked className="hero__brand" />
        </div>

        <div className="hero__content">
          <h1>
            {t({
              en: <>Into the business.<br/>All the way to the <em className="accent">code</em>.</>,
              pt: <>Entramos no negócio.<br/>Descemos até o <em className="accent">código</em>.</>,
            })}
          </h1>

          <p className="hero__sub">
            {t({
              en: "Executive consulting for CEOs, founders, and technology leaders who must redesign product, engineering, and organization for the AI era. No polished report. No theory. Execution.",
              pt: "Consultoria executiva para CEOs, founders e líderes de tecnologia que precisam redesenhar produto, engenharia e organização na era da IA. Sem relatório bonito. Sem teoria. Com execução.",
            })}
          </p>

          <div className="hero__ctas">
            <CTAButton />
            <a href="#metodo" className="btn btn--ghost">
              {t({ en: "Explore the BUILD method", pt: "Conhecer o método BUILD" })}
              <span className="arrow">↓</span>
            </a>
          </div>

          <div className="hero__proof">
            <div className="hero__proof-lead">
              <div className="hero__proof-years">
                <span className="hero__proof-years-num">15<span className="hero__proof-years-plus">+</span></span>
                <span className="hero__proof-years-word">{t({ en: "years", pt: "anos" })}</span>
              </div>
              <div className="hero__proof-cos">
                <span className="hero__proof-cos-label">{t({ en: "Operated at", pt: "Atuação em" })}</span>
                <span className="hero__proof-cos-list">{companies}</span>
              </div>
            </div>

            <div className="hero__proof-metrics">
              {metrics.map((m, i) => (
                <div className="hero__metric" key={i}>
                  <div className="hero__metric-num">
                    {t(m.num)}<span className="hero__metric-unit">{t(m.unit)}</span>
                  </div>
                  <div className="hero__metric-label">{t(m.label)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Pain() {
  const t = useT();
  const observed = [
    { en: "Headcount up. Velocity down.", pt: "Headcount em alta. Velocidade em queda." },
    { en: "AI adopted in pilots. Never scaled to operations.", pt: "IA adotada em pilotos. Sem escalar para a operação." },
    { en: "Alignment meetings multiplying. Decisions slowing.", pt: "Reuniões de alinhamento multiplicando. Decisões demorando." },
    { en: "Engineering ships — then has to redo it soon after.", pt: "Engenharia entregando — e precisando refazer logo depois." },
  ];
  const cause = [
    { en: "The structure never changed to absorb AI.", pt: "A estrutura não mudou para receber a IA." },
    { en: "Business, product, and engineering operate in silos.", pt: "Negócio, produto e engenharia operam em silos." },
    { en: "Oral decisions. Ambiguous requirements. No traceability.", pt: "Decisões orais. Requisitos ambíguos. Sem rastreabilidade." },
    { en: "AI stacked on a broken process only accelerates the noise.", pt: "IA empilhada em processo quebrado só acelera o ruído." },
  ];

  return (
    <section className="section" id="problema" data-screen-label="02 Problema">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">01</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "The Problem", pt: "O Problema" })}
          </div>
          <h2 className="h1">
            {t({
              en: <>You have more people in product and engineering than ever.<span className="muted"> And you ship less than you should.</span></>,
              pt: <>Você tem mais gente em produto e engenharia do que nunca.<span className="muted"> E entrega menos do que deveria.</span></>,
            })}
          </h2>
          <p className="lead" style={{marginTop: 28}}>
            {t({
              en: "The paradox of the AI era — in two layers. What leadership sees, and what the BUILD method reveals beneath the symptom.",
              pt: "O paradoxo da era da IA — em duas camadas. O que a liderança vê. E o que o método BUILD revela por baixo do sintoma.",
            })}
          </p>
        </div>

        <div className="pain-diagnostic">
          <div className="pain-col pain-col--observed">
            <div className="pain-col__label">{t({ en: "Observed symptom", pt: "Sintoma observado" })}</div>
            <h3 className="pain-col__title">{t({ en: "What leadership sees day to day.", pt: "O que a liderança vê no dia a dia." })}</h3>
            <ol className="pain-list">
              {observed.map((it, i) => <li key={i}>{t(it)}</li>)}
            </ol>
          </div>
          <div className="pain-col pain-col--cause">
            <div className="pain-col__label">{t({ en: "Root cause · BUILD diagnosis", pt: "Causa raiz · Diagnóstico BUILD" })}</div>
            <h3 className="pain-col__title">{t({ en: "What the method reveals beneath the symptom.", pt: "O que o método revela por baixo do sintoma." })}</h3>
            <ol className="pain-list">
              {cause.map((it, i) => <li key={i}>{t(it)}</li>)}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cost() {
  const t = useT();
  const cells = [
    {
      num: { en: "$300K–750K", pt: "R$ 1,5–4M" },
      label: { en: "Annual cost of a 10-person squad in São Paulo", pt: "Custo anual de um squad de 10 pessoas em São Paulo" },
      insight: {
        en: "Every sub-optimized squad equals the budget of an entire operation — paid in headcount, not in shipped product.",
        pt: "Cada squad sub-otimizado equivale ao orçamento de uma operação inteira — pago em headcount, não em produto entregue.",
      },
      src: { en: "Base salary + 70–90% overhead", pt: "Base salarial + 70–90% de encargos" },
    },
    {
      num: "30–50%",
      label: { en: "Of engineering time spent on rework", pt: "Do tempo de engenharia em retrabalho" },
      insight: {
        en: "Half the technical capacity redoing what could have been done right the first time. Not a talent gap — a spec gap.",
        pt: "Metade da capacidade técnica refazendo o que poderia ter sido feito direito na primeira vez. Não é falta de talento — é falta de spec.",
      },
      src: "DORA State of DevOps 2024",
    },
    {
      num: "+50%",
      label: { en: "Of rework starts in poorly defined requirements", pt: "Do retrabalho começa em requisitos mal definidos" },
      insight: {
        en: "The cost doesn't begin in the code. It begins in oral, ambiguous product decisions with no acceptance criteria.",
        pt: "O custo não nasce no código. Nasce em decisões de produto orais, ambíguas e sem critério de aceite.",
      },
      src: "Carnegie Mellon SEI",
    },
    {
      num: { en: "2.5×", pt: "2,5×" },
      label: { en: "Cost of rebuilt software vs. original development", pt: "Custo de software refeito vs. desenvolvimento original" },
      insight: {
        en: "Each rebuilt feature costs 2.5× the original — and still carries the structural debt underneath.",
        pt: "Cada feature refeita custa 2,5 vezes mais que a versão original — e ainda mantém a dívida estrutural por baixo.",
      },
      src: "Code Climate",
    },
    {
      num: "88%",
      label: { en: "Of companies use AI. Only 1/3 scaled past the pilot.", pt: "Empresas usam IA. Apenas 1/3 escalou além do piloto." },
      insight: {
        en: "AI became a commodity in the discourse. But 67% of companies still haven't integrated it into real product operations.",
        pt: "A IA virou commodity no discurso. Mas 67% das empresas ainda não a integrou na operação real de produto.",
      },
      src: "McKinsey State of AI 2025",
    },
    {
      num: "3×",
      label: { en: "High performers redesign workflows, not just tools", pt: "Empresas de alto desempenho redesenham workflows, não só ferramentas" },
      insight: {
        en: "AI's real multiplier is in organizational structure — not in the number of licenses purchased.",
        pt: "O multiplicador real da IA está na estrutura organizacional — não na quantidade de licenças contratadas.",
      },
      src: "McKinsey, 2025",
    },
  ];

  return (
    <section className="section section--palha" id="custo" data-screen-label="03 Custo">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">02</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Cost of standing still", pt: "Custo de não mudar" })}
          </div>
          <h2 className="h2">
            {t({ en: "Every month without redesigning the structure has a price.", pt: "Cada mês sem redesenhar a estrutura tem um preço." })}
          </h2>
          <p className="lead" style={{marginTop: 24}}>
            {t({ en: "Six numbers that measure where product and engineering lose money today.", pt: "Seis números que medem onde produto e engenharia perdem dinheiro hoje." })}
          </p>
          <div className="cost-hint">
            <span style={{color: "var(--sertao)"}}>↘</span>
            {t({ en: "Hover each card to see why", pt: "Passe o mouse sobre cada card para ver o porquê" })}
          </div>
        </div>

        <div className="cost-cards">
          {cells.map((c, i) => (
            <div className="cost-card" key={i}>
              <div className="cost-card__num">{t(c.num)}</div>
              <div className="cost-card__label">{t(c.label)}</div>
              <div className="cost-card__rule"></div>
              <div className="cost-card__insight">{t(c.insight)}</div>
              <div className="cost-card__src">{t(c.src)}</div>
            </div>
          ))}
        </div>

        <div className="cost-synthesis">
          <div>
            <div className="cost-synthesis__label">{t({ en: "Synthesis", pt: "Síntese" })}</div>
            <h3 className="cost-synthesis__title">
              {t({ en: "The bill grows on three vectors. The BUILD method attacks all three.", pt: "A conta cresce em três vetores. O método BUILD ataca os três." })}
            </h3>
          </div>
          <div className="cost-synthesis__body">
            {t({
              en: <><strong>Organizational structure</strong> (layer L) — to resolve silos and governance.<br/><strong>Atomic specs</strong> (layer D) — to cut rework at the source.<br/><strong>Context architecture</strong> (layer I) — so AI executes with precision instead of generating noise.</>,
              pt: <><strong>Estrutura organizacional</strong> (camada L) — para resolver silos e governança.<br/><strong>Specs atômicas</strong> (camada D) — para reduzir retrabalho na origem.<br/><strong>Arquitetura de contexto</strong> (camada I) — para a IA executar com precisão, em vez de gerar ruído.</>,
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyNow() {
  const t = useT();
  return (
    <section className="section" id="por-que-agora" data-screen-label="04 Por que agora">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">03</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Why now", pt: "Por que agora" })}
          </div>
          <h2 className="h1">{t({ en: "The window is closing.", pt: "A janela está se fechando." })}</h2>
          <p className="lead" style={{marginTop: 24}}>
            {t({
              en: "Two simultaneous forces are redefining the economics of product and engineering over the next 36 months. Whoever redesigns first sets the advantage.",
              pt: "Duas forças simultâneas redefinem a economia de produto e engenharia nos próximos 36 meses. Quem redesenhar primeiro estabelece vantagem.",
            })}
          </p>
        </div>

        <div className="why-now-grid">
          <div className="pressure">
            <div className="pressure__label">{t({ en: "Vector 01 · Technological pressure", pt: "Vetor 01 · Pressão tecnológica" })}</div>
            <h3 className="pressure__title">{t({ en: "AI is shrinking the viable size of engineering teams.", pt: "IA está reduzindo o tamanho viável de times de engenharia." })}</h3>
            <div className="pressure__stats">
              <div className="pressure__stat">
                <div className="pressure__stat-num">−80%</div>
                <div className="pressure__stat-text">
                  {t({
                    en: <><strong>Projected reduction</strong> of engineering teams by 2030 with AI-native platforms.</>,
                    pt: <><strong>Redução prevista de times</strong> de engenharia até 2030 com plataformas nativas de IA.</>,
                  })}
                </div>
              </div>
              <div className="pressure__stat">
                <div className="pressure__stat-num">3×</div>
                <div className="pressure__stat-text">
                  {t({
                    en: <><strong>Competitive advantage</strong> for companies that redesign workflows — not just adopt tools.</>,
                    pt: <><strong>Vantagem competitiva</strong> de empresas que redesenharem workflows — não só adotarem ferramentas.</>,
                  })}
                </div>
              </div>
            </div>
            <div className="pressure__src">Gartner · McKinsey 2025</div>
          </div>

          <div className="pressure">
            <div className="pressure__label">{t({ en: "Vector 02 · Organizational pressure", pt: "Vetor 02 · Pressão organizacional" })}</div>
            <h3 className="pressure__title">{t({ en: "Fractional C-levels are replacing full-time CTOs and CPOs.", pt: "C-levels fractional estão substituindo CTOs e CPOs full-time." })}</h3>
            <div className="pressure__stats">
              <div className="pressure__stat">
                <div className="pressure__stat-num">+68%</div>
                <div className="pressure__stat-text">
                  {t({
                    en: <><strong>Annual growth</strong> in demand for fractional product and engineering executives.</>,
                    pt: <><strong>Crescimento anual</strong> da demanda por executivos fractional em produto e engenharia.</>,
                  })}
                </div>
              </div>
              <div className="pressure__stat">
                <div className="pressure__stat-num">−50%</div>
                <div className="pressure__stat-text">
                  {t({
                    en: <><strong>Average cost</strong> of a fractional C-level vs. full-time, at the same strategic level.</>,
                    pt: <><strong>Custo médio</strong> de um C-level fractional vs. full-time, no mesmo nível estratégico.</>,
                  })}
                </div>
              </div>
            </div>
            <div className="pressure__src">Chief Outsiders · Bain 2025</div>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline__label">{t({ en: "Window of action", pt: "Janela de ação" })}</div>
          <div className="timeline__track">
            <div className="timeline__rail">
              <div className="timeline__line"></div>
              <div className="timeline__window"></div>
              <div className="timeline__dots">
                <div className="timeline__dot timeline__dot--active"></div>
                <div className="timeline__dot"></div>
                <div className="timeline__dot"></div>
                <div className="timeline__dot"></div>
              </div>
            </div>
            <div className="timeline__captions">
              <div className="timeline__caption-block timeline__caption-block--active">
                <div className="timeline__year">2026</div>
                <div className="timeline__caption">{t({ en: "Today", pt: "Hoje" })}</div>
              </div>
              <div className="timeline__caption-block">
                <div className="timeline__year">2027</div>
                <div className="timeline__caption">{t({ en: "Ideal window", pt: "Janela ideal" })}</div>
              </div>
              <div className="timeline__caption-block">
                <div className="timeline__year">2028</div>
                <div className="timeline__caption">{t({ en: "Advantage", pt: "Vantagem" })}</div>
              </div>
              <div className="timeline__caption-block">
                <div className="timeline__year">2030</div>
                <div className="timeline__caption">{t({ en: "Stabilized", pt: "Estabilizado" })}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ICP() {
  const t = useT();
  const icps = [
    {
      scenario: { en: "Scenario A", pt: "Cenário A" },
      title: { en: "Company scaling a digital product", pt: "Empresa com produto digital escalando" },
      meta: [
        [{ en: "Size", pt: "Porte" }, { en: "$2M–40M revenue or Series A/B", pt: "R$ 10M–200M de receita ou Series A/B" }],
        [{ en: "Sector", pt: "Setor" }, { en: "Fintech, SaaS, marketplace, healthtech", pt: "Fintech, SaaS, marketplace, healthtech" }],
        [{ en: "Trigger", pt: "Gatilho" }, { en: "Team grows, velocity drops, AI without results", pt: "Time cresce, velocidade cai, IA sem resultado" }],
        [{ en: "Buyer", pt: "Quem compra" }, { en: "CEO/founder or overloaded CTO", pt: "CEO/founder ou CTO sobrecarregado" }],
      ],
      diagnose: [
        { en: "Large squad with low delivery velocity", pt: "Squad grande com velocidade baixa de entrega" },
        { en: "AI adopted, process unchanged in practice", pt: "IA adotada, processo inalterado na prática" },
        { en: "High rework from ambiguous requirements", pt: "Retrabalho alto por requisitos ambíguos" },
        { en: "New-dev onboarding taking 6–8 weeks", pt: "Onboarding de novos devs levando 6–8 semanas" },
      ],
    },
    {
      scenario: { en: "Scenario B", pt: "Cenário B" },
      title: { en: "Traditional company building a digital product", pt: "Empresa tradicional criando produto digital" },
      meta: [
        [{ en: "Size", pt: "Porte" }, { en: "$40M–400M annual revenue", pt: "R$ 200M–2B de receita anual" }],
        [{ en: "Sector", pt: "Setor" }, { en: "Finance, retail, energy, healthcare, logistics", pt: "Financeiro, varejo, energia, saúde, logística" }],
        [{ en: "Trigger", pt: "Gatilho" }, { en: "New CEO/CTO, board pressure, AI without delivery", pt: "Novo CEO/CTO, pressão de board, IA sem entrega" }],
        [{ en: "Buyer", pt: "Quem compra" }, { en: "CEO or CDO. Rarely the IT CTO", pt: "CEO ou CDO. Raramente o CTO de TI" }],
      ],
      diagnose: [
        { en: "IT runs as a project factory, not product", pt: "TI opera como fábrica de projetos, não produto" },
        { en: "No discovery, documentation, or acceptance criteria", pt: "Sem discovery, documentação nem critério de aceite" },
        { en: "AI in leadership's talk, absent in operations", pt: "IA no discurso da liderança, ausente na operação" },
        { en: "Structure designed for the previous paradigm", pt: "Estrutura desenhada para o paradigma anterior" },
      ],
    },
  ];

  return (
    <section className="section section--palha" id="para-quem" data-screen-label="05 Para quem">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">04</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Who it's for", pt: "Para quem é" })}
          </div>
          <h2 className="h1">{t({ en: "Two scenarios. Recognize yours.", pt: "Dois cenários. Reconheça o seu." })}</h2>
          <p className="lead" style={{marginTop: 24}}>
            {t({
              en: "Very different companies in size and sector share the same structural pain. Size isn't what matters — who decides and what needs unlocking is.",
              pt: "Empresas muito diferentes em porte e setor compartilham a mesma dor estrutural. Não importa o porte — importa quem decide e o que precisa destravar.",
            })}
          </p>
        </div>

        <div className="icp-intro">
          <span className="icp-intro__pill">{t({ en: "A or B", pt: "A ou B" })}</span>
          <span>{t({ en: "Mentally pick the scenario that best describes your operation today.", pt: "Selecione mentalmente o cenário que mais descreve sua operação hoje." })}</span>
        </div>

        <div className="icp-grid">
          {icps.map((icp, i) => (
            <article className="icp-card" key={i}>
              <div className="icp-card__scenario">{t(icp.scenario)}</div>
              <h3 className="icp-card__title">{t(icp.title)}</h3>
              <dl className="icp-card__meta">
                {icp.meta.map(([k, v], j) => (
                  <React.Fragment key={j}>
                    <dt>{t(k)}</dt>
                    <dd>{t(v)}</dd>
                  </React.Fragment>
                ))}
              </dl>
              <div className="icp-card__diagnose-label">{t({ en: "How to diagnose", pt: "Como diagnosticar" })}</div>
              <ul className="icp-card__pains">
                {icp.diagnose.map((p, j) => <li key={j}>{t(p)}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="icp-bridge">
          {t({
            en: <><strong>Both scenarios respond to the same method.</strong> What changes is the entry point and the pace of the engagement. The BRD adapts to size, but the five BUILD layers are the same — because the root cause is the same.</>,
            pt: <><strong>Ambos os cenários respondem ao mesmo método.</strong> O que muda é o ponto de entrada e o ritmo do engajamento. O BRD se ajusta ao porte, mas as cinco camadas do BUILD são as mesmas — porque a causa raiz é a mesma.</>,
          })}
        </div>
      </div>
    </section>
  );
}

function NotFor() {
  const t = useT();
  const items = [
    { en: "Anyone looking for a pure body shop of PMs or devs", pt: "Quem busca apenas body shop de PMs ou devs" },
    { en: "Anyone wanting an inspirational workshop with no execution", pt: "Quem quer workshop inspiracional sem execução" },
    { en: "Anyone wanting AI without changing the process", pt: "Quem quer IA sem mudar processo" },
    { en: "Anyone wanting a polished report with no organizational change", pt: "Quem quer relatório bonito sem mudança organizacional" },
    { en: "Anyone without an executive sponsor", pt: "Quem não tem sponsor executivo" },
    { en: "Anyone expecting transformation without touching governance, product, and architecture", pt: "Quem espera transformação sem mexer em governança, produto e arquitetura" },
  ];

  return (
    <section className="section" id="nao-para" data-screen-label="06 Para quem não é">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">05</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Who it's not for", pt: "Para quem não é" })}
          </div>
          <h2 className="h2">
            {t({ en: "Oxente Builder isn't for everyone.", pt: "A Oxente Builder não é para todo mundo." })}
          </h2>
          <p className="lead" style={{marginTop: 24}}>
            {t({ en: "Being upfront about this saves everyone's time.", pt: "Ser direto sobre isso poupa o tempo de todo mundo." })}
          </p>
        </div>

        <ul className="not-for-list">
          {items.map((it, i) => <li key={i}>{t(it)}</li>)}
        </ul>
      </div>
    </section>
  );
}

// Essência — Missão, Valores e ponte para o Método BUILD.
// Substitui a antiga faixa editorial: um manifesto escuro logo após o hero.
function Essence() {
  const t = useT();
  const values = [
    {
      title: { en: "Execution over theory", pt: "Execução acima de teoria" },
      text: {
        en: "No polished report, no inspirational workshop. A business decision that reaches the code.",
        pt: "Sem relatório bonito, sem workshop inspiracional. Decisão de negócio que chega até o código.",
      },
    },
    {
      title: { en: "Structure before tooling", pt: "Estrutura antes de ferramenta" },
      text: {
        en: "AI stacked on a broken process only accelerates the noise. Structure first — acceleration after.",
        pt: "IA empilhada em processo quebrado só acelera o ruído. Primeiro a estrutura — depois a aceleração.",
      },
    },
    {
      title: { en: "Business and code, one language", pt: "Negócio e código no mesmo idioma" },
      text: {
        en: "We enter at strategy and go down to implementation. Nothing lost in translation along the way.",
        pt: "Entramos na estratégia e descemos até a implementação. Sem tradução perdida no meio do caminho.",
      },
    },
    {
      title: { en: "Traceability and clarity", pt: "Rastreabilidade e clareza" },
      text: {
        en: "Atomic specs, acceptance criteria, and documented decisions. No oral, ambiguous requirements.",
        pt: "Specs atômicas, critério de aceite e decisões documentadas. Nada de requisito oral e ambíguo.",
      },
    },
    {
      title: { en: "Platform as a product", pt: "Plataforma como produto" },
      text: {
        en: "Engineering treated as an internal product: context, experience, and measurable impact for those who build.",
        pt: "Engenharia tratada como produto interno: contexto, experiência e impacto medível para quem constrói.",
      },
    },
    {
      title: { en: "Client autonomy", pt: "Autonomia do cliente" },
      text: {
        en: "Living documents that stay inside the company and teach the team to run the method without us.",
        pt: "Documentos vivos que ficam dentro da empresa e ensinam o time a operar o método sem depender de nós.",
      },
    },
  ];

  const buildLetters = ["B", "U", "I", "L", "D"];

  return (
    <section className="section section--palha essence" id="essencia" data-screen-label="00 Essência">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">00</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Essence", pt: "Essência" })}
          </div>
          <h2 className="h1">
            {t({
              en: <>Give leadership back control over product and engineering<span className="muted"> in the AI era.</span></>,
              pt: <>Devolver à liderança o controle sobre produto e engenharia<span className="muted"> na era da IA.</span></>,
            })}
          </h2>
          <p className="lead" style={{ marginTop: 28 }}>
            {t({
              en: "This is the Oxente Builder mission — delivered with structure, context, and execution, never with a report. Five principles guide every engagement, and all of them run inside a single system: the BUILD method.",
              pt: "Esta é a missão da Oxente Builder — cumprida com estrutura, contexto e execução, nunca com relatório. Cinco princípios guiam cada engajamento, e todos operam dentro de um único sistema: o método BUILD.",
            })}
          </p>
        </div>

        <div className="essence__values">
          {values.map((v, i) => (
            <div className="value" key={i}>
              <span className="value__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="value__title">{t(v.title)}</h3>
              <p className="value__text">{t(v.text)}</p>
            </div>
          ))}
        </div>

        <div className="essence__method">
          <div className="essence__method-left">
            <span className="essence__method-label">{t({ en: "The method", pt: "O método" })}</span>
            <h3 className="essence__method-title">
              {t({
                en: <>The principles become practice across <b>five layers</b> — from business down to delivery with AI.</>,
                pt: <>Os princípios viram prática em <b>cinco camadas</b> — do negócio até a entrega com IA.</>,
              })}
            </h3>
          </div>
          <div className="essence__build">
            <div className="essence__build-letters">
              {buildLetters.map((l) => (
                <span className="essence__build-letter" key={l}>{l}</span>
              ))}
            </div>
            <a href="#metodo" className="essence__build-link">
              {t({ en: "See the full method", pt: "Ver o método completo" })} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, Essence, Pain, Cost, WhyNow, ICP, NotFor, CTAButton, CTA_PRIMARY_LABEL });
