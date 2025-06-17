import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="about" className="tg-about-section py-20 bg-gray-100">
      <div className="tg-about-container container mx-auto px-6">
        <SectionTitle title="About Me" subtitle="Who I am and what I do" />

        <div
          ref={aboutRef}
          className="tg-about-content flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto mt-10"
        >
          {/* Profile Image */}
          <div className="tg-about-image w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
            <img
              src="/assets/profile.jpg"
              alt="Thangadurai Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Text */}
          <div className="tg-about-text text-center md:text-left space-y-4 md:space-y-6">
            <h3 className="tg-about-heading text-xl md:text-2xl font-semibold text-gray-800">
              I'm Thangadurai
            </h3>
            <p className="tg-about-para text-gray-600 text-base leading-relaxed">
              A passionate Full Stack Developer specializing in{" "}
              <span className="font-medium text-indigo-600">MERN stack</span> and{" "}
              <span className="font-medium text-indigo-600">Python Django</span>. I build responsive web applications
              with modern UI/UX and smooth animations using{" "}
              <span className="font-medium text-indigo-600">GSAP</span>,{" "}
              <span className="font-medium text-indigo-600">Tailwind</span>, and{" "}
              <span className="font-medium text-indigo-600">React</span>.
            </p>
            <p className="tg-about-extra text-gray-600">
              Skilled in deploying cloud-ready apps, implementing REST APIs, and
              integrating ML/DL models with web apps. I'm always eager to learn
              and build something impactful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
