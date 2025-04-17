import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";

const ConsultationForm = () => {
    return (
        <div className="w-full min-h-screen bg-[#f5f2ef] flex items-center justify-center">
          <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch relative overflow-hidden rounded-lg  bg-white/0">
            {/* Left Side: Image & Call Card */}
            <div className="relative flex-1 flex items-center justify-center min-h-[400px]">
              {/* Background Image */}
              
              {/* Red Curve Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-700 rounded-tl-[200px] rounded-tr-[200px] md:rounded-tr-none md:rounded-bl-[200px] opacity-90 z-10"></div>
              
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