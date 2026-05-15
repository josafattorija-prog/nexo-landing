import { Fragment } from "react";
import { Reveal } from "./atoms";

type CellValue = "SI" | "NO" | "PAR" | "IA";

function Cell({ k }: { k: CellValue }) {
  if (k === "SI")  return <span className="cell yes">✓</span>;
  if (k === "NO")  return <span className="cell no">✕</span>;
  if (k === "PAR") return <span className="cell par">~</span>;
  if (k === "IA")  return <span className="cell ai">IA</span>;
  return null;
}

const sections: { t: string; rows: [string, CellValue[]][] }[] = [
  {
    t: "CRM y Contactos",
    rows: [
      ["Pipeline Kanban visual",             ["IA","SI","SI","PAR","SI","SI"]],
      ["Lead scoring conductual",            ["IA","NO","PAR","NO","PAR","IA"]],
      ["Asignación automática de leads",     ["IA","NO","SI","NO","SI","IA"]],
      ["Pre-calificación crediticia MX",     ["SI","NO","NO","SI","NO","NO"]],
    ],
  },
  {
    t: "Comunicación y canales",
    rows: [
      ["Inbox omnicanal real WA · IG · FB",  ["SI","PAR","PAR","PAR","SI","SI"]],
      ["Chatbot 24/7 con IA",                ["IA","NO","SI","NO","SI","IA"]],
    ],
  },
  {
    t: "Inteligencia Artificial",
    rows: [
      ["Redacción con IA",                   ["IA","NO","PAR","NO","PAR","IA"]],
      ["Nutrición de leads con IA",          ["IA","NO","PAR","NO","PAR","IA"]],
      ["Match cliente · propiedad",          ["IA","NO","PAR","NO","SI","IA"]],
    ],
  },
  {
    t: "Cierre y operación",
    rows: [
      ["Contratos digitales NOM-151",        ["SI","NO","NO","NO","SI","NO"]],
      ["Automatizaciones drag & drop",       ["SI","NO","NO","NO","PAR","SI"]],
      ["App móvil de calidad",               ["SI","PAR","PAR","PAR","NO","SI"]],
    ],
  },
];

export default function Comparativa() {
  return (
    <section className="section" id="comparativa">
      <div className="shell">
        <div className="section-head">
          <Reveal><span className="eyebrow">Comparativa · Abril 2026</span></Reveal>
          <Reveal delay={80}>
            <h2>El único producto que <span className="em">marca todas las casillas</span><br />en el mercado mexicano.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead">
              Comparamos a Nexo AI con las plataformas líderes en MX y LATAM.
              Datos del análisis de plataforma 2026.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="compare">
            <div className="compare-wrap">
              <table>
                <thead>
                  <tr>
                    <th className="first">Funcionalidad</th>
                    <th className="us">Nexo AI</th>
                    <th>EasyBroker</th>
                    <th>Tokko</th>
                    <th>Nocnok</th>
                    <th>AlterEstate</th>
                    <th>kvCORE</th>
                  </tr>
                </thead>
                <tbody>
                  {sections.map((s, si) => (
                    <Fragment key={si}>
                      <tr className="section-row">
                        <td colSpan={7}>{s.t}</td>
                      </tr>
                      {s.rows.map((r, ri) => (
                        <tr key={ri}>
                          <td className="first">{r[0]}</td>
                          {r[1].map((c, ci) => (
                            <td key={ci} className={ci === 0 ? "us" : ""}>
                              <Cell k={c} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div style={{ display: "flex", gap: 18, marginTop: 18, flexWrap: "wrap", color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".08em", alignItems: "center" }}>
            <span><span className="cell yes" style={{ width: 18, height: 18 }}>✓</span> Disponible</span>
            <span><span className="cell par" style={{ width: 18, height: 18 }}>~</span> Parcial</span>
            <span><span className="cell no"  style={{ width: 18, height: 18 }}>✕</span> No disponible</span>
            <span><span className="cell ai"  style={{ height: 18, fontSize: 9 }}>IA</span> Excepcional con IA</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
