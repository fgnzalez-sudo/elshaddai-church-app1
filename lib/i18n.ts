// lib/i18n.ts
export type Lang = "en" | "es";

export const text: Record<Lang, Record<string, string>> = {
  en: {
    welcome: "Welcome",
  },
  es: {
    welcome: "Bienvenido",
  },
};
