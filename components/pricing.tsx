"use client";

import { useState } from "react";
import { Reveal, Glyph } from "./atoms";

type Tier = {
  id: string;
  icon: string;
  name: string;
  tag: string;
  monthlyPrice: number;
  annualMonthly: number;
  annualTotal: number;
  href: string;
  cta: string;
  ctaStyle: "primary" | "ghost";
  popular: boolean;
  feats: string[];
};

const INHERIT_PREFIX = "Todo lo de";

const tiers: Tier[] = [
  {
    id: "BASE · 01",
    icon: "🌱",
    name: "Base",
    tag: "Empieza gratis para siempre",
    monthlyPrice: 0,
    annualMonthly: 0,
    annualTotal: 0,
    href: "https://app.nexoai.mx/sign-up?plan=BASE",
    cta: "Empezar gratis",
    ctaStyle: "ghost",
    popular: false,
    feats: [
      "Hasta 10 propiedades",
      "1 usuario",
      "10 créditos IA / mes",
      "App móvil iOS + Android",
      "Ficha PDF de propiedad",
      "Publicación en portales (básico)",
    ],
  },
  {
    id: "STARTER · 02",
    icon: "🚀",
    name: "Starter",
    tag: "Para asesores que arrancan en serio",
    monthlyPrice: 500,
    annualMonthly: 400,
    annualTotal: 4800,
    href: "https://app.nexoai.mx/sign-up?plan=STARTER",
    cta: "Iniciar prueba gratis 30 días",
    ctaStyle: "ghost",
    popular: false,
    feats: [
      "Todo lo de Base +",
      "Hasta 30 propiedades",
      "3 usuarios",
      "100 créditos IA / mes",
      "CRM Pipeline (Kanban)",
      "Inbox Omnicanal",
      "Descripciones con IA",
      "Publicación en Meta (Facebook + Instagram)",
      "Sin branding NexoAI",
    ],
  },
  {
    id: "PRO · 03",
    icon: "⚡",
    name: "Pro",
    tag: "Para inmobiliarias que escalan",
    monthlyPrice: 800,
    annualMonthly: 640,
    annualTotal: 7680,
    href: "#contacto",
    cta: "Contactar a ventas",
    ctaStyle: "ghost",
    popular: true,
    feats: [
      "Hasta 200 propiedades",
      "10 usuarios",
      "1,000 créditos IA / mes",
      "Todo lo de Starter +",
      "Asistente IA con Claude",
      "Automatizaciones visuales",
      "Análisis de mercado por zona",
      "Crédito hipotecario · 4 bancos",
      "Publicación en MercadoLibre",
    ],
  },
  {
    id: "ENT · 04",
    icon: "🏆",
    name: "Enterprise",
    tag: "IA real para equipos grandes",
    monthlyPrice: 1000,
    annualMonthly: 800,
    annualTotal: 9600,
    href: "#contacto",
    cta: "Contactar a ventas",
    ctaStyle: "ghost",
    popular: false,
    feats: [
      "Propiedades ilimitadas",
      "Usuarios ilimitados",
      "Créditos IA ilimitados",
      "Todo lo de Pro +",
      "Contratos digitales NOM-151",
      "IA Premium (Claude Opus)",
      "Dominio personalizado",
      "API pública",
      "Soporte prioritario 24/7",
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="section" id="precios">
      <div className="shell">
        <div className="section-head center">
          <Reveal>
            <h2 style={{ textAlign: "center" }}>
              Elige el plan perfecto<br />
              <span className="em">para tu agencia</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lead" style={{ textAlign: "center" }}>
              Empieza gratis y escala cuando estés listo. Sin contratos, cancela cuando quieras.
            </p>
          </Reveal>

          <div className="pricing-tabs">
            <button className={!annual ? "active" : ""} onClick={() => setAnnual(false)}>
              Mensual
            </button>
            <button className={annual ? "active" : ""} onClick={() => setAnnual(true)}>
              Anual
              <span className="pricing-badge">Ahorra 20%</span>
            </button>
          </div>
        </div>

        <div className="tier-grid">
          {tiers.map((t, i) => {
            const displayPrice = annual ? t.annualMonthly : t.monthlyPrice;
            return (
              <Reveal key={i} delay={i * 80} className="tier">

                {/* Header */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ fontSize: 32, lineHeight: 1, flexShrink: 0 }}>{t.icon}</span>
                  <div>
                    <h3 style={{ fontSize: 20, marginBottom: 4 }}>{t.name}</h3>
                    <div className="tagline">{t.tag}</div>
                  </div>
                </div>

                {/* Price */}
                <div>
                  {displayPrice === 0 ? (
                    <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: "-.02em", lineHeight: 1 }}>
                      Gratis
                    </div>
                  ) : (
                    <div>
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 2, lineHeight: 1 }}>
                        <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginTop: 6 }}>$</span>
                        <span style={{ fontSize: 46, fontWeight: 900, letterSpacing: "-.03em", color: "var(--text)" }}>
                          {displayPrice.toLocaleString("es-MX")}
                        </span>
                        <span style={{ fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-mono)", fontWeight: 500, marginTop: 8, marginLeft: 4 }}>
                          MXN/mes
                        </span>
                      </div>
                      {annual && t.annualTotal > 0 && (
                        <div style={{ fontSize: 13, color: "var(--accent)", fontFamily: "var(--font-mono)", fontWeight: 500, marginTop: 4 }}>
                          ${t.annualTotal.toLocaleString("es-MX")} MXN/año facturado anualmente
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul style={{ flex: 1 }}>
                  {t.feats.map((f, fi) => (
                    <li key={fi} className={f.startsWith(INHERIT_PREFIX) ? "tier-inherit" : ""}>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={t.href}
                  className={`btn tier-cta ${t.ctaStyle === "primary" ? "btn-primary" : "btn-ghost"}`}
                >
                  {t.cta}
                  <Glyph name="arrow" size={14} />
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
