import type { Metadata } from "next";
import Link from "next/link";
import Comparativa from "@/components/comparativa";
import CTABand from "@/components/cta";
import { Reveal, Glyph } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Comparativa 2026",
  description:
    "Tabla comparativa completa: Nexo AI vs EasyBroker vs Tokko vs Nocnok vs AlterEstate vs kvCORE. Análisis de plataforma 2026.",
  openGraph: {
    title: "Comparativa 2026 — Nexo AI",
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
              Migra desde tu CRM actual en 24 horas
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--muted)" }}>
              Migración asistida desde EasyBroker, Tokko o tu hoja de cálculo ·{" "}
              <Link href="/contacto" style={{ color: "var(--accent)" }}>Hablar con ventas →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
