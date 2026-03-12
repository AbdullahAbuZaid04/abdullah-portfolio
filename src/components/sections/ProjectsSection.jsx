import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Projects } from "../../constant/index";
import CardProjects from "../shared/CardProjects";
import SectionTitle from "../shared/SectionTitle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectsSection() {
  const projects = useRef(null);

  useGSAP(
    () => {
      gsap.from(".project-title", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: projects.current,
          start: "top 50%",
        },
      });

      gsap.from(".project-cards", {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
          trigger: projects.current,
          start: "top 30%",
        },
      });
    },
    { scope: projects },
  );

  return (
    <section
      ref={projects}
      className="py-12 max-w-6xl mx-auto px-6 md:px-10"
      id="projects"
    >
      <SectionTitle title="Recent Projects" className="project-title" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Projects.map((project) => (
          <div key={project.title} className="project-cards">
            <CardProjects
              title={project.title}
              photo={project.photo}
              tech={project.tech}
              links={project.links}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
