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
        company: agencia,
        message: `[Equipo: ${equipo}]\n\n${mensaje}`,
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
    mailOk = true;
  } catch {
    mailOk = false;
  }

  if (!crmOk && !mailOk) {
    return { status: "error", message: "No se pudo enviar, escríbenos a contacto@nexoai.mx." };
  }

  return { status: "success", message: "¡Mensaje enviado! Te contactamos en menos de 24 horas." };
}
