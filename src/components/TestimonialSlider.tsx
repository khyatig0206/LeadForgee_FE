import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Testimonial } from '@/lib/types/testimonialSchema.ts';

const TestimonialSlider = () => {
const [currentSlide, setCurrentSlide] = useState(0);
const [isAnimating, setIsAnimating] = useState(false);
const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const slidesPerView = useRef(getInitialSlidesPerView());
  
  // Get testimonials from the API
  const { data: testimonials = [], isLoading, error } = useQuery({
  queryKey: ['/api/testimonials/active'],
  queryFn: async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/testimonial/active`);
    if (!res.ok) throw new Error('Failed to fetch active testimonials');
    return res.json();
  }
});



  // Set slides per view based on screen size
  function getInitialSlidesPerView() {
    if (typeof window === 'undefined') return 1;
    
    if (window.innerWidth >= 1024) return 3; // Desktop
    if (window.innerWidth >= 768) return 2; // Tablet
    return 1; // Mobile
  }

  // Update slides per view on window resize
  useEffect(() => {
    const handleResize = () => {
      slidesPerView.current = getInitialSlidesPerView();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil((testimonials?.length || 0) / slidesPerView.current);

  useEffect(() => {
  if (testimonials.length <= slidesPerView.current) return;

  const interval = setInterval(() => {
    setCurrentSlide((prev) => {
      let next = direction === 'forward' ? prev + 1 : prev - 1;

      if (next >= totalSlides) {
        setDirection('backward');
        return prev - 1;
      } else if (next < 0) {
        setDirection('forward');
        return prev + 1;
      }

      return next;
    });
  }, 5000); // Change slide every 5 seconds

  return () => clearInterval(interval);
}, [testimonials, totalSlides, direction]);




  
  const handlePrev = () => {
    if (isAnimating || testimonials.length <= slidesPerView.current) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating || testimonials.length <= slidesPerView.current) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // If loading, show skeleton
  if (isLoading) {
    return (
      <div className="text-center py-16">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
          <div className="flex space-x-4 w-full justify-center">
            <div className="rounded-xl bg-gray-200 h-64 w-full max-w-md"></div>
            <div className="rounded-xl bg-gray-200 h-64 w-full max-w-md hidden md:block"></div>
            <div className="rounded-xl bg-gray-200 h-64 w-full max-w-md hidden lg:block"></div>
          </div>
        </div>
      </div>
    );
  }

  // If error, show error message
  if (error) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl text-red-500">Unable to load testimonials</h3>
        <p className="text-gray-600">Please try again later</p>
      </div>
    );
  }

  // If no testimonials, show empty state
  if (testimonials.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl">No testimonials available</h3>
        <p className="text-gray-600">Check back soon for customer reviews</p>
      </div>
    );
  }

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return (
      <div className="mt-4 text-primary">
        {[...Array(5)].map((_, i) => (
          <i 
            key={i} 
            className={`${i < rating ? 'fas fa-star' : i + 0.5 === rating ? 'fas fa-star-half-alt' : 'far fa-star'}`}
          ></i>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses who've transformed their lead generation with Leadforgee.
          </p>
        </div>

        {/* Testimonial Slider Container */}
        <div className="testimonial-slider relative">
          {/* Testimonial Slides */}
          <div className="testimonial-slides overflow-hidden">
            <div 
              className="testimonials-track flex transition-transform duration-500" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial: Testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={`testimonial-card min-w-full md:min-w-[50%] lg:min-w-[33.333%] p-4`}
                >
                  <Card className="p-8 h-full testimonial-gradient">
                    <div className="flex items-center mb-6">
                      <img 
                        src={`${import.meta.env.VITE_API_BASE_URL}${testimonial.imageUrl}`} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full mr-4 object-cover" 
                      />
                      <div>
                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">
                      "{testimonial.content}"
                    </p>
                    {renderStars(testimonial.rating)}
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <button 
                onClick={handlePrev}
                className="testimonial-prev w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors"
                disabled={isAnimating}
                aria-label="Previous testimonial"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="flex gap-2 items-center">
                {[...Array(totalSlides)].map((_, i) => (
                  <span 
                    key={i}
                    className={`w-3 h-3 rounded-full bg-primary ${i === currentSlide ? 'opacity-100' : 'opacity-50'}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true);
                        setCurrentSlide(i);
                        setTimeout(() => setIsAnimating(false), 500);
                      }
                    }}
                    aria-label={`Go to slide ${i + 1}`}
                  ></span>
                ))}
              </div>
              <button 
                onClick={handleNext}
                className="testimonial-next w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition-colors"
                disabled={isAnimating}
                aria-label="Next testimonial"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
