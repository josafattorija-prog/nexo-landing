"use client";

import { useMemo } from "react";
import { Reveal } from "./atoms";

export default function Market() {
  const cells = useMemo(() =>
    Array.from({ length: 100 }, (_, i) => {
      const x = i % 10, y = Math.floor(i / 10);
      const dist = Math.sqrt((x - 4.5) ** 2 + (y - 5) ** 2);
      return Math.min(1, Math.max(0, 1 - dist / 6) + Math.random() * 0.15);
    }),
  []);

  return (
    <section className="section bg-grid" id="mercado">
      <div className="shell">
        <div className="section-head">
          <Reveal><span className="eyebrow">Datos · MKT·ZONA</span></Reveal>
          <Reveal delay={80}><h2>Análisis de mercado<br />colonia por colonia.</h2></Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Precios actualizados al mes, historial de 3 años por zona,
              mapa de calor de demanda y reportes PDF para tus propietarios.
            </p>
          </Reveal>
        </div>

        <div className="market">
          <Reveal>
            <div className="heatmap">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <div>
                  <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: ".14em" }}>
                    CDMX · DEMANDA POR COLONIA
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginTop: 4 }}>Abril 2026 · tiempo real</div>
                </div>
                <span className="flag">EN VIVO</span>
              </div>

              <div className="heatmap-grid">
                {cells.map((v, i) => (
                  <div
                    key={i}
                    className="c"
                    style={{
                      background: `rgba(52,211,153,${0.05 + v * 0.85})`,
                      boxShadow: v > 0.7 ? `0 0 8px rgba(110,231,183,${v * 0.4})` : "none",
                    }}
                  />
                ))}
              </div>

              <div className="heatmap-legend">
                <span>baja</span>
                <div className="scale" />
                <span>alta</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="market-stats">
              {[
                { nm: "Precio m² · Polanco",  sub: "vs. trim. anterior",        v: "$96,800", delta: "+4.8%", down: false },
                { nm: "Tiempo medio venta",    sub: "Roma Norte · depto 2 rec",  v: "42d",     delta: "-9d",   down: true  },
                { nm: "Demanda renta",         sub: "Coyoacán · familiar",       v: "+38%",    delta: "YoY",   down: false },
                { nm: "Tasas hipoteca",        sub: "promedio 4 bancos · 20 años",v: "10.4%",  delta: "-0.3",  down: true  },
              ].map((k, i) => (
                <div className="kpi-card" key={i}>
                  <div className="lh">
                    <div className="nm">{k.nm}</div>
                    <div className="sub">{k.sub}</div>
                  </div>
                  <div className="kv">
                    {k.v}<span className={`delta${k.down ? " down" : ""}`}>{k.delta}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
