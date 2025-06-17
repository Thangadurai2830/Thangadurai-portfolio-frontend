import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    title: "Smart India Hackathon Finalist",
    description: "Selected as a finalist in SIH 2024 for developing a healthcare solution.",
    date: "March 2024",
  },
  {
    title: "IBM PBL Bootcamp Completion",
    description: "Successfully completed project-based learning bootcamp under IBM & Naan Mudhalvan.",
    date: "August 2023",
  },
  {
    title: "Top Performer – Wipro TalentNext",
    description: "Recognized as a top performer in Wipro Java Full Stack training program.",
    date: "September 2024",
  },
  {
    title: "Final Year Project Selected for Journal",
    description: "Final year ML & DL healthcare system selected for paper publication.",
    date: "May 2025",
  },
];

const Achievements = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="achievements" className="tg-achievements-section py-20 bg-white">
      <div className="tg-achievements-container container mx-auto px-6">
        <SectionTitle
          title="Achievements"
          subtitle="Milestones in my learning journey"
        />

        <div
          ref={containerRef}
          className="tg-achievements-grid grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10"
        >
          {achievements.map((item, index) => (
            <div
              key={index}
              className="tg-achievement-card bg-indigo-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="tg-achievement-title text-xl font-semibold text-indigo-700">
                {item.title}
              </h3>
              <p className="tg-achievement-desc text-gray-600 mt-2">{item.description}</p>
              <p className="tg-achievement-date text-sm text-gray-400 mt-1 italic">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
