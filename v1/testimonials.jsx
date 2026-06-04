/* ============================================
   Oxente Builder — Testimonials (Chapter 12)
   Editorial pull-quote carousel
   ============================================ */

const TESTIMONIALS = [
  {
    name: "Eduardo Mattos",
    role: "Director of Software Engineering",
    company: "Cora · ex-Will Bank",
    photo: "people/eduardo-mattos.jpg",
    focal: { x: "50%", y: "38%", zoom: 1.05 },
    linkedin: "https://www.linkedin.com/in/eduardojmatos/",
    quote: {
      en: "Izael is a rare combination of product and engineering. During the Will Bank hiring process, his depth was so clear that we created the Head of Technical Products role.",
      pt: "O Izael é uma combinação rara de produto e engenharia. Durante o processo seletivo no Will Bank, sua profundidade foi tão clara que criamos a posição de Head of Technical Products.",
    },
    longQuote: {
      en: "When I hired Izael at Will Bank, I was looking for someone with a strong grasp of processes and engineering. During the hiring process, it became clear he also had a well-above-average depth in product, leadership, and software engineering. The combination was so rare that we created the Head of Technical Products role during the process itself. Izael is one of those people who can unite product and engineering in a way that's very hard to find.",
      pt: "Quando contratei o Izael no Will Bank, eu buscava alguém com forte entendimento de processos e engenharia. Durante o processo seletivo, ficou claro que ele também tinha uma profundidade muito acima da média em produto, liderança e engenharia de software. A combinação era tão rara que criamos a posição de Head of Technical Products durante o próprio processo. O Izael é uma dessas pessoas que conseguem unir produto e engenharia de um jeito muito difícil de encontrar.",
    },
  },
  {
    name: "André Fernandes",
    role: "Founder & CPO",
    company: "Vertigo",
    photo: "people/andre-fernandes.jpg",
    focal: { x: "53%", y: "30%", zoom: 1.55 },
    linkedin: "https://www.linkedin.com/in/andre-fernandes-vtg/",
    quote: {
      en: "Izael designed and built Vertigo's Technology Strategy practice from scratch. He's a rare case of a professional who unites business, product, and technology.",
      pt: "O Izael foi responsável por desenhar e tirar do zero a frente de Technology Strategy da Vertigo. É um caso raro de profissional que une negócio, produto e tecnologia.",
    },
    longQuote: {
      en: "Izael's arrival at Vertigo helped us see a new horizon for the consultancy, focused on strategy, product, and technology. With his experience in consultancies and large tech companies, he designed and built our Technology Strategy practice from scratch — today part of our portfolio. Izael is a rare case of a professional who connects business, product, and technology with depth and practical vision.",
      pt: "A chegada do Izael na Vertigo nos ajudou a enxergar um novo horizonte para a consultoria, com foco em strategy, produto e tecnologia. Com sua experiência em consultorias e grandes empresas de tecnologia, ele foi responsável por desenhar e tirar do zero a nossa frente de Technology Strategy, que hoje faz parte do nosso portfólio. O Izael é um caso raro de profissional que consegue conectar negócio, produto e tecnologia com profundidade e visão prática.",
    },
  },
  {
    name: "André Luiz Bernardino",
    role: "Director of Software Engineering",
    company: "Contabilizei",
    photo: "people/andre-bernardino.jpg",
    focal: { x: "50%", y: "38%", zoom: 1.1 },
    linkedin: "https://www.linkedin.com/in/andre-luiz-bernardino-b3119276/",
    quote: {
      en: "Izael combines technical depth, conflict management, and a human eye. I strongly recommend him for strategic roles in Portfolio Management and Platform as a Product.",
      pt: "Izael combina profundidade técnica, gestão de conflitos e olhar humano. Recomendo fortemente para posições estratégicas em Portfolio Management e Platform as a Product.",
    },
    longQuote: {
      en: "Izael is an extremely dedicated professional, with deep knowledge of the disciplines he leads, without losing the human eye great leaders need. I had the pleasure of working with him on an extremely critical, high-risk project with a strong chance of surprises. Thanks to his ability to manage conflicts, people, and time, we built a very robust structure for the project as a whole. I also watched him grow as the owner of the Technical Product Management disciplines, thinking of platform as a product — which shows how versatile a professional he is.",
      pt: "Izael é um profissional extremamente dedicado, com conhecimento profundo nas disciplinas que conduz, sem perder o olhar humano que grandes líderes precisam ter. Tive o prazer de trabalhar com ele em um projeto extremamente crítico, com alto risco e grande possibilidade de imprevistos. Pela sua capacidade de gerir conflitos, pessoas e tempo, conseguimos construir uma estrutura muito robusta para o projeto como um todo. Também pude acompanhar sua evolução como responsável pelas disciplinas de Technical Product Management, pensando plataforma como produto, o que mostra o quanto ele é um profissional plural.",
    },
  },
  {
    name: "Manoela Badia",
    role: "Chief Product Officer",
    company: "Sem Parar Doc",
    photo: "people/manoela-badia.jpg",
    focal: { x: "50%", y: "15%", zoom: 2.7 },
    linkedin: "https://www.linkedin.com/in/manoela-franciosi-badia-2a658840/",
    quote: {
      en: "A very strong ability to connect product, engineering, platform, and execution. His knowledge of Platform Strategy is a clear differentiator.",
      pt: "Capacidade muito forte de conectar produto, engenharia, plataforma e execução. O conhecimento dele em Platform Strategy é um diferencial claro.",
    },
    longQuote: {
      en: "Izael is one of the people I've worked with who most demonstrated mastery of product and software-engineering best practices. His ability to connect product strategy, architecture, platform, and execution is a clear differentiator. His knowledge of Platform Strategy brings a very relevant view to complex technology contexts.",
      pt: "O Izael foi uma das pessoas com quem trabalhei que mais demonstrou domínio sobre boas práticas de produto e engenharia de software. Sua capacidade de conectar estratégia de produto, arquitetura, plataforma e execução é um diferencial claro. O conhecimento dele em Platform Strategy traz uma visão muito relevante para contextos complexos de tecnologia.",
    },
  },
  {
    name: "Kevellin Olivatti",
    role: "Technical Program & Portfolio Manager",
    company: "",
    photo: "people/kevellin-olivatti.jpg",
    focal: { x: "50%", y: "42%", zoom: 1.05 },
    linkedin: "https://www.linkedin.com/in/kevellin-olivatti/",
    quote: {
      en: "One of the technically strongest people in product and engineering I've ever worked with. A professional ahead of his time.",
      pt: "Uma das pessoas mais fortes tecnicamente em produto e engenharia com quem já trabalhei. Um profissional à frente do seu tempo.",
    },
    longQuote: {
      en: "Izael was one of the technically strongest people in engineering and product I had the pleasure of working with. Our interactions were always rich in content, exchange, and learning. He's a professional ahead of his time in product and engineering — someone who adds a lot in knowledge, clarity, and performance to the teams and contexts he works in.",
      pt: "Izael foi uma das pessoas mais fortes tecnicamente em engenharia e produto com quem tive o prazer de trabalhar. Nossas interações sempre foram muito ricas em conteúdo, troca e aprendizado. Ele é um profissional à frente do seu tempo nas áreas de produto e engenharia, alguém que agrega muito em conhecimento, clareza e performance nos times e contextos em que atua.",
    },
  },
];

const AUTOPLAY_MS = 12000;

const TALKS = [
  {
    thumb: "talks/platform-talks.png",
    platform: "YouTube · Live",
    event: "Platform Engineering Brasil",
    title: { en: "Building technical products for software engineering", pt: "Construindo produtos técnicos para a engenharia de software" },
    desc: { en: "How to create more technical products for devs — with VeeCode as the case.", pt: "Como criar produtos de natureza mais técnica para devs — com a VeeCode como case." },
    url: "https://www.youtube.com/live/Ff6CDmQ7ICQ",
  },
  {
    thumb: "talks/idp-vertigo.png",
    platform: { en: "YouTube · Conference", pt: "YouTube · Conferência" },
    event: { en: "National Platforms Conference", pt: "Conferência Nacional de Plataformas" },
    title: { en: "IDP: the heart of your engineering strategy", pt: "IDP: o coração da sua estratégia de engenharia" },
    desc: { en: "Impact on clients like Anbima and CredSystem and how the product works in practice.", pt: "Impacto em clientes como Anbima e CredSystem e como o produto funciona na prática." },
    url: "https://www.youtube.com/watch?v=Kj6WztRIHUA&t=12056s",
  },
  {
    thumb: "talks/rocketseat.png",
    platform: "LinkedIn Live · RocketSeat",
    event: "Collab RocketSeat",
    title: { en: "From code to strategy: growing with business vision", pt: "Do código à estratégia: como crescer com visão de negócio" },
    desc: { en: "A conversation on career and leading product at VeeCode and Vertigo.", pt: "Conversa sobre carreira e o momento à frente de produto na VeeCode e na Vertigo." },
    url: "https://www.linkedin.com/events/doc-digo-estrat-gia-comocrescer7330310609403580416/theater/",
  },
  {
    thumb: "talks/papocast.png",
    platform: { en: "YouTube · Interview", pt: "YouTube · Entrevista" },
    event: "Papo de SysAdmin · TDC Business",
    title: { en: "The technology executive and platform products", pt: "O executivo de tecnologia e produtos de plataforma" },
    desc: { en: "An interview on technical leadership and leading engineering products.", pt: "Entrevista sobre liderança técnica e o papel à frente de produtos de engenharia." },
    url: "https://youtu.be/jOGdJ6Hxp4w",
  },
  {
    thumb: "talks/bottomup.png",
    platform: "Spotify · Podcast",
    event: "bottom-up Podcast · SEXTIL",
    title: { en: "Organizational culture and the co-founder journey", pt: "Cultura organizacional e a jornada de co-founder" },
    desc: { en: "Experience as an executive and the journey as co-founder of VeeCode.", pt: "Experiência como executivo e a trajetória como co-founder da VeeCode." },
    url: "https://open.spotify.com/episode/29Pt6Xt09HjzOz9jTYPS3b",
  },
  {
    thumb: "talks/tdc-floripa.png",
    platform: { en: "YouTube · Roundtable", pt: "YouTube · Mesa redonda" },
    event: "The Developers Conference · TDC Floripa",
    title: { en: "AI, sustainable software, governance, and mental health", pt: "IA, software sustentável, governança e saúde mental" },
    desc: { en: "A roundtable on the impacts of AI and building more sustainable software.", pt: "Mesa redonda sobre os impactos das IAs e uma construção de software mais sustentável." },
    url: "https://youtu.be/dg-oKx8gNwY",
  },
  {
    thumb: "talks/idp-platform-thinking.png",
    platform: { en: "YouTube · Talk", pt: "YouTube · Palestra" },
    event: "The Developers Conference · TheDevConf",
    title: { en: "Platform thinking and IDPs: the new engineering strategy", pt: "Pensamento de Plataformas e IDPs: a nova estratégia de engenharia" },
    desc: { en: "Architecting scalable, secure, and governable platforms for regulated environments — connecting team productivity to business impact, drawing on ThoughtWorks, iFood, Creditas, Stone, and VeeCode.", pt: "Arquitetar plataformas escaláveis, seguras e governáveis para ambientes regulados — conectando produtividade dos times ao impacto no negócio, com base em ThoughtWorks, iFood, Creditas, Stone e VeeCode." },
    url: "https://youtu.be/yqNse4Yc658",
  },
];

function useReducedMotion() {
  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function focalStyle(focal) {
  // The image fills its frame via object-fit:cover; focal point + zoom keep
  // the subject's face centred instead of letting cover crop the head off.
  return {
    objectPosition: `${focal?.x ?? "50%"} ${focal?.y ?? "30%"}`,
    transform: `scale(${focal?.zoom ?? 1})`,
    transformOrigin: `${focal?.x ?? "50%"} ${focal?.y ?? "30%"}`,
  };
}

function TestimonialsCarousel({ items }) {
  const t = useT();
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const regionRef = React.useRef(null);
  const reducedMotion = useReducedMotion();

  const total = items.length;
  // Every navigation funnels through this clamp — `active` is the single
  // source of truth and the track transform is derived purely from it.
  const go = React.useCallback((i) => setActive(((i % total) + total) % total), [total]);
  const next = React.useCallback(() => go(active + 1), [go, active]);
  const prev = React.useCallback(() => go(active - 1), [go, active]);

  // Keyboard navigation (scoped to the carousel region)
  React.useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); setActive((a) => (a + 1) % total); }
      if (e.key === "ArrowLeft") { e.preventDefault(); setActive((a) => (a - 1 + total) % total); }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [total]);

  // Autoplay — one timeout per slide; progress bar is a pure CSS animation.
  React.useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % total), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, reducedMotion, total]);

  // Touch swipe
  const touchStart = React.useRef(null);
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 48) (dx < 0 ? next : prev)();
    touchStart.current = null;
  };

  return (
    <div
      className="tcarousel"
      ref={regionRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={t({ en: "Leadership testimonials", pt: "Depoimentos de lideranças" })}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="tcarousel__viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div
          className="tcarousel__track"
          style={{ transform: `translateX(-${active * 100}%)` }}
          aria-live="polite"
        >
          {items.map((it, i) => (
            <article
              key={it.name}
              className="tcarousel__slide"
              aria-hidden={i !== active}
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${total}: ${it.name}`}
            >
              <div className="tcarousel__figure">
                <img src={it.photo} alt={`Retrato de ${it.name}`} loading="lazy" style={focalStyle(it.focal)} />
                <span className="tcarousel__figure-tag">{String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
              </div>
              <div className="tcarousel__body">
                <div className="tcarousel__mark" aria-hidden="true">"</div>
                <blockquote className="tcarousel__quote">
                  {t(it.longQuote || it.quote)}
                </blockquote>
                <div className="tcarousel__author">
                  <span className="tcarousel__name">{it.name}</span>
                  <span className="tcarousel__meta">
                    {it.role}{it.company ? <> · <b>{it.company}</b></> : null}
                  </span>
                  {it.linkedin && (
                    <a
                      className="tcarousel__linkedin"
                      href={it.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t({ en: "Open LinkedIn of", pt: "Abrir LinkedIn de" })} ${it.name}`}
                      tabIndex={i === active ? 0 : -1}
                    >
                      LinkedIn <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="tcarousel__progress" aria-hidden="true">
        <div
          key={active /* remount restarts the CSS animation each slide */}
          className={`tcarousel__progress-bar ${paused || reducedMotion ? "is-paused" : ""}`}
          style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
        />
      </div>

      <div className="tcarousel__controls">
        <button className="tcarousel__arrow" onClick={prev} aria-label={t({ en: "Previous testimonial", pt: "Depoimento anterior" })} type="button">
          <span aria-hidden="true">←</span>
        </button>
        <div className="tcarousel__counter" aria-live="polite" aria-atomic="true">
          <span className="tcarousel__counter-now">{String(active + 1).padStart(2, "0")}</span>
          <span className="tcarousel__counter-sep">/</span>
          <span className="tcarousel__counter-total">{String(total).padStart(2, "0")}</span>
        </div>
        <button className="tcarousel__arrow" onClick={next} aria-label={t({ en: "Next testimonial", pt: "Próximo depoimento" })} type="button">
          <span aria-hidden="true">→</span>
        </button>
        <button
          className={`tcarousel__playpause ${paused || reducedMotion ? "is-paused" : ""}`}
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Retomar rotação automática" : "Pausar rotação automática"}
          aria-pressed={paused}
          type="button"
          disabled={reducedMotion}
          title={reducedMotion ? "Rotação desabilitada (reduzir movimento)" : (paused ? "Retomar" : "Pausar")}
        >
          <span aria-hidden="true">{paused || reducedMotion ? "▶" : "❚❚"}</span>
        </button>
      </div>

      <div className="tcarousel__rail" role="tablist" aria-label="Selecionar depoimento">
        {items.map((it, i) => (
          <button
            key={it.name}
            role="tab"
            aria-selected={i === active}
            aria-label={`Ver depoimento de ${it.name}, ${it.role}`}
            className={`tcarousel__thumb ${i === active ? "is-active" : ""}`}
            onClick={() => go(i)}
            type="button"
            tabIndex={i === active ? 0 : -1}
          >
            <span className="tcarousel__thumb-photo">
              <img src={it.photo} alt="" loading="lazy" style={focalStyle(it.focal)} />
            </span>
            <span className="tcarousel__thumb-meta">
              <span className="tcarousel__thumb-name">{it.name.split(" ")[0]}</span>
              <span className="tcarousel__thumb-role">
                {it.company ? it.company.split("·")[0].trim() : it.role.split("&")[0].trim()}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TalksCarousel({ items }) {
  const t = useT();
  const scrollerRef = React.useRef(null);
  const [page, setPage] = React.useState(0);
  const [pages, setPages] = React.useState(1);

  const measure = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const p = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
    setPages(p);
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  }, []);

  React.useEffect(() => {
    measure();
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => setPage(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goPage = (p) => {
    const el = scrollerRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(pages - 1, p));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="talks">
      <div className="talks__head">
        <div className="talks__head-left">
          <div className="eyebrow" style={{ color: "var(--argila)" }}>
            <span style={{ width: 0, height: 0 }}></span>
            {t({ en: "On stage and on the mic", pt: "No palco e nos microfones" })}
          </div>
          <h3 className="talks__title">
            {t({ en: "Talks, podcasts, and conferences that prove the knowledge in practice.", pt: "Palestras, podcasts e conferências que comprovam o conhecimento na prática." })}
          </h3>
        </div>
        <div className="talks__nav" aria-hidden={pages <= 1}>
          <button
            className="tcarousel__arrow"
            onClick={() => goPage(page - 1)}
            disabled={page <= 0}
            aria-label={t({ en: "Previous content", pt: "Conteúdos anteriores" })}
            type="button"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            className="tcarousel__arrow"
            onClick={() => goPage(page + 1)}
            disabled={page >= pages - 1}
            aria-label={t({ en: "Next content", pt: "Próximos conteúdos" })}
            type="button"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="talks__scroller" ref={scrollerRef} role="list">
        {items.map((talk, i) => (
          <a
            className="talk-card"
            key={i}
            href={talk.url}
            target="_blank"
            rel="noopener noreferrer"
            role="listitem"
          >
            <div className="talk-card__media">
              <img src={talk.thumb} alt={`${t({ en: "Cover:", pt: "Capa:" })} ${t(talk.title)}`} loading="lazy" />
              <span className="talk-card__platform">{t(talk.platform)}</span>
              <span className="talk-card__play" aria-hidden="true">▶</span>
            </div>
            <div className="talk-card__body">
              <div className="talk-card__event">{t(talk.event)}</div>
              <div className="talk-card__title">{t(talk.title)}</div>
              <p className="talk-card__desc">{t(talk.desc)}</p>
              <span className="talk-card__cta">{t({ en: "Watch", pt: "Assistir" })} <span aria-hidden="true">↗</span></span>
            </div>
          </a>
        ))}
      </div>

      {pages > 1 && (
        <div className="talks__dots" role="tablist" aria-label={t({ en: "Content pages", pt: "Páginas de conteúdos" })}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === page}
              aria-label={`${t({ en: "Page", pt: "Página" })} ${i + 1} ${t({ en: "of", pt: "de" })} ${pages}`}
              className={`talks__dot ${i === page ? "is-active" : ""}`}
              onClick={() => goPage(i)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Testimonials() {
  const t = useT();
  return (
    <section className="section section--palha" id="depoimentos" data-screen-label="12 Depoimentos">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow eyebrow--chapter section-header__eyebrow">
            <span className="eyebrow__num">11</span>
            <span className="eyebrow__sep">/</span>
            {t({ en: "Social proof", pt: "Prova social" })}
          </div>
          <h2 className="h1">
            {t({ en: "What leaders who built alongside him say.", pt: "O que dizem lideranças que construíram ao lado dele." })}
          </h2>
          <p className="lead" style={{ marginTop: 24 }}>
            {t({
              en: "Directors of engineering, founders, and CPOs who ran product, platform, architecture, and strategy alongside Izael Effemberg.",
              pt: "Diretores de engenharia, founders e CPOs que dirigiram produto, plataforma, arquitetura e estratégia ao lado de Izael Effemberg.",
            })}
          </p>
        </div>

        <TestimonialsCarousel items={TESTIMONIALS} />

        <TalksCarousel items={TALKS} />

        <div className="testimonials__bridge">
          <div className="testimonials__bridge-text">
            {t({ en: "5 endorsements · 3 directors of engineering · 2 founders · 1 CPO", pt: "5 endorsements · 3 diretores de engenharia · 2 founders · 1 CPO" })}
          </div>
          <a href="#cta" className="testimonials__bridge-cta">
            {t({ en: "Let's talk about your challenge", pt: "Vamos conversar sobre o seu desafio" })} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Testimonials, TestimonialsCarousel, TalksCarousel });
