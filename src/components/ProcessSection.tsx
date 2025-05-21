const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our systematic approach ensures consistently high-quality lead generation results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
            <h3 className="text-xl font-bold mb-4 mt-2">Discovery & Analysis</h3>
            <p className="text-gray-600">
              We start by understanding your business, target audience, and objectives to create a customized lead generation strategy.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">2</div>
            <h3 className="text-xl font-bold mb-4 mt-2">Strategy Development</h3>
            <p className="text-gray-600">
              Based on our analysis, we design a comprehensive lead generation plan tailored to your specific needs and goals.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">3</div>
            <h3 className="text-xl font-bold mb-4 mt-2">Implementation</h3>
            <p className="text-gray-600">
              We execute the strategy using our proven methods, technologies, and expertise to generate high-quality leads.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">4</div>
            <h3 className="text-xl font-bold mb-4 mt-2">Monitoring & Optimization</h3>
            <p className="text-gray-600">
              We continuously track performance, making data-driven adjustments to optimize your campaign's effectiveness.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">5</div>
            <h3 className="text-xl font-bold mb-4 mt-2">Reporting & Analysis</h3>
            <p className="text-gray-600">
              Regular, transparent reporting keeps you informed of your campaign's progress and the ROI it's generating.
            </p>
          </div>

          {/* Step 6 */}
          <div className="bg-white p-8 rounded-xl shadow-lg relative">
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">6</div>
            <h3 className="text-xl font-bold mb-4 mt-2">Refinement & Growth</h3>
            <p className="text-gray-600">
              We continuously refine our approach based on results, ensuring your lead generation efforts improve over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
