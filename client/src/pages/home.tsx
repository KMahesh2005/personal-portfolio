import HeroSection from "@/components/hero-section";
import SkillsSection from "@/components/skills-section";
import ServicesSection from "@/components/services-section";
import ProjectsSection from "@/components/projects-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import TestimonialsSection from "@/components/testimonials-section";
import ChatBot from "@/components/testimonials";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="ChatBot">
        <ChatBot />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="Testimonials">
        <TestimonialsSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
