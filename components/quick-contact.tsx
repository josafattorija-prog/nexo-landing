"use client";

import { useState, useTransition, useRef } from "react";
import Link from "next/link";
import { sendQuickContact, type QuickState } from "@/app/actions/quick-contact";
import { Reveal, Glyph } from "./atoms";

export default function QuickContact() {
  const [state, setState] = useState<QuickState>({ status: "idle" });
  const [pending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await sendQuickContact({ status: "idle" }, formData);
      setState(result);
      if (result.status === "success") formRef.current?.reset();
    });
  }

  return (
    <section className="section tight" id="contacto-rapido">
      <div className="shell">
        <div className="qc-wrap">
          {/* Left — copy */}
          <div>
            <Reveal><span className="eyebrow">Contacto · Demo en 24h</span></Reveal>
            <Reveal delay={80}>
              <h2>¿Tienes <span className="em">preguntas</span>?</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead">
                Déjanos tus datos y un especialista te contacta en menos de 24 horas.
                Sin compromiso, sin spam.
              </p>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={120} className="qc-form-col">
            {state.status === "success" ? (
              <div className="qc-success">
                <div className="qc-success-icon"><Glyph name="check" size={28} /></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>¡Mensaje enviado!</div>
                  <div style={{ color: "var(--text-dim)", fontSize: 14 }}>
                    Te contactamos en menos de 24 horas.
                  </div>
                </div>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="qc-form">
                <div className="form-group">
                  <label htmlFor="qc-nombre">Nombre</label>
                  <input id="qc-nombre" name="nombre" type="text" placeholder="Tu nombre" required autoComplete="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="qc-email">Correo electrónico</label>
                  <input id="qc-email" name="email" type="email" placeholder="tu@agencia.com" required autoComplete="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="qc-whatsapp">WhatsApp</label>
                  <input id="qc-whatsapp" name="whatsapp" type="tel" placeholder="+52 ..." required autoComplete="tel" />
                </div>

                {state.status === "error" && state.message && (
                  <div className="form-status error" role="alert">{state.message}</div>
                )}

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={pending}
                  style={{ width: "100%", justifyContent: "center", height: 48 }}
                >
                  {pending ? (
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ animation: "spin 1s linear infinite" }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Enviando…
                    </span>
                  ) : (
                    <><Glyph name="spark" size={16} /> Enviar mensaje</>
                  )}
                </button>

                <p style={{ marginTop: 12, fontSize: 13, color: "var(--muted)", textAlign: "center" }}>
                  ¿Necesitas una demo personalizada?{" "}
                  <Link href="/contacto" style={{ color: "var(--accent)", fontWeight: 600 }}>
                    Ver formulario completo →
                  </Link>
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
