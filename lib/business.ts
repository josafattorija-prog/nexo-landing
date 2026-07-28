// ══════════════════════════════════════════════════════════════════════════════
// DATOS LEGALES DEL NEGOCIO — fuente única de verdad
// ══════════════════════════════════════════════════════════════════════════════
// Estos valores deben coincidir EXACTAMENTE con:
//   1. La Constancia de Situación Fiscal del SAT
//   2. La "Información del negocio" del portafolio en Meta Business Manager
//      (portafolio Josafat.Torija · business_id 105040465669781)
//
// Meta rechazó la verificación de negocio porque el sitio no acreditaba estos
// datos. Si cambias alguno aquí, actualízalo también en Meta Business Info.
// ══════════════════════════════════════════════════════════════════════════════

export const BUSINESS = {
  /** Nombre comercial / marca */
  brand: 'Nexo AI',

  /** Razón social — persona física con actividad empresarial */
  legalName: 'JOSAFAT TORIJA GONZALEZ',

  rfc: 'TOGJ801115VE8',

  address: {
    street: 'Privada 30 B Sur 2707',
    neighborhood: 'Col. Seis de Enero',
    city: 'Puebla',
    state: 'Puebla',
    postalCode: '72510',
    country: 'México',
  },

  /**
   * Teléfono oficial del negocio. Es también el WhatsApp de atención: un solo
   * número público evita la incoherencia que Meta detectó en la verificación.
   * Debe coincidir con el campo "Teléfono del negocio" en Meta Business Info.
   */
  phone: '+52 221 367 2612',
  phoneHref: 'tel:+522213672612',
  whatsapp: '+52 221 367 2612',
  whatsappHref: 'https://wa.me/5212213672612',

  email: 'contacto@nexoai.mx',
  supportEmail: 'soporte@nexoai.mx',

  website: 'https://nexoai.mx',
} as const

/** Domicilio fiscal en una sola línea. */
export function fullAddress(): string {
  const a = BUSINESS.address
  return `${a.street}, ${a.neighborhood}, ${a.city}, ${a.state}, C.P. ${a.postalCode}, ${a.country}`
}

/** Fecha de última actualización de los documentos legales. */
export const LEGAL_LAST_UPDATED = '28 de julio de 2026'
