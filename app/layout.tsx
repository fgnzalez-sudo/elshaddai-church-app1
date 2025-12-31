import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Shaddai Revival Church",
  description: "Iglesia Cristiana en Avivamiento | Houston, TX",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
