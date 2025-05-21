import { useEffect } from "react";
import { useLocation } from "wouter"; // ✅ Wouter import

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import BookCall from "@/components/BookCall";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  const [location] = useLocation();

  useEffect(() => {
    // ✅ If the URL ends with #book-call, scroll to it
    if (location.includes("#book-call")) {
      const el = document.getElementById("book-call");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Leadforgee - Unlock a Steady Flow of High-Quality Leads</title>
        <meta
          name="description"
          content="Leadforgee specializes in delivering tailored lead generation strategies that turn cold prospects into warm opportunities for startups and established businesses."
        />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <WhyChooseUs />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <TestimonialSlider />
        <BookCall />
      </main>

      <Footer />
    </HelmetProvider>
  );
};

export default Home;
