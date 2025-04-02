import hero from "../../assets/hero agric.png";

const Hero = () => {
  return (
    <section className="relative h-[100vh] md:h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
      </div>

      {/* Content on top of the image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black z-10 px-4 mb-[25em]">
        <h1 className="text-5xl font-bold mb-2">
          Delivering the Finest in Quality,
        </h1>
        <h1 className="text-5xl font-bold mb-4">Flavour, and Satisfaction</h1>
        <p className="text-lg mb-4 max-w-2xl">
          Africa grows some of the richest, most flavorful produce, but it often
          goes unnoticed globally.
        </p>
        <p className="text-lg mb-6">We're here to change that.</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer">
            Contact Us
          </button>
          <button className="px-5 py-2 text-black rounded-md border border-transparent hover:border-gray-400 transition cursor-pointer">
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
