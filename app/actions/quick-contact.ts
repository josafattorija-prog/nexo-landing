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
    return { status: "success", message: "¡Listo! Te contactamos en menos de 24 horas." };
  } catch {
    return { status: "error", message: "Error al enviar. Escríbenos a contacto@nexoai.mx." };
  }
}
