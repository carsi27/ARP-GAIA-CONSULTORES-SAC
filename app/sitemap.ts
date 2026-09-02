import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { areas } from "./data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") || incoming.get("host") || "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const base = `${protocol}://${host}`;
  const routes = ["", "/nosotros", "/servicios", "/sectores", "/metodologia", "/proyectos", "/recursos", "/aplicativo", "/preguntas-frecuentes", "/contacto", "/cotizacion", "/privacidad", "/cookies", "/terminos"];
  return [...routes.map(route => ({ url: `${base}${route}`, changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.7 })), ...areas.map(area => ({ url: `${base}/areas/${area.slug}`, changeFrequency: "monthly" as const, priority: 0.8 }))];
}
