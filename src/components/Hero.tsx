import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Unlock a Steady Flow of High-Quality Leads with <span className="text-primary">Leadforgee</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-6">
              Your Partner in Building Profitable Connections
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              At Leadforgee, we specialize in delivering tailored lead generation strategies that turn cold prospects into warm opportunities. Whether you're a startup, growing business, or established company, we help you maximize your reach and generate leads that drive measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book-call">
                <Button className="gradient-bg w-full sm:w-auto text-white py-6 px-8 rounded-full font-semibold text-center hover:shadow-lg transition-shadow">
                  Book a Call Now!
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary py-6 px-8 rounded-full font-semibold text-center hover:bg-primary hover:text-white transition-colors">
                  Our Services
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Lead generation dashboard" 
              className="rounded-xl shadow-2xl w-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
