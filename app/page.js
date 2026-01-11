export default function HomePage() {
  const CHURCH = {
    address: "10555 Woodedge Dr, Houston, TX 77070",
    serviceTimes: ["Wednesday 7:30 PM", "Sunday 10:00 AM"],
    website: "https://www.elshaddairevivalchurch.com/",
    maps: "https://www.google.com/maps/search/?api=1&query=10555+Woodedge+Dr+Houston+TX+77070"
  };

  return (
    <div className="stack">
      <section className="card">
        <h1>Welcome / Bienvenido</h1>
        <p>This is your church app. Install it on your phone and stay connected.</p>
      </section>

      <section className="card">
        <h2>Service Times</h2>
        <ul>
          {CHURCH.serviceTimes.map((x) => <li key={x}>{x}</li>)}
        </ul>
        <div className="row">
          <a className="btn" href={CHURCH.maps} target="_blank" rel="noreferrer">Directions</a>
          <a className="btnOutline" href={CHURCH.website} target="_blank" rel="noreferrer">Website</a>
        </div>
      </section>
    </div>
  );
}
