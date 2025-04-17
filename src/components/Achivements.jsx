import React from 'react';
import { FaUserCheck, FaChartLine, FaStar, FaBookOpen, FaUserTie } from "react-icons/fa";

const achievements = [
  {
    icon: <FaUserCheck className="text-green-600 w-7 h-7" />,
    title: "500+ Lives Transformed",
    desc: "Helped over 500 people achieve their goals in Health, Relationships, and Finances through healing.",
  },
  {
    icon: <FaStar className="text-yellow-500 w-7 h-7" />,
    title: "Top Tarot Reader",
    desc: "Daily readings for multiple clients on the MyPandit app.",
  },
  {
    icon: <FaChartLine className="text-blue-600 w-7 h-7" />,
    title: "80% Success Rate During Covid",
    desc: "Achieved an 80% success rate in helping clients during the pandemic.",
  },
  {
    icon: <FaBookOpen className="text-purple-600 w-7 h-7" />,
    title: "Continuous Growth",
    desc: "Passionate about learning and mastering new healing modalities for betterment.",
  },
  {
    icon: <FaUserTie className="text-pink-600 w-7 h-7" />,
    title: "Mentorship",
    desc: "Uplifting spiritual growth under expert mentors and learning new healing insights.",
  },
];

export default function Achievements() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-red-700 text-white rounded-full p-3 shadow-lg">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Achievements</h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-purple-200 rounded-full z-0" />
          <ul className="space-y-10 relative z-10">
            {achievements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-6 group">
                <div className="relative z-10">
                  <div className="bg-white border-4 border-blue-100 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-1">{item.title}</h3>
                  <p className="text-black text-xl font-medium">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
