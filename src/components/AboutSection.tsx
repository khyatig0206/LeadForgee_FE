import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Leadforgee team" 
              className="rounded-xl shadow-xl w-full" 
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Leadforgee</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 mb-4 text-lg">
            I'm Prakhyat, the founder of Leadforgee. We specialize in helping businesses and marketing agencies streamline their outreach and connect with the right people—be it potential clients, strategic partners, or collaborators.
          </p>
          <p className="text-gray-600 mb-6 text-lg">
            At Leadforgee, our mission is to simplify and supercharge B2B lead generation through personalized, data-driven strategies. From cold email outreach to creating content that drives engagement, every solution is tailored to the unique needs of each business we partner with. 
          </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-primary text-xl mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold">Experienced Team</h4>
                  <p className="text-gray-600 text-sm">15+ years combined experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-primary text-xl mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold">Customized Approach</h4>
                  <p className="text-gray-600 text-sm">Tailored to your business needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-primary text-xl mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold">Continuous Innovation</h4>
                  <p className="text-gray-600 text-sm">Always evolving our methods</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-primary text-xl mr-3 mt-1"></i>
                <div>
                  <h4 className="font-semibold">Results Focused</h4>
                  <p className="text-gray-600 text-sm">Committed to your success</p>
                </div>
              </div>
            </div>
            <Link href="/contact">
              <Button className="gradient-bg text-white py-3 px-8 rounded-full font-semibold inline-block hover:shadow-lg transition-shadow">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
