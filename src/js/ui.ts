/**
 * * Chrome UI dictionary — the shared, cross-page strings (header, footer, theme toggle, language
 * switcher, 404). Section-specific copy lives in a `copy` object at the top of its own component so
 * it stays next to the markup it labels (see the house rule in AGENTS.md).
 *
 * `useTranslations(lang)` returns a `t()` bound to a locale; unknown keys fall back to the default
 * locale so a missing translation never ships an empty string.
 */
import { defaultLang, type Lang } from "./i18n";

export const ui = {
  es: {
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "header.home": "inicio",
    "header.menu": "Menú",
    "header.close": "Cerrar",
    "header.primary": "Navegación principal",
    "lang.switch": "Cambiar idioma",
    "theme.toggle": "Cambiar tema",
    "theme.light": "Modo claro",
    "theme.dark": "Modo oscuro",
    "footer.close": "Fin del juego",
    "footer.rss": "Feed RSS",
    "footer.email": "Correo",
    "footer.legal": "Legal",
    "legal.privacy": "Privacidad",
    "legal.terms": "Términos",
    "404.title": "Nivel no encontrado",
    "404.eyebrow": "Error 404",
    "404.body": "La zona a la que intentas acceder no existe o fue movida a otro reino.",
    "404.home": "Volver al inicio",
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "header.home": "home",
    "header.menu": "Menu",
    "header.close": "Close",
    "header.primary": "Primary",
    "lang.switch": "Switch language",
    "theme.toggle": "Toggle theme",
    "theme.light": "Light mode",
    "theme.dark": "Dark mode",
    "footer.close": "Game Over",
    "footer.rss": "RSS feed",
    "footer.email": "Email",
    "footer.legal": "Legal",
    "legal.privacy": "Privacy",
    "legal.terms": "Terms",
    "404.title": "Level not found",
    "404.eyebrow": "Error 404",
    "404.body": "The zone you are trying to reach does not exist or was moved to another realm.",
    "404.home": "Back to home",
  },
} as const;

export type UIKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
