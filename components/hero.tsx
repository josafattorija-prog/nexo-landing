"use client";

import { Reveal, Glyph } from "./atoms";

const portales = [
  "Inmuebles24", "Propiedades.com", "Lamudi", "Vivanuncios",
  "Mercado Libre", "Casas y Terrenos", "Trovit", "Mitula", "Point2", "EasyAvisos",
];

export default function Hero() {
  return (
    <section className="hero bg-grid bg-noise">
      <div className="shell hero-grid">
        {/* Text block */}
        <div className="hero-text">
          <Reveal>
            <span className="hero-tag">
              <span className="pill-dot" />
              Nuevo · Disponible en MX 2026
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1>
              La IA que <span className="shimmer">vende propiedades</span>
              <br />mientras tú duermes.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="lead">
              Responde WhatsApp, califica prospectos, agenda visitas, publica propiedades
              y da seguimiento — <strong style={{ color: "var(--text)" }}>automáticamente</strong>.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero-actions">
              <a href="https://app.nexoai.mx/sign-up" className="btn btn-primary">
                <Glyph name="spark" size={16} /> Crear mi inmobiliaria gratis
              </a>
              <a href="#demo" className="btn btn-ghost">
                <Glyph name="play" size={14} /> Ver demo
              </a>
              <span className="mono" style={{ color: "var(--muted)", fontSize: 12, marginLeft: 6 }}>
                sin tarjeta · onboarding en 24h
              </span>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="hero-stats">
              <div>
                <div className="num">24/7</div>
                <div className="lbl">Responde sin descanso</div>
              </div>
              <div>
                <div className="num">IA</div>
                <div className="lbl">Califica cada lead</div>
              </div>
              <div>
                <div className="num">10</div>
                <div className="lbl">Portales conectados</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* N-Bot periodic table card */}
        <Reveal delay={500}>
          <div className="pt-stage">
            <div className="pt-antenna" />
            <div className="pt-card">
              <div className="pt-ai">AI</div>
              <div className="pt-num">001</div>
              <div className="pt-mass">14.01</div>
              <div className="pt-N">N</div>
              <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
                <div className="pt-eye left" />
                <div className="pt-eye right" />
              </div>
              <div className="pt-rule" />
              <div className="pt-name">NEXO</div>
              <div className="pt-tag">Tabla periódica · elemento N-Bot</div>
            </div>

            {/* Orbiting tags */}
            <div className="pt-orbit">
              <div className="tag t1"><span className="d" /> WhatsApp · lead nuevo</div>
              <div className="tag t2"><span className="d" /> Match IA · 94%</div>
              <div className="tag t3"><span className="d" /> Inmuebles24 · publicado</div>
              <div className="tag t4"><span className="d" /> Crédito · pre-aprobado</div>
              <div className="tag t5"><span className="d" /> Contrato · firmado</div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Portales marquee */}
      <div className="shell" style={{ marginTop: 120 }}>
        <div className="eyebrow" style={{ textAlign: "center", marginBottom: 20 }}>
          Publicación nativa en los portales líderes de México
        </div>
        <div className="marquee-wrap">
          <div className="marquee">
            {[0, 1].map((k) => (
              <span key={k} style={{ display: "contents" }}>
                {portales.map((p, i) => (
                  <span className="item" key={`${k}-${i}`}>
                    <span className="pip" />
                    {p}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
