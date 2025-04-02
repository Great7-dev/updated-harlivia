import home1 from "../../assets/Rectangle.png";
import home2 from "../../assets/Rectangle (1).png";
import home3 from "../../assets/Rectangle (2).png";
import home4 from "../../assets/Rectangle (3).png";

export default function ValueProposition() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-24 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent  transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            Why should you trust us?
          </button>
          <p className="mt-4 text-xl md:text-2xl text-[#1A1A1A] leading-8 dark:text-white">
            At Harlivia, properties aren't just about buildings—they're about
            building the right future for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* We Build from the Ground Up */}
          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={home1 || "/placeholder.svg"} alt="Building icon" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  We Build What We Sell
                </h3>
                <p className="mt-2 text-[#767676]">
                  No middlemen, no hidden flaws. We know our properties inside
                  out because we build them.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={home2 || "/placeholder.svg"} alt="Building icon" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  We Believe in Quality Over Quantity
                </h3>
                <p className="mt-2 text-[#767676]">
                  Every property is crafted with precision, built to stand the
                  test of time, and designed to impress with exceptional quality
                  and attention to detail.
                </p>
              </div>
            </div>
          </div>

          {/* We Sell Homes & Investments */}
          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={home3} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  We Handle It All
                </h3>
                <p className="mt-2 text-[#767676]">
                  From construction to sales and management, we take care of the
                  hard stuff so you don't have to.
                </p>
              </div>
            </div>
          </div>

          {/* We Manage Shortlets */}
          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={home4} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  We Take Real Estate Personal
                </h3>
                <p className="mt-2 text-[#767676]">
                  This isn't just business for us. It's about creating spaces
                  where people can truly live, grow, and thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
