const platformLayers = [
  ["Workers", "SSR, API i logika aplikacji na brzegu sieci"],
  ["D1", "Relacyjne dane platformy z izolacją tenantów"],
  ["R2", "Prywatne multimedia, importy i eksporty"],
  ["Queues", "Odporne zadania asynchroniczne i integracje"],
] as const;

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="glow glow-left" />
        <div className="glow glow-right" />

        <nav className="nav" aria-label="Główna nawigacja">
          <a className="brand" href="/" aria-label="PearTree.pro — strona główna">
            <span className="brand-mark">P</span>
            <span>PearTree.pro</span>
          </a>
          <span className="status"><span className="status-dot" /> Cloudflare Foundation</span>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Platforma biznesów online</p>
          <h1>Jedna platforma.<br />Wiele branż.</h1>
          <p className="lead">
            PearTree łączy publikowanie, ogłoszenia, leady, CRM, sprzedaż i automatyzację
            w bezpiecznym środowisku multi-tenant.
          </p>
          <div className="actions">
            <a className="button button-primary" href="/api/health">Sprawdź stan platformy</a>
            <a className="button button-secondary" href="https://github.com/AndyGru89/PearTree" rel="noreferrer" target="_blank">Repozytorium</a>
          </div>
        </div>

        <div className="platform-grid" aria-label="Warstwy Cloudflare">
          {platformLayers.map(([name, description]) => (
            <article className="platform-card" key={name}>
              <span className="card-index">0{platformLayers.findIndex(([item]) => item === name) + 1}</span>
              <h2>{name}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
