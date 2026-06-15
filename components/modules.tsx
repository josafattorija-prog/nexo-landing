import { Reveal, Glyph } from "./atoms";

export default function Modules() {
  return (
    <section className="section" id="modulos">
      <div className="shell">
        <div className="section-head">
          <Reveal><span className="eyebrow">Módulos · Pago por uso</span></Reveal>
          <Reveal delay={80}><h2>Todo lo que un <span className="em">equipo<br />inmobiliario</span> necesita.</h2></Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Activa solo lo que usas. Cada agencia paga por los módulos que necesita
              y escala cuando crece.
            </p>
          </Reveal>
        </div>

        <div className="mod-grid">
          {/* Propiedades Core — span 6 */}
          <Reveal className="mod span6">
            <span className="id">PROP · 002</span>
            <div className="glyph"><Glyph name="mkt" size={22} /></div>
            <h3>Propiedades Core</h3>
            <p>Inventario ilimitado, fotos en alta, tours 360, ficha PDF auto-generada y publicación con un click en 30+ portales mexicanos.</p>
            <div style={{ display: "flex", gap: 8, marginTop: 18, flexWrap: "wrap" }}>
              {["Inmuebles24", "Lamudi", "Vivanuncios", "Propiedades.com", "+27"].map((p) => (
                <span key={p} className="chip">{p}</span>
              ))}
            </div>
          </Reveal>

          {/* CRM Pipeline — span 6 */}
          <Reveal className="mod span6" delay={100}>
            <span className="id">CRM · 003</span>
            <div className="glyph"><Glyph name="pipe" size={22} /></div>
            <h3>Pipeline Kanban</h3>
            <p>Arrastra leads entre etapas, asigna por zona, asesor y perfil. Importa CSV en 1 minuto y conecta tu agenda.</p>
            <div style={{ display: "flex", gap: 6, marginTop: 18 }}>
              {["Nuevo", "Activo", "Contactado", "Cerrado"].map((s, i) => (
                <div key={s} style={{ flex: 1, padding: "8px 10px", borderRadius: 8, background: "rgba(52,211,153,0.06)", border: "1px solid var(--border-soft)", fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-dim)", textAlign: "center" }}>
                  <div style={{ color: "var(--accent)", fontSize: 9, letterSpacing: ".12em" }}>0{i + 1}</div>
                  {s}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Automatizaciones — span 4 */}
          <Reveal className="mod span4" delay={150}>
            <span className="id">AUTO · 004</span>
            <div className="glyph"><Glyph name="auto" size={22} /></div>
            <h3>Automatizaciones</h3>
            <p>Flujos drag &amp; drop sin código. Nutrición de leads fríos, recordatorios y alertas por inactividad.</p>
          </Reveal>

          {/* Sitio Web — span 4 */}
          <Reveal className="mod span4" delay={200}>
            <span className="id">SITE · 005</span>
            <div className="glyph"><Glyph name="site" size={22} /></div>
            <h3>Sitio Web Premium</h3>
            <p>Editor visual, dominio propio, SEO automático, blog escrito por IA y analytics integrado.</p>
          </Reveal>

          {/* App móvil — span 4 */}
          <Reveal className="mod span4" delay={250}>
            <span className="id">MOB · 006</span>
            <div className="glyph"><Glyph name="mobile" size={22} /></div>
            <h3>App iOS + Android</h3>
            <p>Modo offline, push notifications instantáneas y captura de leads desde el celular del asesor.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
