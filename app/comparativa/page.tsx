import type { Metadata } from "next";
import Comparativa from "@/components/comparativa";
import CTABand from "@/components/cta";
import { Reveal, Glyph } from "@/components/atoms";
import { CTA_LABEL } from "@/lib/cta";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Comparativa 2026",
  description:
    "Tabla comparativa completa: NexoAI vs EasyBroker vs Tokko vs Nocnok vs AlterEstate vs kvCORE. Análisis de plataforma 2026.",
  openGraph: {
    title: "Comparativa 2026 — NexoAI",
    description: "El único CRM inmobiliario que marca todas las casillas en el mercado mexicano.",
    url: "https://nexoai.mx/comparativa",
  },
};

export default function ComparativaPage() {
  return (
    <>
      <Comparativa />

      <section className="section tight">
        <div className="shell" style={{ textAlign: "center" }}>
          <Reveal>
            <a href="https://app.nexoai.mx/sign-up" className="btn btn-primary" style={{ fontSize: 16, height: 52, padding: "0 32px" }}>
              <Glyph name="spark" size={18} />
              {CTA_LABEL}
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--muted)" }}>
              Migración asistida desde EasyBroker, Tokko o tu hoja de cálculo ·{" "}
              <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>Hablar con ventas →</a>
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
