/**
 * * returns a formatted date string in the given BCP-47 locale (defaults to Spanish/Mexico).
 * @param date   date to format
 * @param locale BCP-47 tag (see `localeMeta(lang).intlLocale`)
 */
export function formatDate(date: string | number | Date, locale = "es-MX"): string {
  return new Date(date).toLocaleDateString(locale, {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
