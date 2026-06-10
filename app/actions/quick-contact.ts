"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type QuickState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendQuickContact(
  _prev: QuickState,
  formData: FormData,
): Promise<QuickState> {
  const nombre   = String(formData.get("nombre")   ?? "").trim();
  const email    = String(formData.get("email")    ?? "").trim();
  const whatsapp = String(formData.get("whatsapp") ?? "").trim();

  if (!nombre || !email || !whatsapp) {
    return { status: "error", message: "Por favor completa los tres campos." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "El correo electrónico no es válido." };
  }

  // 1) Lead al CRM (inbox de admin). Server-to-server: sin CORS.
  let crmOk = false;
  try {
    const res = await fetch("https://app.nexoai.mx/api/public/saas-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: nombre,
        email,
        phone: whatsapp,
        message: "Lead rápido desde la landing (formulario de inicio).",
      }),
    });

    if (res.status === 429) {
      return { status: "error", message: "Demasiados intentos, espera un momento e inténtalo de nuevo." };
    }
    crmOk = res.ok;
  } catch {
    crmOk = false;
  }

  // 2) Notificación por correo (paralela, best-effort).
  let mailOk = false;
  try {
    await resend.emails.send({
      from:    "Nexo AI <noreply@nexoai.mx>",
      to:      ["contacto@nexoai.mx"],
      replyTo: email,
      subject: `Lead rápido · ${nombre}`,
      html: `
        <h2 style="color:#059669;font-family:sans-serif;">Lead desde inicio — formulario rápido</h2>
        <table style="border-collapse:collapse;font-size:14px;font-family:sans-serif;">
          <tr><td style="padding:6px 20px 6px 0;color:#6B8C7A;font-weight:600;">Nombre</td><td>${nombre}</td></tr>
          <tr><td style="padding:6px 20px 6px 0;color:#6B8C7A;font-weight:600;">Email</td><td>${email}</td></tr>
          <tr><td style="padding:6px 20px 6px 0;color:#6B8C7A;font-weight:600;">WhatsApp</td><td>${whatsapp}</td></tr>
        </table>
      `,
    });
    mailOk = true;
  } catch {
    mailOk = false;
  }

  if (!crmOk && !mailOk) {
    return { status: "error", message: "No se pudo enviar, escríbenos a contacto@nexoai.mx." };
  }

  return { status: "success", message: "¡Listo! Te contactamos en menos de 24 horas." };
}
