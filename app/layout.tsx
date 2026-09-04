import type { Metadata } from "next";
import "./globals.css";
import { CookieNotice, Footer, Header, ScrollEffects, WhatsAppButton } from "./components/SiteChrome";
import { IntroExperience } from "./components/IntroExperience";

export const metadata: Metadata = {
  title: { default: "ARP GAIA CONSULTORES | Consultoría ambiental en Perú", template: "%s | ARP GAIA CONSULTORES" },
  description: "Consultoría ambiental integral en Perú: estudios, monitoreo, residuos, biodiversidad, sostenibilidad, gestión social, cumplimiento y tecnología SIG.",
  keywords: ["consultora ambiental en Perú", "consultoría ambiental", "monitoreo ambiental", "estudios de impacto ambiental", "gestión de residuos", "servicios SIG ambientales"],
  icons: { icon: "/images/arp-gaia-logo.webp", shortcut: "/images/arp-gaia-logo.webp" },
  openGraph: { type: "website", locale: "es_PE", siteName: "ARP GAIA CONSULTORES", title: "Soluciones ambientales integrales para proyectos sostenibles", description: "Conocimiento técnico, cumplimiento, territorio e innovación para gestionar desafíos ambientales en Perú." },
  twitter: { card: "summary_large_image", title: "ARP GAIA CONSULTORES", description: "Soluciones responsables para un futuro sostenible." },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ARP GAIA CONSULTORES S.A.C.",
  description: "Consultora ambiental multidisciplinaria que brinda soluciones para la evaluación, prevención, control y gestión de impactos ambientales.",
  areaServed: { "@type": "Country", name: "Perú" },
  serviceType: ["Consultoría ambiental", "Monitoreo ambiental", "Estudios ambientales", "Gestión de residuos", "Biodiversidad", "Sostenibilidad", "Cumplimiento ambiental", "Sistemas de información geográfica"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><IntroExperience /><a className="skip-link" href="#contenido">Saltar al contenido</a><Header /><main id="contenido">{children}</main><Footer /><CookieNotice /><WhatsAppButton /><ScrollEffects /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></body></html>;
}
