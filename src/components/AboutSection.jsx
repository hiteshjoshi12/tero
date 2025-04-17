import React, { useState } from "react";

const AboutSection = () => {
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

      </div>
      {/* Images */}
      <div className="flex flex-col items-center relative min-h-[320px] sm:min-h-[420px] w-full md:w-auto">
        {/* Top image */}
        <img
          src="/client.jpg"
          alt="Counselling"
          className="rounded-xl w-full max-w-xs sm:max-w-md md:w-[400px] md:h-[400px] object-cover shadow-lg z-10"
        />
      </div>
    </section>
  );
};

export default AboutSection;
