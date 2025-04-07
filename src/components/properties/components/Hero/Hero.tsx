import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative h-[100vh] md:h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 dark:bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-3xl mx-auto px-4 text-center -translate-y-30">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-14 dark:text-[#F5F5F5]">
          <span className="block mb-2">Redefining Luxury</span>
          <span className="block">One Home at a Time</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-[#767676] max-w-2xl mx-auto dark:text-white">
          We&apos;re builders, creators and visionaries who take an empty plot
          of land and turn it into something worth living in, worth investing
          in, and worth calling home.
        </p>

        <div className="flex space-x-4 mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer">
            Contact Us
          </button>
          <button className="px-5 py-2 text-black rounded-md border bg-[#F5F5F5] hover:border-gray-400 transition cursor-pointer">
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  );
}
