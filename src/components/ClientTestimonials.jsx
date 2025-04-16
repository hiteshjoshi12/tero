import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    content: "I wish to share a personal experience and thank Shveta for her help and request her to keep helping in future also. So it is like this that on 13th of April I fell down and had a fracture and was very scared because the doctors initially recommended surgery. I immediately contacted Shweta and requested her to give me reiki and some chanting which I kept enchanting and on the second visit to the doctor I was assured that there was no need of surgery. After that the second issue was that the cracked bones should join properly. Again I requested Shweta and she gave me some different chantings and numbers which I am using regularly. Since that time and today after 3 weeks the doctor has given a very positive response. Surgery is completely avoided and the bone joint and alignment are perfect. In between I felt pain and I requested Swetha again to do something. She sent me EC which I am using and trust me immediately the pain gets released.",
    type: "Healing",
    name: "Happy Client",
    image: "/client1.jpg"
  },
  {
    id: 2,
    content: "Hello everyone, I took a personal session with Shveta yesterday and I was surprised that she told me exactly what's going on in my life and gave me effective solutions to my problems. Her energies were so positive that right after the session, I started feeling relaxed and focused. I did what Shveta suggested to me and it worked like a miracle. Thank you so much Shveta for spreading positivity and helping me thoroughly with my problems. Anyone confused about anything should take card readings with her.",
    type: "Angel Card Reading",
    name: "Satisfied Client",
    image: "/client2.jpg"
  },
  {
    id: 3,
    content: "Hello everyone, I am new to this group and I took my life's first energy healing session and tarot card readings with Shveta and I was amazed at her capabilities to know the truth and she gives honest and helpful explanations that helped me fix my aura and other problems in my life. Thank you so much Shveta. Good vibes.",
    type: "Energy Healing & Tarot",
    name: "New Client",
    image: "/client3.jpg"
  },
  {
    id: 4,
    content: "Wealth & Wisdom, Health & Grace... everything is possible to get if Shveta mam you are with us to guide. I am forever grateful to you for guiding me and helping me in achieving what I want. Its because of you I have my own house today. When I say that the effect of your guidance is magical on me, I am not telling lies. Dear Shveta Mam, you've blessed my life in a way only the imagination can express. Your key numbers, affirmations and switch words have worked excellently. It takes a big heart to help and guide us selflessly and inspite of bothering you so many times you have been so calm and helpful to me. You are wonderful person whom I can call my Guru, my Teacher with pride. Thank you so so so much mam. Proud that I am connected with you through Reiki.",
    type: "Life Guidance",
    name: "Grateful Client",
    image: "/client4.jpg"
  },
  {
    id: 5,
    content: "Hey! Wanted to share my experience. Last month we had taken healing from Shweta ma'am and in 15 days my husband got a drastic change in his business as well as in his nature! Thank you so much! From last 2 years we got no opportunity and got result within 15 days of healing. We are still taking business healing from Shweta. Thank you once again!",
    type: "Financial Healing",
    name: "Business Client",
    image: "/client5.jpg"
  },
{
    id: 6,
    content: "Good morning. A big THANK YOU to dearest SHVETA. Recently, I took financial healing from her... during DIWALI.... and to my surprise ... there is an increase in my income. TAHNK YOU SHVETA. SHVETA also gave me mantras and switch words which I am chanting and I FEEL POSITIVE ABOUT MONEY MATTERS NOW. SHVETA has great healing powers and her predictions are very accurate. Her healing ..heals.... And I have myself experienced this many a times now..... THANK YOU SHVETA. U r such a positive person n your aura is so positive..I believe who ever come to u or connect vd u get so positivity gratitude always. True,I'm blessed that she is in my life.",
    type: "Financial Healing",
    name: "Grateful Client",
    image: "/client6.jpg"
  },
  {
    id: 7,
    content: "Hello everyone, My new born niece was in critical situation, she had chest infection and was unable to breathe. She was on 100% oxygen. I am extremely thankful of Shveta for helping us by providing emergency healing for our baby and within a week baby is out of danger and in a safe state. Thank you so much Shveta for blessing us with your healing. It is amazing how healing works magically. Healing Feedback 🙏🙏 Thank u divine energy for blessing us all.",
    type: "Emergency Healing",
    name: "Relieved Family Member",
    image: "/client7.jpg"
  }
  
];

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 8000);
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
            Read what our clients have to say about their transformative experiences with our healing services.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute top-6 left-6 text-red-600 opacity-20">
            <FaQuoteLeft className="w-16 h-16" />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-3/4">
                <div className="mb-6">
                  <span className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {testimonials[currentTestimonial].type}
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {testimonials[currentTestimonial].content}
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">{testimonials[currentTestimonial].name}</h4>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-500 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/4 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-lg transform scale-110"></div>
                  <div className="relative bg-gradient-to-r from-blue-100 to-purple-100 p-1 rounded-full">
                    <div className="bg-white p-1 rounded-full">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                          {testimonials[currentTestimonial].name.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

        {/* Testimonial Summary Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Physical Healing</h3>
            </div>
            <p className="text-gray-600">
              "Surgery is completely avoided and the bone joint and alignment are perfect. The pain gets released immediately."
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Financial Growth</h3>
            </div>
            <p className="text-gray-600">
              "In 15 days my husband got a drastic change in his business. From 2 years of no opportunity to results in 15 days."
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">Life Transformation</h3>
            </div>
            <p className="text-gray-600">
              "Your key numbers, affirmations and switch words have worked excellently. It's because of you I have my own house today."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
