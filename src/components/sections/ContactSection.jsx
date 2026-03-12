import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Contact, ContactCta } from "../../constant/index";
import CardContact from "../shared/CardContact";
import Cta from "../shared/Cta";
import SectionTitle from "../shared/SectionTitle";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactSection() {
  const contact = useRef(null);

  useGSAP(
    () => {
      gsap.from(".contact-title", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contact.current,
          start: "top 60%",
        },
      });
    },
    { scope: contact },
  );

  return (
    <section ref={contact} className="py-12 w-full bg-surface-alt" id="contact">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionTitle title="Contact" className="contact-title" />

        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <CardContact title="Information" data={Contact} />
            <Cta title="Get In Touch" data={ContactCta} />
          </div>
        </div>
      </div>
    </section>
  );
}
