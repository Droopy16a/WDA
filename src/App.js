import ParallaxHero from "./components/ParallaxHero";

export default function App() {
  return (
    <>
      <ParallaxHero />

      <section className="section">
        <h2>À propos du jeu</h2>
        <p>
          When Dungeons Arise est un roguelike multijoueur asymétrique.
          Un joueur incarne le Héros, l’autre le Boss, qui contrôle les ennemis
          et influence la partie en temps réel.
        </p>
      </section>

      <section className="section dark">
        <h2>Fonctionnalités</h2>
        <ul className="features">
          <li>⚔️ Duel Héros vs Boss en 1v1</li>
          <li>🧠 Ennemis contrôlés par IA</li>
          <li>🌀 Donjons procéduraux</li>
          <li>🔥 Système de compétences</li>
          <li>🌐 Multijoueur réseau</li>
        </ul>
      </section>

      <footer>
        <p>© 2026 – When Dungeons Arise</p>
      </footer>
    </>
  );
}
