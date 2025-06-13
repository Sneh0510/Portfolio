import { Route, Routes } from "react-router-dom";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import CertificationMain from "./components/certificateSection/CertificationMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footer/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import ScrollToTop from "./components/ScrollToTop";

// Create HomePage component for your main page sections
function HomePage() {
  return (
    <>
      <HeroMain />
      <HeroGradient />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ContactMeMain />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <main className="relative overflow-hidden text-white font-body">
        <NavbarMain />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsMain />} />
          <Route path="/certificates" element={<CertificationMain />} />
        </Routes>
        <FooterMain />
      </main>
    </>
  );
}

export default App;
