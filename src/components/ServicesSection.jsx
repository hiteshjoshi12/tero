import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Healing",
    description:
      "Experience emotional and physical restoration through powerful healing practices..",
    image: "/healing.jpg",
    details: [
      "Achieving emotional balance",
      "Physical well-being",
      "Energy restoration",
      "Spiritual alignment",
      "Holistic wellness approach",
      "Stress reduction",
      "Improved sleep quality",
      "Enhanced mental clarity"
    ]
  },
  {
    title: "Tarot",
    description:
      "Gain insight and clarity about your life journey with intuitive Tarot card readings..",
    image: "/tarot.jpg",
    details: [
      "Achieving a sense of clarity in difficult and emotionally exhausting situations",
      "Understand and nurture relationship problems",
      "Detecting areas of improvement",
      "Achieve Inner peace",
      "Gain decision clarity",
      "Guidance for financial goals",
      "Identify areas in need of improvement"
    ]
  },
  {
    title: "Hypnotherapy Sessions",
    description:
      "Unlock your subconscious to overcome challenges through guided hypnotherapy sessions..",
    image: "/Hypnotherapy.jpg",
    details: [
      "Anxiety and Depression",
      "Fears and Phobias",
      "Confidence and Self Esteem",
      "Better Relationships",
      "Stress Relief",
      "Releasing past traumas",
      "Goal achievement",
      "Problem resolution through various techniques like Past Life Regression Therapy, Womb Healing, Inner Child Healing"
    ]
  },
  {
    title: "Aura Scanning",
    description:
      "Discover your energy fields and restore balance with detailed aura scanning techniques..",
    image: "/aura.jpg",
    details: [
      "Aura Colour and status",
      "Negativity in Aura",
      "Psychic attack checking",
      "Any Bandhan dosh",
      "Pitra status or any Dosha",
      "Seven chakra status",
      "Kuldevi/ kuldev kripa",
      "Remedies"
    ]
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Close modal when clicking outside content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="w-full bg-white mt-8">
      {/* Services Section */}
      <div
        className="relative py-10 sm:py-12 px-2 sm:px-4 md:px-8 lg:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/testimonial-back.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Our <span className="text-red-600">Services</span>{" "}
              </h2>
            </div>
            <button className="btn-gradient-hover text-white w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-lg shadow transition mt-2 sm:mt-4 cursor-pointer">
              View All
            </button>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 gap-y-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col cursor-pointer"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative h-48 sm:h-40 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-base sm:text-lg text-red-700 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base flex-1">
                    {service.description}
                  </p>
                  <button
                    onClick={() => openModal(service)}
                    className="mt-3 text-red-600 text-sm font-semibold flex items-center gap-1 hover:underline"
                  >
                    &rarr; Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
            >
              {/* Modal Header with Image */}
              <div className="relative h-48 sm:h-64 w-full">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 backdrop-blur-sm transition-all"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
                <h3 className="absolute bottom-4 left-6 text-white text-2xl sm:text-3xl font-bold">
                  {selectedService.title}
                </h3>
              </div>
              
              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 text-lg">{selectedService.description}</p>
                
                <h4 className="text-xl font-semibold text-blue-800 mb-4">How {selectedService.title} can help you:</h4>
                
                <ul className="space-y-3">
                  {selectedService.details.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={closeModal}
                    className="btn-gradient-hover text-white px-6 py-2 rounded-full font-semibold shadow transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
