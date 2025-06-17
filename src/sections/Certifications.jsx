import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";
import "../css/Certifications.css";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "MERN Stack Development",
    provider: "Livewire Institute",
    date: "Dec 2023 – Mar 2024",
    certificateLink: "#", // Replace with actual URL
  },
  {
    title: "Full Stack Java Developer – TalentNext",
    provider: "Wipro",
    date: "May 2024 – Sep 2024",
    certificateLink: "#",
  },
  {
    title: "Machine Learning with Python",
    provider: "IBM PBL – Naan Mudhalvan",
    date: "July 2023",
    certificateLink: "#",
  },
  {
    title: "Git & GitHub Mastery",
    provider: "Udemy",
    date: "Jan 2024",
    certificateLink: "#",
  },
];

const Certifications = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current.children, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="certifications" className="tg-certifications-section py-20 bg-gray-50">
      <div className="tg-certifications-container container mx-auto px-6">
        <SectionTitle
          title="Certifications"
          subtitle="Courses & Credentials I’ve completed"
        />

        <div
          ref={cardRef}
          className="tg-certifications-grid grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="tg-cert-card bg-white border-l-4 border-indigo-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="tg-cert-title text-lg font-semibold text-indigo-700">
                {cert.title}
              </h3>
              <p className="tg-cert-provider text-gray-600 text-sm mt-1">
                {cert.provider}
              </p>
              <p className="tg-cert-date text-gray-400 text-sm italic">
                {cert.date}
              </p>
              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="tg-cert-link text-indigo-500 text-sm mt-2 inline-block hover:underline"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
