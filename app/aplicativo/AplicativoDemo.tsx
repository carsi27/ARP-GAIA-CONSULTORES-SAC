"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import styles from "./aplicativo.module.css";

type Screen = "intro" | "login" | "dashboard" | "projects" | "classify" | "impact" | "profile";
type ProjectStatus = "En evaluación" | "Alta prioridad" | "Aprobado";
type Project = { name: string; category: string; status: ProjectStatus; image: string; location: string; score: number };

const projects: Project[] = [
  { name: "Restauración de humedales", category: "Ecosistemas acuáticos", status: "En evaluación", image: "/images/campo-agua-nueva.webp", location: "Junín", score: 86 },
  { name: "Bosque comunitario", category: "Restauración forestal", status: "Alta prioridad", image: "/images/campo-forestal.webp", location: "San Martín", score: 92 },
  { name: "Monitoreo solar rural", category: "Energías renovables", status: "Aprobado", image: "/images/hero-andes-monitoring.webp", location: "Arequipa", score: 78 },
  { name: "Calidad del aire urbana", category: "Monitoreo ambiental", status: "En evaluación", image: "/images/campo-monitoreo-aire.webp", location: "Lima", score: 81 },
  { name: "Conservación de cuencas", category: "Recursos hídricos", status: "Alta prioridad", image: "/images/campo-agua-nueva.webp", location: "Cusco", score: 89 },
];

const categories = [
  { label: "Agua", symbol: "◉", tone: "blue" }, { label: "Bosques", symbol: "♠", tone: "green" },
  { label: "Energía", symbol: "ϟ", tone: "gold" }, { label: "Residuos", symbol: "↻", tone: "dark" },
];

function Status({ value }: { value: ProjectStatus }) {
  return <span className={`${styles.status} ${value === "Aprobado" ? styles.approved : value === "Alta prioridad" ? styles.priority : styles.review}`}>{value}</span>;
}

function Icon({ children }: { children: ReactNode }) { return <span className={styles.icon}>{children}</span>; }

export function AplicativoDemo() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [showCta, setShowCta] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Todos");
  const [classificationSaved, setClassificationSaved] = useState(false);
  const [impact, setImpact] = useState(76);
  const [viability, setViability] = useState(82);
  const [urgency, setUrgency] = useState(68);
  const videoRef = useRef<HTMLVideoElement>(null);
  const result = Math.round(impact * .4 + viability * .35 + urgency * .25);
  const filteredProjects = useMemo(() => projects.filter((project) => `${project.name} ${project.category} ${project.location}`.toLowerCase().includes(search.toLowerCase()) && (filter === "Todos" || project.status === filter)), [search, filter]);

  useEffect(() => {
    const context = (document as Document & { modelContext?: { registerTool?: (tool: unknown, options?: { signal?: AbortSignal }) => void | Promise<void> } }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    void Promise.resolve(context.registerTool({ name: "start_project_classification", title: "Iniciar clasificación ambiental", description: "Abre el formulario visible para clasificar un proyecto ambiental.", inputSchema: { type: "object", properties: {}, additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: false }, execute: async () => { setScreen("classify"); return { screen: "classify", status: "ready" }; } }, { signal: lifecycle.signal })).catch(() => undefined);
    void Promise.resolve(context.registerTool({ name: "get_environmental_portfolio_summary", title: "Consultar resumen ambiental", description: "Devuelve las cifras visibles del portafolio de demostración.", inputSchema: { type: "object", properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true, untrustedContentHint: false }, execute: async () => ({ active: 24, pending: 8, approved: 12, avoidedCo2Tonnes: 12450 }) }, { signal: lifecycle.signal })).catch(() => undefined);
    return () => lifecycle.abort();
  }, []);

  const login = (event: FormEvent) => { event.preventDefault(); setScreen("dashboard"); };
  const saveClassification = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem("gaia-last-classification", JSON.stringify({ score: result, savedAt: new Date().toISOString() }));
    setClassificationSaved(true);
  };

  return (
    <div className={`gaia-app-page ${styles.page}`}>
      <aside className={styles.pitch} aria-label="Presentación del aplicativo"><img src="/images/arp-gaia-logo.webp" alt="ARP GAIA CONSULTORES" /><span className={styles.kicker}>Tecnología para decisiones responsables</span><h1>Clasifica proyectos ambientales con claridad y criterio técnico.</h1><p>Una experiencia institucional para evaluar riesgos, priorizar acciones y orientar la ruta ambiental de cada iniciativa en el Perú.</p><div className={styles.pitchStats}><span><b>100%</b> adaptable</span><span><b>5</b> criterios clave</span><span><b>1</b> ruta clara</span></div></aside>
      <section className={styles.device} aria-label="Prototipo móvil de ARP GAIA">
        <div className={`${styles.deviceTop} ${screen !== "intro" ? styles.deviceTopDark : ""}`}><span>9:41</span><i /><span>● ᴡɪꜰɪ ▰</span></div>
        {screen === "intro" && <div className={styles.introScreen}><video ref={videoRef} className={styles.introVideo} src="/gaia-aplicativo-intro.mp4" autoPlay muted playsInline preload="auto" onEnded={() => setShowCta(true)} /><div className={`${styles.introShade} ${showCta ? styles.introShadeReady : ""}`} /><div className={styles.introBrand}><span className={styles.leafMark}>◒</span><strong>GAIA PROYECTOS</strong><small>Clasifica · Prioriza · Transforma</small></div><button className={styles.skip} type="button" onClick={() => { videoRef.current?.pause(); setShowCta(true); }}>Saltar introducción</button><div className={`${styles.introAction} ${showCta ? styles.introActionVisible : ""}`}><p>Convierte información ambiental en decisiones accionables.</p><button type="button" onClick={() => setScreen("login")}>Clasifica tu proyecto ambiental <span>→</span></button></div></div>}
        {screen === "login" && <div className={styles.loginScreen}><button className={styles.back} type="button" onClick={() => { setScreen("intro"); setShowCta(true); }} aria-label="Volver a la portada">←</button><div className={styles.loginHeading}><img src="/images/arp-gaia-logo.webp" alt="" /><span>Acceso institucional</span><h2>Iniciar sesión</h2><p>Ingresa para clasificar y dar seguimiento a tus proyectos.</p></div><form className={styles.loginForm} onSubmit={login}><label>Correo o usuario<div><span>♙</span><input name="usuario" autoComplete="username" defaultValue="demo@arpgaia.pe" required /></div></label><label>Contraseña<div><span>⌑</span><input name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" defaultValue="prototipo" required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}>{showPassword ? "◉" : "◎"}</button></div></label><div className={styles.formMeta}><label><input type="checkbox" /> Recordarme</label><button type="button">¿Olvidaste tu contraseña?</button></div><button className={styles.primaryButton} type="submit"><span>◒</span> Ingresar al prototipo</button></form><p className={styles.demoNote}>Prototipo demostrativo · Las credenciales ya están completas</p><div className={styles.botanical} aria-hidden="true"><span>◜</span><span>◝</span><span>◞</span></div></div>}
        {screen === "dashboard" && <AppScreen title="Proyectos ambientales" eyebrow="Bienvenida, Carla" screen={screen} onNavigate={setScreen}><div className={styles.summaryGrid}><button onClick={() => { setFilter("Todos"); setScreen("projects"); }}><b>24</b><span>activos</span></button><button onClick={() => { setFilter("En evaluación"); setScreen("projects"); }}><b>8</b><span>por evaluar</span></button><button onClick={() => { setFilter("Aprobado"); setScreen("projects"); }}><b>12</b><span>aprobados</span></button></div><SectionTitle title="Categorías" action="Ver todas" /><div className={styles.categoryGrid}>{categories.map((category) => <button key={category.label} className={styles[category.tone]} onClick={() => setScreen("projects")}><Icon>{category.symbol}</Icon><span>{category.label}</span></button>)}</div><SectionTitle title="Proyectos destacados" action="Ver todos" onAction={() => setScreen("projects")} /><div className={styles.featuredList}>{projects.slice(0, 2).map((project) => <ProjectCard key={project.name} project={project} />)}</div><button className={styles.newProject} type="button" onClick={() => setScreen("classify")}><span>＋</span><div><b>Clasificar nuevo proyecto</b><small>Evaluación inicial en menos de 5 minutos</small></div><i>→</i></button></AppScreen>}
        {screen === "projects" && <AppScreen title="Clasificar proyectos" eyebrow={`${filteredProjects.length} resultados`} screen={screen} onNavigate={setScreen}><div className={styles.searchRow}><label><span>⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar proyectos..." /></label><select value={filter} onChange={(event) => setFilter(event.target.value)} aria-label="Filtrar por estado"><option>Todos</option><option>En evaluación</option><option>Alta prioridad</option><option>Aprobado</option></select></div><div className={styles.projectList}>{filteredProjects.map((project) => <ProjectCard key={project.name} project={project} detailed />)}{!filteredProjects.length && <div className={styles.empty}><b>Sin coincidencias</b><span>Prueba con otro término o estado.</span></div>}</div></AppScreen>}
        {screen === "classify" && <AppScreen title="Nueva clasificación" eyebrow="Evaluación preliminar" screen={screen} onNavigate={setScreen}><form className={styles.classifyForm} onSubmit={saveClassification}><div className={styles.stepHeader}><span>01</span><div><b>Datos del proyecto</b><small>Información para orientar la ruta ambiental.</small></div></div><label>Nombre del proyecto<input required placeholder="Ej. Planta solar Alto Sur" /></label><div className={styles.twoFields}><label>Sector<select required defaultValue=""><option value="" disabled>Seleccionar</option><option>Energía</option><option>Minería</option><option>Infraestructura</option><option>Agroindustria</option><option>Saneamiento</option></select></label><label>Región<select required defaultValue=""><option value="" disabled>Seleccionar</option><option>Lima</option><option>Cusco</option><option>Arequipa</option><option>Piura</option><option>Junín</option></select></label></div><label>Etapa del proyecto<div className={styles.chips}><button type="button">Idea</button><button type="button" className={styles.chipActive}>Diseño</button><button type="button">Operación</button></div></label><div className={styles.stepHeader}><span>02</span><div><b>Criterios de clasificación</b><small>Ajusta los valores según la información disponible.</small></div></div><ScoreSlider label="Impacto ambiental potencial" value={impact} setValue={setImpact} /><ScoreSlider label="Viabilidad técnica" value={viability} setValue={setViability} /><ScoreSlider label="Urgencia regulatoria" value={urgency} setValue={setUrgency} /><div className={styles.resultCard}><div><small>Puntaje preliminar</small><b>{result}<em>/100</em></b></div><span>{result >= 85 ? "Alta prioridad" : result >= 70 ? "Prioridad media" : "Prioridad regular"}</span></div><button className={styles.saveButton} type="submit">◒ Guardar clasificación</button>{classificationSaved && <div className={styles.successMessage} role="status"><b>Clasificación guardada</b><span>El proyecto se incorporó a la cartera de demostración.</span><button type="button" onClick={() => setScreen("dashboard")}>Volver al inicio</button></div>}</form></AppScreen>}
        {screen === "impact" && <AppScreen title="Impacto consolidado" eyebrow="Resumen general" screen={screen} onNavigate={setScreen}><div className={styles.impactHero}><div className={styles.donut}><span>◒</span></div><div><p><i className={styles.greenDot} /><span>CO₂ evitado</span><b>12,450 t</b></p><p><i className={styles.goldDot} /><span>Hectáreas conservadas</span><b>8,760 ha</b></p><p><i className={styles.blueDot} /><span>Beneficiarios</span><b>15,320</b></p></div></div><SectionTitle title="Proyectos por región" action="Ver mapa" /><div className={styles.regionList}><ProjectCard project={projects[4]} detailed /><ProjectCard project={projects[1]} detailed /><ProjectCard project={projects[2]} detailed /></div><SectionTitle title="Estado de la cartera" /><div className={styles.portfolioState}><span><b>24</b>Activos</span><span><b>8</b>Por evaluar</span><span><b>12</b>Aprobados</span><span><b>4</b>Completados</span></div></AppScreen>}
        {screen === "profile" && <AppScreen title="Mi perfil" eyebrow="Cuenta institucional" screen={screen} onNavigate={setScreen}><div className={styles.profileCard}><div>CG</div><h3>Carla Gómez</h3><p>Especialista ambiental · ARP GAIA</p><span>carla@arpgaia.pe</span></div><div className={styles.profileOptions}><button><Icon>♙</Icon><span><b>Datos personales</b><small>Información de la cuenta</small></span><i>›</i></button><button><Icon>♧</Icon><span><b>Notificaciones</b><small>Alertas y vencimientos</small></span><i>›</i></button><button><Icon>⌁</Icon><span><b>Seguridad</b><small>Acceso y contraseña</small></span><i>›</i></button></div><button className={styles.logout} onClick={() => setScreen("login")}>Cerrar sesión</button></AppScreen>}
        <div className={styles.homeIndicator} />
      </section>
    </div>
  );
}

function AppScreen({ title, eyebrow, screen, onNavigate, children }: { title: string; eyebrow: string; screen: Screen; onNavigate: (screen: Screen) => void; children: ReactNode }) {
  return <div className={styles.appScreen}><header className={styles.appHeader}><div><span>{eyebrow}</span><h2>{title}</h2></div><button type="button" onClick={() => onNavigate("profile")} aria-label="Abrir perfil">CG</button></header><main className={styles.appContent}>{children}</main><nav className={styles.bottomNav} aria-label="Navegación del aplicativo"><button className={screen === "dashboard" ? styles.navActive : ""} onClick={() => onNavigate("dashboard")}><Icon>⌂</Icon><span>Inicio</span></button><button className={screen === "projects" ? styles.navActive : ""} onClick={() => onNavigate("projects")}><Icon>▰</Icon><span>Proyectos</span></button><button className={screen === "classify" ? styles.navActive : ""} onClick={() => onNavigate("classify")}><Icon>☷</Icon><span>Evaluar</span></button><button className={screen === "impact" ? styles.navActive : ""} onClick={() => onNavigate("impact")}><Icon>▥</Icon><span>Impacto</span></button><button className={screen === "profile" ? styles.navActive : ""} onClick={() => onNavigate("profile")}><Icon>♙</Icon><span>Perfil</span></button></nav></div>;
}

function SectionTitle({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) { return <div className={styles.sectionTitle}><h3>{title}</h3>{action && <button type="button" onClick={onAction}>{action}</button>}</div>; }
function ProjectCard({ project, detailed = false }: { project: Project; detailed?: boolean }) { return <article className={`${styles.projectCard} ${detailed ? styles.projectCardDetailed : ""}`}><img src={project.image} alt="" /><div><small>{project.location} · {project.category}</small><h4>{project.name}</h4><Status value={project.status} />{detailed && <span className={styles.projectScore}>{project.score}/100</span>}</div></article>; }
function ScoreSlider({ label, value, setValue }: { label: string; value: number; setValue: (value: number) => void }) { return <label className={styles.scoreSlider}><span><b>{label}</b><strong>{value}/100</strong></span><input type="range" min="0" max="100" value={value} onChange={(event) => setValue(Number(event.target.value))} /></label>; }
