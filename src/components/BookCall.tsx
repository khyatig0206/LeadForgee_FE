import { useEffect, useState } from "react";

const BookCall = () => {
  const calendlyUrl = "https://calendly.com/leadforgee/onboarding";
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  useEffect(() => {
    const addCalendlyStyles = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    };

    const addCalendlyScript = () => {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.onload = () => setIsCalendlyReady(true);
      script.async = true;
      document.body.appendChild(script);
    };

    if (
      !document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      )
    ) {
      addCalendlyStyles();
      addCalendlyScript();
    } else {
      setIsCalendlyReady(true);
    }
  }, []);

  return (
    <section id="book-call" className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Schedule a free consultation with our lead generation experts to
            discuss your business needs and discover how we can help you grow.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-8 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Book a Call
            </h3>
            <p className="text-gray-600 mb-6">
              Choose a convenient time for a 30-minute strategy call with one
              of our lead generation experts.
            </p>

            {/* Calendly Inline Embed */}
            <div className="w-full h-[700px] bg-white rounded-lg overflow-hidden border border-gray-200">
              {isCalendlyReady ? (
                <div
                  className=" calendly-inline-widget w-full h-full"
                  data-url={calendlyUrl}
                  style={{ minWidth: "320px", height: "100%" }}
                ></div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500">Loading calendar...</p>
                </div>
              )}
            </div>

            <p className="text-gray-500 text-sm mt-4">
              By scheduling a call, you agree to our privacy policy and terms of
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
