import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/Education.css";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "B.Tech – Information Technology",
    institution: "Mahendra College of Engineering, Anna University",
    year: "2021 – 2025",
    score: "75% CGPA",
  },
  {
    degree: "HSC – Computer Science",
    institution: "ST.Joseph Matric Higher Secondary School",
    year: "2019 – 2021",
    score: "80%",
  },
  {
    degree: "SSLC",
    institution: "ST.DonBosco Matriculation School",
    year: "2018 – 2019",
    score: "60%",
  },
];

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".edu-card");

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div id="education" ref={sectionRef} className="section-edu">
      <h2 className="edu-title">Education</h2>

      <div className="edu-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="edu-card">
            <h3 className="edu-degree">{edu.degree}</h3>
            <p className="edu-institution">{edu.institution}</p>
            <p className="edu-year">{edu.year}</p>
            <p className="edu-score">Score: {edu.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
