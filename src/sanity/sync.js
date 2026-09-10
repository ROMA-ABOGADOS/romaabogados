const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hu6m2960',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-02-01',
  token: process.env.SANITY_API_WRITE_TOKEN || 'sk7BSf8eWk5Ucd484R04P2tVtUzdFauA5swjJcoqInb5Z9ReJoScOuuA2L6WDhS855KbknBON5wXvST3LUCFRM2ps1VAwGgq98vKnbiwA76UK5stL0vyLpfx57Sb95yOjd75vE1AhYUYSR7UCmsljJzZVz3Fc90e8XriRpR4SjF0KWcvAqqM',
  useCdn: false,
});

async function syncAll() {
  console.log('🔄 Sincronizando 100% de los documentos hacia Sanity CMS...');

  // 1. siteSettings
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    brandName: 'ROMAABOGADOS',
    tagline: 'Estudio Jurídico & Tributario',
    phone: '+51 943 366 950',
    whatsapp: '51943366950',
    email: 'contacto@romaabogados.pe',
    address: 'Lima, Perú',
    schedule: 'Lun - Vie: 8:00 - 18:00 / Sáb: 9:00 - 13:00',
    footerDescription: 'Protegemos el patrimonio y aseguramos el crecimiento de tu empresa con asesoría jurídica de excelencia, contabilidad integral y defensa estratégica ante SUNAT.',
  });
  console.log('✔ [1/6] siteSettings sincronizado');

  // 2. homePage
  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroSlides: [
      {
        _key: 'slide1',
        badge: 'Estudio Jurídico & Tributario en Perú',
        titlePart1: 'Protegemos tu',
        titleHighlight1: 'Empresa.',
        titlePart2: 'Aseguramos tu',
        titleHighlight2: 'Patrimonio.',
        subtitle: 'Asesoría legal, tributaria y contable de excelencia. Cero multas SUNAT. Seguridad jurídica total con ROMA ABOGADOS.',
        cta1Text: 'Consultoría Gratuita →',
        cta1Link: '#whatsapp',
        cta2Text: 'Nuestros Servicios',
        cta2Link: '#servicios',
        badges: ['Sin compromiso', 'Respuesta inmediata', 'Personalizado'],
      },
      {
        _key: 'slide2',
        badge: 'Constitución de Empresas',
        titlePart1: 'Constituye tu Empresa.',
        titleHighlight1: 'Precios a Consultar.',
        titlePart2: '',
        titleHighlight2: '',
        subtitle: 'Formaliza tu negocio sin estrés, colas ni trámites complicados. Incluye Notaría y SUNARP.',
        cta1Text: 'Constituir Empresa Ahora',
        cta1Link: '/constitucion-de-empresas',
        cta2Text: 'Ver Paquetes',
        cta2Link: '/constitucion-de-empresas',
        badges: ['Notaría incluida', 'SUNARP garantizado', 'RUC + Clave SOL'],
      },
      {
        _key: 'slide3',
        badge: 'Contabilidad Integral',
        titlePart1: 'Tu Contabilidad en Regla.',
        titleHighlight1: 'Sin multas de SUNAT.',
        titlePart2: '',
        titleHighlight2: '',
        subtitle: 'Nos encargamos de tus declaraciones mensuales, libros electrónicos, SIRE y planillas.',
        cta1Text: 'Evaluar mi Régimen MYPE',
        cta1Link: '#whatsapp',
        cta2Text: 'Planes Mensuales',
        cta2Link: '/contabilidad-tributacion',
        badges: ['Declaraciones mensuales', 'Libros electrónicos', 'Planilla laboral'],
      },
      {
        _key: 'slide4',
        badge: 'Defensa Tributaria Urgente',
        titlePart1: 'Escudo Legal y Tributario',
        titleHighlight1: 'Fiscalizaciones.',
        titlePart2: 'Ante',
        titleHighlight2: '',
        subtitle: 'Atención urgente de cartas inductivas, cobranzas coactivas y auditorías de SUNAT.',
        cta1Text: 'Detener Fiscalización Ya',
        cta1Link: '#whatsapp',
        cta2Text: 'Casos de Defensa',
        cta2Link: '/defensa-tributaria-sunat',
        badges: ['Atención urgente', 'Cartas inductivas', 'Cobranza coactiva'],
      },
      {
        _key: 'slide5',
        badge: 'Estudio Jurídico Roma Abogados',
        titlePart1: 'Especialistas Jurídicos con',
        titleHighlight1: 'Sólido Respaldo Legal.',
        titlePart2: '',
        titleHighlight2: '',
        subtitle: 'Rigurosidad legal, estrategia tributaria y resultados reales respaldando el crecimiento de empresas en el Perú.',
        cta1Text: 'Agendar Reunión',
        cta1Link: '/nosotros-contacto',
        cta2Text: 'Conocer el Estudio',
        cta2Link: '/nosotros-contacto',
        badges: ['Asesoría Integral', 'Transparencia total', 'Resultados comprobados'],
      },
    ],
    founder: {
      title: 'ROMA ABOGADOS',
      subtitle: 'ESTUDIO JURÍDICO & TRIBUTARIO',
      quote: 'Defendemos tus derechos, protegemos tu patrimonio y aseguramos la estabilidad de tu empresa.',
      sectionTitle: 'Respaldo Legal y Empresarial',
      sectionSubtitle: 'Acompañamos a empresarios y emprendedores con soluciones legales, contables y de defensa fiscal de alto impacto.',
    },
    trajectory: {
      badge: 'EXPERIENCIA Y RESPALDO LEGAL',
      title: 'ROMA ABOGADOS: Trayectoria sólida protegiendo patrimonios en el Perú',
      description: 'Con una trayectoria de excelencia en derecho corporativo, asesoría tributaria, contabilidad integral y defensa legal frente a SUNAT, el equipo de ROMA ABOGADOS ha ayudado a cientos de empresas a operar con seguridad jurídica, optimizando su gestión y blindando su patrimonio frente a contingencias.',
      achievements: [
        'Casos de fiscalización resueltos favorablemente',
        'Empresas y patrimonios protegidos formalmente',
        'Asesoría preventiva y defensa estratégica en SUNAT y Tribunal Fiscal'
      ],
    },
    servicesSection: {
      badge: 'NUESTROS SERVICIOS',
      title: '¿Por qué elegir ROMA ABOGADOS?',
      subtitle: 'Ofrecemos soluciones integrales y personalizadas para proteger y potenciar tu negocio.',
      servicesList: [
        {
          _key: 'serv1',
          title: 'Constitución de Empresas',
          description: 'Formaliza tu negocio con paquetes flexibles. SAC, EIRL, SRL. Incluye minuta, partida, RUC y Clave SOL.',
          href: '/constitucion-de-empresas',
          serviceId: 1,
        },
        {
          _key: 'serv2',
          title: 'Contabilidad Integral',
          description: 'Tercerización contable completa. Libros electrónicos, SIRE, planillas y declaraciones mensuales.',
          href: '/contabilidad-tributacion',
          serviceId: 4,
        },
        {
          _key: 'serv3',
          title: 'Asesoría Tributaria',
          description: 'Atención urgente de cartas inductivas, fiscalizaciones y cobranzas coactivas de SUNAT.',
          href: '/defensa-tributaria-sunat',
          serviceId: 5,
        },
        {
          _key: 'serv4',
          title: 'Planillas y Laboral',
          description: 'Administración de planillas, T-REGISTRO, PDT 601 y cumplimiento laboral total.',
          href: '/contabilidad-tributacion#planillas-laboral',
          serviceId: 8,
        },
        {
          _key: 'serv5',
          title: 'Asesoría al Inversionista',
          description: 'Orientación integral para inversores nacionales y extranjeros. Planificación fiscal estratégica.',
          href: '/defensa-tributaria-sunat#asesoria-inversionista',
          serviceId: 9,
        },
      ],
    },
    testimonials: [
      {
        _key: 't1',
        name: 'Fernando',
        text: 'Gracias a la asesoría tributaria y legal de Roma Abogados, logré ordenar mi empresa y reducir contingencias. Su equipo me explicó cada paso con claridad y profesionalismo. Totalmente recomendados.',
        stars: 5,
      },
      {
        _key: 't2',
        name: 'María Fernanda',
        text: 'Constituí mi empresa con ellos y el proceso fue rápido y sin complicaciones. Desde la minuta hasta el RUC, todo quedó perfecto. Ahora opero con total tranquilidad y respaldo legal.',
        stars: 5,
      },
      {
        _key: 't3',
        name: 'Juan',
        text: 'La asesoría estratégica que recibí fue clave para el crecimiento de mi negocio. Me ayudaron a tomar decisiones financieras correctas y a cumplir con todas mis obligaciones tributarias.',
        stars: 5,
      },
      {
        _key: 't4',
        name: 'Lilia',
        text: 'Llevo más de 2 años con su servicio de contabilidad integral y cada mes me siento tranquila sabiendo que mis declaraciones están correctas. Excelente equipo y atención personalizada.',
        stars: 5,
      },
    ],
  });
  console.log('✔ [2/6] homePage sincronizado');

  // 3. pageConstitucion
  await client.createOrReplace({
    _id: 'pageConstitucion',
    _type: 'pageConstitucion',
    heroSubtitle: 'Formaliza tu negocio con precios flexibles y un proceso acompañado de principio a fin. Nosotros nos encargamos de todo.',
    sectionPackagesTitle: 'Tipos Societarios Disponibles',
    sectionPackagesSubtitle: 'Selecciona la modalidad que mejor se adapte a tu visión y número de socios.',
    packages: [
      {
        _key: 'sac',
        name: 'SAC',
        fullName: 'Sociedad Anónima Cerrada',
        price: 'A Consultar',
        recommended: false,
        serviceId: 1,
        idealFor: 'Socios que buscan formalidad con capital accionario. Permite tener hasta 20 socios. Ideal para negocios en crecimiento que planean captar inversiones.',
        features: [
          'Minuta de constitución',
          'Escritura pública',
          'Inscripción en SUNARP',
          'Obtención de RUC',
          'Clave SOL operativa',
          'Libro de actas legalizado',
        ],
      },
      {
        _key: 'eirl',
        name: 'EIRL',
        fullName: 'Empresa Individual de Responsabilidad Limitada',
        price: 'A Consultar',
        recommended: true,
        serviceId: 2,
        idealFor: 'Emprendedores individuales que quieren proteger su patrimonio personal. Solo un dueño, responsabilidad limitada y trámite más rápido.',
        features: [
          'Minuta de constitución',
          'Escritura pública',
          'Inscripción en SUNARP',
          'Obtención de RUC',
          'Clave SOL operativa',
          'Libro de actas legalizado',
          'Asesoría tributaria inicial GRATIS',
        ],
      },
      {
        _key: 'srl',
        name: 'SRL',
        fullName: 'Sociedad de Responsabilidad Limitada',
        price: 'A Consultar',
        recommended: false,
        serviceId: 3,
        idealFor: 'Socios que desean una estructura flexible con menos requisitos formales que la SAC. Entre 2 y 20 socios con Responsabilidad Limitada.',
        features: [
          'Minuta de constitución',
          'Escritura pública',
          'Inscripción en SUNARP',
          'Obtención de RUC',
          'Clave SOL operativa',
          'Libro de actas legalizado',
          'Licencia de funcionamiento (asesoría)',
        ],
      },
      {
        _key: 'coop',
        name: 'COOPERATIVA',
        fullName: 'Constitución de Cooperativas',
        price: 'A Consultar',
        recommended: false,
        serviceId: 4,
        idealFor: 'Clientes que se dedican a la colocación de capitales con fondos propios, mínimo 12 socios.',
        features: [
          'Minuta de constitución',
          'Escritura pública',
          'Inscripción en SUNARP',
          'Obtención de RUC',
          'Clave SOL operativa',
          'Libro de actas legalizado',
          'Estatutos y reglamento interno',
          'Asesoría en estructura cooperativa',
          'Licencia de funcionamiento (Asesoría)',
          'Permisos SBS (Asesoría)',
        ],
      },
    ],
    sectionStepsTitle: '¿Cómo es el proceso?',
    steps: [
      { _key: 'st1', num: '01', title: 'Consulta Gratuita', desc: 'Nos cuentas tu negocio y te recomendamos el tipo societario ideal.' },
      { _key: 'st2', num: '02', title: 'Elaboración de Minuta', desc: 'Nuestro equipo legal redacta la minuta con todos los estatutos necesarios.' },
      { _key: 'st3', num: '03', title: 'Escritura Pública', desc: 'Firmas ante notario público para darle formalidad legal.' },
      { _key: 'st4', num: '04', title: 'Inscripción SUNARP', desc: 'Registramos tu empresa en los Registros Públicos de manera ágil.' },
      { _key: 'st5', num: '05', title: 'Obtención de RUC + Clave SOL', desc: 'Gestionamos tu RUC y activamos tu Clave SOL para operar de inmediato.' },
      { _key: 'st6', num: '06', title: 'Capacitación Tributaria', desc: 'Te orientamos sobre tus obligaciones tributarias y plazos SUNAT.' },
    ],
    sectionFaqsTitle: 'Preguntas Frecuentes sobre Constitución',
    faqs: [
      { _key: 'f1', q: '¿Cuánto tiempo toma constituir una empresa?', a: 'El proceso completo toma entre 5 a 10 días hábiles dependiendo del tipo societario. La EIRL es generalmente la más rápida al requerir menos trámites registrales.' },
      { _key: 'f2', q: '¿Qué documentos necesito para empezar?', a: 'Solo necesitas tu DNI original y una copia. Nosotros nos encargamos de todo lo demás: búsqueda de nombre, elaboración de minuta, trámites notariales y registrales.' },
      { _key: 'f3', q: '¿El precio incluye todos los pagos?', a: 'Sí, nuestros paquetes incluyen todos los honorarios profesionales. Los pagos notariales y registrales están cubiertos dentro del precio indicado, sin costos ocultos.' },
      { _key: 'f4', q: '¿Puedo constituir mi empresa si estoy en otra ciudad?', a: 'Absolutamente. Todo el proceso se puede realizar de manera remota. Solo necesitas enviar fotos de tu DNI por WhatsApp y nosotros gestionamos todo.' },
      { _key: 'f5', q: '¿Qué diferencia hay entre SAC, EIRL y SRL?', a: 'La EIRL es para un solo dueño con responsabilidad limitada. La SAC permite hasta 20 socios con capital accionario, ideal si planeas inversionistas. La SRL es intermedia: entre 2 y 20 socios con menos formalidades que la SAC.' },
    ],
  });
  console.log('✔ [3/6] pageConstitucion sincronizado');

  // 4. pageContabilidad
  await client.createOrReplace({
    _id: 'pageContabilidad',
    _type: 'pageContabilidad',
    heroSubtitle: 'Nos encargamos de tus libros electrónicos, SIRE, declaraciones mensuales y planillas laborales. Cero multas, cero contingencias.',
    alertTitle: 'Alerta Preventiva SUNAT',
    alertText: 'Evita multas y contingencias: No dejes tus declaraciones al azar. Una sola infracción o multa de SUNAT puede costar hasta S/ 5,500 o más. En ROMA ABOGADOS nos encargamos de proteger tu patrimonio.',
    stats: [
      { _key: 'st1', value: '100%', label: 'Puntualidad en declaraciones' },
      { _key: 'st2', value: '0', label: 'Multas en clientes asesorados' },
      { _key: 'st3', value: '24/7', label: 'Respaldo profesional' },
      { _key: 'st4', value: '+20 años', label: 'Experiencia combinada' },
    ],
    mainFeatures: [
      { _key: 'mf1', title: 'Libros Electrónicos', desc: 'Registro de Compras, Ventas, Inventarios, Caja y Bancos, Diario, Mayor, Planilla. Todos al día y conforme a SUNAT.' },
      { _key: 'mf2', title: 'Sistema SIRE', desc: 'Registro Electrónico de Información de SUNAT. Actualizamos tu información de ventas, compras y comprobantes electrónicos de forma mensual.' },
      { _key: 'mf3', title: 'Declaraciones Mensuales', desc: 'IGV, Renta, IES, Retenciones, ITAN. Preparamos y presentamos todas tus declaraciones tributarias antes de los plazos.' },
      { _key: 'mf4', title: 'PDTs y Formularios Vigentes', desc: 'PDT 621, PDT 619, PDT 601, FRL 601, y todos los formularios que tu empresa necesite presentar.' },
      { _key: 'mf5', title: 'Conciliaciones Bancarias', desc: 'Verificamos que tus registros contables coincidan con los movimientos bancarios. Detectamos diferencias a tiempo.' },
      { _key: 'mf6', title: 'Estados Financieros', desc: 'Balance General, Estado de Resultados, Flujo de Efectivo. Información financiera clara para la toma de decisiones.' },
      { _key: 'mf7', title: 'Asesoría Tributaria Permanente', desc: 'Consultas ilimitadas sobre temas tributarios. Te orientamos sobre las mejores opciones para tu negocio.' },
    ],
    additionalServices: [
      { _key: 'as1', title: 'Planilla y Laboral', desc: 'T-REGISTRO, PDT 601, boletas de pago, liquidaciones, CTS, vacaciones y gratificaciones.', price: 'A Consultar' },
      { _key: 'as2', title: 'Cumplimiento de Plazos', desc: 'Calendario personalizado con todos los vencimientos tributarios y laborales de tu empresa.', price: 'Incluido' },
    ],
    laborFeatures: [
      { _key: 'lf1', title: 'T-REGISTRO', desc: 'Alta, baja y modificación de trabajadores en el registro laboral de SUNAT' },
      { _key: 'lf2', title: 'Planilla Mensual PDT 601', desc: 'Elaboración y presentación de planilla electrónica' },
      { _key: 'lf3', title: 'Boletas de Pago', desc: 'Cálculo de remuneraciones, deducciones y aportes' },
      { _key: 'lf4', title: 'CTS', desc: 'Cálculo y depósito de Compensación por Tiempo de Servicios' },
      { _key: 'lf5', title: 'Vacaciones y Gratificaciones', desc: 'Control de descansos y gratificaciones ordinarias y extraordinarias' },
      { _key: 'lf6', title: 'Liquidaciones', desc: 'Cálculo preciso de liquidaciones por fin de contrato' },
      { _key: 'lf7', title: 'Seguro Essalud y ONP', desc: 'Declaración y pago mensual de aportes' },
    ],
  });
  console.log('✔ [4/6] pageContabilidad sincronizado');

  // 5. pageDefensa
  await client.createOrReplace({
    _id: 'pageDefensa',
    _type: 'pageDefensa',
    heroSubtitle: 'No dejes pasar el plazo. Cada día cuenta para defender tu patrimonio. Nuestro equipo de especialistas tributarios actúa con la urgencia que tu caso requiere.',
    sectionSituationsTitle: 'Elige tu',
    sectionSituationsHighlight: 'situación',
    sectionSituationsSubtitle: 'Cada caso es diferente. Selecciona tu situación y te ayudamos de inmediato.',
    urgentCards: [
      {
        _key: 'uc1',
        title: 'Cartas Inductivas',
        price: 'Desde S/ 200',
        urgency: 'Tienes 10 días hábiles para responder. Actúa ahora.',
        description: 'SUNAT te envió una carta inductiva porque detectó inconsistencias en tu información tributaria. No responder a tiempo puede derivar en multas de hasta el 100% del tributo omitido.',
        cta: 'Atender mi Carta Inductiva',
        serviceId: 5,
        details: [
          'Análisis completo de la carta recibida',
          'Identificación de las inconsistencias detectadas por SUNAT',
          'Preparación de la respuesta fundamentada con documentación',
          'Presentación de descargos ante SUNAT',
          'Seguimiento hasta la resolución del caso',
        ],
      },
      {
        _key: 'uc2',
        title: 'Carta por Incremento Patrimonial No Justificado',
        price: 'Consultar según el caso',
        urgency: 'Tienes 10 días hábiles para responder. Actúa ahora.',
        description: 'SUNAT detectó un incremento en tu patrimonio que no coincide con tus declaraciones tributarias. Es fundamental presentar descargos sólidos con documentación que sustente tus ingresos.',
        cta: 'Atender mi Carta Patrimonial',
        serviceId: 11,
        details: [
          'Análisis completo de la carta recibida',
          'Identificación de las inconsistencias detectadas por SUNAT',
          'Preparación de la respuesta fundamentada con documentación',
          'Presentación de descargos ante SUNAT',
          'Seguimiento hasta la resolución del caso',
        ],
      },
      {
        _key: 'uc3',
        title: 'Fiscalizaciones',
        price: 'Consultar según caso',
        urgency: 'No esperes a que termine el plazo de fiscalización.',
        description: 'SUNAT seleccionó tu empresa para una auditoría tributaria. Una fiscalización mal manejada puede resultar en determinaciones de deuda significativas y cobranzas coactivas.',
        cta: 'Defender mi Empresa',
        serviceId: 6,
        details: [
          'Revisión integral de la orden de fiscalización',
          'Organización y preparación de toda la documentación requerida',
          'Acompañamiento durante las actuaciones fiscales',
          'Elaboración de observaciones y descargos',
          'Estrategia de defensa tributaria personalizada',
        ],
      },
      {
        _key: 'uc4',
        title: 'Cobranza Coactiva',
        price: 'Consultar según deuda',
        urgency: 'Evita embargos y afectaciones a tu patrimonio.',
        description: 'Tienes deudas tributarias en etapa de cobranza coactiva. SUNAT puede embargar tus cuentas bancarias, bienes y afectar gravemente la operación de tu negocio.',
        cta: 'Negociar mi Deuda',
        serviceId: 7,
        details: [
          'Análisis de la deuda tributaria total',
          'Verificación de la validez de los valores reclamados',
          'Solicitud de fraccionamiento o aplazamiento',
          'Presentación de recursos de reclamación',
          'Negociación directa con SUNAT para obtener las mejores condiciones',
        ],
      },
    ],
    whyUsTitle: '¿Por qué confiar en nosotros?',
    whyUsItems: [
      'Respuesta inmediata: nos comunicamos contigo en menos de 1 hora',
      'Equipo especializado con experiencia en defensa tributaria real',
      'Conocimiento profundo de la normativa tributaria peruana vigente',
      'Seguimiento constante hasta la resolución final de tu caso',
    ],
    inversionistaHeroTitle: 'Asesoría Integral al Inversionista',
    inversionistaHeroSubtitle: 'Protegemos tu capital y optimizamos tus inversiones con estructuración legal y planificación fiscal estratégica.',
    inversionistaFeatures: [
      { _key: 'inv1', title: 'Evaluación de Inversiones', desc: 'Análisis de viabilidad y rentabilidad de proyectos de inversión' },
      { _key: 'inv2', title: 'Planificación Fiscal', desc: 'Estructuración tributaria óptima para maximizar retornos' },
      { _key: 'inv3', title: 'Constitución de Empresas', desc: 'Creación de vehículos societarios para inversores nacionales y extranjeros' },
      { _key: 'inv4', title: 'Debido Diligencia', desc: 'Verificación integral de empresas antes de adquirir participaciones' },
      { _key: 'inv5', title: 'Reestructuración Societaria', desc: 'Reorganización de estructuras corporativas para eficiencia fiscal' },
      { _key: 'inv6', title: 'Asesoría Inmobiliaria', desc: 'Orientación en inversiones inmobiliarias y aspectos tributarios' },
      { _key: 'inv7', title: 'Transferencia de Acciones', desc: 'Asesoramiento en compra-venta de participaciones empresariales' },
      { _key: 'inv8', title: 'Reportes Financieros', desc: 'Estados financieros especializados para toma de decisiones de inversión' },
    ],
  });
  console.log('✔ [5/6] pageDefensa sincronizado');

  // 6. pageNosotros
  await client.createOrReplace({
    _id: 'pageNosotros',
    _type: 'pageNosotros',
    heroSubtitle: 'Transparencia, solvencia jurídica y resultados medibles. Conoce al estudio que protege y respalda el crecimiento de tu empresa en Perú.',
    mission: 'Brindar soluciones jurídicas, tributarias y contables de excelencia que protejan el patrimonio de nuestros clientes y aseguren la estabilidad jurídica y financiera de sus negocios. Trabajamos con transparencia, rigurosidad técnica y un compromiso ético inquebrantable.',
    vision: 'Consolidarnos como el estudio jurídico y tributario de referencia en el Perú, reconocido por nuestra solvencia técnica, visión estratégica e innovación en la defensa patrimonial y el crecimiento corporativo.',
    values: [
      { _key: 'v1', label: 'Honestidad', description: 'Transparencia total en cada proceso, decisión y reporte entregado a nuestros clientes.' },
      { _key: 'v2', label: 'Compromiso', description: 'Nos dedicamos al 100% a cada caso. Tu estabilidad jurídica y tributaria es nuestra prioridad.' },
      { _key: 'v3', label: 'Innovación Tecnológica', description: 'Utilizamos software y herramientas digitales avanzadas para una gestión ágil y eficiente.' },
      { _key: 'v4', label: 'Especialización Permanente', description: 'Nuestro equipo se capacita constantemente para dominar los últimos cambios normativos.' },
      { _key: 'v5', label: 'Orientación al Resultado', description: 'Buscamos optimizar tu situación legal y tributaria garantizando estricto apego a la ley.' },
      { _key: 'v6', label: 'Accesibilidad', description: 'Atención personalizada y estratégica para empresas de todos los sectores y tamaños.' },
    ],
  });
  console.log('✔ [6/6] pageNosotros sincronizado');

  console.log('🎉 100% DE LOS DOCUMENTOS SINCRONIZADOS EXITOSAMENTE EN SANITY!');
}

syncAll().catch(console.error);
