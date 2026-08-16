"use client";

import { useState } from "react";
import { areas, sectors } from "../data";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const bot = (new FormData(form).get("website") || "").toString();
    if (bot) return;
    if (!form.checkValidity()) { setError("Revisa los campos obligatorios marcados antes de enviar."); return; }
    setError(""); setSent(true); form.reset();
  };
  if (sent) return <div className="form-success" role="status"><span aria-hidden="true">✓</span><h2>Gracias por contactar a ARP GAIA CONSULTORES.</h2><p>Revisaremos la información proporcionada para orientar su solicitud.</p><button className="text-link" onClick={() => setSent(false)}>Enviar otra consulta</button></div>;
  return (
    <form className="form-card quote-form" onSubmit={submit} noValidate>
      <div className="honeypot" aria-hidden="true"><label>Tu sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="form-grid">
        <label>Nombre completo *<input name="name" required autoComplete="name" /></label>
        <label>Empresa o institución *<input name="organization" required autoComplete="organization" /></label>
        {!compact && <label>Cargo<input name="role" autoComplete="organization-title" /></label>}
        <label>Correo *<input name="email" type="email" required autoComplete="email" /></label>
        <label>Teléfono<input name="phone" type="tel" autoComplete="tel" /></label>
        {!compact && <label>Ciudad o región<select name="region" defaultValue=""><option value="">Seleccionar</option><option>Lima</option><option>Costa norte</option><option>Costa sur</option><option>Sierra norte</option><option>Sierra centro</option><option>Sierra sur</option><option>Amazonía</option><option>Otra</option></select></label>}
        <label>Sector<select name="sector" defaultValue=""><option value="">Seleccionar</option>{sectors.map(s => <option key={s}>{s}</option>)}<option>Otro</option></select></label>
        <label>Área de servicio<select name="area" defaultValue=""><option value="">No sé qué servicio necesito</option>{areas.map(a => <option key={a.slug}>{a.name}</option>)}</select></label>
        {!compact && <><label>Ubicación del proyecto<input name="location" /></label><label>Etapa del proyecto<select name="stage" defaultValue=""><option value="">Seleccionar</option><option>Idea o prefactibilidad</option><option>Diseño</option><option>Permisos</option><option>Construcción</option><option>Operación</option><option>Cierre</option></select></label><label>Fecha estimada<input name="date" type="date" /></label><label>Preferencia de contacto<select name="preference" defaultValue="email"><option value="email">Correo</option><option value="phone">Teléfono</option><option value="whatsapp">WhatsApp</option><option value="meeting">Reunión</option></select></label></>}
        <label className="span-two">Cuéntanos qué necesitas resolver *<textarea name="need" rows={compact ? 4 : 6} required placeholder="Actividad, ubicación, situación actual y resultado que esperas obtener." /></label>
        {!compact && <label className="span-two file-label">Documentos de referencia (opcional)<input name="files" type="file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png" /><small>El envío definitivo de archivos se habilitará al conectar el formulario con el gestor elegido.</small></label>}
        <label className="span-two check"><input name="privacy" type="checkbox" required /> <span>Acepto el tratamiento de mis datos según la <a href="/privacidad">política de privacidad</a>. *</span></label>
      </div>
      {error && <p className="error" role="alert">{error}</p>}
      <button className="button button-gold" type="submit">Enviar solicitud <span aria-hidden="true">↗</span></button>
      <p className="form-note">Este formulario incluye validación y protección básica contra envíos automatizados. Para recibir mensajes reales debe conectarse a un correo o CRM desde la configuración de publicación.</p>
    </form>
  );
}

export function NewsletterForm() {
  const [sent, setSent] = useState(false);
  return <form className="newsletter" onSubmit={e => { e.preventDefault(); setSent(true); }}><label htmlFor="newsletter-email">Recibe artículos y novedades ambientales</label><div><input id="newsletter-email" type="email" required placeholder="tu@empresa.pe" /><button className="button button-gold">Suscribirme</button></div>{sent && <small role="status">Registro preparado. La suscripción se activará al conectar el gestor de correos.</small>}</form>;
}
