const EVENTS_URL = "https://www.elshaddairevivalchurch.com/events";

export default function EventsPage() {
  return (
    <div className="stack">
      <section className="card">
        <h1>Eventos</h1>
        <p>Consulta los próximos eventos en el sitio web.</p>
        <a className="btn" href={EVENTS_URL} target="_blank" rel="noreferrer">
          Ver eventos
        </a>
      </section>
    </div>
  );
}
