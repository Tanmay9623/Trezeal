import Hero from "./Hero.jsx";
import IntroSection from "./Intro.jsx";
import AboutSection from "./AboutSection.jsx";
import SkillsSection from "./SkillsSection.jsx";
import StudentSection from "./StudentSection.jsx";
import HighlightsSection from "./HighlightsSection.jsx";
import TrustSection from "./TrustSection.jsx";
import TestimonialsSection from "./TestimonialsSection.jsx";
import ProcessSection from "./ProcessSection.jsx";
import HomeDetailsSection from "./HomeDetailsSection.jsx";
import ProjectsCarousel from "./ProjectsCarousel.jsx";
import HomeFaqSection from "./HomeFaqSection.jsx";
import ContactSection from "./ContactSection.jsx";
import { image, photos } from "./data.js";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <AboutSection />
      <SkillsSection />
      <section
        className="image-band"
        style={{
          backgroundImage: `url("${image(photos.band, 2000)}")`,
        }}
      >
        <img
          src={image(photos.band, 2000)}
          alt="Contemporary glass-walled office workspace"
        />
        <div className="image-band-caption">
          <span>LEARN • BUILD • GROW</span>
          <strong>Your next step starts here.</strong>
        </div>
      </section>
      <StudentSection />
      <HighlightsSection />
      <TrustSection />
      <ProcessSection />
      <HomeDetailsSection />
      <ProjectsCarousel />
      <TestimonialsSection />
      <HomeFaqSection />
      <ContactSection />
    </>
  );
}
