/* ============================================
   Oxente Builder — How we work (full page)
   Brings the BUILD method onto the page, built around
   the detailed operating-system diagram, with an
   instructional "how to read it" guide. Used ONLY on
   method.html — the homepage MethodBuild stays untouched.
   ============================================ */

/* The five horizontal bands of the diagram, top → bottom.
   This is the instructional layer: it teaches how to read
   the operating-system map. */
const MDIAGRAM_BANDS = [
  {
    n: "01",
    band: { en: "Stakeholders", pt: "Stakeholders" },
    items: "CEO · Founders · Product · Engineering · Investors · Customers",
    desc: {
      en: "One system every decision-maker can read — leadership, product, engineering, investors and customers aligned on the same map.",
      pt: "Um sistema que todo decisor consegue ler — liderança, produto, engenharia, investidores e clientes alinhados no mesmo mapa.",
    },
  },
  {
    n: "02",
    band: { en: "The five BUILD layers", pt: "As cinco camadas BUILD" },
    items: "B · U · I · L · D",
    desc: {
      en: "Business Taste, User & Product Taste, Infrastructure as Capabilities, Leadership & Leverage, Delivery by AI. Each column owns its disciplines and feeds the next.",
      pt: "Business Taste, User & Product Taste, Infrastructure as Capabilities, Leadership & Leverage, Delivery by AI. Cada coluna domina suas disciplinas e alimenta a próxima.",
    },
  },
  {
    n: "03",
    band: { en: "AI Control Plane", pt: "AI Control Plane" },
    items: "Claude · OpenAI · Gemini · Cursor · Devin · MCP · Knowledge Graph · Memory",
    desc: {
      en: "The AI tooling that turns specs into execution — models, agents, context and observability orchestrated as one control plane.",
      pt: "O ferramental de IA que transforma specs em execução — modelos, agentes, contexto e observabilidade orquestrados como um control plane.",
    },
  },
  {
    n: "04",
    band: { en: "Foundation Layer", pt: "Camada de Fundação" },
    items: "Platform Engineering · Developer Experience · Cloud · Security · Data",
    desc: {
      en: "The technical bedrock everything runs on — platform, developer experience, cloud, security and data.",
      pt: "A base técnica sobre a qual tudo roda — plataforma, developer experience, cloud, segurança e dados.",
    },
  },
  {
    n: "05",
    band: { en: "AI-Native outcomes", pt: "Resultados AI-Native" },
    items: "Velocity · Innovation · Product Quality · Business Impact",
    desc: {
      en: "What the system is built to produce: ship faster, experiment more, build better products, and create measurable business impact.",
      pt: "O que o sistema existe para produzir: entregar mais rápido, experimentar mais, construir produtos melhores e gerar impacto de negócio mensurável.",
    },
  },
];

function MethodDiagram() {
  const t = useT();
  const [zoom, setZoom] = React.useState(false);

  return (
    <section className="section section--dark mdiagram" id="diagrama">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter eyebrow--dark section-header__eyebrow">
            <span className="eyebrow__num">01</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "The operating system", pt: "O sistema operacional" })}
          </div>
          <h2 className="h1" style={{ color: "var(--branco)" }}>
            {t({
              en: <>The whole method<span style={{ color: "var(--sertao)" }}> on a single map.</span></>,
              pt: <>O método inteiro<span style={{ color: "var(--sertao)" }}> em um único mapa.</span></>,
            })}
          </h2>
          <p className="lead" style={{ marginTop: 26, color: "rgba(255,255,255,0.7)" }}>
            {t({
              en: "A composable operating system for AI-native product and technology organizations — read it top to bottom, from the people it aligns down to the outcomes it produces.",
              pt: "Um sistema operacional componível para organizações de produto e tecnologia AI-native — leia de cima para baixo, das pessoas que ele alinha até os resultados que produz.",
            })}
          </p>
        </div>

        <figure className="mdiagram__figure">
          <button
            type="button"
            className="mdiagram__media method2__media--zoom"
            onClick={() => setZoom(true)}
            aria-label={t({ en: "Zoom the BUILD method diagram", pt: "Ampliar o diagrama do método BUILD" })}
          >
            <img className="mdiagram__img" src="images/artifacts.webp" alt={t({ en: "The BUILD method — full operating-system diagram", pt: "O método BUILD — diagrama completo do sistema operacional" })} />
            <span className="method2__media-zoom" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 1H1v5.5M9.5 1H15v5.5M6.5 15H1V9.5M9.5 15H15V9.5" />
              </svg>
              {t({ en: "Zoom", pt: "Ampliar" })}
            </span>
          </button>
        </figure>

        <div className="mdiagram__read">
          <div className="mdiagram__read-head">
            <span className="mdiagram__read-label">{t({ en: "How to read it", pt: "Como ler o mapa" })}</span>
            <span className="mdiagram__read-sub">{t({ en: "Five horizontal bands, top to bottom.", pt: "Cinco faixas horizontais, de cima para baixo." })}</span>
          </div>
          <ol className="mdiagram__bands">
            {MDIAGRAM_BANDS.map((b) => (
              <li className="mdiagram__band" key={b.n}>
                <span className="mdiagram__band-n">{b.n}</span>
                <div className="mdiagram__band-body">
                  <span className="mdiagram__band-name">{t(b.band)}</span>
                  <span className="mdiagram__band-items">{b.items}</span>
                  <span className="mdiagram__band-desc">{t(b.desc)}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <ImageLightbox
        src={zoom ? "images/artifacts.webp" : null}
        alt={t({ en: "The BUILD method — full operating-system diagram", pt: "O método BUILD — diagrama completo do sistema operacional" })}
        onClose={() => setZoom(false)}
      />
    </section>
  );
}

/* The interactive 5-phase stepper, inline (no drawer). */
function MethodLayers() {
  const t = useT();
  return (
    <section className="section section--dark mlayers" id="camadas">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter eyebrow--dark section-header__eyebrow">
            <span className="eyebrow__num">02</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "The five layers, in depth", pt: "As cinco camadas, em profundidade" })}
          </div>
          <h2 className="h1" style={{ color: "var(--branco)" }}>
            {t({
              en: <>One question, one intervention,<span style={{ color: "var(--sertao)" }}> one artifact</span> per layer.</>,
              pt: <>Uma pergunta, uma intervenção,<span style={{ color: "var(--sertao)" }}> um artefato</span> por camada.</>,
            })}
          </h2>
          <p className="lead" style={{ marginTop: 26, color: "rgba(255,255,255,0.7)" }}>
            {t({
              en: "Step through each layer. No phase begins until the previous one is documented and approved — that's why the gains last.",
              pt: "Percorra cada camada. Nenhuma fase começa sem a anterior estar documentada e aprovada — é por isso que os ganhos duram.",
            })}
          </p>
        </div>

        <MethodFull showcase={false} />
      </div>
    </section>
  );
}

function MethodPageContent() {
  return (
    <>
      <MethodDiagram />
      <MethodLayers />
      <Flow />
      <Packages />
    </>
  );
}

Object.assign(window, { MethodDiagram, MethodLayers, MethodPageContent });
