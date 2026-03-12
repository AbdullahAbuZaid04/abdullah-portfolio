import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ResumeSection from "./components/sections/ResumeSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTop />
    </>
  );
}

export default App;
