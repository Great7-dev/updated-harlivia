import pickup from "../assets/shipping.svg";
import home2 from "../assets/star.svg";
import storage from "../assets/store.svg";
import transparent from "../assets/tag.svg";

export default function ValueProposition() {
  return (
    <section className="bg-[#F7F7F7] py-16 md:py-5 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-white transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black">
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
        <div className="grid md:grid-cols-2 gap-3">
          {/* Transparent Pricing */}
          <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img
                  src={transparent || "/placeholder.svg"}
                  alt="Transparent Pricing"
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

          {/* Logistics Partner */}
          <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img
                  src={home2 || "/placeholder.svg"}
                  alt="Logistics Partner"
                />
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

          {/* End-to-End Shipping */}
          <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={pickup} alt="End-to-End Shipping" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  End-to-End Shipping
                </h3>
                <p className="mt-2 text-[#767676] dark:text-white">
                  Whether it's local or international, we streamline the entire
                  shipping process for a hassle-free experience.
                </p>
              </div>
            </div>
          </div>

          {/* Storage & Warehousing */}
          <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]">
            <div className="flex flex-col items-start">
              <div className="mb-4">
                <img src={storage} alt="Storage & Warehousing" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#000000] dark:text-white">
                  Storage & Warehousing Solutions
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
