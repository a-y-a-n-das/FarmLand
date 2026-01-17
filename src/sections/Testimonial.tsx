import React, { useState } from 'react';

interface TestimonialData {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Carl G.",
    location: "Pacifica",
    image: "/testimonial-1.jpg",
    text: "As an on-demand Farmer's Market delivered to your door! Farm and Me is a game-changer for families. We have 2 small children and a number of allergies so access to fresh, organic produce is a must and with all that we are juggling schedule-wise Farm and Me saves us time, money and most importantly energy so we can focus on what's important and be healthy. We LOVE our farm and Me boxes. The organic veg and fruits are always amazingly fresh and the fact is outstanding as well. Love supporting local farms and eating what's in season. So grateful for farm and Me!"
  },
  {
    id: 2,
    name: "Sarah M.",
    location: "San Francisco",
    image: "/testimonial-2.jpg",
    text: "The quality of produce is exceptional! Every box feels like a trip to the farmer's market. The variety keeps our meals exciting and the freshness is unmatched. Highly recommend to anyone looking for organic, locally-sourced vegetables."
  },
  {
    id: 3,
    name: "John D.",
    location: "Oakland",
    image: "/testimonial-3.jpg",
    text: "Supporting local farms while getting the freshest produce delivered to my door - it doesn't get better than this! The convenience and quality have made me a loyal customer."
  }
];

const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decorative images */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 opacity-50">
        <img src="/farm-image-left.jpg" alt="" className="w-full h-full object-cover rounded-full" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 opacity-50">
        <img src="/farm-image-right.jpg" alt="" className="w-full h-full object-cover rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-serif mb-12">
          <span className="block text-gray-800">Better</span>
          <span className="block text-gray-800">Taste & Price</span>
        </h2>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-20"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors z-20"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Content */}
          <div className="transition-opacity duration-500">
            <div className="mb-6">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-2xl mx-auto italic">
              {currentTestimonial.text}
            </p>

            <div>
              <p className="font-semibold text-gray-800 text-lg">{currentTestimonial.name}</p>
              <p className="text-gray-500 text-sm">{currentTestimonial.location}</p>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gray-800 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;