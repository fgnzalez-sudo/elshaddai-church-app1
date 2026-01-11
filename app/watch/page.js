export default function WatchPage() {
  const YT = "https://www.youtube.com/@el-shaddairevivalchurch";

  return (
    <div className="stack">
      <section className="card">
        <h1>Watch / Ver</h1>
        <p>Open the church YouTube channel for sermons and livestreams.</p>
        <a className="btn" href={YT} target="_blank" rel="noreferrer">Open YouTube</a>
      </section>
    </div>
  );
}
