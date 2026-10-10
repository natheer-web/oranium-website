import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CeoProfile from "@/components/CeoProfile";
import TechStack from "@/components/TechStack";
import CaseStudies from "@/components/CaseStudies";
import Terminal from "@/components/Terminal";
import OsintScanner from "@/components/OsintScanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen relative overflow-hidden">
      <Navbar />

      <Hero />
      
      <div id="ceo-profile">
        <CeoProfile />
      </div>
      
      <div id="tech-stack">
        <TechStack />
      </div>
      
      <div id="case-studies">
        <CaseStudies />
      </div>
      
      <div id="terminal">
        <Terminal />
      </div>
      
      <OsintScanner />
      
      <div id="contact">
        <Footer />
      </div>
    </main>
  );
}