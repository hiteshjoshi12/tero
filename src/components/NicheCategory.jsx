import React from "react";

const products = [
  {
    label: "Crystal Pyramid",
    image: "https://pplx-res.cloudinary.com/image/upload/v1744723449/user_uploads/YfFFQaCnKAkudql/1.jpg",
    tags: ["Pyramids", "Energy", "Healing"],
  },
  {
    label: "Pyrite Cluster",
    subtitle: "Golden Path to Prosperity",
    image: "https://pplx-res.cloudinary.com/image/upload/v1744723449/user_uploads/kpwZgNvuNFdbLji/4.jpg",
    tags: ["Clusters", "Prosperity", "Wealth"],
  },
  {
    label: "Crystal Bracelets",
    image: "https://pplx-res.cloudinary.com/image/upload/v1744723449/user_uploads/jrOoeHCaioIJkIr/3.jpg",
    tags: ["Bracelets", "Fashion", "Wellness"],
  },
  {
    label: "Crystal Tree",
    image: "https://pplx-res.cloudinary.com/image/upload/v1744723449/user_uploads/PZrYhfaawajSTyh/2.jpg",
    tags: ["Trees", "Decor", "Positivity"],
  },
  {
    label: "Crystal malas",
    image: "/Crystalmalas.jpg",
    tags: ["Trees", "Decor", "Positivity"],
  },  
  {
    label: "Pyrite frames",
    image: "/Pyriteframes.jpg",
    tags: ["Trees", "Decor", "Positivity"],
  },   
];

const creativeTags = [
  "Malas", "Bracelets", "Tumbles", "Wands", "Rings", "Pendants", "Pyramids", "Angels", "Trees"
];

export default function NicheCategory() {
  return (
    <section className="w-full bg-[#f9f6f2]  py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 tracking-tight">
        Our Products
        </h2>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {creativeTags.map((tag, idx) => (
            <span
              key={tag}
              className={`inline-block px-4 py-1 rounded-full text-sm font-semibold shadow transition
                ${idx % 2 === 0 ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}
                hover:bg-blue-200 hover:text-blue-900`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-md md:text-lg text-gray-700 font-medium">
          Explore our handpicked crystal creations—each piece crafted to bring harmony, energy, and beauty into your life.
        </p>
      </div>
      {/* Horizontal Scrollable Cards */}
      <div className="max-w-7xl mx-auto ">
        <div className="flex gap-8 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-blue-200 hide-scrollbar">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="min-w-[270px] max-w-[320px] bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition p-6 flex-shrink-0 flex flex-col items-center group"
              style={{ minHeight: 420 }}
            >
              <div className="w-72 h-64 flex items-center justify-center mb-4 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.label}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-blue-800">{product.label}</h3>
                {product.subtitle && (
                  <p className="text-sm text-gray-500 mt-1">{product.subtitle}</p>
                )}
                <div className="flex flex-wrap justify-center gap-1 mt-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Optional: Add left/right scroll buttons for desktop */}
      </div>
    </section>
  );
}
