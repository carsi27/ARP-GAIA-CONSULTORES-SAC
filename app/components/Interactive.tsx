"use client";

import { useMemo, useState } from "react";
import { areas, sectors, solutionOptions } from "../data";

export function SolutionFinder() {
  const [choice, setChoice] = useState("");
  const selected = solutionOptions.find(option => option[0] === choice);
  const area = selected && selected[2] >= 0 ? areas[selected[2]] : null;
  return <div className="solution-tool"><label htmlFor="solution-choice">¿Qué necesidad ambiental tiene tu organización?</label><div className="solution-select"><select id="solution-choice" value={choice} onChange={event => setChoice(event.target.value)}><option value="">Selecciona una necesidad</option>{solutionOptions.map(option => <option key={option[0]} value={option[0]}>{option[1]}</option>)}</select><span aria-hidden="true">↓</span></div>{selected && <div className="recommendation" aria-live="polite"><span className="recommendation-kicker">Recomendación orientativa</span>{area ? <><h3>{area.name}</h3><p>{area.description}</p><div className="tag-row">{area.featured.slice(0, 3).map(item => <span key={item}>{item}</span>)}</div><div className="button-row"><a className="button button-green" href={`/areas/${area.slug}`}>Conocer el área</a><a className="button button-outline" href={`/cotizacion?area=${area.slug}`}>Solicitar asesoría</a></div></> : <><h3>Evaluación inicial multidisciplinaria</h3><p>Revisaremos tu contexto para identificar las áreas que deben participar y definir un alcance adecuado.</p><a className="button button-green" href="/cotizacion">Solicitar orientación</a></>}<small>El resultado es orientativo y requiere la evaluación específica del caso.</small></div>}</div>;
}

export function ServicesExplorer() {
  const [query, setQuery] = useState("");
  const [areaFilter, setAreaFilter] = useState("all");
  const [sector, setSector] = useState("all");
  const results = useMemo(() => areas.flatMap(area => area.services.map(service => ({ service, area }))).filter(item => {
    const matchesQuery = `${item.service} ${item.area.name}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (areaFilter === "all" || item.area.slug === areaFilter);
  }), [query, areaFilter]);
  return <div className="catalog"><div className="catalog-filters"><label className="search-label"><span>Buscar por palabra</span><input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Ej. monitoreo de agua, permisos, drones…" /></label><label><span>Área</span><select value={areaFilter} onChange={e => setAreaFilter(e.target.value)}><option value="all">Todas las áreas</option>{areas.map(area => <option key={area.slug} value={area.slug}>{area.short}</option>)}</select></label><label><span>Sector</span><select value={sector} onChange={e => setSector(e.target.value)}><option value="all">Todos los sectores</option>{sectors.map(item => <option key={item}>{item}</option>)}</select></label></div><p className="result-count">{results.length} servicios encontrados{sector !== "all" ? ` con capacidad de atención para ${sector}` : ""}</p><div className="service-results">{results.slice(0, 36).map(({ service, area }) => <article className="service-result" key={`${area.slug}-${service}`}><span>{area.number}</span><div><h3>{service}</h3><p>{area.short}</p></div><a href={`/areas/${area.slug}#catalogo`} aria-label={`Ver ${service}`}>↗</a></article>)}</div>{results.length > 36 && <p className="catalog-note">Mostramos los primeros 36 resultados. Usa los filtros para afinar tu búsqueda.</p>}<a className="floating-quote button button-gold" href="/cotizacion">Cotizar un servicio</a></div>;
}

export function ShareButton({ title }: { title: string }) {
  const share = () => { if (navigator.share) navigator.share({ title, url: window.location.href }); else navigator.clipboard?.writeText(window.location.href); };
  return <button className="share-button" onClick={share} aria-label={`Compartir ${title}`}>Compartir ↗</button>;
}
