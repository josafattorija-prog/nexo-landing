import type { Metadata } from "next";
import Link from "next/link";
import AIFeatures from "@/components/ai-features";
import Market from "@/components/market";
import CTABand from "@/components/cta";
import { Reveal, Glyph } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Inteligencia Artificial",
  description:
    "IA entrenada en bienes raíces: redacción automática, lead scoring conductual, match cliente-propiedad y forecast de cierre. Para el mercado mexicano.",
  openGraph: {
    title: "Inteligencia Artificial — Nexo AI",
    description: "CRM inmobiliario con IA real para México.",
    url: "https://nexoai.mx/ia",
  },
};

export default function IAPage() {
  return (
    <>
      <AIFeatures />
      <Market />

      <section className="section tight">
        <div className="shell" style={{ textAlign: "center" }}>
          <Reveal>
            <a href="https://app.nexoai.mx/sign-up" className="btn btn-primary" style={{ fontSize: 16, height: 52, padding: "0 32px" }}>
              <Glyph name="spark" size={18} />
              Prueba la IA de Nexo gratis 30 días
            </a>
          </Reveal>
          <Reveal delay={80}>
            <p style={{ marginTop: 14, fontSize: 13, color: "var(--muted)" }}>
              Sin tarjeta · onboarding en 24h ·{" "}
              <Link href="/precios" style={{ color: "var(--accent)" }}>Ver planes →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
