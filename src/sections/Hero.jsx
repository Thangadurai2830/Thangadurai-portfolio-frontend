import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SocialLinks from "../components/SocialLinks";
import "../css/Hero.css";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-header", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-tagline", {
        y: 40,
        opacity: 0,
        delay: 0.4,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".cta-button", {
        scale: 0.9,
        opacity: 0,
        delay: 0.7,
        duration: 0.8,
        ease: "back.out(1.7)",
      });

      gsap.from(".social-icons", {
        y: 30,
        opacity: 0,
        delay: 1,
        duration: 1,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="hero-wrapper">
      <div className="hero-content">
        <h1 className="hero-header">
          Hello, I'm <span className="name-highlight">Thangadurai</span>
        </h1>
        <p className="hero-tagline">
          Full Stack Developer | MERN & Java & Python | Freelancer
        </p>
        <div className="social-icons">
          <SocialLinks />
        </div>
        <a href="#contact" className="cta-button">
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
