import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const ConsultationForm = () => {
    return (
        <div className="w-full min-h-screen bg-[#f5f2ef] flex items-center justify-center">
          <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative overflow-hidden rounded-lg  bg-white/0">
            {/* Left Side: Image & Call Card */}
            <div className="relative flex-1 flex items-center justify-center min-h-[400px]">
              {/* Background Image */}
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                alt="Consultation"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-l-lg"
              />
              {/* Red Curve Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-700 rounded-tl-[200px] rounded-tr-[200px] md:rounded-tr-none md:rounded-bl-[200px] opacity-90 z-10"></div>
              {/* Call Card */}
              <div className="relative z-20 flex flex-col items-center justify-center">
                <div className="bg-white rounded-xl shadow-lg p-6 mt-20 w-64">
                  <div className="flex items-center justify-center mb-2">
                    <div className="bg-red-600 text-white rounded-full p-3 text-2xl">
                      <FaPhoneAlt />
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 text-center mb-1">CALL NOW</div>
                  <div className="font-bold text-lg text-center mb-1">
                    10 Minutes Free <br /> for First Session
                  </div>
                  <a
                    href="tel:+919319217537"
                    className="block text-center text-blue-700 font-semibold text-lg hover:underline"
                  >
                    +91 9319 217 537
                  </a>
                </div>
              </div>
            </div>
    
            {/* Right Side: Form */}
            <div className="flex-1 flex flex-col justify-center px-6 py-12 bg-[#f5f2ef]">
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Fill the Form, <span className="text-red-700">Book</span> Online Consultations
              </h2>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Mobile No."
                    className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Id"
                    className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <textarea
                  placeholder="Write a Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                />
                <button
                  type="submit"
                 className="btn-gradient-hover text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition mt-4 cursor-pointer"
                >
                  Talk To Me
                </button>
              </form>
            </div>
          </div>
        </div>
      );
}

export default ConsultationForm