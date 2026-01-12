import { useEffect, useRef } from "react";
import bg from "../assets/bg.png";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";

export default function ParallaxHero() {
  const bgRef = useRef(null);
  const hero1Ref = useRef(null);
  const hero2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      bgRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      hero1Ref.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      hero2Ref.current.style.transform = `translateY(${scrollY * 0.7}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <img ref={bgRef} src={bg} className="layer bg" alt="background" />
      <img ref={hero1Ref} src={hero1} className="layer hero-left" alt="hero" />
      <img ref={hero2Ref} src={hero2} className="layer hero-right" alt="boss" />

      <div className="hero-content">
        <h1>WHEN DUNGEONS ARISE</h1>
        <p>Un roguelike multijoueur asymétrique 1v1</p>
        <button>Découvrir le jeu</button>
      </div>
    </section>
  );
}
