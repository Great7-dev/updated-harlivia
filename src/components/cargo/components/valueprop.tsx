import pickup from "../assets/pickup.png";
import home2 from "../assets/Rectangle (1).png";
import storage from "../assets/storage.png";
import transparent from "../assets/transparent.png";

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
          <p className="mt-4 text-xl md:text-xl text-[#1A1A1A] leading-8 dark:text-white">
            You won’t have to figure out where your goods are or worry about
            unexpected storage issues. We know the terrain, we know the process,
            and we get it done.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* We Build from the Ground Up */}
          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img
                  src={transparent || "/placeholder.svg"}
                  alt="Building icon"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  Transparent Pricing
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">
                  We provide cost-effective logistics solutions with full
                  transparency, so you always know what you're paying for.
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
                  A Logistics Partner that Delivers
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">
                  From pickup to final delivery, we ensure your shipments arrive
                  safely and on time, giving you peace of mind every step of the
                  way.
                </p>
              </div>
            </div>
          </div>

          {/* We Sell Homes & Investments */}
          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={pickup} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  End-to-End Shipping
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">
                  Whether It’s local or international, we streamline the entire
                  shipping process for a hassle-free experience.
                </p>
              </div>
            </div>
          </div>

          {/* We Manage Shortlets */}
          <div className="bg-white p-8 rounded-lg shadow-sm dark:bg-[#E2E2E240]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={storage} alt="" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  Storage & Warehousing Solutions{" "}
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">
                  Our secure, standard warehouses keep your inventory organized
                  and ready for dispatch anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
