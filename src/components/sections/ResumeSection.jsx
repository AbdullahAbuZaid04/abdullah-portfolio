import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Education, Experience } from "../../constant/index";
import ResumeDetail from "../shared/ResumeDetail";
import SectionTitle from "../shared/SectionTitle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ResumeSection() {
  const resume = useRef(null);

  useGSAP(
    () => {
      gsap.from(".resume-title", {
        x: -100,
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: resume.current,
          start: "top 50%",
        },
      });
    },
    { scope: resume },
  );

  return (
    <section ref={resume} className="py-12 w-full bg-surface-alt" id="resume">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionTitle title="My Resume" className="resume-title" />

        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <ResumeDetail title="Education" data={Education} />
            <ResumeDetail title="Experience" data={Experience} />
          </div>
        </div>
      </div>
    </section>
  );
}
