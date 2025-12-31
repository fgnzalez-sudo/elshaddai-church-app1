export type Lang = "es" | "en";

export const text: Record<Lang, any> = {
  es: {
    nav: { home: "Inicio", watch: "Videos", events: "Eventos", give: "Donar", connect: "Conectar" },
    home: {
      welcomeTitle: "Bienvenido",
      welcomeBody: "Somos una iglesia una familia. Aquí encontrarás información relacionada a nuestra iglesia.",
      serviceTimes: "Horarios de Servicio",
      directions: "Cómo llegar",
      watch: "Ver predicaciones",
      contact: "Contacto",
    },
  },
  en: {
    nav: { home: "Home", watch: "Watch", events: "Events", give: "Give", connect: "Connect" },
    home: {
      welcomeTitle: "Welcome",
      welcomeBody: "We are a church family. Here you will find information about our church.",
      serviceTimes: "Service Times",
      directions: "Get Directions",
      watch: "Watch sermons",
      contact: "Contact",
    },
  },
};
