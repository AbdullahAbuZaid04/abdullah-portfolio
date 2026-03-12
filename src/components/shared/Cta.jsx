import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Cta({ title, data }) {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { opacity: 0, duration: 1 },
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });
      tl.from(".cta-title", {
        x: -100,
      }).from(
        ".cta-card",
        {
          y: 50,
          stagger: 0.1,
        },
        ">",
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className="flex flex-col gap-4 md:gap-6">
      <h2 className="cta-title text-xl font-bold mb-4 md:mb-8 text-content-title uppercase tracking-widest border-l-4 border-primary pl-4">
        {title}
      </h2>

      <div className="flex flex-wrap gap-4">
        {data.map((item, index) => (
          <div key={index} className="cta-card">
            <a
              href={item.linkCta}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
              aria-label={`Contact me via ${item.title}`}
              className={`p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 flex items-center justify-center ${item.color}`}
            >
              <div className="text-current" aria-hidden="true">{item.icon}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
