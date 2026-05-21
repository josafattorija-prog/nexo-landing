import type { Metadata } from "next";
import Link from "next/link";
import Modules from "@/components/modules";
import CTABand from "@/components/cta";
import { Reveal, Glyph } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Módulos CRM All-in-One",
  description:
    "Propiedades, CRM Pipeline, Inbox Omnicanal, Automatizaciones, Sitio Web, App Móvil, Crédito Hipotecario y Contratos NOM-151.",
  openGraph: {
    title: "Módulos — Nexo AI",
    description: "Todo lo que un equipo inmobiliario necesita. Paga solo por lo que usas.",
    url: "https://nexoai.mx/modulos",
  },
};

export default function ModulosPage() {
  return (
    <>
      <Modules />

      {/* COM·001 — Inbox Omnicanal */}
      <section className="section tight" id="inbox-modulo">
        <div className="shell">
          <Reveal>
            <div className="mod span12" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <span className="id">COM · 001</span>
              <div className="glyph"><Glyph name="inbox" size={22} /></div>
              <h3>Inbox Omnicanal</h3>
              <p>
                WhatsApp Business API, Instagram DM, Messenger y Email unificados en un solo buzón.
                La IA sugiere la respuesta correcta en cada conversación y puntúa cada lead
                automáticamente. Cero leads perdidos.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                {["WhatsApp Business API", "Instagram DM", "Messenger", "Email", "Lead Scoring IA", "Respuestas sugeridas"].map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <p style={{ fontSize: 13, color: "var(--text-dim)" }}>
                La demo completa del Inbox está disponible en la{" "}
                <Link href="/" style={{ color: "var(--accent)", fontWeight: 600 }}>página de inicio →</Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section tight">
        <div className="shell" style={{ textAlign: "center" }}>
          <Reveal>
            <a href="https://app.nexoai.mx/sign-up" className="btn btn-primary" style={{ fontSize: 16, height: 52, padding: "0 32px" }}>
              <Glyph name="spark" size={18} />
              Activa tus módulos — 30 días gratis
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--muted)" }}>
              Sin tarjeta ·{" "}
              <Link href="/precios" style={{ color: "var(--accent)" }}>Ver planes →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
