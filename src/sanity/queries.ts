import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  brandName,
  tagline,
  phone,
  whatsapp,
  email,
  address,
  schedule,
  footerDescription,
  logo
}`;

export const homePageQuery = groq`*[_type == "homePage"][0]{
  heroSlides,
  founder,
  trajectory,
  servicesSection,
  testimonials
}`;

export const pageConstitucionQuery = groq`*[_type == "pageConstitucion"][0]{
  heroSubtitle,
  heroImage,
  sectionPackagesTitle,
  sectionPackagesSubtitle,
  packages,
  sectionStepsTitle,
  steps,
  sectionFaqsTitle,
  faqs
}`;

export const pageContabilidadQuery = groq`*[_type == "pageContabilidad"][0]{
  heroSubtitle,
  heroImage,
  alertTitle,
  alertText,
  stats,
  mainFeatures,
  additionalServices,
  laborFeatures
}`;

export const pageDefensaQuery = groq`*[_type == "pageDefensa"][0]{
  heroSubtitle,
  heroImage,
  sectionSituationsTitle,
  sectionSituationsHighlight,
  sectionSituationsSubtitle,
  urgentCards,
  whyUsTitle,
  whyUsItems,
  inversionistaHeroTitle,
  inversionistaHeroSubtitle,
  inversionistaFeatures
}`;

export const pageNosotrosQuery = groq`*[_type == "pageNosotros"][0]{
  heroSubtitle,
  heroImage,
  mission,
  vision,
  values
}`;
