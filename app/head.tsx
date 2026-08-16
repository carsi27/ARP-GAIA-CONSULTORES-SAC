import { headers } from "next/headers";

export default async function Head() {
  const incoming = await headers();
  const host = incoming.get("x-forwarded-host") || incoming.get("host") || "localhost:3000";
  const protocol = incoming.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const image = `${protocol}://${host}/og.png`;
  return <><meta property="og:image" content={image} /><meta property="og:image:width" content="1736" /><meta property="og:image:height" content="909" /><meta property="og:image:alt" content="ARP GAIA CONSULTORES: soluciones ambientales integrales para proyectos sostenibles" /><meta name="twitter:image" content={image} /></>;
}
