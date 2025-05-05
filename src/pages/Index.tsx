
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ScreenplaysSection from "../components/ScreenplaysSection";
import CastingSection from "../components/CastingSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-hollywood-black text-white film-grain">
      <Navbar />
      <Hero />
      <div className="vignette">
        <Features />
        <ScreenplaysSection />
        <CastingSection />
        <BlogSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
