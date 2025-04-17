import React, { useState } from "react";

const YOUTUBE_VIDEO_ID = "4UZrsTqkcW4"; // Replace with your video ID

const AboutSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setShowVideo(false);
  };

  return (
    <section id="about" className="px-4 sm:px-8 md:px-20 lg:px-44 py-10 md:py-16 bg-white flex flex-col md:flex-row items-start gap-8 md:gap-12 relative">
      {/* Text */}
      <div className="flex-1 mb-8 md:mb-0">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Shveta Sharma
          
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
      <div className="flex flex-col items-center relative min-h-[320px] sm:min-h-[420px] w-full md:w-auto">
        {/* Top image */}
        <img
          src="/about-left-1.jpg"
          alt="Counselling"
          className="rounded-xl w-full max-w-xs sm:max-w-md md:w-[400px] md:h-[400px] object-cover shadow-lg z-10"
        />
        
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
