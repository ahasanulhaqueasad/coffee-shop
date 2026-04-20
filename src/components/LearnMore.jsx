import { Link } from "react-router-dom";
import learnMoreImg from "../assets/images/more/12.png"; // আপনার কফি মেকিং বা শপের একটি সুন্দর ছবি
import { HiArrowNarrowLeft } from "react-icons/hi";

const LearnMore = () => {
  return (
    <div className="bg-white py-20 px-4 md:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#374151] hover:text-[#D2B48C] font-serif text-2xl"
        >
          <HiArrowNarrowLeft />
          <span>Back to home</span>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* বাম পাশ: ইমেজ সেকশন */}
        <div className="flex-1 relative">
          <div className="absolute -inset-4 bg-[#E3B577] opacity-20 rounded-2xl blur-lg"></div>
          <img
            src={learnMoreImg}
            alt="Crafting Coffee"
            className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          {/* একটি ছোট স্ট্যাটাস বক্স */}
          <div className="absolute -bottom-6 -right-6 bg-[#331A15] text-white p-6 rounded-xl hidden md:block shadow-xl">
            <p className="text-4xl font-bold text-[#E3B577]">15+</p>
            <p className="text-sm">
              Years of <br /> Excellence
            </p>
          </div>
        </div>

        {/* ডান পাশ: টেক্সট কন্টেন্ট */}
        <div className="flex-1 space-y-6">
          <p className="text-[#D2B48C] font-semibold tracking-widest uppercase">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#331A15] font-serif leading-tight">
            Tradition & Passion In <br /> Every Single Cup
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Welcome to Espresso Emporium, where coffee is more than just a
            drink—it’s an experience. We source our beans from the finest
            organic farms, roasting them to perfection to bring out the rich,
            bold flavors you love. From the first sip to the last, we ensure
            every cup is a memory worth cherishing.
          </p>

          {/* বিশেষত্ব লিস্ট */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#E3B577] rounded-full"></div>
              <span className="font-semibold text-[#331A15]">
                100% Organic Beans
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#E3B577] rounded-full"></div>
              <span className="font-semibold text-[#331A15]">
                Expert Baristas
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#E3B577] rounded-full"></div>
              <span className="font-semibold text-[#331A15]">
                Custom Roasting
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#E3B577] rounded-full"></div>
              <span className="font-semibold text-[#331A15]">
                Cozy Ambience
              </span>
            </div>
          </div>

          {/* <button className="bg-[#E3B577] text-white px-8 py-3 font-semibold rounded-md border-2 border-[#E3B577] hover:bg-transparent hover:text-[#331A15] hover:border-[#331A15] transition-all">
            Discover Our Menu
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
