import frame2 from "../assets/Frame 6.png";
import frame4 from "../assets/Frame 11.png";
import frame5 from "../assets/image1.png";
import frame6 from "../assets/image2.png";
import { Link } from "react-router-dom";
const BentoGrid = () => {
  return (
    <section className="w-full py-12 bg-[#F7F7F7] dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Header Text */}

        <div className="text-center mb-10">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent  transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            Who we are
          </button>

          <p className="text-gray-800 max-w-3xl mx-auto text-sm md:text-base leading-relaxed dark:text-white">
            At Harlivia, we believe in creating value through innovation and
            ]excellence. With a diverse portfolio spanning Agricultural
            Production & Exports, Real Estate, Energy, and Logistics, our
            mission is to provide premium solutions that elevate lifestyles,
            empower businesses, and deconstruct barriers across borders.
          </p>
        </div>

        <div className="text-center mb-8">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent  transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            What we have to offer
          </button>

          <p className="text-gray-800 max-w-3xl mx-auto text-sm md:text-base leading-relaxed dark:text-white">
            Whether it's bringing joy through good food, helping you find the
            perfect home, powering communities with sustainable energy and //
            affordable metering solutions, or getting your goods where they need
            to be, we do it with passion and purpose.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Properties Card */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden">
            <Link to="/properties">
              <div className="w-full h-full md:aspect-auto cursor-pointer">
                <img
                  src={frame2 || "/placeholder.svg"}
                  alt="Modern building interior"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </Link>
          </div>

          {/* Cargo & Logistics Card */}
          <div className="md:col-span-7 relative rounded-2xl overflow-hidden">
            <Link to="/cargo">
              <div className="w-full h-full md:aspect-auto cursor-pointer">
                <img
                  src={frame6 || "/placeholder.svg"}
                  alt="Delivery person on motorcycle"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </Link>
          </div>

          {/* Energy Card */}
          <div className="md:col-span-7 relative rounded-2xl overflow-hidden">
            <Link to="/energy">
              <div className="w-full h-full md:aspect-auto cursor-pointer">
                <img
                  src={frame5 || "/placeholder.svg"}
                  alt="Solar panels at sunset"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </Link>
          </div>

          {/* Agric Card */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden">
            <Link to="/agric">
              <div className="w-full h-full md:aspect-auto cursor-pointer">
                <img
                  src={frame4 || "/placeholder.svg"}
                  alt="Grain products"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
