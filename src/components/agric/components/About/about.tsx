import Logo from "../../assets/leave.png";
import Logo2 from "../../assets/quality.png";
import Logo3 from "../../assets/box.png";
import Logo4 from "../../assets/Shipping.png";
const About = () => {
  return (
    <section className="bg-white py-16 md:py-24 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent  transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            What we do
          </button>
          <p className="mt-4 text-xl md:text-2xl text-[#1A1A1A] leading-8 dark:text-white">
            We work directly with local farmers, carefully selecting and
            aggregating the best crops, fruits, and spices, ensuring they meet
            international standards.{" "}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* We Build from the Ground Up */}
          <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo || "/placeholder.svg"} alt="Logo" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  {" "}
                  Sourcing with care
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">
                  We partner with dedicated farmers who take pride in what they
                  grow. Every batch of produce is handpicked for quality,
                  freshness, and taste.
                </p>
              </div>
            </div>
          </div>

          {/* 100% Quality Projects */}
          <div className="bg-[#E2E2E240] overflow-hidden">
            <div className="relative h-full">
              <img
                src={Logo2}
                alt="Logo2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* We Sell Homes & Investments */}
          <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo3} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  Processing & Packaging
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">
                  From drying and sorting to packaging, we treat our food with
                  respect, using the latest technology to keep it fresh, safe,
                  and ready for export.
                </p>
              </div>
            </div>
          </div>

          {/* We Manage Shortlets */}
          <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={Logo4} alt="Logo4" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  Shipping Beyond Borders
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">
                  Whether it’s grains, fruits, or spices, we ensure seamless
                  delivery to wholesalers, retailers, and manufacturers
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
