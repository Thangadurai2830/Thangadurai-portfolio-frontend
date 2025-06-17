import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SocialLinks = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const iconClass =
    "tg-social-icon text-2xl md:text-3xl text-gray-600 hover:text-indigo-600 transition-transform transform hover:scale-125";

  return (
    <div
      ref={containerRef}
      className="tg-social-links flex gap-6 justify-center items-center mt-6 md:mt-8 flex-wrap"
    >
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="tg-social-link"
      >
        <FaGithub className={iconClass} />
      </a>
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="tg-social-link"
      >
        <FaLinkedin className={iconClass} />
      </a>
      <a
        href="https://instagram.com/your-profile"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="tg-social-link"
      >
        <FaInstagram className={iconClass} />
      </a>
      <a
        href="mailto:your@email.com"
        aria-label="Email"
        className="tg-social-link"
      >
        <FaEnvelope className={iconClass} />
      </a>
    </div>
  );
};

export default SocialLinks;
