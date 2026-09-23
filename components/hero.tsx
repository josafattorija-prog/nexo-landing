"use client";

import { Reveal, Glyph } from "./atoms";
import { CTA_LABEL } from "@/lib/cta";
import { Brand } from "@/components/brand";

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
              <Brand /> es el primer CRM inmobiliario All-in-One de México: une
              <strong style={{ color: "var(--text)" }}> WhatsApp, Instagram, Facebook y Email</strong> en un solo buzón, automatiza el
              ciclo de venta y cierra más operaciones con una IA entrenada en bienes raíces.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero-actions">
              <a href="https://app.nexoai.mx/sign-up" className="btn btn-primary">
                <Glyph name="spark" size={16} /> {CTA_LABEL}
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
                <div className="num">4</div>
                <div className="lbl">Canales conectados</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* N-Bot periodic table card */}
        <Reveal delay={500} style={{ width: "100%", paddingBottom: 40 }}>
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
              <div className="pt-name">Nexo<span className="pt-name-ai">AI</span></div>
              <div className="pt-tag">Tabla periódica · elemento N-Bot</div>
            </div>

            {/* Orbiting tags */}
            <div className="pt-orbit">
              <div className="tag t1"><span className="d" /> WhatsApp · lead nuevo</div>
              <div className="tag t2"><span className="d" /> Match IA · 94%</div>
              <div className="tag t3"><span className="d" /> Sitio web · publicado</div>
              <div className="tag t4"><span className="d" /> Crédito · pre-aprobado</div>
              <div className="tag t5"><span className="d" /> Redes sociales · conectadas</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
