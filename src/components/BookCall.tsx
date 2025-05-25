import { useEffect, useState } from "react";

const BookCall = () => {
  const calendlyUrl = "https://calendly.com/leadforgee/onboarding";
  const [isCalendlyReady, setIsCalendlyReady] = useState(false);

  useEffect(() => {
    const calendlyScriptUrl = "https://assets.calendly.com/assets/external/widget.js";
    const calendlyCssUrl = "https://assets.calendly.com/assets/external/widget.css";

    const addCalendlyScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = calendlyScriptUrl;
        script.async = true;
        script.onload = resolve;
        document.body.appendChild(script);
      });
    };

    const addCalendlyStyles = () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = calendlyCssUrl;
      document.head.appendChild(link);
    };

    const loadCalendly = async () => {
      // Add Calendly assets if not already present
      if (!document.querySelector(`script[src="${calendlyScriptUrl}"]`)) {
        addCalendlyStyles();
        await addCalendlyScript();
      }

      // Initialize the Calendly widget
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: document.getElementById("calendly-container"),
          prefill: {},
          utm: {}
        });
        setIsCalendlyReady(true);
      }
    };

    loadCalendly();
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

            <div className="w-full h-[700px] bg-white rounded-lg overflow-hidden border border-gray-200">
              <div
                id="calendly-container"
                className="w-full h-full"
                style={{ minWidth: "320px", height: "100%" }}
              >
                {!isCalendlyReady && (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Loading calendar...</p>
                  </div>
                )}
              </div>
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
