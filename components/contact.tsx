"use client";

import { useState, useTransition, useRef } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { Reveal, Glyph } from "./atoms";

export default function Contact() {
  const [state, setState] = useState<ContactState>({ status: "idle" });
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await sendContact({ status: "idle" }, formData);
      setState(result);
      if (result.status === "success") formRef.current?.reset();
    });
  }

  return (
    <section className="section" id="contacto">
      <div className="shell">
        <div className="section-head">
          <Reveal><span className="eyebrow">Contacto · Hablemos</span></Reveal>
          <Reveal delay={80}>
            <h2>¿Listo para cerrar más <span className="em">operaciones</span>?</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Agenda una demo personalizada. Un especialista de Nexo AI
              te muestra la plataforma adaptada a tu agencia.
            </p>
          </Reveal>
        </div>

        <div className="contact-grid">
          {/* Form */}
          <Reveal delay={80}>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required autoComplete="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico *</label>
                  <input id="email" name="email" type="email" placeholder="tu@agencia.com" required autoComplete="email" />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="agencia">Nombre de agencia *</label>
                  <input id="agencia" name="agencia" type="text" placeholder="Inmobiliaria Ejemplo" required />
                </div>
                <div className="form-group">
                  <label htmlFor="whatsapp">WhatsApp *</label>
                  <input id="whatsapp" name="whatsapp" type="tel" placeholder="+52 ..." required autoComplete="tel" />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="equipo">Tamaño del equipo *</label>
                  <select id="equipo" name="equipo" required className="form-select">
                    <option value="" disabled>Selecciona el tamaño...</option>
                    <option value="1 asesor (solo yo)">1 asesor (solo yo)</option>
                    <option value="2 a 5 asesores">2 a 5 asesores</option>
                    <option value="6 a 15 asesores">6 a 15 asesores</option>
                    <option value="16 o más asesores">16 o más asesores</option>
                  </select>
                </div>
                <div className="form-group" />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntanos sobre tu agencia, qué herramientas usan hoy y qué necesitas mejorar…"
                  required
                />
              </div>

              {state.message && (
                <div className={`form-status ${state.status}`} role="alert">
                  {state.message}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={pending}
                  style={{ padding: "0 28px", height: 48, fontSize: 15 }}
                >
                  {pending ? (
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ animation: "spin 1s linear infinite" }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Enviando…
                    </span>
                  ) : (
                    <>
                      <Glyph name="spark" size={16} /> Enviar mensaje
                    </>
                  )}
                </button>
                <p style={{ marginTop: 10, fontSize: 12, color: "var(--text-dim)", lineHeight: 1.5 }}>
                  Al enviar aceptas nuestra política de privacidad. No spam, nunca.
                </p>
              </div>
            </form>
          </Reveal>

          {/* WhatsApp + info card */}
          <Reveal delay={160}>
            <div className="wa-card">
              <div className="wa-icon">
                <Glyph name="whats" size={26} />
              </div>
              <h3>Escríbenos directo</h3>
              <p>
                Respuesta en minutos. Nuestro equipo está disponible de lunes a viernes
                de 9:00 a 19:00 CST.
              </p>
              <a href="https://wa.me/5212213672612" className="wa-link" target="_blank" rel="noopener noreferrer">
                <Glyph name="whats" size={18} />
                +52 1 221 367 2612
              </a>
              <div className="wa-email">
                <Glyph name="mail" size={16} />
                <a href="mailto:contacto@nexoai.mx" style={{ color: "var(--text-dim)" }}>
                  contacto@nexoai.mx
                </a>
              </div>

              <div style={{ marginTop: 8, paddingTop: 16, borderTop: "1px solid var(--border-soft)" }}>
                <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: ".12em", marginBottom: 10 }}>
                  INCLUYE EN TU DEMO
                </div>
                {[
                  "Setup inicial de tu inventario",
                  "Integración con tus portales actuales",
                  "Migración desde EasyBroker / Tokko",
                  "Onboarding para tu equipo",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8, fontSize: 13, color: "var(--text-dim)" }}>
                    <Glyph name="check" size={14} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
