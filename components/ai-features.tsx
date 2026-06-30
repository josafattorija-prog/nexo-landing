"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Reveal, Glyph } from "./atoms";
import type { ComponentProps } from "react";

type GlyphName = ComponentProps<typeof Glyph>["name"];

const feats: { id: string; name: string; d: string; icon: GlyphName }[] = [
  { id: "AI·001", name: "Redacción automática",       d: "Genera descripciones SEO de propiedades en segundos.",         icon: "spark"  },
  { id: "AI·002", name: "Lead Scoring",               d: "Puntúa cada prospecto por comportamiento, en tiempo real.",    icon: "pipe"   },
  { id: "AI·003", name: "Match cliente · propiedad",  d: "Conecta automáticamente al cliente con la propiedad ideal.",   icon: "ai"     },
  { id: "AI·004", name: "Forecast de cierre",         d: "Predice probabilidad de cierre por operación.",               icon: "shield" },
];

function AIWriter() {
  const txt = "Departamento exclusivo de 120 m² en el corazón de Polanco. Vista al Parque Lincoln, 2 recámaras con clósets vestidor, baños en mármol Carrara, cocina integral con isla y acabados de lujo. Edificio con concierge, gym y rooftop infinity.";
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setShown(txt.slice(0, i));
      if (i >= txt.length) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="code-line"><span className="k">input</span> · 3 fotos + ubicación + 4 datos básicos</div>
      <div className="code-line" style={{ background: "var(--bg-2)", color: "var(--text)", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
        {shown}<span className="typing" />
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: "auto", flexWrap: "wrap" }}>
        <span className="chip">SEO score 96</span>
        <span className="chip">Lectura 14s</span>
        <span className="chip primary">Publicar en 10 portales</span>
      </div>
    </>
  );
}

function AIScore() {
  const data = [
    { l: "Visitas anuncio",    v: 92 },
    { l: "Tiempo respuesta",   v: 78 },
    { l: "Solvencia crédito",  v: 84 },
    { l: "Coincidencia perfil",v: 96 },
  ];
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 100); return () => clearTimeout(t); }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 13, color: "var(--text-dim)" }}>María González · #LD-1042</div>
          <div style={{ fontWeight: 800, fontSize: 42, letterSpacing: "-.02em" }}>
            87<span style={{ fontSize: 18, color: "var(--muted)" }}>/100</span>
          </div>
        </div>
        <span className="chip primary">Lead caliente</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
        {data.map((d, i) => (
          <div className="score-bar" key={i}>
            <div className="slbl">{d.l}</div>
            <div className="track">
              <div className="fill" style={{ width: mounted ? `${d.v}%` : "0%", transitionDelay: `${i * 120}ms` }} />
            </div>
            <div className="sv">{d.v}</div>
          </div>
        ))}
      </div>
      <div className="code-line" style={{ marginTop: "auto" }}>
        <span className="k">acción</span> · asignar a Laura R · llamar en &lt; 5 min
      </div>
    </>
  );
}

function AIMatch() {
  const props = [
    { n: "Casa Coyoacán",   p: "$6.8M", m: "94%" },
    { n: "Depto Del Valle", p: "$5.9M", m: "87%" },
    { n: "Casa San Ángel",  p: "$7.2M", m: "82%" },
  ];
  return (
    <>
      <div className="code-line"><span className="k">cliente</span> · familia, 2 niños, presupuesto $7M, zona sur</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 4 }}>
        {props.map((p, i) => (
          <div key={i} style={{ border: "1px solid var(--border-soft)", borderRadius: 12, overflow: "hidden", background: "var(--bg-2)" }}>
            <div style={{ aspectRatio: "1.4", background: "repeating-linear-gradient(135deg,#0E2C1C,#0E2C1C 8px,#0A2014 8px,#0A2014 16px)", position: "relative" }}>
              <div style={{ position: "absolute", top: 8, right: 8, padding: "3px 8px", borderRadius: 6, background: "var(--accent)", color: "#03130A", fontSize: 11, fontWeight: 800, fontFamily: "var(--font-mono)" }}>{p.m}</div>
            </div>
            <div style={{ padding: "10px 12px" }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{p.n}</div>
              <div style={{ fontSize: 11, color: "var(--accent)", fontFamily: "var(--font-mono)" }}>{p.p}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="code-line" style={{ marginTop: "auto" }}>
        <span className="k">enviado</span> · 3 propiedades vía WhatsApp · 14:32
      </div>
    </>
  );
}

function AIForecast() {
  return (
    <>
      <div style={{ display: "flex", gap: 14 }}>
        <div style={{ flex: 1, padding: 14, border: "1px solid var(--border-soft)", borderRadius: 12, background: "var(--bg-2)" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: ".14em" }}>PROBABILIDAD CIERRE</div>
          <div style={{ fontWeight: 800, fontSize: 38, letterSpacing: "-.02em" }}>78%</div>
          <div className="mono" style={{ fontSize: 10, color: "var(--accent)" }}>↑ 12% esta semana</div>
        </div>
        <div style={{ flex: 1, padding: 14, border: "1px solid var(--border-soft)", borderRadius: 12, background: "var(--bg-2)" }}>
          <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: ".14em" }}>FECHA ESTIMADA</div>
          <div style={{ fontWeight: 800, fontSize: 24, letterSpacing: "-.02em", marginTop: 6 }}>15 may 2026</div>
          <div className="mono" style={{ fontSize: 10, color: "var(--text-dim)" }}>± 5 días</div>
        </div>
      </div>
      <div style={{ marginTop: 14 }}>
        <div style={{ height: 90, position: "relative", border: "1px solid var(--border-soft)", borderRadius: 12, padding: 14, background: "var(--bg-2)" }}>
          <svg viewBox="0 0 200 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0 50 Q 30 40, 50 35 T 100 28 T 150 16 T 200 8" stroke="var(--accent)" strokeWidth="2" fill="none" />
            <path d="M0 50 Q 30 40, 50 35 T 100 28 T 150 16 T 200 8 L 200 60 L 0 60 Z" fill="rgba(52,211,153,0.12)" />
          </svg>
        </div>
      </div>
      <div className="code-line" style={{ marginTop: "auto" }}>
        <span className="k">recomienda</span> · enviar contrato hoy · llamar martes
      </div>
    </>
  );
}

export default function AIFeatures({ preview = false }: { preview?: boolean }) {
  const [tab, setTab] = useState(0);

  if (preview) {
    return (
      <section className="section tight" id="ia-preview">
        <div className="shell">
          <div className="section-head">
            <Reveal><span className="eyebrow">Inteligencia artificial · Claude API</span></Reveal>
            <Reveal delay={80}>
              <h2>Una IA <span className="em">entrenada</span> en bienes raíces.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead">
                Cuatro motores de IA conectados a tus datos. Hablan español, conocen el mercado mexicano.
              </p>
            </Reveal>
          </div>

          <div className="ai-preview-grid">
            {feats.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="ai-feat" style={{ cursor: "default" }}>
                  <div className="ic"><Glyph name={f.icon} size={20} /></div>
                  <div style={{ flex: 1 }}>
                    <div className="fh">
                      <span>{f.name}</span>
                      <span className="fid">{f.id}</span>
                    </div>
                    <div className="fd">{f.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div style={{ marginTop: 36, textAlign: "center" }}>
              <Link href="/ia" className="ver-mas">
                Conocer la IA →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="ia">
      <div className="shell">
        <div className="section-head">
          <Reveal><span className="eyebrow">Inteligencia artificial · Claude API</span></Reveal>
          <Reveal delay={80}>
            <h2>Una IA <span className="em">entrenada</span> en bienes raíces.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Cuatro motores de IA viven dentro de Nexo, conectados a tus datos.
              Hablan español neutro, conocen el mercado mexicano y trabajan 24/7.
            </p>
          </Reveal>
        </div>

        <div className="ai-grid">
          <Reveal>
            <div className="ai-feat-list">
              {feats.map((f, i) => (
                <div
                  key={i}
                  className={`ai-feat ${tab === i ? "active" : ""}`}
                  onClick={() => setTab(i)}
                >
                  <div className="ic"><Glyph name={f.icon} size={20} /></div>
                  <div style={{ flex: 1 }}>
                    <div className="fh">
                      <span>{f.name}</span>
                      <span className="fid">{f.id}</span>
                    </div>
                    <div className="fd">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="ai-stage">
              <div className="shead">
                <div className="sti">{feats[tab].name}</div>
                <div className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>● procesando</div>
              </div>
              <div className="sbody">
                {tab === 0 && <AIWriter />}
                {tab === 1 && <AIScore />}
                {tab === 2 && <AIMatch />}
                {tab === 3 && <AIForecast />}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
