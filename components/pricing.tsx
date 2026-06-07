"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal, Glyph } from "./atoms";

type Interval = "monthly" | "quarterly" | "semiannual" | "annual";

type Price = { monthly: number; total: number };

type Tier = {
  id: string;
  icon: string;
  name: string;
  tag: string;
  prices: Record<Interval, Price>;
  href: string;
  cta: string;
  ctaStyle: "primary" | "ghost";
  popular: boolean;
  feats: string[];
};

const INHERIT_PREFIX = "Todo lo de";

// 4 formas de pago con sus descuentos (sobre el precio mensual × meses).
const INTERVALS: { id: Interval; label: string; discount: string | null; months: number; noun: string }[] = [
  { id: "monthly",    label: "Mensual",     discount: null,  months: 1,  noun: "mes" },
  { id: "quarterly",  label: "Trimestral",  discount: "−10%", months: 3, noun: "trimestre" },
  { id: "semiannual", label: "Semestral",   discount: "−20%", months: 6, noun: "semestre" },
  { id: "annual",     label: "Anual",       discount: "−30%", months: 12, noun: "año" },
];

const tiers: Tier[] = [
  {
    id: "BASE · 01",
    icon: "🌱",
    name: "Base",
    tag: "Empieza gratis para siempre",
    prices: {
      monthly:    { monthly: 0, total: 0 },
      quarterly:  { monthly: 0, total: 0 },
      semiannual: { monthly: 0, total: 0 },
      annual:     { monthly: 0, total: 0 },
    },
    href: "https://app.nexoai.mx/sign-up?plan=BASE",
    cta: "Empezar gratis",
    ctaStyle: "ghost",
    popular: false,
    feats: [
      "Hasta 10 propiedades",
      "1 usuario",
      "10 créditos IA / mes",
      "Inbox Omnicanal",
      "CRM Pipeline (Kanban)",
      "Publicación en Meta (Facebook + Instagram)",
      "Portal web personalizado",
      "Ficha PDF de propiedad",
    ],
  },
  {
    id: "STARTER · 02",
    icon: "🚀",
    name: "Starter",
    tag: "Para asesores que arrancan en serio",
    prices: {
      monthly:    { monthly: 600, total: 600 },
      quarterly:  { monthly: 540, total: 1620 },
      semiannual: { monthly: 480, total: 2880 },
      annual:     { monthly: 420, total: 5040 },
    },
    href: "https://app.nexoai.mx/sign-up?plan=STARTER",
    cta: "Iniciar prueba gratis 30 días",
    ctaStyle: "ghost",
    popular: false,
    feats: [
      "Todo lo de Base +",
      "Hasta 30 propiedades",
      "3 usuarios",
      "100 créditos IA / mes",
      "IA en Inbox y CRM",
      "Descripciones con IA",
      "Publicación a portales externos",
      "Sin branding NexoAI",
    ],
  },
  {
    id: "PRO · 03",
    icon: "⚡",
    name: "Pro",
    tag: "Para inmobiliarias que escalan",
    prices: {
      monthly:    { monthly: 800, total: 800 },
      quarterly:  { monthly: 720, total: 2160 },
      semiannual: { monthly: 640, total: 3840 },
      annual:     { monthly: 560, total: 6720 },
    },
    href: "https://app.nexoai.mx/sign-up?plan=PRO",
    cta: "Iniciar prueba gratis 30 días",
    ctaStyle: "ghost",
    popular: true,
    feats: [
      "Todo lo de Starter +",
      "Hasta 50 propiedades",
      "5 usuarios",
      "300 créditos IA / mes",
      "Asistente IA con Claude",
      "Automatizaciones visuales",
      "Análisis de mercado por zona",
    ],
  },
];

const PREVIEW_FEAT_COUNT = 3;

function TierCard({ t, interval, previewOnly = false }: {
  t: Tier;
  interval: Interval;
  previewOnly?: boolean;
}) {
  const featsToShow = previewOnly ? t.feats.slice(0, PREVIEW_FEAT_COUNT) : t.feats;
  const remaining = t.feats.length - PREVIEW_FEAT_COUNT;
  const ivConfig = INTERVALS.find((i) => i.id === interval)!;
  const price = t.prices[interval];
  const showBilled = interval !== "monthly" && price.total > 0;

  return (
    <div className="tier">
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
        {price.monthly === 0 ? (
          <div style={{ fontSize: 42, fontWeight: 900, letterSpacing: "-.02em", lineHeight: 1 }}>
            Gratis
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 2, lineHeight: 1 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginTop: 6 }}>$</span>
              <span style={{ fontSize: 46, fontWeight: 900, letterSpacing: "-.03em", color: "var(--text)" }}>
                {price.monthly.toLocaleString("es-MX")}
              </span>
              <span style={{ fontSize: 13, color: "var(--muted)", fontFamily: "var(--font-mono)", fontWeight: 500, marginTop: 8, marginLeft: 4 }}>
                MXN/mes
              </span>
            </div>
            {showBilled && (
              <div style={{ fontSize: 13, color: "var(--accent)", fontFamily: "var(--font-mono)", fontWeight: 500, marginTop: 4 }}>
                ${price.total.toLocaleString("es-MX")} MXN facturado por {ivConfig.noun} ({ivConfig.months} meses)
              </div>
            )}
          </div>
        )}
      </div>

      {/* Features */}
      <ul style={{ flex: 1 }}>
        {featsToShow.map((f, fi) => (
          <li key={fi} className={f.startsWith(INHERIT_PREFIX) ? "tier-inherit" : ""}>
            {f}
          </li>
        ))}
        {previewOnly && remaining > 0 && (
          <li style={{ color: "var(--muted)", fontStyle: "italic" }}>+ {remaining} más…</li>
        )}
      </ul>

      {/* CTA */}
      <a
        href={t.href}
        className={`btn tier-cta ${t.ctaStyle === "primary" ? "btn-primary" : "btn-ghost"}`}
      >
        {t.cta}
        <Glyph name="arrow" size={14} />
      </a>
    </div>
  );
}

export default function Pricing({ preview = false }: { preview?: boolean }) {
  const [interval, setInterval] = useState<Interval>("monthly");

  if (preview) {
    return (
      <section className="section tight" id="precios-preview">
        <div className="shell">
          <div className="section-head">
            <Reveal><span className="eyebrow">Precios · MXN</span></Reveal>
            <Reveal delay={80}>
              <h2>Elige el plan perfecto<br /><span className="em">para tu agencia</span></h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead">Empieza gratis y escala cuando estés listo. Sin contratos.</p>
            </Reveal>
          </div>

          <div className="tier-grid-preview">
            {tiers.map((t, i) => (
              <Reveal key={i} delay={i * 60}>
                <TierCard t={t} interval="monthly" previewOnly />
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div style={{ marginTop: 36, textAlign: "center" }}>
              <Link href="/precios" className="ver-mas">
                Ver todos los planes →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

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
            {INTERVALS.map((iv) => (
              <button
                key={iv.id}
                className={interval === iv.id ? "active" : ""}
                onClick={() => setInterval(iv.id)}
              >
                {iv.label}
                {iv.discount && <span className="pricing-badge">{iv.discount}</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="tier-grid">
          {tiers.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <TierCard t={t} interval={interval} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
