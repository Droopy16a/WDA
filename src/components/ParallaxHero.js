import { useEffect, useRef } from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";

export default function ParallaxHero() {
  const hero1Ref = useRef(null);
  const hero2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      hero1Ref.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      hero2Ref.current.style.transform = `translateY(${scrollY * 0.7}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero">
      <img ref={hero1Ref} src={hero1} className="layer hero-left absolute left-0 bottom-0" alt="hero" />
      <img ref={hero2Ref} src={hero2} className="layer hero-right absolute right-0 bottom-0" alt="boss" />
    </div>
  );
}
