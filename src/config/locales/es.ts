import type {
  LegalData,
  NavItemProps,
  PortfolioDataProps,
  SiteDataProps,
} from "../types/configDataTypes";

/** Spanish (default locale) — the site's primary copy. */

export const siteData: SiteDataProps = {
  name: "davidcorella.dev",
  title: "David Corella — Ingeniero de Software Full-Stack",
  description:
    "Portafolio de David Corella, ingeniero de software full-stack: proyectos académicos y personales, experiencia y notas sobre desarrollo web, backend, redes y datos.",

  author: {
    name: "David Corella",
    email: "davidcorella537@gmail.com",
    twitter: "",
  },

  defaultImage: {
    src: "/og.jpg",
    alt: "David Corella — Ingeniero de Software Full-Stack",
  },

  sameAs: [
    "https://github.com/david-corella",
    "https://www.linkedin.com/in/david-corella-8967a637b/",
    "https://www.instagram.com/david_corella_/",
  ],
};

export const portfolioData: PortfolioDataProps = {
  profile: {
    tagline: "Perfil 01",
    heading: "Ingeniero de Software Full-Stack",
    role: "Backend",
    years: "1+",
    bio: [
      "Experiencia en el ciclo completo de desarrollo de aplicaciones, desde el diseño de la interfaz hasta la arquitectura del servidor.",
      "Apasionado por las buenas prácticas, la accesibilidad y el aprendizaje continuo de nuevas tecnologías.",
      "Acostumbrado a trabajar mediante metodologías ágiles, colaborando estrechamente con equipos para transformar ideas en productos digitales de alto impacto.",
    ],
    shortBio:
      "Desarrollador de software enfocado en crear aplicaciones web modernas, optimizadas y centradas en el usuario. Siempre dispuesto a resolver problemas técnicos complejos con código limpio.",
    meta: {
      location: "Hermosillo, Sonora, MX (remoto)",
      role: "Ing. Full-Stack",
      favorite: "Chiptunes 8-bit",
    },
    skills: [
      { label: "Frontend", pct: 40 },
      { label: "Backend", pct: 90 },
      { label: "Análisis de datos", pct: 60 },
      { label: "Bases de datos", pct: 80 },
      { label: "Servidores", pct: 50 },
      { label: "Redes", pct: 90 },
    ],
  },

  stats: {
    home: ["Proyectos: 7", "Años: 1+", "Cafés: ∞"],
    profile: ["Rol: Backend", "Nivel: 1+", "Proyectos: 7", "Stack: Full-Stack"],
  },

  home: {
    tagline: "Jugador 1",
    heading: "Bienvenido, Jugador Uno",
    intro:
      "Sube de nivel con mis proyectos, experimentos y apuntes sobre desarrollo web, backend, redes y análisis de datos. Pulsa Start para empezar.",
  },

  contact: {
    prompt:
      "¿Quieres hablar de un proyecto, una colaboración o simplemente compartir tu juego favorito?",
  },
};

export const navItems: readonly NavItemProps[] = [
  { label: "Sobre mí", href: "/about/" },
  { label: "Proyectos", href: "/projects/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contacto", href: "/contact/" },
] as const;

export const legalData: LegalData = {
  terms: {
    title: "Términos y Condiciones",
    description: "Los términos y condiciones que rigen el uso de este sitio web.",
    lastUpdated: "2026-10-04",
    intro:
      "Estos términos y condiciones («Términos») rigen tu acceso y uso de este sitio web. Léelos con atención. Es contenido genérico de plantilla: reemplázalo por tus propios términos, revisados por un profesional legal, antes de publicar.",
    sections: [
      {
        heading: "Aceptación de los términos",
        body: [
          "Al acceder o usar este sitio web aceptas quedar vinculado por estos Términos y por nuestra Política de Privacidad. Si no estás de acuerdo, no utilices el sitio.",
        ],
      },
      {
        heading: "Uso del servicio",
        body: [
          "Puedes usar este sitio web solo con fines lícitos. Aceptas no hacer un uso indebido del servicio, no interferir con su funcionamiento normal ni intentar acceder a él por medios distintos a la interfaz que ofrecemos.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        body: [
          "Salvo que se indique lo contrario, todo el contenido de este sitio —textos, gráficos, logotipos y código— es propiedad nuestra o de nuestros licenciantes y está protegido por las leyes de propiedad intelectual aplicables. No puedes reproducirlo ni redistribuirlo sin permiso.",
        ],
      },
      {
        heading: "Exenciones de responsabilidad",
        body: [
          "Este sitio web se ofrece «tal cual» y «según disponibilidad», sin garantías de ningún tipo, expresas o implícitas. No garantizamos que el sitio sea ininterrumpido, seguro o libre de errores.",
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        body: [
          "En la máxima medida permitida por la ley, no seremos responsables de daños indirectos, incidentales o consecuentes derivados del uso o de la imposibilidad de uso de este sitio web.",
        ],
      },
      {
        heading: "Cambios en estos términos",
        body: [
          "Podemos actualizar estos Términos ocasionalmente. Los cambios materiales se reflejan en la fecha de «última actualización» indicada arriba, y el uso continuado del sitio constituye la aceptación de los Términos revisados.",
        ],
      },
      {
        heading: "Contacto",
        body: [
          "Si tienes preguntas sobre estos Términos, escríbenos a la dirección publicada en este sitio web.",
        ],
      },
    ],
  },
  privacy: {
    title: "Política de Privacidad",
    description: "Cómo recopilamos, usamos y protegemos tu información personal.",
    lastUpdated: "2026-10-04",
    intro:
      "Esta política de privacidad explica cómo recopilamos, usamos y protegemos tu información personal cuando visitas este sitio web. Es contenido genérico de plantilla: reemplázalo por una política que refleje tus prácticas reales de datos y la legislación aplicable.",
    sections: [
      {
        heading: "Información que recopilamos",
        body: [
          "Podemos recopilar la información que nos proporcionas directamente (como tu nombre y correo cuando nos contactas) y la que se recopila automáticamente (como tu dirección IP, tipo de navegador y páginas visitadas).",
        ],
      },
      {
        heading: "Cómo usamos tu información",
        body: [
          "Usamos la información que recopilamos para operar y mejorar el sitio web, responder a tus solicitudes y cumplir con obligaciones legales. No vendemos tu información personal.",
        ],
      },
      {
        heading: "Cookies y seguimiento",
        body: [
          "Este sitio web puede usar cookies y tecnologías similares para recordar tus preferencias y entender cómo se usa el sitio. Puedes controlar las cookies desde la configuración de tu navegador.",
        ],
      },
      {
        heading: "Compartir tu información",
        body: [
          "Compartimos información personal solo con proveedores de servicios que nos ayudan a operar el sitio, o cuando la ley lo exige. Dichos proveedores están obligados a tratar tus datos de forma segura.",
        ],
      },
      {
        heading: "Retención de datos",
        body: [
          "Conservamos la información personal solo durante el tiempo necesario para cumplir los fines descritos en esta política, salvo que la ley exija un periodo de retención mayor.",
        ],
      },
      {
        heading: "Tus derechos",
        body: [
          "Según dónde vivas, puedes tener derecho a acceder, corregir o eliminar tu información personal, o a oponerte a cierto tratamiento. Contáctanos para ejercer estos derechos.",
        ],
      },
      {
        heading: "Seguridad",
        body: [
          "Tomamos medidas técnicas y organizativas razonables para proteger tu información. Sin embargo, ningún método de transmisión o almacenamiento es completamente seguro y no podemos garantizar una seguridad absoluta.",
        ],
      },
      {
        heading: "Cambios en esta política",
        body: [
          "Podemos actualizar esta política ocasionalmente. La fecha de «última actualización» indicada arriba refleja la revisión más reciente.",
        ],
      },
    ],
  },
};
