import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Preloader } from "@/components/Preloader";
import { Oswald } from "next/font/google";

// Oswald — condensada gótica, idéntica a News Gothic BT, misma que villamares.com.pe
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://romaabogados.pe"),
  title: "ROMA & ABOGADOS | Firma Especializada en Asesoría Tributaria, Laboral y Empresarial",
  description:
    "ROMA & ABOGADOS: Soluciones jurídicas eficientes y estratégicas. Especialistas en Derecho Tributario, Laboral, Outsourcing Contable y Derecho Empresarial en el Perú.",
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
    "contrataciones OSCE",
    "estudio juridico Lima",
  ],
  authors: [{ name: "ROMA & ABOGADOS" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-isologo.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-isologo-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-isologo-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ROMAABOGADOS | Estudio Jurídico, Asesoría Tributaria y Contable",
    description:
      "Protege tu patrimonio y haz crecer tu negocio con ROMAABOGADOS. Asesoría legal, contabilidad integral, constitución empresarial y defensa estratégica ante SUNAT. Consultoría gratuita.",
    type: "website",
    locale: "es_PE",
    siteName: "ROMAABOGADOS",
    url: "https://romaabogados.pe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ROMAABOGADOS - Estudio Jurídico y Tributario en Perú",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ROMAABOGADOS | Estudio Jurídico y Tributario",
    description:
      "Asesoría legal, contable y defensa jurídica ante SUNAT en el Perú. Seguridad y respaldo para tu empresa con ROMAABOGADOS.",
    images: ["/og-image.png"],
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
    <html lang="es" suppressHydrationWarning>
      <body className={`${oswald.variable} antialiased bg-background text-foreground`}>
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
