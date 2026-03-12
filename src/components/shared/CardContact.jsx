import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CardContact({ title, data }) {
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
      tl.from(".contact-data-title", {
        x: -100,
      }).from(
        ".contact-card",
        {
          y: 50,
          stagger: 0.2,
        },
        ">",
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className="w-full">
      <h2 className="contact-data-title text-xl font-bold mb-8 text-content-title uppercase tracking-widest border-l-4 border-primary pl-4">
        {title}
      </h2>
      <div className="flex flex-col gap-4">
        {data.map((item, index) => {
          const content = (
            <>
              <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0" aria-hidden="true">
                {item.icon}
              </div>

              <div className="overflow-hidden">
                <p className="text-[10px] md:text-xs text-content-light uppercase font-bold break-words tracking-wider">
                  {item.title}
                </p>
                <p className="font-medium text-content-title truncate md:whitespace-normal">
                  {item.desc}
                </p>
              </div>
            </>
          );

          return (
            <div key={index} className="contact-card">
              {item.linkCta ? (
                <a
                  href={item.linkCta}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Contact me via ${item.title}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-dashed border-primary hover:border-solid hover:border-primary shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-dashed border-primary shadow-sm transition-all duration-300">
                  {content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
