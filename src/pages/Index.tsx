import React, { Suspense } from "react";

const Header = React.lazy(() => import("@/components/layout/Header").then(m => ({ default: m.Header })));
const Footer = React.lazy(() => import("@/components/layout/Footer").then(m => ({ default: m.Footer })));
const HeroSection = React.lazy(() => import("@/components/sections/HeroSection").then(m => ({ default: m.HeroSection })));
const ClientLogosSection = React.lazy(() => import("@/components/sections/ClientLogosSection").then(m => ({ default: m.ClientLogosSection })));
const ServicesSection = React.lazy(() => import("@/components/sections/ServicesSection").then(m => ({ default: m.ServicesSection })));
const ProjectsSection = React.lazy(() => import("@/components/sections/ProjectsSection").then(m => ({ default: m.ProjectsSection })));
const BusinessSolutionsSection = React.lazy(() => import("@/components/sections/BusinessSolutionsSection").then(m => ({ default: m.BusinessSolutionsSection })));
const AboutSection = React.lazy(() => import("@/components/sections/AboutSection").then(m => ({ default: m.AboutSection })));
const IndustriesSection = React.lazy(() => import("@/components/sections/IndustriesSection").then(m => ({ default: m.IndustriesSection })));
const CaseStudiesSection = React.lazy(() => import("@/components/sections/CaseStudiesSection").then(m => ({ default: m.CaseStudiesSection })));
const CTASection = React.lazy(() => import("@/components/sections/CTASection").then(m => ({ default: m.CTASection })));
const ContactSection = React.lazy(() => import("@/components/sections/ContactSection").then(m => ({ default: m.ContactSection })));
const MouseGlow = React.lazy(() => import("@/components/MouseGlow").then(m => ({ default: m.MouseGlow })));
const ModernScrollBackground = React.lazy(() => import("@/components/ModernScrollBackground").then(m => ({ default: m.ModernScrollBackground })));

// Loading fallback
const PageLoader = () => (
  <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-2 border-t-primary animate-spin" />
      </div>
      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-bold text-primary-foreground text-lg shadow-lg">
        T
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        {/* Single lightweight background — removed 6 redundant animated bg components */}
        <ModernScrollBackground />
        {/* Mouse glow only on desktop */}
        <div className="hidden md:block">
          <MouseGlow />
        </div>
        <Header />
        <main className="w-full">
          <HeroSection />
          <ClientLogosSection />
          <ServicesSection />
          <ProjectsSection />
          <BusinessSolutionsSection />
          <AboutSection />
          <IndustriesSection />
          <CaseStudiesSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Index;
