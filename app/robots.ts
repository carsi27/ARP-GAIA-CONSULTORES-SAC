import type { MetadataRoute } from "next";
import { headers } from "next/headers";
export default async function robots(): Promise<MetadataRoute.Robots> { const incoming = await headers(); const host = incoming.get("x-forwarded-host") || incoming.get("host") || "localhost:3000"; const protocol = incoming.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https"); const base = `${protocol}://${host}`; return { rules: { userAgent: "*", allow: "/", disallow: "/admin" }, sitemap: `${base}/sitemap.xml` }; }
