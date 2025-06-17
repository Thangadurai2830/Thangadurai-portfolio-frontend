import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";
import profileImage from "../assets/profile.jpg"; // ✅ Ensure this path is correct
import "../css/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img-wrapper", {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".about-description", {
        x: 120,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section-about">
      <div className="container-about" ref={aboutRef}>
        <SectionTitle title="About Me" subtitle="Who I am and what I do" />

        <div className="content-about">
          {/* Profile Image */}
          <div className="about-img-wrapper">
            <img
              src={profileImage}
              alt="Thangadurai"
              className="about-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/240x240?text=No+Image";
              }}
            />
          </div>

          {/* Text Content */}
          <div className="about-description">
            <h3 className="about-title">I'm Thangadurai</h3>
            <p className="about-intro">
              A creative Full Stack Developer with expertise in{" "}
              <span className="highlight-text">MERN Stack</span> and{" "}
              <span className="highlight-text">Python Django</span>. I craft
              dynamic websites with beautiful UIs and smooth GSAP animations,
              using <span className="highlight-text">React</span>,{" "}
              <span className="highlight-text">Tailwind</span> and more.
            </p>
            <p className="about-extra">
              I’m passionate about building intelligent systems, integrating
              <span className="highlight-text"> ML/DL models</span>, and
              deploying full-fledged applications that solve real-world
              problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
