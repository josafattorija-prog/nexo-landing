import type { ReactNode } from "react";

/** Sección de un documento legal. */
export interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  lastUpdated: string;
  sections: LegalSection[];
}

/**
 * Layout compartido de los documentos legales (aviso de privacidad, términos).
 * Server Component a propósito: el contenido debe existir en el HTML que
 * entrega el servidor, porque los revisores de Meta y los buscadores lo leen
 * sin ejecutar JavaScript.
 */
export default function LegalPage({ eyebrow, title, intro, lastUpdated, sections }: LegalPageProps) {
  return (
    <section className="section">
      <div className="shell legal-doc">
        <p className="legal-eyebrow">{eyebrow}</p>
        <h1 className="legal-title">{title}</h1>
        <div className="legal-intro">{intro}</div>

        {sections.map((section, i) => (
          <section key={section.heading} className="legal-section">
            <h2>
              <span className="legal-num">{String(i + 1).padStart(2, "0")}</span>
              {section.heading}
            </h2>
            {section.body}
          </section>
        ))}

        <p className="legal-updated">Última actualización: {lastUpdated}</p>
      </div>
    </section>
  );
}
