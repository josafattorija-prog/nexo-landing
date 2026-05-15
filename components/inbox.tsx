"use client";

import { useState } from "react";
import { Reveal, Glyph } from "./atoms";
import type { ComponentProps } from "react";

type GlyphName = ComponentProps<typeof Glyph>["name"];
type Score = "hot" | "warm" | "ok";

const items: { name: string; ch: string; icon: GlyphName; last: string; t: string; score: Score; scoreLbl: string }[] = [
  { name: "María González",  ch: "wa",   icon: "whats", last: "Sí, me encantaría ver Polanco mañana 10am",    t: "2m",  score: "hot",  scoreLbl: "caliente" },
  { name: "Carlos Méndez",   ch: "ig",   icon: "ig",    last: "¿Tienen casas con jardín en Coyoacán?",        t: "18m", score: "warm", scoreLbl: "tibio"    },
  { name: "Lucía Ramírez",   ch: "fb",   icon: "fb",    last: "Quisiera agendar visita el sábado",            t: "1h",  score: "hot",  scoreLbl: "caliente" },
  { name: "Eduardo Vargas",  ch: "mail", icon: "mail",  last: "Adjunto comprobante de ingresos para crédito", t: "3h",  score: "ok",   scoreLbl: "cierre"   },
];

export default function Inbox() {
  const [active, setActive] = useState(0);

  return (
    <section className="section bg-grid" id="inbox">
      <div className="shell">
        <div className="section-head">
          <Reveal><span className="eyebrow">Inbox · COM·001</span></Reveal>
          <Reveal delay={80}>
            <h2>Un solo buzón.<br /><span className="em">Cuatro canales.</span> Cero leads perdidos.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead">
              WhatsApp Business API, Instagram DM, Messenger y Email unificados.
              La IA sugiere la respuesta correcta en cada conversación.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="inbox-mock" style={{ marginTop: 48 }}>
            {/* Contact list */}
            <div className="inbox-list">
              <div style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-soft)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>Conversaciones · 808</div>
                <div className="mono" style={{ fontSize: 10, color: "var(--accent)" }}>● activo</div>
              </div>

              {items.map((it, i) => (
                <div
                  key={i}
                  className={`inbox-item ${active === i ? "active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  <div className="av">
                    {it.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    <span className="ch"><Glyph name={it.icon} size={9} /></span>
                  </div>
                  <div className="meta">
                    <div className="who">
                      <span>{it.name}</span>
                      <span className="t">{it.t}</span>
                    </div>
                    <div className="prev">{it.last}</div>
                    <div className="badges">
                      <span className={`badge ${it.score}`}>● {it.scoreLbl}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Thread */}
            <div className="inbox-thread">
              <div className="thread-head">
                <div>
                  <div className="who">{items[active].name}</div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>
                    vía WhatsApp · interesada en Polanco · score 87/100
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <span className="chip"><Glyph name="ai" size={12} /> IA activa</span>
                  <span className="chip">Asignar</span>
                </div>
              </div>

              <div className="bubble in">
                Hola, vi su anuncio del depto en Av. Presidente Masaryk. ¿Sigue disponible?
                <span className="ts">10:14</span>
              </div>
              <div className="bubble out">
                ¡Hola María! Sí, sigue disponible. Es de 120 m², 2 recámaras, vista al parque.
                ¿Te paso el video tour 360°?
                <span className="ts">10:14</span>
              </div>
              <div className="bubble in">
                Sí, me encantaría ver Polanco mañana 10am
                <span className="ts">10:16</span>
              </div>

              <div className="ai-suggest">
                <div className="h"><Glyph name="ai" size={14} /> Sugerencia IA · listo para enviar</div>
                <div className="body">
                  Perfecto María, agendé tu visita para mañana 10:00 a.m. en Av. Presidente Masaryk 207.
                  Te llegará el ubic. por WhatsApp 30 min antes. ¿Vienes con alguien más?
                </div>
                <div className="ai-actions">
                  <button className="chip primary">Enviar</button>
                  <button className="chip">Editar</button>
                  <button className="chip">Otra opción</button>
                  <button className="chip" style={{ marginLeft: "auto" }}>📅 Crear evento</button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
