"use client";

import { useState } from "react";

const CONTACT = {
  phone: "(832) 606-4785",
  email: "elshaddaichurch02@yahoo.com",
};

export default function ConnectPage() {
  const [sent, setSent] = useState(false);

  // Simple “mailto” fallback so you don’t need a backend yet.
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const msg = String(fd.get("message") || "");
    const subject = encodeURIComponent("Prayer Request / Contacto (App)");
    const body = encodeURIComponent(`Nombre: ${name}\n\nMensaje:\n${msg}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="stack">
      <section className="card">
        <h1>Conectar</h1>
        <div className="row">
          <a className="btn" href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}>
            Llamar
          </a>
          <a className="btnOutline" href={`mailto:${CONTACT.email}`}>Email</a>
        </div>
      </section>

      <section className="card">
        <h2>Petición de oración</h2>
        <form onSubmit={submit} className="form">
          <label>
            Tu nombre
            <input name="name" placeholder="Nombre" required />
          </label>
          <label>
            Mensaje
            <textarea name="message" placeholder="¿Cómo podemos orar por ti?" required />
          </label>
          <button className="btn" type="submit">Enviar</button>
          {sent && <p className="muted">Se abrirá tu correo para enviar el mensaje.</p>}
        </form>
      </section>
    </div>
  );
}
