import bannerImg from "../assets/images/more/3.png";
import icon1 from "../assets/images/icons/1.png";
import icon2 from "../assets/images/icons/2.png";
import icon3 from "../assets/images/icons/3.png";
import icon4 from "../assets/images/icons/4.png";
import leftImage from "../assets/images/more/4.png";
import rightImage from "../assets/images/more/5.png";
// cup images here
import cupImg1 from "../assets/images/cups/Rectangle 9.png";
import cupImg2 from "../assets/images/cups/Rectangle 10.png";
import cupImg3 from "../assets/images/cups/Rectangle 11.png";
import cupImg4 from "../assets/images/cups/Rectangle 12.png";
import cupImg5 from "../assets/images/cups/Rectangle 13.png";
import cupImg6 from "../assets/images/cups/Rectangle 14.png";
import cupImg7 from "../assets/images/cups/Rectangle 15.png";
import cupImg8 from "../assets/images/cups/Rectangle 16.png";

import { Link, NavLink, useLoaderData } from "react-router-dom";
import { BsCupHot } from "react-icons/bs";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
  const features = [
    {
      id: 1,
      icon: icon1,
      title: "Awesome Aroma",
      description:
        "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      id: 2,
      icon: icon2,
      title: "High Quality",
      description: "We served the coffee to you maintaining the best quality",
    },
    {
      id: 3,
      icon: icon3,
      title: "Pure Grades",
      description:
        "The coffee is made of the green coffee beans which you will love",
    },
    {
      id: 4,
      icon: icon4,
      title: "Proper Roasting",
      description:
        "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];
  const cupImages = [
    { id: 1, src: cupImg1 },
    { id: 2, src: cupImg2 },
    { id: 3, src: cupImg3 },
    { id: 4, src: cupImg4 },
    { id: 5, src: cupImg5 },
    { id: 6, src: cupImg6 },
    { id: 7, src: cupImg7 },
    { id: 8, src: cupImg8 },
  ];

  const loadedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedcoffees);

  return (
    <div>
      {/* banner section  */}
      <div
        className="w-full h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      >
        {/* বাম পাশ খালি রাখা হয়েছে অথবা ইমেজ কন্টেইনার হিসেবে ব্যবহার করা যাবে */}
        <div className="hidden md:flex flex-1"></div>

        {/* Right Content - টেক্সট এখন এখানে */}
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Welcome to <br /> Espresso Emporium
          </h1>
          <p className="mt-4 text-sm md:text-lg text-gray-200 max-w-md">
            Best coffee experience for you ☕. Serve the cup of excellence and
            enjoy the memorable moments of your life.
          </p>

          <Link to="/learnmore">
            <button className="mt-6 bg-[#E3B577] text-black px-6 py-2 font-semibold hover:bg-transparent hover:text-white border-2 border-[#E3B577] transition-all rounded-md">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      {/* product quality section  */}
      <div className="bg-[#ECEAE3] py-14">
        <div className="max-w-7xl mx-auto px6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="space-y-3 px-5">
              <img src={feature.icon} alt="Icon" />
              <h2 className="text-3xl font-bold">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* coffee category */}
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${leftImage}), url(${rightImage})`,
          backgroundPosition: "left top, right bottom",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "auto, auto",
        }}
      >
        <div className="text-center my-12 space-y-4">
          {/* Sub-heading */}
          <p className="text-[#1B1B1B] text-sm md:text-lg">
            --- Sip & Savor ---
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#331A15] drop-shadow-md font-serif">
            Our Popular Products
          </h2>

          {/* Add Coffee Button */}
          <div className="flex justify-center pt-4">
            <Link to="/addcoffee">
              <button className="flex items-center gap-2 bg-[#E3B577] hover:bg-[#D2B48C] text-white px-5 py-2 rounded-md border-2 hover:border-[#331A15] shadow-lg transition-all font-serif">
                <span className="text-xl">Add Coffee</span>
                <BsCupHot className="text-[#331A15] text-xl" />
              </button>
            </Link>
          </div>
        </div>
        <div
          className="py-10"
          style={{
            // backgroundImage: `url(${bgImage})`,
            backgroundSecondary: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-7xl mx-auto px-4">
            {/* Coffee Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              {coffees.map((coffee) => (
                <CoffeeCard
                  key={coffee._id}
                  coffee={coffee}
                  coffees={coffees}
                  setCoffees={setCoffees}
                ></CoffeeCard>
              ))}
            </div>
          </div>
          {/* Update Coffee Button */}
          <div className="flex justify-center pt-16">
            <Link to="/updatecoffee/:id">
              <button className="flex items-center gap-2 bg-[#E3B577] hover:bg-[#D2B48C] text-white px-5 py-2 rounded-md border-2 hover:border-[#331A15] shadow-lg transition-all font-serif">
                <span className="text-xl">Update Coffee</span>
                <BsCupHot className="text-[#331A15] text-xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Follow on Instagram  */}
      <div className="py-20 bg-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* ১. Title Section */}
          <p className="text-[#331A15] text-xl mb-2">Follow Us Now</p>
          <h2 className="text-5xl font-bold text-[#331A15] font-serif mb-12">
            Follow on Instagram
          </h2>

          {/* ২. Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cupImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-xl">
                <img
                  src={image.src}
                  alt={`Cup image post ${image.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
