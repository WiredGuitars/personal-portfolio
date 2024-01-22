import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import SectionDivider from "@/components/SectionDivider";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <Technologies />
      <ProjectSection />
      <About />
      <Contact />
    </main>
  );
}
