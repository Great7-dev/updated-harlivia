import home from "../assets/view.svg";
import home2 from "../assets/chain.svg";
import man from "../assets/const.svg";
import hands from "../assets/hands.svg";

export default function BusinessSolutions() {
  return (
    <div className="bg-[#F7F7F7] dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-transparent  transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black">
            <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
            Why should you trust us?
          </button>
          <p className="mt-4 text-gray-800 text-lg max-w-2xl mx-auto dark:text-white">
            At the end of the day, it's not just about energy—it's about keeping
            life and business moving, without unnecessary stress.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Card 1 */}
          <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]">
            <div className="mb-4">
              <img src={home} alt="End-to-end Solutions" />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-2">
              End-to-end Solutions
            </h3>
            <p className="text-[#767676] text-sm dark:text-white">
              From power and petroleum to renewable energy, we bring all your
              energy needs together under one roof.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]">
            <div className="mb-4">
              <img src={home2} alt="Reliable Supply Chain" />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-2">
              Reliable Supply Chain
            </h3>
            <p className="text-[#767676] text-sm dark:text-white">
              We keep things running smoothly, so you don't have to worry about
              shortages.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]">
            <div className="mb-4">
              <img src={man} alt="Scalable Options" />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-2">
              Scalable Options
            </h3>
            <p className="text-[#767676] text-sm dark:text-white">
              Do you need metering solutions for your home, a fueling solution
              for your business, or funding for an oil and gas project, we have
              you covered.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]">
            <div className="mb-4">
              <img src={hands} alt="Expert Financing" />
            </div>
            <h3 className="text-xl font-semibold text-[#000000] mb-2">
              Expert Financing
            </h3>
            <p className="text-[#767676] text-sm dark:text-white">
              Providing businesses with the support they need to secure capital
              in a demanding, capital-intensive industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
