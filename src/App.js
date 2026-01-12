import React, { useState, useEffect } from 'react';
import { Sword, Users, Zap, Crown, Shield, Gamepad2, Code, Wifi } from 'lucide-react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxBg = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  const parallaxCharacters = {
    transform: `translateY(${scrollY * 0.3}px)`,
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Sword className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                When Dungeons Arise
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-400 transition">Accueil</a>
              <a href="#about" className="hover:text-purple-400 transition">À propos</a>
              <a href="#gameplay" className="hover:text-purple-400 transition">Gameplay</a>
              <a href="#features" className="hover:text-purple-400 transition">Fonctionnalités</a>
              <a href="#team" className="hover:text-purple-400 transition">Équipe</a>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-purple-500/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-purple-500/20 rounded">Accueil</a>
              <a href="#about" className="block px-3 py-2 hover:bg-purple-500/20 rounded">À propos</a>
              <a href="#gameplay" className="block px-3 py-2 hover:bg-purple-500/20 rounded">Gameplay</a>
              <a href="#features" className="block px-3 py-2 hover:bg-purple-500/20 rounded">Fonctionnalités</a>
              <a href="#team" className="block px-3 py-2 hover:bg-purple-500/20 rounded">Équipe</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section avec Parallaxe */}
      <section id="home" className="relative h-screen overflow-hidden">
        {/* Background Layer */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-gray-900"
          style={parallaxBg}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHpNMTIgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        {/* Characters Layer avec effet de profondeur */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={parallaxCharacters}
        >
          <div className="relative w-full max-w-6xl mx-auto px-4">
            {/* Placeholder pour vos personnages - ajustez selon vos images */}
            <div className="absolute left-10 top-1/4 w-64 h-96 bg-gradient-to-br from-purple-600/30 to-transparent rounded-lg backdrop-blur-sm flex items-center justify-center">
              <Shield className="w-32 h-32 text-purple-400 animate-pulse" />
              <span className="absolute bottom-4 text-sm font-bold">Héros</span>
            </div>
            
            <div className="absolute right-10 top-1/4 w-64 h-96 bg-gradient-to-bl from-red-600/30 to-transparent rounded-lg backdrop-blur-sm flex items-center justify-center">
              <Crown className="w-32 h-32 text-red-400 animate-pulse" />
              <span className="absolute bottom-4 text-sm font-bold">Boss</span>
            </div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="space-y-6 animate-fadeIn">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
              When Dungeons Arise
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Un roguelike multijoueur asymétrique où héros et boss s'affrontent dans des donjons générés
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold hover:scale-105 transition transform shadow-lg shadow-purple-500/50">
                Découvrir le jeu
              </button>
              <button className="px-8 py-3 bg-gray-800 border-2 border-purple-500 rounded-lg font-bold hover:bg-gray-700 transition">
                Voir la démo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Un Combat Asymétrique Unique
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-900/50 to-gray-900/50 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500 transition">
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="w-12 h-12 text-purple-400" />
                  <h3 className="text-2xl font-bold">Le Héros</h3>
                </div>
                <p className="text-gray-300">
                  Explorez des donjons mystérieux, combattez des ennemis contrôlés par l'IA, 
                  progressez de salle en salle et affrontez le Boss final dans un duel épique.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-bl from-red-900/50 to-gray-900/50 p-8 rounded-xl border border-red-500/30 hover:border-red-500 transition">
                <div className="flex items-center space-x-4 mb-4">
                  <Crown className="w-12 h-12 text-red-400" />
                  <h3 className="text-2xl font-bold">Le Boss</h3>
                </div>
                <p className="text-gray-300">
                  Observez la progression du Héros et influencez la partie en temps réel. 
                  Invoquez des ennemis et utilisez vos compétences stratégiquement pour vaincre votre adversaire.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chaque partie est une run indépendante. En cas de défaite, le Héros recommence 
              en conservant une partie de sa progression, encourageant l'apprentissage et la rejouabilité.
            </p>
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section id="gameplay" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Gameplay Innovant
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500 transition group">
              <div className="bg-purple-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Gamepad2 className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Combat Dynamique</h3>
              <p className="text-gray-400">
                Système de combat fluide avec attaques de base, compétences spéciales et gestion de mana stratégique.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500 transition group">
              <div className="bg-pink-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Zap className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">IA Autonome</h3>
              <p className="text-gray-400">
                Des ennemis intelligents qui patrouillent, détectent et poursuivent le héros automatiquement.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500 transition group">
              <div className="bg-red-600/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Users className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Duel Stratégique</h3>
              <p className="text-gray-400">
                Un affrontement humain vs humain où chaque décision compte dans ce roguelike compétitif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Fonctionnalités Techniques
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wifi, title: "Multijoueur en Ligne", desc: "Mode Versus 1v1 avec synchronisation en temps réel" },
              { icon: Code, title: "Python & Panda3D", desc: "Développé avec des technologies modernes et performantes" },
              { icon: Zap, title: "30 FPS Minimum", desc: "Performance optimisée pour une expérience fluide" },
              { icon: Shield, title: "Système de Progression", desc: "Débloquez des compétences et progressez entre les runs" },
              { icon: Crown, title: "Donjons Variés", desc: "Explorez différentes zones avec leurs propres défis" },
              { icon: Sword, title: "Compétences Uniques", desc: "Maîtrisez des sorts et capacités spéciales" }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500 transition hover:scale-105 transform">
                <feature.icon className="w-10 h-10 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            L'Équipe
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Gaëtan Cozien", role: "Chef de projet / Programmation" },
              { name: "Achille Girauldon", role: "Programmation" },
              { name: "Noé Vauges", role: "Direction artistique" },
              { name: "Paul Chalmandrier", role: "UI et menus" },
              { name: "Oscar Plisson", role: "Système de compétences" }
            ].map((member, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-900/30 to-gray-800 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-400">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Projet CDSF - 8 mois de développement - Version 3.0
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-purple-500/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sword className="w-6 h-6 text-purple-500" />
              <span className="font-bold">When Dungeons Arise</span>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© 2026 CDSF - Projet étudiant</p>
              <p className="mt-1">Développé avec Python & Panda3D</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
}