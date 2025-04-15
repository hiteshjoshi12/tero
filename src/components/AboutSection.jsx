import React, { useState } from "react";

const YOUTUBE_VIDEO_ID = "4UZrsTqkcW4"; // Replace with your video ID

const AboutSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setShowVideo(false);
  };

  return (
    <section className="px-4 sm:px-8 md:px-20 lg:px-44 py-10 md:py-16 bg-white flex flex-col md:flex-row items-start gap-8 md:gap-12 relative">
      {/* Text */}
      <div className="flex-1 mb-8 md:mb-0">
        <p className="text-blue-800 font-semibold uppercase tracking-widest mb-2">Welcome to</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Shveta Sharma
          <span className="text-red-700"> – Healing</span>
        </h2>
        <p className="text-black font-medium mb-6 text-base sm:text-lg">
          Discover the power of holistic healing with Shveta Sharma, an experienced practitioner dedicated to restoring balance, harmony, and well-being in your life. With expertise in Reiki, Lama Fera, Buddha Healing (Healing Monk Practitioner), Tarot Card Reading, and Clinical Hypnotherapy, Shveta blends ancient wisdom with modern techniques to guide you on a transformative journey.
          <br /><br />
          Whether you seek emotional healing, spiritual growth, or clarity in life, her personalized sessions help you connect with your inner self and unlock the path to peace and fulfillment. Step into a world of positive energy, deep healing, and self-discovery.
          <br /><br />
          Book a session today and embrace your journey towards holistic well-being.
        </p>
        <button className="btn-gradient-hover text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition mt-4 cursor-pointer w-full sm:w-auto">Read More</button>
      </div>
      {/* Images */}
      <div className="flex-1 flex flex-col items-end relative min-h-[320px] sm:min-h-[420px] w-full md:w-auto">
        {/* Top image */}
        <img
          src="/about-left-1.jpg"
          alt="Counselling"
          className="rounded-xl w-full max-w-xs sm:max-w-md md:w-[400px] md:h-[400px] object-cover shadow-lg z-10"
        />
        {/* Bottom image with play button */}
        <div className="absolute left-0 sm:left-10 top-[60%] sm:top-[220px] z-20 w-[80%] sm:w-[350px]">
          <div className="relative w-full h-[180px] sm:h-[220px]">
            <img
              src="/Person.png"
              alt=""
              className="rounded-xl w-full h-full object-cover shadow-lg"
            />
            <button
              className="absolute -left-7 bottom-1/2 translate-y-1/2 bg-blue-800 text-white rounded-full p-5 shadow-lg z-20 cursor-pointer hover:bg-black transition duration-300"
              onClick={() => setShowVideo(true)}
              aria-label="Play Video"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-2"
          onClick={handleOverlayClick}
        >
          <div className="relative w-full max-w-2xl">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10 hover:text-red-500"
              onClick={() => setShowVideo(false)}
              aria-label="Close Video"
            >
              &times;
            </button>
            {/* Responsive YouTube iframe */}
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
