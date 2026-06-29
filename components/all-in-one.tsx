import { Reveal, Glyph } from "./atoms";
import NexoCoreLogo from "./nexo-logo";
import type { ComponentProps } from "react";

type GlyphName = ComponentProps<typeof Glyph>["name"];

const nodes: { x: number; y: number; name: string; desc: string; g: GlyphName }[] = [
  { x: 50, y:  8, name: "Propiedades",         desc: "PROP·CORE",  g: "mkt"   },
  { x: 90, y: 38, name: "Inbox Omnicanal",     desc: "COM·ALL",    g: "inbox" },
  { x: 74, y: 86, name: "Asistente IA",        desc: "AI·CLAUDE",  g: "ai"    },
  { x: 26, y: 86, name: "CRM Pipeline",        desc: "CRM·KANBAN", g: "pipe"  },
  { x: 10, y: 38, name: "Análisis de Mercado", desc: "MKT·ZONA",   g: "mkt"   },
];

export default function AllInOne() {
  return (
    <section className="section bg-grid" id="producto" style={{ position: "relative" }}>
      <div className="shell">
        <div className="section-head center">
          <Reveal><span className="eyebrow">All in One · Una sola plataforma</span></Reveal>
          <Reveal delay={80}>
            <h2>
              El elemento que <span className="em">conecta</span> todo
              <br />tu negocio inmobiliario.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead" style={{ textAlign: "center" }}>
              Olvídate de pagar 6 herramientas. Captación, publicación, mensajería,
              IA, crédito y firma electrónica viven en el mismo núcleo.
            </p>
          </Reveal>
        </div>

        {/* Desktop constellation */}
        <Reveal>
          <div className="constellation">
            <div className="ring r2" />
            <div className="ring r1" />

            <div className="core">
              <NexoCoreLogo />
            </div>

            <svg
              style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}
              width="100%"
              height="100%"
              preserveAspectRatio="none"
            >
              {nodes.map((n, i) => (
                <line
                  key={i}
                  x1="50%" y1="50%"
                  x2={`${n.x}%`} y2={`${n.y}%`}
                  stroke="rgba(52,211,153,0.18)"
                  strokeDasharray="2 6"
                  strokeWidth="1"
                />
              ))}
            </svg>

            {nodes.map((n, i) => (
              <div
                key={i}
                className="con-node"
                style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="glyph"><Glyph name={n.g} size={18} /></div>
                <div className="name">{n.name}</div>
                <div className="desc">{n.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile layout */}
        <div className="constellation-mobile">
          <Reveal>
            <div className="constellation-mobile-core">
              <NexoCoreLogo />
            </div>
          </Reveal>
          <div className="constellation-mobile-grid">
            {nodes.map((n, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="con-node" style={{ position: "relative", left: "auto", top: "auto", transform: "none", width: "100%" }}>
                  <div className="glyph"><Glyph name={n.g} size={18} /></div>
                  <div className="name">{n.name}</div>
                  <div className="desc">{n.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
