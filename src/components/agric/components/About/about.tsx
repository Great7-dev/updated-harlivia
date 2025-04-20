import Logo from "../../assets/leave.svg";
import Logo2 from "../../assets/quality.svg";
import Logo3 from "../../assets/box.svg";
import Logo4 from "../../assets/Shipping.svg";

const About = () => {
  return (
    <section className="bg-white py-16 md:py-24 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] bg-[#F5F5F5] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black dark:bg-black">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            What we do
          </button>
          <p className="mt-4 text-xl md:text-2xl text-[#1A1A1A] leading-8 dark:text-white">
            We work directly with local farmers, carefully selecting and
            aggregating the best crops, fruits, and spices, ensuring they meet
            international standards.
          </p>
        </div>

        {/* Featured Card - Full Width */}
        <div className="bg-[#E2E2E240] rounded-lg shadow-sm flex flex-col md:flex-row items-center justify-between mb-3">
          {/* Text Content */}
          <div className="flex flex-col items-start md:w-2/3 max-w-[568px] p-8">
            <div className="mb-4">
              <img
                src={Logo || "/placeholder.svg"}
                alt="Logo"
                className="w-10"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                Sourcing with care
              </h3>
              <p className="mt-2 text-[#767676] dark:text-white">
                We partner with dedicated farmers who take pride in what they
                grow. Every batch of produce is handpicked for quality,
                freshness, and taste.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-[500px] p-[8px]">
            <img
              src={Logo2}
              alt="Logo2"
              className="w-[500px] h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Additional Feature Cards */}
        <div className="grid md:grid-cols-2 gap-[12px]">
          {/* Processing & Packaging */}
          <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img
                  src={Logo3}
                  alt="Processing & Packaging"
                  className="w-10"
                />
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

          {/* Shipping Beyond Borders */}
          <div className="bg-[#E2E2E240] p-8 rounded-lg shadow-sm">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img
                  src={Logo4}
                  alt="Shipping Beyond Borders"
                  className="w-10"
                />
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
