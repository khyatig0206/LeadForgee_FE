import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Leadforgee?</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to being your trusted partner in lead generation, focused on delivering quality prospects that convert into loyal customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg service-card">
            <div className="text-primary text-4xl mb-4">
              <i className="fas fa-fingerprint"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Custom Strategies</h3>
            <p className="text-gray-600">
              No cookie-cutter methods here! We craft strategies specific to your target audience, industry, and goals, ensuring every lead is a perfect match.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg service-card">
            <div className="text-primary text-4xl mb-4">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Proven Results</h3>
            <p className="text-gray-600">
              Our clients consistently see increased engagement, better conversions, and a stronger sales pipeline. We focus on delivering results that matter.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg service-card">
            <div className="text-primary text-4xl mb-4">
              <i className="fas fa-robot"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Advanced Tools</h3>
            <p className="text-gray-600">
              From AI-driven lead scoring to advanced outreach automation, we use cutting-edge tools to make your campaigns efficient and effective.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg service-card">
            <div className="text-primary text-4xl mb-4">
              <i className="fas fa-puzzle-piece"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Comprehensive Solutions</h3>
            <p className="text-gray-600">
              Whether it's cold outreach, content marketing, or nurturing warm leads, we offer a full range of services to drive success at every stage.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="#book-call">
            <Button className="gradient-bg text-white py-3 px-8 rounded-full font-semibold inline-block hover:shadow-lg transition-shadow">
              Want to see how we can fuel your business growth?
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
