import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Skills, Technologies } from "../../constant/index";
import SkillList from "../shared/SkillList";
import SectionTitle from "../shared/SectionTitle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutSection() {
  const about = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, duration: 1 },
        scrollTrigger: {
          trigger: about.current,
          start: "top 80%",
        },
      });

      tl.from(".about-title", {
        x: -100,
      }).from(
        ".about-body",
        {
          y: -50,
        },
        ">",
      );
    },
    { scope: about },
  );

  return (
    <section
      ref={about}
      className="about py-12 max-w-6xl mx-auto px-6 md:px-10"
      id="about"
    >
      <div>
        <SectionTitle title="About Me" className="about-title" />

        <p className="about-body text-content-body text-base md:text-lg leading-relaxed text-justify md:text-left max-w-prose md:max-w-3xl antialiased">
          I’m a Computer Engineering student passionate about Frontend
          Development and building modern web experiences. I focus on creating
          responsive, clean, and user-friendly interfaces using React and modern
          CSS tools like Tailwind. Through personal projects and continuous
          learning, I’m strengthening my knowledge in JavaScript, component
          architecture, and performance optimization while building practical
          applications.
        </p>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <SkillList title="Skills" data={Skills} />
          <SkillList title="Technologies" data={Technologies} />
        </div>
      </div>
    </section>
  );
}
