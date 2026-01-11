export default function EventsPage() {
  const EVENTS = "https://www.elshaddairevivalchurch.com/events";

  return (
    <div className="stack">
      <section className="card">
        <h1>Events / Eventos</h1>
        <p>See upcoming events on the website.</p>
        <a className="btn" href={EVENTS} target="_blank" rel="noreferrer">View Events</a>
      </section>
    </div>
  );
}
