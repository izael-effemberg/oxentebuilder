/* ============================================
   Oxente Builder — Sections (Part 3)
   WhyUs, Founder, Flow, FAQ, Final CTA, Footer
   (Packages now lives in offers.jsx)
   ============================================ */

function WhyUs() {
  const t = useT();
  return (
    <section className="section section--palha" id="por-que-nos" data-screen-label="11 Por que a Oxente">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">08</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Why Oxente Builder", pt: "Por que a Oxente Builder" })}
          </div>
          <h2 className="h1">
            {t({
              en: <>Most consultancies enter in the middle.<br />We enter the business and go all the way to the code.</>,
              pt: <>A maioria entra no meio.<br />Nós entramos no negócio e descemos até o código.</>,
            })}
          </h2>
        </div>

        <div className="why">
          <div className="why__col">
            <div className="why__label">{t({ en: "Most enter a single layer", pt: "A maioria entra em uma camada" })}</div>
            <div className="why__title">{t({ en: "Product consultants stay in product. Engineering ones, in engineering. AI ones, in the tool.", pt: "Consultores de produto ficam no produto. De engenharia, na engenharia. De IA, na ferramenta." })}</div>
            <p className="why__body">
              {t({
                en: "No one walks all five layers. No one redesigns the organizational structure that keeps the problem alive. And everyone leaves with a report and no accountability for the result.",
                pt: "Ninguém percorre as cinco camadas. Ninguém redesenha a estrutura organizacional que mantém o problema vivo. E todos saem com relatório sem responsabilidade pelo resultado.",
              })}
            </p>
          </div>
          <div className="why__col why__col--us">
            <div className="why__label">{t({ en: "Oxente Builder", pt: "A Oxente Builder" })}</div>
            <div className="why__title">{t({ en: "Enters the business, walks all five layers, redesigns the organization, and goes all the way to the code.", pt: "Entra no negócio, percorre as cinco camadas, redesenha a organização e desce até o código." })}</div>
            <p className="why__body">
              {t({
                en: "Founded by Izael Effemberg, a software engineer who became a product leader. A proprietary BUILD method. Real fluency across all five layers. A declared goal: to make Oxente Builder unnecessary by the end of every engagement.",
                pt: "Fundada por Izael Effemberg, engenheiro de software que se tornou líder de produto. Método BUILD próprio. Fluência real nas cinco camadas. Objetivo declarado de tornar a Oxente Builder desnecessária ao final de cada engajamento.",
              })}
            </p>
          </div>
        </div>
      </div>
    </section>);

}

function Founder() {
  const t = useT();
  const layers = [
  {
    letter: "B",
    name: { en: "Business", pt: "Negócio" },
    proof: {
      en: <>Strategy and governance in regulated fintech. <strong>Corpay, Vertigo</strong> (P&G, Itaú, Banco Master). MBA in Corporate Governance.</>,
      pt: <>Estratégia e governança em fintech regulado. <strong>Corpay, Vertigo</strong> (P&G, Itaú, Banco Master). MBA em Governança Corporativa.</>,
    },
  },
  {
    letter: "U",
    name: { en: "Product", pt: "Produto" },
    proof: {
      en: <>GPM with <strong>5 direct PMs, 50 people in the tribe</strong>. iFood, WillBank, Stone, Corpay.</>,
      pt: <>GPM com <strong>5 PMs diretos, 50 pessoas na tribo</strong>. iFood, WillBank, Stone, Corpay.</>,
    },
  },
  {
    letter: "I",
    name: { en: "Infrastructure", pt: "Infraestrutura" },
    proof: {
      en: <>APIs, Pix, payments, and mobile. Architecture and SLA at <strong>Stone, Creditas, iFood, ThoughtWorks</strong>.</>,
      pt: <>APIs, Pix, pagamentos e mobile. Arquitetura e SLA em <strong>Stone, Creditas, iFood, ThoughtWorks</strong>.</>,
    },
  },
  {
    letter: "L",
    name: { en: "Leadership", pt: "Liderança" },
    proof: {
      en: <>Organizational redesign at <strong>P&G, Itaú, Banco Master</strong>. Operating models and governance.</>,
      pt: <>Redesenho organizacional em <strong>P&G, Itaú, Banco Master</strong>. Operating models e governança.</>,
    },
  },
  {
    letter: "D",
    name: { en: "Delivery", pt: "Entrega" },
    proof: {
      en: <>Spec Driven Development, Scale OS, <strong>AI as an execution co-pilot</strong> in regulated environments.</>,
      pt: <>Spec Driven Development, Scale OS, <strong>IA como co-piloto de execução</strong> em ambientes regulados.</>,
    },
  }];

  const stats = [
  { num: "15+", label: { en: "Years", pt: "Anos" } },
  { num: "200", label: { en: "People led", pt: "Pessoas lideradas" } },
  { num: "5", label: { en: "Direct PMs", pt: "PMs diretos" } },
  { num: "53", label: { en: "Indirect reports", pt: "Indiretos" } }];


  return (
    <section className="section" id="fundador" data-screen-label="12 Fundador">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">10</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "About the founder", pt: "Sobre o fundador" })}
          </div>
          <h2 className="h1">
            {t({ en: "Founded by someone who lived all five layers.", pt: "Fundada por alguém que viveu as cinco camadas." })}
          </h2>
          <p className="lead" style={{ marginTop: 24 }}>
            {t({
              en: "A software engineer who became an executive product leader. 15+ years at ThoughtWorks, iFood, Stone, Creditas, WillBank, Vertigo, and Corpay, operating strategy, product, architecture, organization, and delivery.",
              pt: "Engenheiro de software que se tornou líder executivo de produto. 15+ anos em ThoughtWorks, iFood, Stone, Creditas, WillBank, Vertigo e Corpay, operando estratégia, produto, arquitetura, organização e entrega.",
            })}
          </p>
        </div>

        <div className="founder2">
          <aside className="founder2__aside">
            <figure className="founder2__portrait">
              <image-slot
                id="founder-portrait"
                class="founder2__portrait-slot"
                shape="rect"
                placeholder="Portrait · 4:5">
              </image-slot>
              <figcaption className="founder2__id">
                <span className="founder2__id-name">Izael Effemberg</span>
                <span className="founder2__id-role">{t({ en: "Founder · Fractional CPO / CTO", pt: "Fundador · CPO / CTO Fracional" })}</span>
              </figcaption>
            </figure>

            <div className="founder2__stats" role="list" aria-label={t({ en: "Track record", pt: "Histórico" })}>
              {stats.map((s, i) =>
              <div className="founder2__stat" role="listitem" key={i}>
                  <div className="founder2__stat-num">{s.num}</div>
                  <div className="founder2__stat-label">{t(s.label)}</div>
                </div>
              )}
            </div>

            <div className="founder2__tags" aria-label={t({ en: "Credentials", pt: "Credenciais" })}>
              <span className="founder2__tag founder2__tag--accent">{t({ en: "MBA · Corporate Governance", pt: "MBA · Governança Corporativa" })}</span>
              <span className="founder2__tag">P&G · Itaú · Banco Master</span>
            </div>
          </aside>

          <div className="founder2__body">
            <div className="founder2__body-head">
              <span className="founder2__body-eyebrow">{t({ en: "Five BUILD layers — lived, not theorized", pt: "Cinco camadas do BUILD — vividas, não teorizadas" })}</span>
              <p className="founder2__body-intro">
                {t({
                  en: "Most consultants enter one layer. Each phase of the method maps to a place Izael actually operated — with the companies and the scale to prove it.",
                  pt: "A maioria dos consultores entra em uma camada. Cada fase do método corresponde a um lugar onde Izael de fato operou — com as empresas e a escala para comprovar.",
                })}
              </p>
            </div>

            <ul className="founder2__layers">
              {layers.map((l, i) =>
              <li className="founder2__layer" key={i}>
                  <div className="founder2__layer-rail">
                    <span className="founder2__layer-chip">{l.letter}</span>
                  </div>
                  <div className="founder2__layer-content">
                    <div className="founder2__layer-name">{t(l.name)}</div>
                    <p className="founder2__layer-proof">{t(l.proof)}</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}

function Flow() {
  const t = useT();
  const steps = [
  { name: { en: "30-minute call", pt: "Conversa de 30 min" }, desc: { en: "Understand context, pain, and sponsor.", pt: "Entender contexto, dor e sponsor." }, active: true },
  { name: { en: "Blueprint Session", pt: "Blueprint Session" }, desc: { en: "Diagnosis of the 5 layers in 10 business days.", pt: "Diagnóstico das 5 camadas em 10 dias úteis." } },
  { name: { en: "Action plan", pt: "Plano de ação" }, desc: { en: "Gap map + executive recommendation.", pt: "Mapa de gaps + recomendação executiva." } },
  { name: { en: "Build Engagement", pt: "Build Engagement" }, desc: { en: "Fractional CPO/CTO embedded for 3–6 months.", pt: "Fractional CPO/CTO embarcado por 3–6 meses." } },
  { name: { en: "Steady State", pt: "Steady State" }, desc: { en: "Biweekly advisory to sustain the evolution.", pt: "Advisory quinzenal para sustentar evolução." } }];


  return (
    <section className="section section--palha" id="como-comecamos" data-screen-label="13 Como começamos">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">13</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "How we start", pt: "Como começamos" })}
          </div>
          <h2 className="h1">
            {t({ en: "We start with a 30-minute conversation.", pt: "Começamos com uma conversa de 30 minutos." })}
          </h2>
          <p className="lead" style={{ marginTop: 24 }}>
            {t({
              en: "No elaborate briefing required. No sales deck. An executive conversation to understand whether it makes sense to move forward.",
              pt: "Sem briefing prévio elaborado. Sem deck de venda. Uma conversa executiva para entender se faz sentido seguir adiante.",
            })}
          </p>
        </div>

        <div className="flow">
          {steps.map((s, i) =>
          <div className={`flow__step ${s.active ? "flow__step--active" : ""}`} key={i}>
              <div className="flow__step-num">0{i + 1}</div>
              <div className="flow__step-name">{t(s.name)}</div>
              <div className="flow__step-desc">{t(s.desc)}</div>
            </div>
          )}
        </div>

        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <CTAButton />
          <RiskReversal />
        </div>
      </div>
    </section>);

}

function FAQ() {
  const t = useT();
  const items = [
  {
    q: { en: "Is this consulting or execution?", pt: "Isso é consultoria ou execução?" },
    a: {
      en: "Both. Diagnosis, redesign, and delivery live in the same engagement. We don't hand over a report and leave. We embed as a fractional CPO/CTO until the team runs the BUILD method with documented autonomy.",
      pt: "Os dois. Diagnóstico, redesenho e entrega ficam no mesmo engajamento. Não entregamos relatório e saímos. Embarcamos como fractional CPO/CTO até o time operar o método BUILD com autonomia documentada.",
    }
  },
  {
    q: { en: "Do you replace my CTO, CPO, or current team?", pt: "Vocês substituem meu CTO, CPO ou time atual?" },
    a: {
      en: "No. We work side by side with existing leadership, redesigning roles, governance, and processes. The internal team absorbs the method and keeps running it after we leave. That's the success criterion.",
      pt: "Não. Trabalhamos lado a lado com a liderança existente, redesenhando papéis, governança e processos. O time interno absorve o método e segue operando após nossa saída. Esse é o critério de sucesso.",
    }
  },
  {
    q: { en: "Do I need AI already implemented to start?", pt: "Preciso já ter IA implementada para começar?" },
    a: {
      en: "No. AI maturity varies widely between clients. The BUILD method redesigns the structure to receive AI: companies not yet using AI, and companies using it but not yet scaled, share the same starting point.",
      pt: "Não. A maturidade de IA varia muito entre clientes. O método BUILD redesenha a estrutura para receber IA: empresas que ainda não usam IA, e empresas que usam mas não escalaram, têm o mesmo ponto de partida.",
    }
  },
  {
    q: { en: "Do you staff PMs and devs?", pt: "Vocês alocam PMs e devs?" },
    a: {
      en: "We're not a body shop. We don't sell heads by the hour. We operate as fractional executives. Izael Effemberg embeds at the CPO or CTO level. Dedicated senior talent, executive hire, not staffing.",
      pt: "Não somos body shop. Não vendemos cabeça por hora. Operamos como executivos fractional. Izael Effemberg embarca no nível de CPO ou CTO. Talento sênior dedicado, contratação executiva, não staffing.",
    }
  },
  {
    q: { en: "What's the best entry point?", pt: "Qual o melhor ponto de entrada?" },
    a: {
      en: "The 10-business-day Blueprint Session. A full diagnosis of the 5 layers with a concrete action plan. 80% of clients who run the Blueprint advance to the Build Engagement. It's the most honest way to validate whether it makes sense to continue.",
      pt: "A Blueprint Session de 10 dias úteis. Diagnóstico completo das 5 camadas com plano de ação concreto. 80% dos clientes que fazem a Blueprint avançam para o Build Engagement. É a forma mais honesta de validar se faz sentido seguir.",
    }
  },
  {
    q: { en: "How soon do I start seeing clarity?", pt: "Em quanto tempo começo a ver clareza?" },
    a: {
      en: "In week 1 of the Blueprint you already have an initial diagnosis of the layers where the structure is stuck. By the end of the 10 days, a documented action plan. In the Build Engagement, operational impact starts in week 2.",
      pt: "Na semana 1 da Blueprint você já tem um diagnóstico inicial das camadas onde a estrutura está travando. Ao final dos 10 dias, plano de ação documentado. No Build Engagement, o impacto operacional começa na semana 2.",
    }
  },
  {
    q: { en: "How do you measure success?", pt: "Como vocês medem sucesso?" },
    a: {
      en: "A binary exit criterion, documented at the start of the engagement: the internal team runs all 5 layers of the BUILD method autonomously, with no dependency on Oxente Builder. Target metrics are defined in the BRD and reviewed every 30 days.",
      pt: "Critério de saída binário, documentado no início do engajamento: o time interno opera as 5 camadas do método BUILD com autonomia, sem dependência da Oxente Builder. Métricas-alvo são definidas no BRD e revisadas a cada 30 dias.",
    }
  }];


  return (
    <section className="section" id="faq" data-screen-label="15 FAQ">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">14</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Frequently asked questions", pt: "Perguntas frequentes" })}
          </div>
          <h2 className="h1">{t({ en: "Direct objections. Direct answers.", pt: "Objeções diretas. Respostas diretas." })}</h2>
        </div>

        <div className="faq">
          {items.map((it, i) =>
          <FAQItem key={i} q={t(it.q)} a={t(it.a)} defaultOpen={i === 0} />
          )}
        </div>
      </div>
    </section>);

}

function FAQItem({ q, a, defaultOpen }) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  return (
    <div className="faq__item" data-open={open}>
      <button className="faq__q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq__icon">+</span>
      </button>
      <div className="faq__a">
        <div className="faq__a-inner" style={{ paddingRight: 40 }}>{a}</div>
      </div>
    </div>);

}

function FinalCTA() {
  const t = useT();
  return (
    <section className="final-cta" id="cta" data-screen-label="16 CTA final">
      <div className="final-cta__backdrop">
        <image-slot
          id="cta-backdrop"
          shape="rect"
          placeholder="">
        </image-slot>
      </div>
      <div className="container">
        <div className="final-cta__inner">
          <div className="final-cta__chapter">
            <span className="final-cta__chapter-num">15</span>
            <span className="final-cta__chapter-sep">/</span>
            {t({ en: "Next step", pt: "Próximo passo" })}
          </div>
          <h2 className="final-cta__title">
            {t({
              en: <>If product and engineering aren't turning into results,<br /><span className="accent">the problem may be in the structure.</span></>,
              pt: <>Se produto e engenharia não estão virando resultado,<br /><span className="accent">o problema pode estar na estrutura.</span></>,
            })}
          </h2>
          <p className="final-cta__body">
            {t({
              en: "A 30-minute executive conversation to understand whether Oxente Builder can help your company redesign the thread between business, product, engineering, and delivery.",
              pt: "Uma conversa executiva de 30 minutos para entender se a Oxente Builder pode ajudar sua empresa a redesenhar o fio entre negócio, produto, engenharia e entrega.",
            })}
          </p>
          <div className="final-cta__ctas">
            <a href="#" className="btn btn--primary">
              <span>{t({ en: "Book a 30-minute call", pt: "Agendar conversa de 30 minutos" })}</span>
              <span className="arrow">→</span>
            </a>
            <a href="mailto:contato.izaeleffemberg@gmail.com" className="btn btn--ghost">
              contato.izaeleffemberg@gmail.com
            </a>
          </div>
          <RiskReversal onDark />

          <div className="final-cta__signature">
            <span className="final-cta__signature-photo">
              <image-slot
                id="cta-founder"
                shape="circle"
                placeholder="Izael">
              </image-slot>
            </span>
            <span className="final-cta__signature-text">
              <span className="final-cta__signature-name">Izael Effemberg</span>
              <span className="final-cta__signature-role">{t({ en: "Founder · Oxente Builder · replies personally", pt: "Fundador · Oxente Builder · responde pessoalmente" })}</span>
            </span>
          </div>
        </div>
      </div>
    </section>);

}

function Footer() {
  const t = useT();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <LogoCompact onDark={true} />
          </div>
          <div>{t({ en: "Founded by Izael Effemberg · São Paulo, Brazil · 2026", pt: "Fundada por Izael Effemberg · São Paulo, Brasil · 2026" })}</div>
        </div>
      </div>
    </footer>);

}

Object.assign(window, { WhyUs, Founder, Flow, FAQ, FinalCTA, Footer });