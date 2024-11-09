import en from "@/locales/en.json";
import ar from "@/locales/ar.json";
const messages = { en: { ...en }, ar: { ...ar } };
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages,
  fallbackLocale: "en",
}));