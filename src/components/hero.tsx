import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20 dark:bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight dark:text-white">
            Building Better Lives Through Innovation, Excellence, and Impact.
          </h1>

          <p className="text-sm md:text-base text-[#767676] max-w-3xl dark:text-white">
            From quality organic farm produce and luxury bed linens to
            sustainable energy and seamless logistics, the Kora mission is to
            transform industries and enrich everyday life experiences for
            everyone across Africa and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <Link to="/properties">
              <button className="px-6 py-3 rounded-md bg-[#335CFF] text-white font-medium hover:bg-[#335CFF]/90 transition-colors dark:text-white cursor-pointer w-full">
                Explore Our Ecosystem
              </button>
            </Link>

            <button className="px-6 py-3 rounded-md text-gray-800 dark:border-white border bg-[#F5F5F5] font-medium cursor-pointer transition-colors dark:text-white">
              Partner with Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
