import group1 from "../assets/Group (1).png";
import money from "../assets/Money Bag Icon (1) 1.png";
import oilicon from "../assets/Oil Well Icon 1.png";
import oilttruck from "../assets/Oil Truck Icon 1.png";

export default function SolarEnergySection() {
  return (
    <div className="mx-auto px-4 py-12 max-w-7xl">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 dark:text-white">
            Solar Energy
          </h1>
          <p className="text-[#767676] leading-relaxed dark:text-white">
            We bring solar energy straight to your doorstep; surveyed, supplied,
            and installed by us. No third-party stress, no overpromises—just a
            system that works.
          </p>
        </div>
        <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0">
          <img
            src={group1}
            alt="Solar Panel Icon"
            width={273}
            height={259.34}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="relative p-6 bg-[#E2E2E240] rounded-lg border border-[#F5F5F5] shadow-[0_4px_20px_0_#E2E2E240]">
          <div className="text-6xl font-light text-[#D1D1D1] absolute top-4 right-4 dark:text-white">
            01
          </div>
          <div className="mb-4">
            <img src={money} alt="" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">
            Solar Panel Supply
          </h3>
          <p className="text-[#767676] dark:text-white">
            We source high-quality, long-lasting solar panels for homes and
            businesses.
          </p>
        </div>

        {/* Service 2 */}
        <div className="relative p-6 bg-[#E2E2E240] rounded-lg border border-[#F5F5F5] shadow-[0_4px_20px_0_#E2E2E240]">
          <div className="text-6xl font-light text-[#D1D1D1] absolute top-4 right-4 dark:text-white">
            02
          </div>
          <div className="text-blue-600 mb-4">
            <img src={oilicon} alt="" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Installation & Setup
          </h3>
          <p className="text-[#767676] dark:text-white">
            Our team doesn't just sell panels, we install and optimize them for
            maximum efficiency.
          </p>
        </div>

        {/* Service 3 */}
        <div className="relative p-6 bg-[#E2E2E240] rounded-lg border border-[#F5F5F5] shadow-[0_4px_20px_0_#E2E2E240]">
          <div className="text-6xl font-light text-[#D1D1D1] absolute top-4 right-4 dark:text-white">
            03
          </div>
          <div className="mb-4">
            <img src={oilttruck} alt="" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">
            Battery & Inverter Systems
          </h3>
          <p className="text-[#767676] dark:text-white">
            We'll provide you with the right storage and conversion for
            round-the-clock electricity.
          </p>
        </div>
      </div>
    </div>
  );
}
