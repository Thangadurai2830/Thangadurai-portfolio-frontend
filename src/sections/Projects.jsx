import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "../css/Project.css";

gsap.registerPlugin(ScrollTrigger);

// Project data
const projects = [
  {
    title: "Doctor Appointment System",
    description:
      "Book appointments, manage schedules, and communicate with doctors easily.",
    technologies: ["React", "Tailwind", "Django", "MySQL"],
    images: [
      "/assets/projects/doctor1.png",
      "/assets/projects/doctor2.png",
      "/assets/projects/doctor3.png",
    ],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "E-commerce Clothing Site",
    description:
      "Online clothing store with user login, cart, and admin dashboard.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    images: [
      "/assets/projects/ecom1.png",
      "/assets/projects/ecom2.png",
      "/assets/projects/ecom3.png",
    ],
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.from(cardsRef.current.children, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="projects" className="tg-project-section py-20 bg-gray-50">
      <div className="tg-project-container container mx-auto px-6">
        <SectionTitle title="Projects" subtitle="Some of My Work" />

        <div
          ref={cardsRef}
          className="tg-project-grid grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-12"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="tg-project-card bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-xl transition duration-300"
            >
              {/* Screenshot Gallery */}
              <div className="tg-project-images overflow-x-auto whitespace-nowrap scroll-smooth space-x-4 flex">
                {project.images.map((src, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={src}
                    alt={`${project.title} ${imgIndex + 1}`}
                    className="tg-project-image h-48 w-auto rounded-lg shadow-md inline-block object-cover"
                  />
                ))}
              </div>

              {/* Project Info */}
              <h3 className="tg-project-title text-xl font-semibold text-indigo-600 mt-4">
                {project.title}
              </h3>
              <p className="tg-project-desc text-gray-600 text-sm">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="tg-project-tech flex flex-wrap mt-2 gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="tg-project-badge bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="tg-project-links flex justify-between items-center mt-4 text-sm">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tg-project-live flex items-center gap-1 text-indigo-600 hover:underline"
                >
                  <FiExternalLink /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tg-project-github flex items-center gap-1 text-gray-600 hover:underline"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
