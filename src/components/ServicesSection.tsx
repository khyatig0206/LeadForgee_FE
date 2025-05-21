import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive lead generation solutions customized to meet your unique business needs and growth objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary rounded-lg p-4 text-white text-2xl">
              <i className="fas fa-search"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Cold Lead Generation</h3>
              <p className="text-gray-600 mb-4">
                We find and reach out to high-potential prospects, crafting compelling emails that spark interest and get responses.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Targeted prospect identification</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Personalized outreach campaigns</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Response optimization strategies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary rounded-lg p-4 text-white text-2xl">
              <i className="fas fa-file-alt"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Warm Lead Generation with Content</h3>
              <p className="text-gray-600 mb-4">
                By creating valuable, engaging content, we build trust and nurture leads, ensuring they're ready to convert.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>High-value content creation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Strategic distribution channels</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Lead nurturing sequences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary rounded-lg p-4 text-white text-2xl">
              <i className="fas fa-sync-alt"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Combined Approach</h3>
              <p className="text-gray-600 mb-4">
                Integrating cold outreach and warm content strategies, we deliver a seamless system that attracts, nurtures, and converts leads into loyal clients.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Multi-channel lead generation</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Integrated marketing campaigns</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Comprehensive conversion strategy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary rounded-lg p-4 text-white text-2xl">
              <i className="fas fa-cogs"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Outreach Automation</h3>
              <p className="text-gray-600 mb-4">
                Streamline and scale your lead generation efforts with our automated systems, saving you time while increasing efficiency.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Automated email sequences</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>CRM integration and setup</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-primary mt-1 mr-2"></i>
                  <span>Performance tracking and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-gray-700 mb-6">Ready for a smarter, more efficient lead generation strategy?</p>
          <Link href="#book-call">
            <Button className="gradient-bg text-white py-3 px-8 rounded-full font-semibold inline-block hover:shadow-lg transition-shadow">
              Book a Call Now!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
