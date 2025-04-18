"use client";
import image from "../../../assets/Frame 36895.png";
import image2 from "../assets/Frame 36907.svg";
const Hero = () => {
  return (
    <div className="w-full bg-white dark:bg-black">
      {/* Full-width image with fade effect */}
      <div className="relative w-full mt-0 sm:-mt-35 overflow-hidden">
        <img
          src={image}
          alt="image"
          className="w-full object-cover max-h-[250px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[500px] dark:brightness-0 "
        />
        {/* Gradient overlay at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-white dark:from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl mt-6 sm:mt-8">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight dark:text-white font-neue">
            Driven by Purpose, Built for Impact
          </h1>
          <p className="text-base sm:text-lg text-gray-800 dark:text-white font-neue">
            A multi-venture enterprise committed to delivering quality,
            reliability, and transformation <br className="hidden sm:block" />
            across Africa.
          </p>
        </div>
      </div>

      {/* Centered second image */}
      <div className="w-[92vw] sm:w-[85vw] md:w-[77vw] px-0 mt-6 sm:mt-8 mx-auto relative rounded-md overflow-hidden">
        <img src={image2} alt="image2" className="w-full h-auto object-cover" />
        <div className="absolute inset-0 dark:bg-black/60 pointer-events-none" />
      </div>
    </div>
  );
};

export default Hero;
