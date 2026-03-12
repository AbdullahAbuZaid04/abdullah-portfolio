import Dashboard from "../assets/Dashboard-With-Sidebar.webp";
import Estate from "../assets/Estate.webp";
import VastuSpaze from "../assets/VastuSpaze.webp";
import VirtualR from "../assets/VirtualR.webp";
import Ecommerce from "../assets/e-commerce.webp";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export const Links = [
  { label: "Home", link: "home" },
  { label: "About", link: "about" },
  { label: "Resume", link: "resume" },
  { label: "Projects", link: "projects" },
  { label: "Contact", link: "contact" },
];

export const Skills = [
  "React Development & Component Architecture",
  "Responsive Design with Tailwind CSS",
  "API Integration & State Management",
  "Performance Optimization & Clean UI Practices",
];

export const Technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Tailwind CSS",
  "Git & GitHub",
];

export const Education = [
  {
    title: "Frontend Developer",
    team: "Independent Learning",
    time: "2025 - Present",
  },
  {
    title: "Computer Engineering",
    team: "Islamic University of Gaza",
    time: "2021 - 2026",
  },
];

export const Experience = [
  {
    title: "Frontend Developer Trainee",
    team: "Taqat Gaza",
    time: "2025",
  },
  {
    title: "Practical Self-Projects",
    team: "Personal",
    time: "2025 - Present",
  },
];

export const Projects = [
  {
    title: "e-commerce UI",
    photo: Ecommerce,
    tech: ["React.js", "MUI"],
    desc: "Responsive e-commerce user interface with clean design and smooth user experience.",
    links: {
      github: "https://github.com/AbdullahAbuZaid04/e-commerce.git",
      web: "https://e-commerce-2026-nu.vercel.app",
    },
  },
  {
    title: "Dashboard-With-Sidebar",
    photo: Dashboard,
    tech: ["React.js", "Tailwind CSS"],
    desc: "Responsive dashboard interface with sidebar navigation built using React and Tailwind CSS.",
    links: {
      github: "https://github.com/AbdullahAbuZaid04/Dashboard-With-Sidebar.git",
      web: "https://dashboard-with-sidebar-2026.vercel.app",
    },
  },
  {
    title: "Estate",
    photo: Estate,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    desc: "Modern real estate landing page with smooth animations and responsive layout.",
    links: {
      github: "https://github.com/AbdullahAbuZaid04/Estate.git",
      web: "https://estate-2026.vercel.app",
    },
  },
  {
    title: "VastuSpaze",
    photo: VastuSpaze,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    desc: "Modern real estate landing page with smooth animations and responsive layout.",
    links: {
      github: "https://github.com/AbdullahAbuZaid04/VastuSpaze.git",
      web: "https://vastuspaze-2026.vercel.app",
    },
  },
  {
    title: "VirtualR",
    photo: VirtualR,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    desc: "SaaS landing page design focused on modern UI and smooth user experience.",
    links: {
      github: "https://github.com/AbdullahAbuZaid04/VirtualR.git",
      web: "https://virtual-r-2026.vercel.app",
    },
  },
];

export const Contact = [
  {
    icon: <MdEmail size={20} />,
    title: "Email",
    desc: "abdullahabuzaid2004@gmail.com",
  },
  { icon: <FaPhoneAlt size={20} />, title: "Phone", desc: "+970 594 587 941" },
  {
    icon: <IoLocationSharp size={20} />,
    title: "Location",
    desc: "Gaza, Palestine",
  },
];

export const ContactCta = [
  {
    icon: <MdEmail size={20} />,
    title: "Email",
    linkCta: "mailto:abdullahabuzaid2004@gmail.com",
    color: "bg-primary text-white shadow-primary/20",
  },
  {
    icon: <FaWhatsapp size={20} />,
    title: "WhatsApp",
    linkCta: "https://wa.me/970594587941",
    color: "bg-green-500 text-white shadow-green-200",
  },
  {
    icon: <FaLinkedin size={20} />,
    title: "Linkedin",
    linkCta: "https://linkedin.com/in/abdullah-mohammed-abuzaid",
    color: "bg-[#0077b5] text-white shadow-blue-200",
  },
];
