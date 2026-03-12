import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../assets/abdullah.webp";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const hero = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero-image", { scale: 0.8, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".hero-text-title", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-text-subtitle", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-text-body", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
    },
    { scope: hero },
  );

  return (
    <section
      ref={hero}
      className="min-h-screen flex flex-col items-center bg-surface-alt px-6 py-12 lg:py-20"
      id="home"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Profile Image Container with explicit dimensions to prevent CLS */}
        <div className="hero-image relative w-64 h-64 lg:w-80 lg:h-80 bg-primary/10 rounded-full p-2 border-2 border-primary/20 shadow-2xl overflow-hidden group">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner relative">
            <img
              src={logo}
              alt="Abdullah AbuZaid"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="eager"
              fetchpriority="high"
              width="320"
              height="320"
            />
          </div>
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
        </div>

        <div className="hero-text flex flex-col items-center gap-4 mt-8 text-center max-w-3xl">
          <h1 id="hero-heading" className="hero-text-title text-4xl md:text-6xl font-bold text-content-title leading-[1.1] tracking-tight">
            Hi, I'm <span className="text-primary">Abdullah AbuZaid</span>
          </h1>
          <p className="hero-text-subtitle text-xl md:text-2xl font-semibold text-primary/90 tracking-wide">
            Computer Engineering Student | Front-End Developer (React)
          </p>
          <div className="hero-text-body space-y-4">
            <p className="text-content-body leading-relaxed max-w-lg md:max-w-2xl text-base md:text-,">
              Computer Engineering student with a strong interest in Frontend
              Development. I enjoy building responsive and user-friendly web
              interfaces using React and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
