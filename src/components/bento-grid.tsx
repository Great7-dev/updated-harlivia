// import frame2 from "../assets/Frame 6.png";
// import frame4 from "../assets/Frame 11.png";
// import frame5 from "../assets/image1.png";
// import frame6 from "../assets/image2.png";
import { Link } from "react-router-dom";
import light from "../assets/energy.jpeg";
import cargo from "../assets/cargo.jpeg";
import energy from "../assets/light.jpeg";
import agric from "../assets/agric.png";

const BentoGrid = () => {
  return (
    <section className="w-full py-[56px] bg-[#F7F7F7] dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Header Text */}
        <div className="text-center mb-8">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-white transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            What we have to offer
          </button>
          <p className="mt-4 text-[24px] text-gray-800 dark:text-gray-200 max-w-4xl mx-auto text-sm">
            Whether it's bringing joy through good food, helping you find the
            perfect home, powering communities with sustainable energy and
            affordable metering solutions, or getting your goods where they need
            to be, we do it with passion and purpose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Properties Card */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/30 h-[339px]">
            <Link to="/properties" className="block w-full h-full relative">
              <img
                src={light || "/placeholder.svg"}
                alt="Modern building interior"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-2xl"></div>
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="py-4 px-2">
                  <span className="px-4 py-2 bg-[#335CFF] text-white text-sm font-semibold rounded-[8px]">
                    PROPERTIES
                  </span>
                  <p className="text-white font-medium max-w-[80%] text-sm md:text-xl mt-6">
                    More than real estate, we create elevated <br /> living
                    experiences.
                  </p>
                </div>
                <div className="text-white text-xs md:text-sm font-medium">
                  Explore Harlivia Properties →
                </div>
              </div>
            </Link>
          </div>

          {/* Cargo & Logistics Card */}
          <div className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/30 h-[339px]">
            <Link to="/cargo" className="block w-full h-full relative">
              <img
                src={cargo || "/placeholder.svg"}
                alt="Delivery person on motorcycle"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-2xl"></div>
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="py-4 px-2">
                  <span className="px-4 py-2 bg-[#B3E951] text-[#2D3D11] text-sm font-semibold rounded-[8px]">
                    CARGO & LOGISTICS
                  </span>
                  <p className="text-white font-medium max-w-[80%] text-sm md:text-xl mt-6">
                    Seamless, efficient logistics solutions <br /> designed to
                    keep you moving.
                  </p>
                </div>
                <div className="text-white text-xs md:text-sm font-medium">
                  Explore Harlivia Cargo & Logistics →
                </div>
              </div>
            </Link>
          </div>

          {/* Energy Card */}
          <div className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/30 h-[339px]">
            <Link to="/energy" className="block w-full h-full relative">
              <img
                src={energy || "/placeholder.svg"}
                alt="Solar panels at sunset"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-2xl"></div>
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="py-4 px-2">
                  <span className="px-4 py-2 bg-[#B3E951] text-[#2D3D11] text-sm font-semibold rounded-[8px]">
                    ENERGY
                  </span>
                  <p className="text-white font-medium max-w-[80%] text-sm md:text-xl mt-6">
                    Reliable energy solutions that drive progress for <br />{" "}
                    businesses and communities.
                  </p>
                </div>
                <div className="text-white text-xs md:text-sm font-medium">
                  Explore Harlivia Energy →
                </div>
              </div>
            </Link>
          </div>

          {/* Agric Card */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-lg dark:shadow-gray-900/30 h-[339px]">
            <Link to="/agric" className="block w-full h-full relative">
              <img
                src={agric || "/placeholder.svg"}
                alt="Grain products"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-2xl"></div>
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div className="py-4 px-2">
                  <span className="px-4 py-2 bg-[#335CFF] text-white text-sm font-semibold rounded-[8px]">
                    AGRIC
                  </span>
                  <p className="text-white font-medium max-w-[80%] text-sm md:text-xl mt-6">
                    We bring you the finest in quality, taste, <br /> and
                    satisfaction.
                  </p>
                </div>
                <div className="text-white text-xs md:text-sm font-medium">
                  Explore Harlivia Agric →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
