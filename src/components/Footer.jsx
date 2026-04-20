import footBg1 from "../assets/images/more/13.jpg";
import footBg2 from "../assets/images/more/8.png";
import logo from "../assets/images/more/logo1.png";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Main Footer Content */}
      <div
        className="pt-20 pb-10 px-4 md:px-24"
        style={{
          backgroundImage: `url(${footBg1})`, // আপনার ব্যাকগ্রাউন্ড ইমেজের পাথ দিন
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          {/* Left Column: Info */}
          <div className="flex-1 space-y-6">
            <img src={logo} alt="Logo" className="w-20 h-16" />
            <h2 className="text-4xl font-bold text-[#331A15] font-serif">
              Espresso Emporium
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-md">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-3xl text-[#331A15]">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="cursor-pointer hover:text-[#D2B48C] transition-colors" />
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="cursor-pointer hover:text-[#D2B48C] transition-colors" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-[#D2B48C] transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="cursor-pointer hover:text-[#D2B48C] transition-colors" />
              </a>
            </div>

            {/* Get in Touch */}
            <div className="space-y-4 pt-4">
              <h3 className="text-3xl font-bold text-[#331A15] font-serif">
                Get in Touch
              </h3>
              <div className="flex items-center gap-4 text-gray-700">
                <FaPhoneAlt /> <span>+88 01838 041204</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaEnvelope /> <span>ahasanulhaque204@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <FaMapMarkerAlt /> <span>Satkhira, Khulna, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1 w-full lg:mt-10">
            <h3 className="text-3xl font-bold text-[#331A15] font-serif mb-8">
              Connect with Us
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-md focus:outline-[#D2B48C] shadow-sm border-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-md focus:outline-[#D2B48C] shadow-sm border-none"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-4 rounded-md focus:outline-[#D2B48C] shadow-sm border-none"
              ></textarea>
              <button className="px-8 py-3 rounded-full border-2 border-[#331A15] text-[#331A15] font-serif text-xl hover:bg-[#331A15] hover:text-white transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div
        className="py-4 text-center text-white text-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${footBg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p>Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
