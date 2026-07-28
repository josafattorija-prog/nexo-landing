import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Quién está detrás de Nexo AI: un CRM inmobiliario All-in-One construido en Puebla, México, para el mercado mexicano.",
  openGraph: {
    title: "Sobre nosotros — Nexo AI",
    description: "Un CRM inmobiliario hecho en México, para inmobiliarias mexicanas.",
    url: "https://nexoai.mx/sobre-nosotros",
  },
  robots: { index: true, follow: true },
};

export default function SobreNosotrosPage() {
  return (
    <section className="section">
      <div className="shell legal-doc">
        <p className="legal-eyebrow">EMPRESA · HECHO EN MÉXICO</p>
        <h1 className="legal-title">Sobre nosotros</h1>

        <div className="legal-intro">
          <p>
            {BUSINESS.brand} es un CRM inmobiliario All-in-One construido en Puebla, México,
            para el mercado mexicano.
          </p>
        </div>

        <section className="legal-section">
          <h2>Por qué existe</h2>
          <p>
            La mayoría de las inmobiliarias en México terminan pagando media docena de
            herramientas que no se hablan entre sí: una para publicar en portales, otra para el
            WhatsApp, otra para el seguimiento de prospectos, una hoja de cálculo para el
            inventario y el correo personal para todo lo demás. Cada salto entre herramientas es
            un lugar donde se pierde un prospecto.
          </p>
          <p>
            {BUSINESS.brand} junta ese flujo en una sola plataforma: captación, publicación,
            mensajería omnicanal, pipeline de ventas y análisis de mercado sobre la misma base de
            datos, con inteligencia artificial que entiende el contexto del sector inmobiliario
            mexicano.
          </p>
        </section>

        <section className="legal-section">
          <h2>Cómo trabajamos</h2>
          <p>
            Somos un equipo pequeño y enfocado. Atendemos en español, damos onboarding asistido y
            migramos la información desde la herramienta que use hoy. Preferimos que el producto
            resuelva un problema real antes que anunciar funciones que no están listas: por eso
            en el sitio sólo aparece lo que ya opera.
          </p>
          <p>
            Los datos de nuestros clientes se tratan conforme a la Ley Federal de Protección de
            Datos Personales en Posesión de los Particulares. Puede consultar el detalle en
            nuestro <Link href="/aviso-de-privacidad">Aviso de Privacidad</Link> y las condiciones
            del servicio en los <Link href="/terminos">Términos y Condiciones</Link>.
          </p>
        </section>

        <section className="legal-section">
          <h2>Datos de la empresa</h2>
          <ul>
            <li><strong>Responsable:</strong> {BUSINESS.legalName}</li>
            <li><strong>RFC:</strong> {BUSINESS.rfc}</li>
            <li><strong>Domicilio:</strong> {fullAddress()}</li>
            <li><strong>Teléfono:</strong> <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a></li>
            <li><strong>WhatsApp:</strong> <a href={BUSINESS.whatsappHref}>{BUSINESS.whatsapp}</a></li>
            <li><strong>Ventas:</strong> <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
            <li><strong>Soporte:</strong> <a href={`mailto:${BUSINESS.supportEmail}`}>{BUSINESS.supportEmail}</a></li>
          </ul>
          <p style={{ marginTop: 24 }}>
            ¿Quiere ver la plataforma funcionando?{" "}
            <Link href="/contacto" style={{ color: "var(--accent)" }}>
              Agende una demo →
            </Link>
          </p>
        </section>
      </div>
    </section>
  );
}
