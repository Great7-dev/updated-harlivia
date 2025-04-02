"use client";
import Logo from "../../assets/world.png";
import Logo2 from "../../assets/world2.png";
import Logo3 from "../../assets/face.png";
import Logo4 from "../../assets/food.png";

export default function ValueProposition() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-24 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="inline-flex items-center px-4 py-2 bg-[#FFFFFF] border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333]   transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:bg-black">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            Why should you trust us?
          </button>
          <p className="mt-4 text-xl md:text-xl text-[#1A1A1A] leading-8 dark:text-white">
            We don’t compromise on quality. What you get is premium, farm-fresh
            produce, <br /> exported straight from our hands to yours.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* We Build from the Ground Up */}
          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo} alt="Logo" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  We Know Our Food’s Origins
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">
                  We work closely with farmers; so, we know exactly what we’re
                  selling.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo2} alt="Logo2" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  Global-Standard Quality
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">
                  Every product is clean, fresh, and meets international export
                  requirements.
                </p>
              </div>
            </div>
          </div>

          {/* We Sell Homes & Investments */}
          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo3} alt="Logo3" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  We Create Opportunities
                </h3>
                <p className="mt-2 text-[#767676]">
                  By linking small-scale farmers to global buyers, we strengthen
                  communities.
                </p>
              </div>
            </div>
          </div>

          {/* We Manage Shortlets */}
          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo4} alt="Logo4" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  Freshness You Can Taste
                </h3>
                <p className="mt-2 text-[#767676]">
                  We ensure minimal handling and maximum quality from the farm
                  to your table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
