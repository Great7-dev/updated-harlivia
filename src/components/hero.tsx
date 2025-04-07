import { useState } from "react";
import EcosystemModal from "./ecosystemModal";

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 dark:bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight dark:text-white font-neue">
            Building Better Lives Through <br /> Innovation, Excellence, and
            Impact.
          </h1>

          <p className="text-sm md:text-base text-gray-800 max-w-3xl dark:text-white font-neue">
            From quality organic farm produce and luxury real estate to
            sustainable energy and seamless logistics, Harlivia’s mission is to
            transform industries and enrich everyday life experiences for
            everyone across Africa and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button
              className="px-6 py-3 rounded-md bg-[#335CFF] whitespace-nowrap text-white font-medium hover:bg-[#335CFF]/90 transition-colors dark:text-white cursor-pointer w-full"
              onClick={() => setShowModal(true)}
            >
              Explore Our Ecosystem
            </button>

            <button className="px-6 py-3 rounded-md text-gray-800 whitespace-nowrap dark:border-white border bg-[#F5F5F5] font-medium cursor-pointer transition-colors dark:text-white dark:bg-black">
              Partner with Us
            </button>
          </div>
          <EcosystemModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      </div>
    </div>
  );
}
