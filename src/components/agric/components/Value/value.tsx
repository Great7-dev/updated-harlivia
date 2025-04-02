"use client";
import Logo from "../../assets/world2.svg";
import Logo2 from "../../assets/world.svg";
import Logo3 from "../../assets/face.svg";
import Logo4 from "../../assets/food.svg";

export default function ValueProposition() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-5 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="inline-flex items-center px-4 py-2 bg-white border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:bg-black">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            Why should you trust us?
          </button>
          <p className="mt-4 text-xl md:text-xl text-[#1A1A1A] leading-8 dark:text-white">
            We don’t compromise on quality. What you get is premium, farm-fresh
            produce, <br /> exported straight from our hands to yours.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-3">
          {" "}
          {/* Ensuring 12px (3 in Tailwind) gap between cards */}
          {/* Card Component */}
          {[
            {
              logo: Logo,
              title: "We Know Our Food’s Origins",
              text: "We work closely with farmers; so, we know exactly what we’re selling.",
            },
            {
              logo: Logo2,
              title: "Global-Standard Quality",
              text: "Every product is clean, fresh, and meets international export requirements.",
            },
            {
              logo: Logo3,
              title: "We Create Opportunities",
              text: "By linking small-scale farmers to global buyers, we strengthen communities.",
            },
            {
              logo: Logo4,
              title: "Freshness You Can Taste",
              text: "We ensure minimal handling and maximum quality from the farm to your table.",
            },
          ].map(({ logo, title, text }, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-gray-200 rounded-lg shadow-md dark:bg-[#E2E2E240] dark:border-gray-600"
            >
              <div className="flex flex-col items-start">
                <div className="mb-4">
                  <img src={logo} alt={title} />
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
