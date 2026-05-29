import { Navigation } from "@/components/portfolio/navigation";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { WhatIDo } from "@/components/portfolio/what-i-do";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Achievements } from "@/components/portfolio/achievements";
import { Education } from "@/components/portfolio/education";
import { Learning } from "@/components/portfolio/learning";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Learning />
      <Contact />
      <Footer />
    </main>
  );
}
