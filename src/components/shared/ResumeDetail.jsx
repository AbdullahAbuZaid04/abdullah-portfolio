import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { gsap } from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ResumeDetail({ title, data }) {

  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
      }
    });

    tl.fromTo(
      ".resume-detail-title",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
      }
    ).fromTo(
      ".resume-card",
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.1,
        stagger: 0.2,
      },
      "-=0.2"
    );
  }, { scope: container });

  return (
    <div ref={container} className="flex-1 w-full">
      <h2 className="resume-detail-title text-xl font-bold mb-6 md:mb-8 text-content-title uppercase tracking-widest border-l-4 border-primary pl-4">
        {title}
      </h2>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="resume-card flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-dashed border-primary/40 hover:border-solid hover:border-primary hover:shadow-md transition-all duration-300 group"
          >
            <div className="resume-card-text flex flex-col gap-1">
              <p className="text-content-title font-bold group-hover:text-primary transition-colors">
                {item.title}
              </p>
              <p className="text-content-body text-sm italic">{item.team}</p>
            </div>

            <span className="flex-shrink-0 w-fit text-[10px] md:text-xs font-bold text-primary bg-primary/5 border border-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}