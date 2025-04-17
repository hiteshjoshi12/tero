import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    image: "/4.jpg", // The WhatsApp screenshot with business improvement
    type: "Financial Healing",
    caption: "Client experienced drastic business improvement in just 15 days"
  },
  {
    id: 2,
    image: "/2.jpg", // The fracture healing testimonial
    type: "Physical Healing",
    caption: "Surgery avoided and complete bone healing through Reiki and chanting"
  },
  {
    id: 3,
    image: "/1.jpg", // The angel card reading testimonial
    type: "Angel Card Reading",
    caption: "Accurate insights and effective solutions that worked like a miracle"
  },
  {
    id: 4,
    image: "/3.jpg", // The house ownership testimonial
    type: "Life Guidance",
    caption: "Client achieved home ownership through key numbers and affirmations"
  },
  {
    id: 5,
    image: "/5.jpg", // The house ownership testimonial
    type: "",
    caption: ""
  },
  {
    id: 6,
    image: "/6.jpg", // The house ownership testimonial
    type: "",
    caption: ""
  }
];

const TestimonialScreenshots = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextTestimonial = () => {
    setIsAutoPlay(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlay(false);
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Client <span className="text-red-600">Testimonials</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real feedback from clients who experienced transformative results with our healing services.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="flex flex-col items-center">
              {/* Testimonial Type Badge */}
              <span className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {testimonials[currentTestimonial].type}
              </span>
              
              {/* Testimonial Screenshot */}
              <div className="w-full max-w-lg mx-auto mb-4 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={`${testimonials[currentTestimonial].type} testimonial`}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Caption */}
              <p className="text-center text-gray-700 font-medium mt-4">
                {testimonials[currentTestimonial].caption}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center px-8 pb-8">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlay(false);
                    setCurrentTestimonial(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-red-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={prevTestimonial}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-2 transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-2 transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
            <h3 className="font-bold text-lg mb-2">Physical Healing</h3>
            <p className="text-gray-600">
              Avoided surgery and achieved perfect bone alignment through healing and chanting.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="font-bold text-lg mb-2">Financial Growth</h3>
            <p className="text-gray-600">
              Business transformation in just 15 days after 2 years of stagnation.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="font-bold text-lg mb-2">Angel Card Reading</h3>
            <p className="text-gray-600">
              Accurate insights and effective solutions that bring immediate relief.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="font-bold text-lg mb-2">Life Transformation</h3>
            <p className="text-gray-600">
              Achieved home ownership through key numbers and affirmations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialScreenshots;
