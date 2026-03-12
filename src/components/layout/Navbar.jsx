import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Links } from "../../constant/index";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Navbar() {
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);

  useGSAP(
    () => {
      gsap.from(
        ".items",
        {
          opacity: 0,
          x: -100,
          duration: 1,
          stagger: 0.2,
        },
        { dependencies: { show } },
      );
    },
    { dependencies: { show } },
  );

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 sticky top-0 left-0 right-0 bg-surface/70 backdrop-blur-md z-50 border-b border-gray-100">
      <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-teal-400 bg-clip-text text-transparent">
        Abdullah
      </h1>

      <button
        className="md:hidden p-2 text-content-body text-xl focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
        aria-label={show ? "Close menu" : "Open menu"}
        aria-expanded={show}
        aria-controls="mobile-menu"
        onClick={() => setShow(!show)}
      >
        {show ? <IoMdClose aria-hidden="true" /> : <IoMenu aria-hidden="true" />}
      </button>

      <ul
        id="mobile-menu"
        className={`list-items ${
          show
            ? " flex flex-col absolute top-full left-0 w-full bg-surface p-6 gap-6 shadow-xl border-t"
            : "hidden"
        } md:static md:flex md:flex-row md:bg-transparent md:p-0 md:gap-8 md:shadow-none transition-all duration-300`}
      >
        {Links.map((oneLink, index) => (
          <li
            key={index}
            className="items"
          >
            <a
              href={`#${oneLink.link}`}
              onClick={() => {
                setActive(index);
                setShow(false);
              }}
              aria-current={active === index ? "page" : undefined}
              className={`relative pb-1 text-sm md:text-base font-medium transition-all duration-300 ${
                active === index
                  ? "text-primary"
                  : "text-content-body hover:text-primary"
              } after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                active === index
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
            >
              {oneLink.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
