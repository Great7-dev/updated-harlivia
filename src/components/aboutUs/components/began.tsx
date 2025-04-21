const Began = () => {
  return (
    <div className="dark:bg-black px-4 md:px-[100px] py-[56px]">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-90 max-w-[1480px] mx-auto">
        {/* Badge on the left */}
        <button className="inline-flex whitespace-nowrap items-center px-4 py-2 bg-[#F5F5F5]  border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black dark:bg-black">
          <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2 "></span>
          Where It All Began{" "}
        </button>

        {/* Text on the right */}
        <p className="text-[32px] leading-relaxed dark:text-white text-gray-400">
          We started with one{" "}
          <span className="text-black dark:text-gray-300">idea</span>: that
          <span className="text-black dark:text-gray-300">
            {" "}
            Africans everywhere
          </span>{" "}
          deserve more access.{" "}
          <span className="text-black dark:text-gray-300">More dignity</span> in
          where they live.{" "}
          <span className="text-black dark:text-gray-300">More efficiency</span>{" "}
          in how they move goods.{" "}
          <span className="text-black dark:text-gray-300">More trust</span> in
          how they receive energy.{" "}
          <span className="text-black dark:text-gray-300"> More options</span>{" "}
          for how they eat, build, and invest.
        </p>
      </div>
    </div>
  );
};

export default Began;
