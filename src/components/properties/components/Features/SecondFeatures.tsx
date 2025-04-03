"use client";
import home1 from "../../assets/view.svg";
import home2 from "../../assets/star.svg";
import home3 from "../../assets/const.svg";
import home4 from "../../assets/kitchen.svg";

export default function ValueProposition() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-5 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            Why should you trust us?
          </button>
          <p className="mt-4 text-xl md:text-2xl text-[#1A1A1A] leading-8 dark:text-white">
            At Harlivia, properties aren't just about buildings—they're about
            building the right future for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-3">
          {" "}
          {/* 12px gap */}
          {[
            {
              img: home1,
              title: "We Build What We Sell",
              text: "No middlemen, no hidden flaws. We know our properties inside out because we build them.",
            },
            {
              img: home2,
              title: "We Believe in Quality Over Quantity",
              text: "Every property is crafted with precision, built to stand the test of time, and designed to impress with exceptional quality and attention to detail.",
            },
            {
              img: home3,
              title: "We Handle It All",
              text: "From construction to sales and management, we take care of the hard stuff so you don't have to.",
            },
            {
              img: home4,
              title: "We Take Real Estate Personal",
              text: "This isn't just business for us. It's about creating spaces where people can truly live, grow, and thrive.",
            },
          ].map(({ img, title, text }, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]"
            >
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img src={img} alt={title} />
                </div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
