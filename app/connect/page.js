"use client";

import { useState } from "react";

export default function ConnectPage() {
  const CONTACT = {
    phone: "(832) 606-4785",
    email: "elshaddaichurch02@yahoo.com"
  };

  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const msg = String(fd.get("message") || "");
    const subject = encodeURIComponent("Prayer Request / Contact (App)");
    const body = encodeURIComponent(`Name: ${name}\n\nMessage:\n${msg}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="stack">
      <section className="card">
        <h1>Connect / Conectar</h1>
        <div className="row">
          <a className="btn" href={`tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`}>Call</a>
          <a className="btnOutline" href={`mailto:${CONTACT.email}`}>Email</a>
        </div>
      </section>

      <section className="card">
        <h2>Prayer Request / Oración</h2>
        <form onSubmit={submit} className="stack">
          <input name="name" placeholder="Name / Nombre" required />
          <textarea name="message" placeholder="How can we pray for you?" required rows={5}></textarea>
          <button className="btn" type="submit">Send</button>
          {sent ? <p style={{ color: "#9ca3af" }}>Your email app will open to send the message.</p> : null}
        </form>
      </section>
    </div>
  );
}
