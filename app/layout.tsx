import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexo AI — La IA del sector inmobiliario",
  description:
    "El primer CRM inmobiliario All-in-One de México. Publica en 30+ portales, automatiza el ciclo de venta y cierra más operaciones con IA entrenada en bienes raíces.",
  openGraph: {
    title: "Nexo AI — La IA del sector inmobiliario",
    description:
      "CRM All-in-One para agencias inmobiliarias en México. IA, omnicanalidad y datos de mercado locales.",
    url: "https://nexoai.mx",
    siteName: "Nexo AI",
    locale: "es_MX",
    type: "website",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://nexoai.mx"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
