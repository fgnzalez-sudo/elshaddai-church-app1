"use client";

import { useLang } from "../lib/useLang";
import { text } from "../lib/i18n";
import "./globals.css";

function LangToggle() {
  const { lang, changeLang } = useLang();

  return (
    <div style={{ display: "flex", gap: 8 }}>
      <button onClick={() => changeLang("es")}>ES</button>
      <button onClick={() => changeLang("en")}>EN</button>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <html lang={lang}>
      <body>
        {/* HEADER (top of app) */}
        <header
          style={{
            padding: "12px 16px",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <strong>El Shaddai Revival Church</strong>

          {/* 👇 THIS is what “place <LangToggle /> inside the header” means */}
          <LangToggle />
        </header>

        {/* PAGE CONTENT */}
        <main style={{ padding: 16 }}>{children}</main>
      </body>
    </html>
  );
}
