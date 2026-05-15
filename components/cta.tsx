import { Reveal, Glyph } from "./atoms";

export default function CTABand() {
  return (
    <section className="section" id="cta">
      <div className="shell">
        <div className="cta-band">
          <Reveal>
            <span className="eyebrow">Disponible · Abril 2026</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 style={{ marginTop: 18 }}>Toma el control del<br />ciclo completo de venta.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p>
              30 días gratis. Sin tarjeta. Migración asistida desde EasyBroker, Tokko o tu hoja de cálculo.
              Onboarding personalizado en 24 horas.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="cta-actions">
              <a href="https://nexoai.mx/sign-up" className="btn btn-primary"><Glyph name="spark" size={16} /> Probar Nexo AI</a>
              <a href="#contacto" className="btn btn-ghost">Hablar con ventas <Glyph name="arrow" size={14} /></a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase" }}>
              <span>● 30 días gratis</span>
              <span>● Sin permanencia</span>
              <span>● Soporte en español</span>
              <span>● Datos en MX</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
