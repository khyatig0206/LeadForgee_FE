import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contact = () => {
  return (
     <HelmetProvider>
  <Helmet>
        <title>Contact Us - Leadforgee Lead Generation Services</title>
        <meta 
          name="description" 
          content="Get in touch with Leadforgee's lead generation experts. We're here to answer your questions and help you develop a custom lead generation strategy."
        />
      </Helmet>
      
      <Navbar />
      
      <main>
        
        <ContactSection />
        
        {/* Map Section */}
        {/* <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8131944090996!2d-122.41941482412677!3d37.77492831597767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter!5e0!3m2!1sen!2sus!4v1679947443873!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Leadforgee Office Location"
              ></iframe>
            </div>
          </div>
        </section> */}
      </main>
      
      <Footer />
    </HelmetProvider>
  );
};

export default Contact;
