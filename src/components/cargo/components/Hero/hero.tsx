import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative h-[100vh] md:h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />

        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black z-10 px-4 mb-[25em]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-14">
          <span className="block mb-2">Moving Your Goods with</span>
          <span className="block">Care and Precision</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-[#767676] max-w-2xl mx-auto mb-6">
          When it comes to moving cargo, we don’t do guesswork, we make sure
          your shipments arrive on time, intact, and without unnecessary
          back-and-forth.
        </p>

        <div className="flex space-x-4">
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
