import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Preloader } from "@/components/Preloader";
import { Oswald, DM_Serif_Display, Montserrat } from "next/font/google";

// Oswald — condensada gótica secundaria
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// DM Serif Display — tipografía editorial formal para títulos jurídicos (estilo Estudio Ugaz / Molina López)
const dmSerif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Montserrat — tipografía limpia, moderna y altamente legible para textos corporativos
const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.romaabogados.pe"),
  title: "ROMA & ABOGADOS | Firma Especializada en Asesoría Tributaria, Laboral y Empresarial",
  description:
    "ROMA & ABOGADOS: Firma especializada en asesoría y defensa tributaria ante SUNAT y Tribunal Fiscal, derecho laboral, constitución empresarial y outsourcing contable en el Perú. Más de 15 años de trayectoria.",
  keywords: [
    "ROMA & ABOGADOS",
    "Roma Abogados",
    "derecho tributario",
    "derecho laboral",
    "outsourcing contable",
    "derecho empresarial",
    "defensa SUNAT",
    "inspecciones SUNAFIL",
    "Tribunal Fiscal",
    "derecho corporativo",
    "estudio juridico Lima",
  ],
  authors: [{ name: "ROMA & ABOGADOS" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-isologo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ROMA & ABOGADOS | Firma Especializada en Asesoría Tributaria, Laboral y Empresarial",
    description:
      "Firma legal especializada en defensa tributaria ante SUNAT y Tribunal Fiscal, derecho laboral corporativo, constitución de empresas y outsourcing contable en el Perú. Más de 15 años de trayectoria y excelencia jurídica.",
    type: "website",
    locale: "es_PE",
    siteName: "ROMA & ABOGADOS",
    url: "https://www.romaabogados.pe",
    images: [
      {
        url: "https://www.romaabogados.pe/og-image.jpg",
        secureUrl: "https://www.romaabogados.pe/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ROMA & ABOGADOS - Firma Especializada en Asesoría Tributaria, Laboral y Empresarial",
        type: "image/jpeg",
      },
      {
        url: "https://www.romaabogados.pe/og-image.png",
        secureUrl: "https://www.romaabogados.pe/og-image.png",
        width: 1200,
        height: 630,
        alt: "ROMA & ABOGADOS - Firma Especializada en Asesoría Tributaria, Laboral y Empresarial",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROMA & ABOGADOS | Firma Especializada en Asesoría Tributaria, Laboral y Empresarial",
    description:
      "Firma legal especializada en defensa tributaria ante SUNAT, derecho laboral, empresarial y outsourcing contable en el Perú. +15 años de experiencia.",
    images: ["https://www.romaabogados.pe/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${dmSerif.variable} ${oswald.variable} font-sans antialiased bg-background text-foreground`}>
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
