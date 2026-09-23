import { Fragment } from "react";

/** Marca escrita igual que en el logo del nav: "Nexo" + "AI" en color acento. */
export function Brand() {
  return (
    <span className="brand-name">
      Nexo<span className="brand-ai">AI</span>
    </span>
  );
}

/** Reemplaza cada "NexoAI" de un texto plano por <Brand />. */
export function withBrand(text: string) {
  const parts = text.split("NexoAI");
  return parts.map((p, i) => (
    <Fragment key={i}>
      {p}
      {i < parts.length - 1 && <Brand />}
    </Fragment>
  ));
}
