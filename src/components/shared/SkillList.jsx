
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";
import { useRef } from "react";

import { FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function SkillList({ title, data }) {

  const container = useRef();


  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { opacity: 0, duration: 0.6 }, scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      }
    });
    tl.from(".about-skills-title", {
      x: -20,
    })
      .from(".skill", {
        x: -20,
        stagger: 0.1
      }, ">")
  }, { scope: container });

  return (
    <div ref={container} className="flex-1 w-full">
      <h2
        className="about-skills-title text-xl font-bold mb-6 md:mb-8 text-content-title uppercase tracking-widest border-l-4 border-primary pl-4"
      >
        {title}
      </h2>

      <ul className="grid grid-cols-1 gap-y-4">
        {data.map((item, index) => (
          <li
            key={index}
            className="skill group flex items-center gap-3 text-content-title font-medium w-fit cursor-default"
          >
            <span className="text-primary transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0">
              <FaArrowRight size={16} className="md:size-[18px]" aria-hidden="true" />
            </span>

            <span className="relative py-1 text-sm md:text-base whitespace-nowrap">
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-500 group-hover:w-full"></span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
