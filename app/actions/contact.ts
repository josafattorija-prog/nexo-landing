"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const nombre    = String(formData.get("nombre")    ?? "").trim();
  const email     = String(formData.get("email")     ?? "").trim();
  const agencia   = String(formData.get("agencia")   ?? "").trim();
  const whatsapp  = String(formData.get("whatsapp")  ?? "").trim();
  const equipo    = String(formData.get("equipo")    ?? "").trim();
  const mensaje   = String(formData.get("mensaje")   ?? "").trim();

  if (!nombre || !email || !agencia || !whatsapp || !equipo || !mensaje) {
    return { status: "error", message: "Por favor completa todos los campos requeridos." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "El correo electrónico no es válido." };
  }

  try {
    await resend.emails.send({
      from:    "Nexo AI <noreply@nexoai.mx>",
      to:      ["contacto@nexoai.mx"],
      replyTo: email,
      subject: `Nuevo lead · ${nombre} · ${agencia} · ${equipo}`,
      html: `
        <h2 style="color:#059669;font-family:sans-serif;">Nuevo mensaje de contacto</h2>
        <table style="border-collapse:collapse;font-size:14px;font-family:sans-serif;">
          <tr><td style="padding:6px 20px 6px 0;color:#6B8C7A;font-weight:600;">Nombre</td><td>${nombre}</td></tr>
          <tr><td style="padding:6px 20px 6px 0;color:#6B8C7A;font-weight:600;">Email</td><td>${email}</td></tr>
          <tr><td style="padding:6px 20px 6px 0;color:#6B8C7A;font-weight:600;">Agencia</td><td>${agencia}</td></tr>
          <tr><td style="padding:6px 20px 6px 0;color:#6B8C7A;font-weight:600;">WhatsApp</td><td>${whatsapp}</td></tr>
          <tr><td style="padding:6px 20px 6px 0;color:#6B8C7A;font-weight:600;">Equipo</td><td>${equipo}</td></tr>
          <tr><td style="padding:6px 20px 6px 0;color:#6B8C7A;font-weight:600;vertical-align:top;">Mensaje</td><td style="white-space:pre-wrap;">${mensaje}</td></tr>
        </table>
      `,
    });

    return { status: "success", message: "¡Mensaje enviado! Te contactamos en menos de 24 horas." };
  } catch {
    return { status: "error", message: "Hubo un error al enviar. Escríbenos directo a contacto@nexoai.mx." };
  }
}
