const YOUTUBE_CHANNEL = "https://www.youtube.com/@el-shaddairevivalchurch";

export default function WatchPage() {
  return (
    <div className="stack">
      <section className="card">
        <h1>Videos</h1>
        <p>Mira las predicaciones y transmisiones en nuestro canal de YouTube.</p>
        <a className="btn" href={YOUTUBE_CHANNEL} target="_blank" rel="noreferrer">
          Abrir YouTube
        </a>
      </section>

      <section className="card">
        <h2>Consejo</h2>
        <p>
          Para la mejor experiencia tipo “app”, instala esta página en tu teléfono:
          <br />
          iPhone: compartir → “Agregar a pantalla de inicio”
          <br />
          Android: menú → “Instalar app”
        </p>
      </section>
    </div>
  );
}
