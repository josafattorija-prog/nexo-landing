"use client";

import Link from "next/link";
import { Glyph } from "./atoms";
import type { ComponentProps } from "react";
import { BUSINESS, fullAddress } from "@/lib/business";
import { Brand } from "@/components/brand";

type GlyphName = ComponentProps<typeof Glyph>["name"];

// Solo canales reales. No agregar redes sin perfil: un enlace muerto resta
// credibilidad y es una de las señales que Meta revisa al verificar el negocio.
const socials: { name: GlyphName; href: string }[] = [
  { name: "whats", href: BUSINESS.whatsappHref },
  { name: "mail",  href: `mailto:${BUSINESS.email}` },
];

export default function Footer() {
  return (
    <footer id="footer">
      <div className="shell">
        <div className="foot-grid">
          {/* Brand */}
          <div className="foot-col">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <img src="/nexo-logo-light.svg" alt="NexoAI" width={42} height={42} className="logo-light" />
              <img src="/nexo-logo-dark.svg" alt="NexoAI" width={42} height={42} className="logo-dark" />
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
              <li><Link href="/comparativa">Comparativa 2026</Link></li>
              <li><Link href="/modulos">Módulos</Link></li>
              <li><Link href="/propiedades">Bolsa inmobiliaria</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="foot-col">
            <h4>Empresa</h4>
            <ul>
              <li><Link href="/sobre-nosotros">Sobre nosotros</Link></li>
              <li><Link href="/contacto">Contacto y demo</Link></li>
              <li><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
              <li><a href={`mailto:${BUSINESS.supportEmail}`}>{BUSINESS.supportEmail}</a></li>
              <li><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></li>
              <li><a href={BUSINESS.whatsappHref}>WhatsApp</a></li>
              <li><Link href="/terminos">Términos y condiciones</Link></li>
              <li><Link href="/aviso-de-privacidad">Aviso de privacidad</Link></li>
            </ul>
          </div>
        </div>

        {/* ── Datos fiscales del responsable ──────────────────────────────────
            Requisito de acreditación: Meta verifica que el sitio corrobore la
            razón social, el domicilio y el teléfono declarados en Business Info.
            Debe quedar como texto plano seleccionable. No convertir en imagen. */}
        <div className="foot-legal">
          <span>{BUSINESS.legalName} · RFC {BUSINESS.rfc}</span>
          <span>{fullAddress()}</span>
          <span>Tel. {BUSINESS.phone} · {BUSINESS.email}</span>
        </div>

        <div className="foot-bottom">
          <span>© 2026 <Brand /> · nexoai.mx · Hecho en México</span>
          <span>Stack · Next.js · Claude · AWS · NOM-151</span>
        </div>
      </div>
    </footer>
  );
}
