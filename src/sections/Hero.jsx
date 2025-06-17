import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialLinks from "../components/SocialLinks";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <section id="home" className="tg-hero-section bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-32">
      <div className="tg-hero-container container mx-auto px-6 text-center" ref={heroRef}>
        <h1 className="tg-hero-title text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-yellow-300">Thangadurai</span>
        </h1>
        <p className="tg-hero-subtitle mt-4 text-lg md:text-xl text-white/90">
          Full Stack Developer | MERN & Java | AI Enthusiast
        </p>
        <div className="tg-hero-social mt-8">
          <SocialLinks />
        </div>
        <a
          href="#contact"
          className="tg-hero-btn inline-block mt-10 bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
