const CHURCH = {
  name: "El Shaddai Revival Church",
  address: "10555 Woodedge Dr, Houston, TX 77070",
  phone: "(832) 606-4785",
  email: "elshaddaichurch02@yahoo.com",
  serviceTimes: [
    { day: "Miércoles", time: "7:30pm" },
    { day: "Domingos", time: "10am" },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=10555+Woodedge+Dr+Houston+TX+77070",
  websiteUrl: "https://www.elshaddairevivalchurch.com/",
};

export default function HomePage() {
  return (
    <div className="stack">
      <section className="card">
        <h1>Bienvenido</h1>
        <p>
          Somos una iglesia una familia. Aquí encontrarás información relacionada a nuestra iglesia.
        </p>
      </section>

      <section className="card">
        <h2>Horarios de Servicio</h2>
        <ul className="list">
          {CHURCH.serviceTimes.map((s) => (
            <li key={s.day}>
              <strong>{s.day}:</strong> {s.time}
            </li>
          ))}
        </ul>
        <div className="row">
          <a className="btn" href={CHURCH.mapsUrl} target="_blank" rel="noreferrer">
            Cómo llegar
          </a>
          <a className="btnOutline" href="/watch">Ver predicaciones</a>
        </div>
      </section>

      <section className="card">
        <h2>Contacto</h2>
        <div className="list">
          <div><strong>Tel:</strong> <a href={`tel:${CHURCH.phone.replace(/[^\d+]/g, "")}`}>{CHURCH.phone}</a></div>
          <div><strong>Email:</strong> <a href={`mailto:${CHURCH.email}`}>{CHURCH.email}</a></div>
          <div><strong>Dirección:</strong> {CHURCH.address}</div>
        </div>
        <div className="row">
          <a className="btnOutline" href={CHURCH.websiteUrl} target="_blank" rel="noreferrer">
            Abrir sitio web
          </a>
        </div>
      </section>
    </div>
  );
}
"use client";

import { useLang } from "@/lib/useLang";
import { text } from "@/lib/i18n";

export default function HomePage() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <div className="stack">
      <section className="card">
        <h1>{t.home.welcomeTitle}</h1>
        <p>{t.home.welcomeBody}</p>
      </section>

      <section className="card">
        <h2>{t.home.serviceTimes}</h2>
        {/* service times unchanged */}
      </section>
    </div>
  );
}
