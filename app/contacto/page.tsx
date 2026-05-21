import type { Metadata } from "next";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda una demo personalizada de Nexo AI. Migración asistida desde EasyBroker, Tokko o tu hoja de cálculo en 24 horas.",
  openGraph: {
    title: "Contacto — Nexo AI",
    description: "Un especialista te muestra la plataforma adaptada a tu agencia.",
    url: "https://nexoai.mx/contacto",
  },
};

export default function ContactoPage() {
  return <Contact />;
}
