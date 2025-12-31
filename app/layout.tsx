import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Shaddai Revival Church",
  description: "Iglesia Cristiana en Avivamiento | Houston, TX",
  applicationName: "El Shaddai Revival Church",
  themeColor: "#111827",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="appShell">
          <header className="topBar">
            <div className="brand">
              <div className="brandTitle">El Shaddai Revival Church</div>
              <div className="brandSub">Houston, TX</div>
            </div>
          </header>

          <main className="content">{children}</main>

          <nav className="tabBar" aria-label="Primary">
            <a className="tab" href="/">Inicio</a>
            <a className="tab" href="/watch">Videos</a>
            <a className="tab" href="/events">Eventos</a>
            <a className="tab" href="/give">Donar</a>
            <a className="tab" href="/connect">Conectar</a>
          </nav>
        </div>
      </body>
    </html>
  );
}
