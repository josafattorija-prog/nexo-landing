"use client";

import Image from "next/image";
import Link from "next/link";
import { Glyph } from "./atoms";
import type { ComponentProps } from "react";

type GlyphName = ComponentProps<typeof Glyph>["name"];

const socials: { name: GlyphName; href: string }[] = [
  { name: "ig",    href: "#" },
  { name: "fb",    href: "#" },
  { name: "whats", href: "https://wa.me/5212213672612" },
  { name: "mail",  href: "mailto:contacto@nexoai.mx" },
];

export default function Footer() {
  return (
    <footer id="footer">
      <div className="shell">
        <div className="foot-grid">
          {/* Brand */}
          <div className="foot-col">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <Image src="/nexo-logo-light.png" alt="Nexo AI" width={42} height={42} className="logo-light" />
              <Image src="/nexo-logo-dark.png" alt="Nexo AI" width={42} height={42} className="logo-dark" />
              <div>
                <div style={{ fontWeight: 800, fontSize: 18, color: "var(--text)" }}>
                  Nexo<span style={{ color: "var(--accent)" }}>AI</span>
                </div>
                <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: ".16em" }}>
                  LA IA DEL SECTOR INMOBILIARIO
                </div>
              </div>
            </div>
            <p style={{ maxWidth: "34ch", color: "var(--text-dim)" }}>
              El primer CRM inmobiliario All-in-One de México con IA real,
              omnicanalidad y datos de mercado locales.
            </p>
            <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
              {socials.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  style={{ width: 36, height: 36, border: "1px solid var(--border)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-dim)", transition: "border-color .15s, color .15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-dim)"; }}
                >
                  <Glyph name={name} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Producto */}
          <div className="foot-col">
            <h4>Producto</h4>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/ia">Inteligencia artificial</Link></li>
              <li><Link href="/modulos">Módulos</Link></li>
              <li><Link href="/precios">Precios</Link></li>
            </ul>
          </div>

          {/* Recursos */}
          <div className="foot-col">
            <h4>Recursos</h4>
            <ul>
              <li><a href="#">Documentación</a></li>
              <li><Link href="/comparativa">Comparativa 2026</Link></li>
              <li><a href="#">Casos de éxito</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">API pública</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="foot-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="mailto:contacto@nexoai.mx?subject=Carreras">Carreras</a></li>
              <li><a href="mailto:contacto@nexoai.mx">contacto@nexoai.mx</a></li>
              <li><a href="mailto:soporte@nexoai.mx">soporte@nexoai.mx</a></li>
              <li><a href="https://wa.me/5212213672612">+52 221 367 2612</a></li>
              <li><Link href="/contacto">Contacto y demo</Link></li>
              <li><a href="#">Términos</a></li>
              <li><a href="#">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Nexo AI · nexoai.mx · Hecho en México</span>
          <span>Stack · Next.js · Claude · AWS · NOM-151</span>
        </div>
      </div>
    </footer>
  );
}
