import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionTitle = ({ title, subtitle }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div ref={titleRef} className="tg-section-title text-center mb-10 px-4">
      <h2 className="tg-section-heading text-3xl md:text-4xl font-bold text-indigo-600 uppercase tracking-wider">
        {title}
      </h2>
      {subtitle && (
        <p className="tg-section-subtitle mt-2 text-gray-500 text-sm md:text-base">
          {subtitle}
        </p>
      )}
      <div className="tg-section-underline mt-2 w-16 h-1 mx-auto bg-indigo-600 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
