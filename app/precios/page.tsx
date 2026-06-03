import type { Metadata } from "next";
import Link from "next/link";
import Pricing from "@/components/pricing";
import CTABand from "@/components/cta";
import { Reveal, Glyph } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Precios y planes",
  description:
    "Planes Base (gratis), Starter ($600 MXN), Pro ($800 MXN) y Enterprise ($1,000 MXN). Sin contratos, cancela cuando quieras.",
  openGraph: {
    title: "Precios — Nexo AI",
    description: "Empieza gratis y escala cuando estés listo. Sin contratos, cancela cuando quieras.",
    url: "https://nexoai.mx/precios"
  },
};

export default function PreciosPage() {
  return (
    <>
      <Pricing />

      <section className="section tight">
        <div className="shell" style={{ textAlign: "center" }}>
          <Reveal>
            <a href="https://app.nexoai.mx/sign-up" className="btn btn-primary" style={{ fontSize: 16, height: 52, padding: "0 32px" }}>
              <Glyph name="spark" size={18} />
              Empieza gratis — sin tarjeta de crédito
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--muted)" }}>
              ¿Tienes dudas sobre qué plan elegir?{" "}
              <Link href="/contacto" style={{ color: "var(--accent)" }}>Hablar con ventas →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
