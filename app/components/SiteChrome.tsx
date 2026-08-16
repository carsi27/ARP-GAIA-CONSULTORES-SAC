"use client";

import { useEffect, useState } from "react";
import { areas } from "../data";

type ContactConfig = { phone?: string; whatsapp?: string; email?: string; address?: string; schedule?: string };

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="ARP GAIA CONSULTORES, inicio">
        <img src="/images/arp-gaia-logo.webp" alt="ARP GAIA CONSULTORES" />
        <span><b>ARP GAIA</b><small>CONSULTORES S.A.C.</small></span>
      </a>
      <button className="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navegación principal">
        <a href="/">Inicio</a><a href="/nosotros">Nosotros</a><a href="/servicios">Servicios</a><a href="/sectores">Sectores</a><a href="/proyectos">Proyectos</a><a href="/recursos">Recursos</a><a href="/contacto">Contacto</a>
        <a className="button button-small button-gold" href="/cotizacion">Solicitar cotización <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid wrap">
        <div className="footer-brand">
          <a className="brand brand-footer" href="/"><img src="/images/arp-gaia-logo.webp" alt="" /><span><b>ARP GAIA</b><small>CONSULTORES S.A.C.</small></span></a>
          <p>Soluciones ambientales integrales con conocimiento técnico, orden y visión de futuro.</p>
          <a className="text-link light" href="/admin">Administrar datos del sitio →</a>
        </div>
        <div><h3>Explora</h3><a href="/nosotros">Nosotros</a><a href="/servicios">Servicios</a><a href="/sectores">Sectores</a><a href="/metodologia">Metodología</a><a href="/proyectos">Proyectos</a><a href="/recursos">Recursos</a></div>
        <div><h3>Áreas</h3>{areas.slice(0, 5).map(a => <a key={a.slug} href={`/areas/${a.slug}`}>{a.short}</a>)}<a href="/servicios">Ver las ocho áreas</a></div>
        <div><h3>Conversemos</h3><p>Cuéntanos la actividad, ubicación y necesidad de tu proyecto.</p><a className="button button-light" href="/cotizacion">Solicitar diagnóstico</a></div>
      </div>
      <div className="footer-note wrap"><p>ARP GAIA CONSULTORES brinda servicios adaptados a cada proyecto. La aprobación de estudios, permisos y autorizaciones corresponde a las autoridades competentes.</p></div>
      <div className="footer-bottom wrap"><span>© 2026 ARP GAIA CONSULTORES S.A.C.</span><div><a href="/privacidad">Privacidad</a><a href="/cookies">Cookies</a><a href="/terminos">Términos de uso</a></div></div>
    </footer>
  );
}

export function CookieNotice() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(!localStorage.getItem("gaia-cookie-consent")); }, []);
  if (!visible) return null;
  const choose = (value: string) => { localStorage.setItem("gaia-cookie-consent", value); setVisible(false); };
  return <aside className="cookie-notice" aria-label="Preferencias de cookies"><p><b>Tu privacidad importa.</b> Usamos solo almacenamiento esencial para recordar tus preferencias. La analítica podrá activarse cuando sea configurada.</p><div><button onClick={() => choose("essential")}>Solo esenciales</button><button className="button button-green" onClick={() => choose("accepted")}>Aceptar</button></div></aside>;
}

export function WhatsAppButton() {
  const [number, setNumber] = useState("");
  useEffect(() => { const config = JSON.parse(localStorage.getItem("gaia-contact") || "{}"); setNumber(config.whatsapp || ""); }, []);
  if (!number) return null;
  return <a className="whatsapp" href={`https://wa.me/${number.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp">WA</a>;
}

export function ContactDetails() {
  const [config, setConfig] = useState<ContactConfig>({});
  useEffect(() => setConfig(JSON.parse(localStorage.getItem("gaia-contact") || "{}")), []);
  const entries = [["Correo", config.email], ["Teléfono", config.phone], ["Dirección", config.address], ["Horario", config.schedule]].filter(([, value]) => value);
  if (!entries.length) return <p className="muted">Los datos directos de contacto se habilitarán desde el panel. Mientras tanto, puedes enviarnos tu consulta mediante el formulario.</p>;
  return <dl className="contact-list">{entries.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}

export function AdminContact() {
  const [saved, setSaved] = useState(false);
  const [config, setConfig] = useState<ContactConfig>({});
  useEffect(() => setConfig(JSON.parse(localStorage.getItem("gaia-contact") || "{}")), []);
  const update = (key: keyof ContactConfig, value: string) => setConfig({ ...config, [key]: value });
  const submit = (event: React.FormEvent) => { event.preventDefault(); localStorage.setItem("gaia-contact", JSON.stringify(config)); setSaved(true); };
  return <form className="form-card" onSubmit={submit}><div className="form-grid"><label>Teléfono<input value={config.phone || ""} onChange={e => update("phone", e.target.value)} /></label><label>WhatsApp (código de país)<input value={config.whatsapp || ""} onChange={e => update("whatsapp", e.target.value)} /></label><label>Correo<input type="email" value={config.email || ""} onChange={e => update("email", e.target.value)} /></label><label>Horario<input value={config.schedule || ""} onChange={e => update("schedule", e.target.value)} /></label><label className="span-two">Dirección<input value={config.address || ""} onChange={e => update("address", e.target.value)} /></label></div><button className="button button-green">Guardar configuración</button>{saved && <p className="success" role="status">Datos guardados en este dispositivo.</p>}</form>;
}
