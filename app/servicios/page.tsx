import type { Metadata } from "next";
import { ServicesExplorer } from "../components/Interactive";

export const metadata: Metadata = { title: "Servicios de consultoría ambiental", description: "Busca y filtra servicios ambientales por área, necesidad y sector: estudios, monitoreo, residuos, biodiversidad, clima, social, legal y SIG." };

export default function ServicesPage() {
  return <><section className="page-hero page-hero-services"><img className="page-hero-image" src="/images/campo-monitoreo-aire.webp" alt="Especialistas ejecutan un monitoreo técnico de calidad ambiental" /><div className="wrap"><div className="breadcrumb"><a href="/">Inicio</a><span>/</span>Servicios</div><div className="eyebrow light"><span /> Catálogo integral</div><h1>Encuentra el servicio ambiental que tu proyecto necesita.</h1><p>Explora el catálogo por palabra, área o sector. Si aún no tienes claro el alcance, solicita una orientación inicial.</p></div></section><section className="section wrap"><ServicesExplorer /></section></>;
}
