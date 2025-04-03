const Whoweare = () => {
  return (
    <div className="text-center dark:bg-black px-4 md:px-0">
      {/* Button - Left aligned */}
      <div className="flex justify-start md:pl-52">
        <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black">
          <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
          Who we are
        </button>
      </div>

      {/* Paragraph - Centered container, left-aligned text */}
      <p className="max-w-3xl mx-auto text-left text-lg md:text-[32px] leading-relaxed dark:text-white px-4 md:px-0">
        At Harlivia, we believe in creating value through innovation and
        excellence. With a diverse portfolio spanning Agricultural Production &
        Exports, Real Estate, Energy, and Logistics, our mission is to provide
        premium solutions that elevate lifestyles, empower businesses, and
        deconstruct barriers across borders.
      </p>
    </div>
  );
};

export default Whoweare;
