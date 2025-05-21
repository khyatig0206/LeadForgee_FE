import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import BookCall from "@/components/BookCall";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const About = () => {
  return (
     <HelmetProvider>
  <Helmet>
        <title>About Us - Leadforgee Lead Generation Experts</title>
        <meta 
          name="description" 
          content="Learn about Leadforgee's experienced team and our proven approach to generating high-quality leads that drive measurable business growth."
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero section specific to about page */}
        <section className="pt-28 pb-1 md:pt-32 md:pb-1 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Leadforgee</h1>
              <p className="text-xl text-gray-600 mb-1">
                We're a team of lead generation experts passionate about helping businesses grow through effective, data-driven strategies.
              </p>
            </div>
          </div>
        </section>
        
        <AboutSection />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Targeted Leads</h3>
                <p className="text-gray-600">
                  We're committed to finding prospects who truly match your ideal customer profile, focusing on quality over quantity.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Measurable Growth</h3>
                <p className="text-gray-600">
                  Our strategies are designed to deliver clear, measurable results that directly impact your bottom line.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-primary text-4xl mb-4">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="text-xl font-bold mb-3">Long-term Partnerships</h3>
                <p className="text-gray-600">
                  We aim to become an extension of your team, committed to your success over the long term.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <ProcessSection />
        <ResultsSection />
        <BookCall />
      </main>
      
      <Footer />
    </HelmetProvider>
  );
};

export default About;
