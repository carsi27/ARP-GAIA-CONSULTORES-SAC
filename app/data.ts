export type Area = {
  slug: string;
  number: string;
  name: string;
  short: string;
  description: string;
  featured: string[];
  services: string[];
  note?: string;
};

export const areas: Area[] = [
  {
    slug: "estudios-instrumentos-ambientales",
    number: "01",
    name: "Estudios e Instrumentos Ambientales",
    short: "Estudios ambientales",
    description: "Evaluamos impactos y estructuramos instrumentos claros para prevenir, manejar y dar seguimiento a los compromisos de cada proyecto.",
    featured: ["Estudios de impacto ambiental", "Modificación de instrumentos", "Planes de manejo", "Supervisión ambiental de obras", "Informes de cumplimiento"],
    services: ["Diagnóstico ambiental inicial", "Evaluación ambiental preliminar", "Estudios de impacto ambiental", "Declaraciones y fichas ambientales", "Modificación de instrumentos ambientales", "Actualización de instrumentos ambientales", "Instrumentos de adecuación o regularización", "Planes de manejo ambiental", "Evaluación de alternativas", "Identificación y evaluación de impactos", "Determinación de áreas de influencia", "Elaboración e integración de líneas base", "Estrategias de manejo ambiental", "Planes de vigilancia y seguimiento", "Planes de cierre y abandono", "Evaluaciones para selección de terrenos", "Supervisión ambiental de obras", "Informes de cumplimiento", "Atención de observaciones técnicas", "Gestión de compromisos ambientales"],
  },
  {
    slug: "monitoreo-calidad-ambiental",
    number: "02",
    name: "Monitoreo y Calidad Ambiental",
    short: "Monitoreo ambiental",
    description: "Diseñamos programas de monitoreo y organizamos información verificable sobre agua, aire, ruido, suelo, efluentes y emisiones.",
    featured: ["Monitoreo de agua", "Calidad del aire", "Ruido", "Suelo", "Efluentes y emisiones"],
    services: ["Diseño de programas de monitoreo", "Calidad de agua superficial", "Agua subterránea", "Agua potable", "Efluentes líquidos", "Calidad del aire", "Monitoreo meteorológico", "Emisiones atmosféricas", "Ruido ambiental", "Ruido ocupacional", "Calidad de suelo", "Investigación de sitios contaminados", "Sedimentos", "Olores", "Iluminación y condiciones ocupacionales", "Monitoreo biológico", "Evaluación de cumplimiento de programas", "Redes de vigilancia ambiental", "Monitoreo ambiental en obras", "Verificación de medidas correctivas", "Informes de monitoreo"],
    note: "Los análisis o mediciones que requieran acreditación serán coordinados con laboratorios y organismos competentes.",
  },
  {
    slug: "residuos-economia-circular",
    number: "03",
    name: "Gestión de Residuos y Economía Circular",
    short: "Residuos y circularidad",
    description: "Ordenamos la gestión de residuos desde el diagnóstico y la trazabilidad hasta la minimización, valorización y economía circular.",
    featured: ["Planes de manejo de residuos", "Residuos peligrosos", "Economía circular", "Valorización", "Gestión municipal"],
    services: ["Diagnóstico de gestión de residuos", "Inventario y caracterización", "Determinación de peligrosidad", "Plan integral de manejo", "Minimización y segregación en la fuente", "Almacenes de residuos", "Rutas internas de recolección", "Residuos peligrosos", "Residuos de construcción y demolición", "Residuos orgánicos", "Programas de reciclaje", "Alternativas de valorización", "Estudios de mercado para materiales recuperados", "Análisis de flujo de materiales", "Hoja de ruta de economía circular", "Ecodiseño", "Reducción de plásticos", "Responsabilidad extendida y recuperación posconsumo", "Auditorías", "Supervisión de almacenes y operaciones", "Trazabilidad y control documental", "Planes de contingencia", "Áreas afectadas por residuos", "Diseño conceptual de instalaciones", "Segregación y valorización municipal", "Planificación de limpieza pública", "Fortalecimiento de recicladores", "Capacitación"],
  },
  {
    slug: "recursos-naturales-biodiversidad",
    number: "04",
    name: "Recursos Naturales y Biodiversidad",
    short: "Biodiversidad",
    description: "Integramos información biológica, forestal y territorial para comprender riesgos, conservar valores naturales y orientar decisiones.",
    featured: ["Línea base biológica", "Evaluación de ecosistemas", "Manejo de biodiversidad", "Gestión forestal", "Restauración ecológica"],
    services: ["Diagnóstico de biodiversidad", "Línea base biológica", "Evaluación de ecosistemas", "Inventario de flora y vegetación", "Evaluación de fauna terrestre", "Evaluación hidrobiológica", "Evaluación de hábitats", "Especies amenazadas y endémicas", "Sensibilidad biológica", "Hábitats críticos", "Impactos sobre biodiversidad", "Plan de manejo de biodiversidad", "Planes de conservación", "Monitoreo de biodiversidad", "Monitoreo de ecosistemas acuáticos", "Evaluación y gestión de humedales", "Conectividad ecológica", "Fragmentación del paisaje", "Especies exóticas invasoras", "Restauración ecológica", "Rehabilitación de áreas", "Compensación de biodiversidad", "Servicios ecosistémicos", "Valoración económica", "Dependencia empresarial de la naturaleza", "Planes empresariales de biodiversidad", "Riesgos para la biodiversidad", "Impactos acumulativos", "Gestión de áreas de conservación", "Zonificación ecológica", "Manejo sostenible de recursos", "Control de erosión y recuperación de suelos", "Manejo ecológico del paisaje", "Ciencia ciudadana", "Educación en biodiversidad", "Inventarios y censos forestales", "Expedientes técnicos para desbosque", "Planes de manejo forestal", "Reforestación y restauración forestal", "Biomasa y carbono forestal", "Prevención de incendios", "Rescate y reubicación de flora y fauna", "Monitoreo con cámaras trampa", "Corredores biológicos", "Gestión forestal comunitaria", "Viveros", "Trazabilidad forestal", "Arboricultura urbana"],
  },
  {
    slug: "cambio-climatico-sostenibilidad",
    number: "05",
    name: "Cambio Climático y Sostenibilidad",
    short: "Clima y sostenibilidad",
    description: "Convertimos datos de emisiones, agua, energía y riesgos climáticos en hojas de ruta medibles y comunicaciones responsables.",
    featured: ["Huella de carbono", "Planes de reducción", "Riesgos climáticos", "Ecoeficiencia", "Reportes de sostenibilidad"],
    services: ["Diagnóstico climático y de sostenibilidad", "Inventario de gases de efecto invernadero", "Huella de carbono de productos", "Huella de servicios, proyectos y eventos", "Huella territorial y municipal", "Control de calidad de inventarios", "Plan de reducción", "Estrategia de neutralidad", "Evaluación de compensaciones y créditos", "Diseño preliminar de proyectos de carbono", "Riesgos climáticos", "Vulnerabilidad climática", "Planes de adaptación", "Planes climáticos territoriales", "Huella hídrica", "Eficiencia hídrica", "Ecoeficiencia", "Gestión de energía", "Energías renovables", "Estrategia de sostenibilidad", "Asuntos relevantes", "Grupos de interés", "Reportes de sostenibilidad", "Evaluación ambiental, social y de gobernanza", "Evaluación de ciclo de vida", "Prevención de declaraciones ambientales engañosas", "Eventos sostenibles", "Capacitación"],
    note: "Las declaraciones de neutralidad, cero emisiones o sostenibilidad requieren alcance, metodología y evidencia verificable.",
  },
  {
    slug: "social-participacion-ciudadana",
    number: "06",
    name: "Social y Participación Ciudadana",
    short: "Gestión social",
    description: "Diseñamos procesos de información, escucha y diálogo para comprender el territorio social y gestionar relaciones de forma responsable.",
    featured: ["Participación ciudadana", "Línea base social", "Relaciones comunitarias", "Prevención de conflictos", "Mecanismos de quejas"],
    services: ["Diagnóstico social", "Línea base social", "Área de influencia social", "Mapeo de actores", "Grupos de interés", "Participación ciudadana", "Talleres y audiencias", "Oficinas de información", "Comunicación social", "Relaciones comunitarias", "Acompañamiento social de obras", "Impactos sociales", "Plan de manejo social", "Riesgos sociales y alertas tempranas", "Conflictos socioambientales", "Espacios de diálogo", "Quejas y reclamos", "Compromisos sociales", "Monitoreo social", "Monitoreo ambiental participativo", "Estudios de percepción", "Medios de vida", "Restauración de medios de vida", "Gestión social de tierras", "Planificación de reasentamiento", "Pueblos indígenas y comunidades culturalmente diferenciadas", "Interculturalidad", "Género e inclusión", "Afluencia de trabajadores", "Empleo y compras locales", "Inversión social", "Evaluación de programas", "Rumores y desinformación", "Comunicación de emergencias", "Cierre social", "Capacitación comunitaria"],
  },
  {
    slug: "legal-cumplimiento-ambiental",
    number: "07",
    name: "Legal y Cumplimiento Ambiental",
    short: "Cumplimiento ambiental",
    description: "Organizamos obligaciones, permisos, evidencias y acciones preventivas para fortalecer el cumplimiento y la preparación ante fiscalizaciones.",
    featured: ["Matriz legal", "Gestión de permisos", "Preparación para fiscalización", "Auditoría de cumplimiento", "Debida diligencia"],
    services: ["Diagnóstico legal", "Marco normativo", "Matriz legal", "Matriz de compromisos", "Inventario de permisos", "Permisos para nuevos proyectos", "Estrategia regulatoria", "Asistencia en certificación", "Revisión legal de instrumentos", "Gestión de permisos", "Gestión legal hídrica", "Gestión legal forestal y de fauna", "Restricciones por áreas protegidas", "Gestión legal de residuos", "Calendario de obligaciones", "Evaluación de cumplimiento", "Auditoría legal", "Plan de adecuación", "Preparación para supervisiones", "Protocolos de fiscalización", "Acompañamiento en inspecciones", "Análisis de actas", "Requerimientos de información", "Medidas administrativas", "Procedimientos sancionadores", "Informes técnico-legales", "Responsabilidad ambiental", "Incidentes y emergencias", "Debida diligencia", "Contratos", "Contratistas y proveedores", "Cambios normativos", "Sistema de cumplimiento", "Integración con sistemas de gestión", "Gestión de evidencias", "Capacitación legal", "Simulacros", "Asistencia a entidades públicas", "Denuncias ambientales"],
    note: "La aprobación de permisos corresponde a las autoridades competentes. La representación jurídica debe ser realizada por abogados habilitados.",
  },
  {
    slug: "sig-tecnologia",
    number: "08",
    name: "Sistemas de Información Geográfica y Tecnología",
    short: "SIG y tecnología",
    description: "Transformamos datos de campo, satélites, drones y sensores en cartografía, análisis territorial y herramientas para decidir mejor.",
    featured: ["Cartografía ambiental", "Imágenes satelitales", "Drones", "Geoportales", "Monitoreo territorial"],
    services: ["Diagnóstico geográfico", "Cartografía ambiental", "Georreferenciación", "Levantamientos satelitales", "Topografía de apoyo", "Imágenes satelitales", "Análisis multitemporal", "Cobertura y uso del suelo", "Monitoreo de deforestación", "Monitoreo de cuerpos de agua", "Índices de vegetación", "Fotogrametría con drones", "Inspecciones aéreas", "Superficies y volúmenes", "Modelos de elevación", "Cuencas y drenajes", "Pendientes y erosión", "Accesibilidad y rutas", "Superposición territorial", "Sensibilidad ambiental", "Áreas de influencia", "Selección multicriterio de sitios", "Corredores ecológicos", "Mapas de riesgos", "Mapas de calidad ambiental", "Geodatabases y metadatos", "Digitalización", "Integración con planos de ingeniería", "Control territorial de compromisos", "Aplicaciones de campo", "Formularios digitales", "Geoportales", "Tableros", "Alertas territoriales", "Automatización", "Sensores y monitoreo remoto", "Análisis estadístico y espacial", "Modelamiento", "Inventarios digitales", "Catastro ambiental municipal", "Seguimiento de obras", "Registro de incidentes", "Reconstrucción de emergencias", "Fotografías georreferenciadas", "Modelos tridimensionales", "Inteligencia artificial ambiental", "Capacitación"],
  },
];

export const sectors = ["Minería", "Energía", "Industria", "Construcción e infraestructura", "Agricultura y agroindustria", "Gestión forestal", "Transporte y logística", "Saneamiento", "Municipalidades", "Comercio y servicios"];

export const methodology = [
  ["01", "Escuchamos", "Comprendemos la necesidad, el contexto y las decisiones que deben tomarse."],
  ["02", "Evaluamos", "Revisamos información, territorio, obligaciones y riesgos del proyecto."],
  ["03", "Diseñamos", "Definimos un alcance viable, responsables, métodos y entregables."],
  ["04", "Ejecutamos", "Desarrollamos el servicio con coordinación, seguridad y trazabilidad."],
  ["05", "Revisamos", "Aplicamos control de calidad técnico y verificamos la consistencia."],
  ["06", "Entregamos", "Presentamos resultados claros, sustentados y listos para su uso."],
  ["07", "Acompañamos", "Orientamos la implementación, atención de observaciones y seguimiento."],
];

export const solutionOptions = [
  ["estudio", "Necesito aprobar o actualizar un estudio ambiental", 0],
  ["monitoreo", "Necesito realizar monitoreos", 1],
  ["residuos", "Necesito mejorar la gestión de residuos", 2],
  ["biodiversidad", "Necesito evaluar biodiversidad, bosques o fauna", 3],
  ["clima", "Necesito calcular emisiones o desarrollar sostenibilidad", 4],
  ["social", "Necesito participación ciudadana", 5],
  ["legal", "Necesito permisos o atender una fiscalización", 6],
  ["sig", "Necesito mapas, drones o análisis territorial", 7],
  ["orientacion", "No sé qué servicio necesito", -1],
] as const;

export const articles = [
  ["Instrumentos ambientales", "¿Qué estudio ambiental necesita un proyecto?", "Una guía inicial para reconocer variables, autoridades y alcances que deben evaluarse."],
  ["Cumplimiento legal", "¿Cómo prepararse para una supervisión ambiental?", "Orden documental, roles internos y revisión preventiva antes de una visita."],
  ["Monitoreo", "¿Qué debe contener un programa de monitoreo?", "Componentes técnicos que ayudan a producir información comparable y útil."],
  ["Residuos", "¿Cómo implementar una gestión integral de residuos?", "Del inventario a la trazabilidad: decisiones para ordenar el sistema."],
  ["Biodiversidad", "¿Qué es una línea base biológica?", "Qué información aporta y por qué su diseño debe responder al proyecto y al territorio."],
  ["Cambio climático", "¿Cómo calcular la huella de carbono de una empresa?", "Alcance, datos y controles básicos para construir un inventario verificable."],
  ["Participación ciudadana", "¿Por qué es importante el mapeo de actores?", "Una herramienta para planificar información, escucha y relacionamiento."],
  ["SIG y tecnología", "¿Cómo se utilizan los drones en la gestión ambiental?", "Aplicaciones, límites y coordinación con permisos y trabajo de campo."],
];
