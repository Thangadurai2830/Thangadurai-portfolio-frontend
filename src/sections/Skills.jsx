import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";
import "../css/Skills.css";
import "../assets/html.png"
gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML", icon: "/assets/html.png" },
  { name: "CSS", icon: "/assets/skills/css.png" },
  { name: "JavaScript", icon: "/assets/skills/javascript.png" },
  { name: "React", icon: "/assets/skills/react.png" },
  { name: "Node.js", icon: "/assets/skills/node.png" },
  { name: "Express.js", icon: "/assets/skills/express.png" },
  { name: "MongoDB", icon: "/assets/skills/mongodb.png" },
  { name: "Tailwind CSS", icon: "/assets/skills/tailwind.png" },
  { name: "GSAP", icon: "/assets/skills/gsap.png" },
  { name: "Django", icon: "/assets/skills/django.png" },
  { name: "Flask", icon: "/assets/skills/flask.png" },
  { name: "MySQL", icon: "/assets/skills/mysql.png" },
  { name: "Git & GitHub", icon: "/assets/skills/git.png" },
  { name: "Python", icon: "/assets/skills/python.png" },
  { name: "Bootstrap", icon: "/assets/skills/bootstrap.png" },
  { name: "Postman", icon: "/assets/skills/postman.png" },
  { name: "Java", icon: "/assets/skills/Java.png" },
  
  

  

];

const Skills = () => {
  const skillGridRef = useRef(null);

  useEffect(() => {
    gsap.from(skillGridRef.current.children, {
      opacity: 0,
      scale: 0.9,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: skillGridRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="skills" className="tg-skills-section py-20 bg-white">
      <div className="tg-skills-container container mx-auto px-6">
        <SectionTitle title="Skills" subtitle="Technologies I Work With" />

        <div
          ref={skillGridRef}
          className="tg-skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-10 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="tg-skills-card flex flex-col items-center gap-3 bg-gray-50 p-4 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="tg-skills-icon w-12 h-12 object-contain"
              />
              <p className="tg-skills-label text-sm font-medium text-gray-700 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
