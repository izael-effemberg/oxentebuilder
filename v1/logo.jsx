/* ============================================
   Oxente Builder — Logo Components
   4 variações conforme manual de marca
   ============================================ */

// O icon — quadrado laranja arredondado com "O" outlined branco
function LogoMark({ size = 40, color = "var(--sertao)", ringColor = "var(--branco)" }) {
  const r = size * 0.22;
  const strokeW = size * 0.085;
  const ringR = size * 0.28;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ flexShrink: 0, display: "block" }}
      aria-hidden="true"
    >
      <rect x="0" y="0" width={size} height={size} rx={r} fill={color} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={ringR}
        fill="none"
        stroke={ringColor}
        strokeWidth={strokeW}
      />
    </svg>
  );
}

// Variação 1 — versão escura completa: "OXENTE" (sertão) + "BUILDER" (branco)
// para capa, hero, slides
function LogoFullDark({ scale = 1 }) {
  return (
    <div className="logo logo--full" style={{ "--logo-scale": scale }}>
      <div className="logo__line logo__line--accent">OXENTE</div>
      <div className="logo__line logo__line--light">BUILDER</div>
      <div className="logo__rule"></div>
    </div>
  );
}

// Variação 2 — versão clara: "OXENTE" (sertão) + "BUILDER" (noite)
// para documentos, email
function LogoFullLight({ scale = 1 }) {
  return (
    <div className="logo logo--full" style={{ "--logo-scale": scale }}>
      <div className="logo__line logo__line--accent">OXENTE</div>
      <div className="logo__line logo__line--dark">BUILDER</div>
      <div className="logo__rule"></div>
    </div>
  );
}

// Variação 3 — ícone + texto: ícone "O" + "Oxente" / "Builder" stacked
// para perfil, avatar, linkedin, NAV
function LogoLockup({ iconSize = 40, onDark = false, className = "" }) {
  return (
    <div className={`logo logo--lockup ${className}`}>
      <LogoMark size={iconSize} />
      <div className="logo__lockup-text">
        <div className="logo__lockup-line logo__lockup-line--accent">Oxente</div>
        <div className={`logo__lockup-line ${onDark ? "logo__lockup-line--light" : "logo__lockup-line--dark"}`}>Builder</div>
      </div>
    </div>
  );
}

// Variação 4 — compacta: "OXENTE / BUILDER" stacked, BUILDER em sertão
// para rodapé, assinatura de email
function LogoCompact({ scale = 1, onDark = false }) {
  return (
    <div className="logo logo--compact" style={{ "--logo-scale": scale }}>
      <div className={`logo__compact-line ${onDark ? "logo__compact-line--light" : "logo__compact-line--dark"}`}>OXENTE</div>
      <div className="logo__compact-line logo__compact-line--accent">BUILDER</div>
    </div>
  );
}

Object.assign(window, { LogoMark, LogoFullDark, LogoFullLight, LogoLockup, LogoCompact });

// ============================================
// HeroBrand — large animated brand lockup for the hero.
// The orange "O" mark pops in, the white ring draws itself,
// then OXENTE / BUILDER reveal with a masked type rise and the
// accent rule wipes in. One elegant pass; respects reduced motion.
// ============================================
function HeroBrand({ stacked = false, className = "" }) {
  return (
    <div className={`herobrand ${stacked ? "herobrand--stacked" : ""} ${className}`.trim()} aria-label="Oxente Builder">
      <div className="herobrand__mark" aria-hidden="true">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <rect className="herobrand__sq" x="2" y="2" width="96" height="96" rx="22" />
          <circle
            className="herobrand__ring"
            cx="50"
            cy="50"
            r="27"
            pathLength="100"
            fill="none"
          />
          <circle className="herobrand__dot" cx="50" cy="23" r="4.5" />
        </svg>
      </div>
      <div className="herobrand__words">
        <span className="herobrand__word herobrand__word--1"><span>OXENTE</span></span>
        <span className="herobrand__word herobrand__word--2"><span>BUILDER</span></span>
        <span className="herobrand__rule" aria-hidden="true"></span>
      </div>
    </div>
  );
}

Object.assign(window, { HeroBrand });
