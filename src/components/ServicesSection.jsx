import { motion } from "framer-motion";

const services = [
  {
    title: "Healing",
    description:
      "Experience emotional and physical restoration through powerful healing practices..",
    image: "/healing.jpg",
  },
  {
    title: "Tarot",
    description:
      "Gain insight and clarity about your life journey with intuitive Tarot card readings..",
    image: "/tarot.jpg",
  },
  {
    title: "Hypnotherapy Sessions",
    description:
      "Unlock your subconscious to overcome challenges through guided hypnotherapy sessions..",
    image: "/Hypnotherapy.jpg",
  },
  {
    title: "Aura Scanning",
    description:
      "Discover your energy fields and restore balance with detailed aura scanning techniques..",
    image: "/aura.jpg",
  },
];

export default function ServicesSection() {
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
              <div className="uppercase text-xs sm:text-sm text-white tracking-widest mb-2">
                Services I am offering
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Magical Healing for <span className="text-red-600">the</span>{" "}
                <br className="hidden sm:block" />
                People Need Help
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
                  <a
                    href="#"
                    className="mt-3 text-red-600 text-sm font-semibold flex items-center gap-1 hover:underline"
                  >
                    &rarr; Read More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
