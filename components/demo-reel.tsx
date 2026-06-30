import { Reveal } from "./atoms";

export default function DemoReel() {
  return (
    <section className="section tight" id="demo">
      <div className="shell">
        <div className="section-head center">
          <Reveal><span className="eyebrow">Demo · 45 segundos</span></Reveal>
          <Reveal delay={80}>
            <h2>Mira a Nexo AI <span className="em">trabajar</span>.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Sin narración: la IA genera la ficha, responde WhatsApp, califica al lead
              y mueve la operación hasta el cierre.
            </p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="demo-frame">
            <iframe src="/demo-nexoai.html" title="Demo NexoAI — la IA trabajando" loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
