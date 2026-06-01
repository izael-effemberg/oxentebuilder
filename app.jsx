/* ============================================
   Oxente Builder — App + Tweaks
   ============================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#D4500A",
  "displayWeight": 500,
  "buildLayout": "spacious",
  "showFounder": true
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = [
  "#D4500A", // Sertão original
  "#B84408", // Sertão mais escuro/profundo
  "#C2410C", // Terracota
  "#9F580E", // Ocre / terra queimada
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // ---- Scroll-reveal system (staggered, in-view) ----
  React.useLayoutEffect(() => {
    let reduced = false;
    try { reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    if (reduced) return;

    const selectors = [
      ".essence__values .value", ".essence__method",
      ".pain-col", ".cost-card", ".cost-synthesis",
      ".pressure", ".timeline", ".icp-intro", ".icp-card", ".icp-bridge",
      ".not-for-list li",
      ".build-step", ".thread", ".build-artifacts",
      ".method2", ".method2__showcase",
      ".beforeafter__row", ".beforeafter__synthesis",
      ".marquee", ".tr-summary", ".case", ".other", ".tr-footnote",
      ".pack", ".packs-note", ".pack-flow",
      ".why__col", ".founder2__aside", ".founder2__layer", ".flow__step", ".faq__item",
      ".tcarousel", ".talks", ".final-cta__inner",
    ];
    const set = new Set();
    selectors.forEach((sel) => document.querySelectorAll(sel).forEach((el) => set.add(el)));
    const byParent = new Map();
    set.forEach((el) => {
      el.classList.add("reveal");
      const p = el.parentNode;
      const idx = byParent.get(p) || 0;
      el.style.transitionDelay = Math.min(idx, 6) * 55 + "ms";
      byParent.set(p, idx + 1);
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal--in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.06 }
    );
    set.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // ---- Nav condense + scroll progress ----
  React.useEffect(() => {
    const nav = document.querySelector(".nav");
    const bar = document.getElementById("scrollbar");
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (nav) nav.classList.toggle("is-scrolled", y > 8);
      if (bar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${h > 0 ? Math.min(1, y / h) : 0})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--sertao", t.accent);
    // derive a slightly darker hover
    root.style.setProperty("--sertao-2", shade(t.accent, -12));
  }, [t.accent]);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--display-weight", t.displayWeight);
    // Apply to all display-y classes via a global rule
    const id = "__weight_override";
    let style = document.getElementById(id);
    if (!style) {
      style = document.createElement("style");
      style.id = id;
      document.head.appendChild(style);
    }
    style.textContent = `
      .display, .h1, .h2, .h3, .hero h1, .final-cta__title, .icp-card__title, .pack__name, .build-row__title, .beforeafter__after, .faq__q {
        font-weight: ${t.displayWeight} !important;
      }
    `;
  }, [t.displayWeight]);

  React.useEffect(() => {
    document.documentElement.dataset.buildLayout = t.buildLayout;
    // For compact mode reduce section padding via CSS variable
    document.documentElement.style.setProperty(
      "--section-y",
      t.buildLayout === "compact" ? "clamp(60px, 7vw, 110px)" : "clamp(80px, 10vw, 160px)"
    );
  }, [t.buildLayout]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><div className="scroll-progress__bar" id="scrollbar"></div></div>
      <Nav />
      <Hero />
      <Essence />
      <Pain />
      <Cost />
      <WhyNow />
      <ICP />
      <NotFor />
      <MethodBuild />
      <BeforeAfter />
      <WhyUs />
      <TrackRecord />
      {t.showFounder && <Founder />}
      <Testimonials />
      <Packages />
      <Flow />
      <FAQ />
      <FinalCTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Identidade" />
        <TweakColor
          label="Acento Sertão"
          value={t.accent}
          onChange={(v) => setTweak("accent", v)}
          options={ACCENT_OPTIONS}
        />
        <TweakRadio
          label="Peso títulos"
          value={t.displayWeight}
          onChange={(v) => setTweak("displayWeight", v)}
          options={[
            { label: "400", value: 400 },
            { label: "500", value: 500 },
            { label: "600", value: 600 },
          ]}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Densidade"
          value={t.buildLayout}
          onChange={(v) => setTweak("buildLayout", v)}
          options={[
            { label: "Compacta", value: "compact" },
            { label: "Espaçosa", value: "spacious" },
          ]}
        />
        <TweakToggle
          label="Bloco do fundador"
          value={t.showFounder}
          onChange={(v) => setTweak("showFounder", v)}
        />
      </TweaksPanel>
    </>
  );
}

// Color helper — shade a hex by percent (-100 to 100)
function shade(hex, percent) {
  const h = hex.replace("#", "");
  const num = parseInt(h, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  const t = percent < 0 ? 0 : 255;
  const p = Math.abs(percent) / 100;
  r = Math.round((t - r) * p) + r;
  g = Math.round((t - g) * p) + g;
  b = Math.round((t - b) * p) + b;
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LangProvider>
    <App />
  </LangProvider>
);
