const fs = require('fs');
const path = require('path');

const content = `export const defaultSiteSettings = {
  brandName: "ROMAABOGADOS",
  tagline: "Estudio Jurídico & Tributario",
  phone: "+51 943 366 950",
  whatsapp: "51943366950",
  email: "contacto@romaabogados.pe",
  address: "Lima, Perú",
  schedule: "Lun - Vie: 8:00 - 18:00 / Sáb: 9:00 - 13:00",
  footerDescription:
    "Protegemos el patrimonio y aseguramos el crecimiento de tu empresa con asesoría jurídica de excelencia, contabilidad integral y defensa estratégica ante SUNAT.",
};

export const defaultHeroSlides = [
  {
    badge: "Estudio Jurídico & Tributario en Perú",
    titlePart1: "Protegemos tu",
    titleHighlight1: "Empresa.",
    titlePart2: "Aseguramos tu",
    titleHighlight2: "Patrimonio.",
    subtitle:
      "Asesoría legal, tributaria y contable de excelencia. Cero multas SUNAT. Seguridad jurídica total con ROMA ABOGADOS.",
    cta1Text: "Consultoría Gratuita →",
    cta1Link: "#whatsapp",
    cta2Text: "Nuestros Servicios",
    cta2Link: "#servicios",
    badges: ["Sin compromiso", "Respuesta inmediata", "Personalizado"],
    localImage: "/jhon-hero-oficina.webp",
  },
  {
    badge: "Constitución de Empresas",
    titlePart1: "Constituye tu Empresa.",
    titleHighlight1: "Precios a Consultar.",
    titlePart2: "",
    titleHighlight2: "",
    subtitle:
      "Formaliza tu negocio sin estrés, colas ni trámites complicados. Incluye Notaría y SUNARP.",
    cta1Text: "Constituir Empresa Ahora",
    cta1Link: "/constitucion-de-empresas",
    cta2Text: "Ver Paquetes",
    cta2Link: "/constitucion-de-empresas",
    badges: ["Notaría incluida", "SUNARP garantizado", "RUC + Clave SOL"],
    localImage: "/jhon-constitucion.webp",
  },
  {
    badge: "Contabilidad Integral",
    titlePart1: "Tu Contabilidad en Regla.",
    titleHighlight1: "Sin multas de SUNAT.",
    titlePart2: "",
    titleHighlight2: "",
    subtitle:
      "Nos encargamos de tus declaraciones mensuales, libros electrónicos, SIRE y planillas.",
    cta1Text: "Evaluar mi Régimen MYPE",
    cta1Link: "#whatsapp",
    cta2Text: "Planes Mensuales",
    cta2Link: "/contabilidad-tributacion",
    badges: ["Declaraciones mensuales", "Libros electrónicos", "Planilla laboral"],
    localImage: "/jhon-contabilidad.webp",
  },
  {
    badge: "Defensa Tributaria Urgente",
    titlePart1: "Escudo Legal y Tributario",
    titleHighlight1: "Fiscalizaciones.",
    titlePart2: "Ante",
    titleHighlight2: "",
    subtitle:
      "Atención urgente de cartas inductivas, cobranzas coactivas y auditorías de SUNAT.",
    cta1Text: "Detener Fiscalización Ya",
    cta1Link: "#whatsapp",
    cta2Text: "Casos de Defensa",
    cta2Link: "/defensa-tributaria-sunat",
    badges: ["Atención urgente", "Cartas inductivas", "Cobranza coactiva"],
    localImage: "/jhon-defensa.webp",
  },
  {
    badge: "Estudio Jurídico Roma Abogados",
    titlePart1: "Especialistas Jurídicos con",
    titleHighlight1: "Sólido Respaldo Legal.",
    titlePart2: "",
    titleHighlight2: "",
    subtitle:
      "Rigurosidad legal, estrategia tributaria y resultados reales respaldando el crecimiento de empresas en el Perú.",
    cta1Text: "Agendar Reunión",
    cta1Link: "/nosotros-contacto",
    cta2Text: "Conocer el Estudio",
    cta2Link: "/nosotros-contacto",
    badges: ["Asesoría Integral", "Transparencia total", "Resultados comprobados"],
    localImage: "/jhon-nosotros.webp",
  },
];
`;

fs.writeFileSync(path.join(process.cwd(), 'src', 'sanity', 'defaultData.ts'), content);
console.log('defaultData.ts created');
