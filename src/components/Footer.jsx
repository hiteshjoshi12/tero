import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-10 pb-4 px-4 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
            {/* Logo & Social */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                {/* Logo */}
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  {/* Replace with your SVG or logo */}
                  <span className="text-2xl font-bold">❤️</span>
                </div>
                <div>
                  <div className="font-bold text-lg">Shveta Sharma</div>
             
                </div>
              </div>
              {/* Social Icons */}
              <div className="flex gap-4 mt-2">
                <a href="https://www.facebook.com/share/1LHfrmg8R6/" className="bg-red-600 p-2 rounded-full hover:bg-red-700">
                  <FaFacebookF />
                </a>
                <a href="https://youtube.com/@divinehealingbyshveta?si=0EDq-I8v-UizvEpW" className="bg-red-600 p-2 rounded-full hover:bg-red-700">
                  <FaYoutube />
                </a>
                <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=3m5il1" className="bg-red-600 p-2 rounded-full hover:bg-red-700">
                  <FaInstagram />
                </a>
              </div>
            </div>
    
        
    
            {/* Contact */}
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-3">Contact</h3>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-red-600 p-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5"></path><path d="M21 10.5l-9 6.5-9-6.5"></path></svg>
                </span>
                <div>
                  <div className="text-sm">Send Email</div>
                  <div className="text-xs">shveta.suri0@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-red-600 p-2 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                <div>
                  <div className="text-sm">Call Anytime</div>
                  <div className="text-xs">+91 99 9975 3539</div>
                </div>
              </div>
            </div>
    
           
          </div>
        </footer>
      );
}

export default Footer