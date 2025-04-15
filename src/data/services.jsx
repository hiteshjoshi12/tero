// src/data/services.js
export const services = [
    {
      title: "Mental Health Coach",
      desc: "A mental health coach is a dedicated professional..",
      image: "/mental-health.jpg",
      icon: (
        // Example icon (replace with your SVG or icon component)
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M12 8v4l3 3" strokeWidth="2" />
        </svg>
      ),
      color: "text-red-700",
    },
    {
      title: "Student Counselling",
      desc: "The student child counseling is a supportive and..",
      image: "/student-counselling.jpg",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" strokeWidth="2" />
          <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" strokeWidth="2" />
        </svg>
      ),
      color: "text-blue-700",
    },
    {
      title: "Grief Counsellor",
      desc: "A grief counsellor is a compassionate professional..",
      image: "/grief-counsellor.jpg",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c-2.21 0-4 1.79-4 4 0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4z" strokeWidth="2" />
        </svg>
      ),
      color: "text-blue-700",
    },
    {
      title: "Therapies (CBT, REBT, CBMT)",
      desc: "Utilize highly useful Therapies (CBT, REBT, CBMT) to..",
      image: "/therapies.jpg",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M12 6v6l4 2" strokeWidth="2" />
        </svg>
      ),
      color: "text-blue-700",
    },
  ];
  