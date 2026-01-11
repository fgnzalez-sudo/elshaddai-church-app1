"use client";

import "./globals.css";
import { useEffect, useState } from "react";

const TEXT = {
  es: {
    nav: { home: "Inicio", watch: "Videos", events: "Eventos", give: "Donar", connect: "Conectar" },
    title: "El Shaddai Revival Church",
    sub: "Houston, TX"
  },
  en: {
    nav: { home: "Home", watch: "Watch", events: "Events", give: "Give", connect: "Connect" },
    title: "El Shaddai Revival Church",
    sub: "Houston, TX"
  }
};

function useLang() {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  function changeLang(next) {
    localStorage.setItem("lang", next);
    setLang(next);
  }

  return { lang, changeLang };
}

export default function RootLayout({ children }) {
  const { lang, changeLang } = useLang();
  const t = TEXT[lang];

  return (
    <html lang={lang}>
      <body>
        <div className="shell">
          <header className="topbar">
            <div>
              <div className="brandTitle">{t.title}</div>
              <div className="brandSub">{t.sub}</div>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                className={"smallBtn " + (lang === "es" ? "smallBtnActive" : "")}
                onClick={() => changeLang("es")}
              >
                ES
              </button>
              <button
                className={"smallBtn " + (lang === "en" ? "smallBtnActive" : "")}
                onClick={() => changeLang("en")}
              >
                EN
              </button>
            </div>
          </header>

          <main className="content">{children}</main>

          <nav className="tabbar" aria-label="Primary">
            <a className="tab" href="/">{t.nav.home}</a>
            <a className="tab" href="/watch">{t.nav.watch}</a>
            <a className="tab" href="/events">{t.nav.events}</a>
            <a className="tab" href="/give">{t.nav.give}</a>
            <a className="tab" href="/connect">{t.nav.connect}</a>
          </nav>
        </div>
      </body>
    </html>
  );
}
