const Whoweare = () => {
  return (
    <div className="dark:bg-black px-4 md:px-0 py-[56px]">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-90 max-w-[1480px] mx-auto">
        {/* Badge on the left */}
        <button className="inline-flex whitespace-nowrap items-center px-4 py-2 bg-[#F5F5F5] border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] dark:text-white dark:border-white/20 dark:bg-[#1a1a1a]">
          <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
          Who we are?
        </button>

        {/* Text on the right */}
        <p className="text-[32px] leading-relaxed dark:text-white">
          At Harlivia, we believe in creating value through innovation and{" "}
          excellence. With a diverse portfolio spanning Agricultural Production
          & Exports, Real Estate, Energy, and Logistics, our mission is to
          provide premium solutions that elevate lifestyles, empower businesses,
          and deconstruct barriers across borders.
        </p>
      </div>
    </div>
  );
};

export default Whoweare;
