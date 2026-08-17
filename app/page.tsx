import type { Metadata } from "next";
import { areas, methodology, sectors } from "./data";
import { SolutionFinder } from "./components/Interactive";

export const metadata: Metadata = {
  title: "Consultora ambiental en Perú | ARP GAIA CONSULTORES",
  description: "Soluciones ambientales integrales para estudios, monitoreo, residuos, biodiversidad, sostenibilidad, gestión social, cumplimiento y SIG en Perú.",
};

export default function Home() {
  return <>
    <section className="hero">
      <img className="hero-image" src="/images/hero-andes-monitoring.webp" alt="Especialistas realizan monitoreo ambiental con una estación solar en un valle andino" fetchPriority="high" />
      <div className="hero-overlay" />
      <div className="hero-content wrap">
        <div className="eyebrow light"><span /> Soluciones responsables para un futuro sostenible</div>
        <h1>Soluciones ambientales integrales para proyectos sostenibles</h1>
        <p>Ayudamos a empresas, instituciones y organizaciones a evaluar impactos, cumplir sus obligaciones y gestionar responsablemente el ambiente, el territorio y sus recursos.</p>
        <div className="button-row"><a className="button button-gold" href="/servicios">Explorar servicios <span aria-hidden="true">↗</span></a><a className="button button-glass" href="/cotizacion">Solicitar una evaluación</a></div>
      </div>
      <a className="hero-specialist" href="/contacto"><span className="specialist-mark">AG</span><span><b>¿Necesitas orientación?</b><small>Hablar con un especialista</small></span><span aria-hidden="true">↗</span></a>
    </section>

    <section className="trust-strip" aria-label="Nuestro enfoque"><div className="trust-track"><span>Enfoque multidisciplinario</span><span>Soluciones adaptadas a cada sector</span><span>Integración técnica, legal, social y territorial</span><span>Del diagnóstico al seguimiento</span><span>Información verificable para decidir</span></div></section>

    <section className="about-home section wrap">
      <div className="field-collage" aria-label="Trabajo de campo de ARP GAIA"><figure className="field field-one"><img src="/images/campo-forestal.webp" alt="Especialistas realizan una evaluación forestal en campo" loading="lazy" /></figure><figure className="field field-four"><img src="/images/campo-biodiversidad.webp" alt="Especialista realiza un registro fotográfico de biodiversidad en campo" loading="lazy" /></figure><figure className="field field-two"><img src="/images/campo-agua-nueva.webp" alt="Especialistas realizan un muestreo de agua en una laguna altoandina" loading="lazy" /></figure><figure className="field field-three"><img src="/images/campo-monitoreo-aire.webp" alt="Especialistas realizan un monitoreo de calidad del aire" loading="lazy" /></figure><div className="field-badge"><b>Territorio</b><span>Trabajo técnico en campo</span></div></div>
      <div className="about-copy"><div className="eyebrow"><span /> Sobre nosotros</div><h2>Protegemos la naturaleza y acompañamos decisiones responsables.</h2><p>ARP GAIA CONSULTORES es una consultora ambiental multidisciplinaria. Articulamos conocimiento técnico, cumplimiento normativo, innovación y sostenibilidad para responder a las características de cada proyecto.</p><div className="value-points"><div><span>◎</span><p><b>Visión integral</b>Componentes ambientales, sociales, legales y territoriales.</p></div><div><span>◇</span><p><b>Rigor técnico</b>Información trazable y entregables orientados a la decisión.</p></div></div><a className="button button-green" href="/nosotros">Conocer ARP GAIA <span aria-hidden="true">↗</span></a></div>
    </section>

    <section className="areas-home section section-soft" id="areas"><div className="wrap"><div className="section-heading"><div><div className="eyebrow"><span /> Ocho áreas de especialización</div><h2>Una respuesta integral para cada desafío ambiental.</h2></div><p>Encuentra el punto de entrada y combina áreas cuando el proyecto lo requiera.</p></div><div className="area-grid">{areas.map(area => <article className="area-card" key={area.slug}><span className="area-number">{area.number}</span><h3>{area.name}</h3><p>{area.description}</p><ul>{area.featured.slice(0, 3).map(service => <li key={service}>{service}</li>)}</ul><a href={`/areas/${area.slug}`}>Conocer todos los servicios <span aria-hidden="true">↗</span></a></article>)}</div><div className="center"><a className="button button-green" href="/servicios">Explorar catálogo completo</a></div></div></section>

    <section className="finder-section"><div className="finder-shape" /><div className="wrap finder-grid"><div><div className="eyebrow light"><span /> Buscador de soluciones</div><h2>¿No sabes por dónde empezar?</h2><p>Describe tu necesidad a partir de una situación concreta. Te mostraremos un punto de partida para continuar la conversación.</p></div><SolutionFinder /></div></section>

    <section className="method section wrap"><div className="eyebrow"><span /> Nuestra metodología</div><div className="section-heading"><h2>Rigor y claridad en cada etapa.</h2><a className="text-link" href="/metodologia">Ver metodología completa →</a></div><div className="method-grid">{methodology.map(([number, name, text]) => <article key={number}><span>{number}</span><h3>{name}</h3><p>{text}</p></article>)}</div></section>

    <section className="sectors-home section section-cream"><div className="wrap"><div className="section-heading"><div><div className="eyebrow"><span /> Sectores que atendemos</div><h2>Capacidad para acompañar distintas actividades y territorios.</h2></div><a className="button button-green" href="/sectores">Conocer sectores</a></div><div className="sector-grid">{sectors.map((sector, index) => <a href="/sectores" key={sector}><span>{String(index + 1).padStart(2, "0")}</span><b>{sector}</b><i aria-hidden="true">↗</i></a>)}</div></div></section>

    <section className="cta-section"><div className="wrap cta-grid"><div><div className="eyebrow light"><span /> Hablemos de tu proyecto</div><h2>Conversemos sobre tus necesidades ambientales.</h2><p>Cuéntanos qué actividad desarrollas, dónde se encuentra y qué necesitas resolver. Analizaremos el caso para orientar el servicio más adecuado.</p><a className="button button-gold" href="/cotizacion">Solicitar diagnóstico inicial <span aria-hidden="true">↗</span></a></div><div className="cta-logo"><img src="/images/arp-gaia-logo-transparent.png" alt="ARP GAIA CONSULTORES" /><span>Ambiente, territorio y sostenibilidad en una sola consultora.</span></div></div></section>
  </>;
}
