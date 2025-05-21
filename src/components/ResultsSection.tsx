import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const ResultsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Results That Speak For Themselves</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our clients experience significant improvements in their lead generation metrics after partnering with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-primary text-5xl font-bold mb-4">68%</div>
            <h3 className="text-xl font-semibold mb-3">Increase in Qualified Leads</h3>
            <p className="text-gray-600">
              Our clients typically see a dramatic increase in the quality of leads generated through our targeted strategies.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-primary text-5xl font-bold mb-4">42%</div>
            <h3 className="text-xl font-semibold mb-3">Higher Conversion Rate</h3>
            <p className="text-gray-600">
              Our warm lead nurturing processes result in significantly improved conversion rates from lead to customer.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="text-primary text-5xl font-bold mb-4">3.2x</div>
            <h3 className="text-xl font-semibold mb-3">ROI on Marketing Spend</h3>
            <p className="text-gray-600">
              Clients typically experience a substantial return on their investment when working with Leadforgee.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact">
            <Button className="gradient-bg text-white py-3 px-8 rounded-full font-semibold inline-block hover:shadow-lg transition-shadow">
              Let's Achieve These Results Together
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
