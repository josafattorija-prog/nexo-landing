import type { Metadata } from "next";
import Pricing from "@/components/pricing";
import CTABand from "@/components/cta";
import { Reveal, Glyph } from "@/components/atoms";
import { CTA_LABEL } from "@/lib/cta";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Precios y planes",
  description:
    "Planes Base (gratis), Starter ($600 MXN), Pro ($800 MXN) y Enterprise. Sin contratos, cancela cuando quieras. Ahorra 30% con plan anual.",
  openGraph: {
    title: "Precios — NexoAI",
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
              {CTA_LABEL}
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--muted)" }}>
              ¿Tienes dudas sobre qué plan elegir?{" "}
              <a href={BUSINESS.whatsappHref} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>Hablar con ventas →</a>
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
