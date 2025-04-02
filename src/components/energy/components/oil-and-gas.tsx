import moneyicon from "../assets/money.svg";
import oilwell from "../assets/hook.svg";
import oilcar from "../assets/car.svg";
import refinery from "../assets/Refinery SVG Icons 1.png";

export default function OilAndGasSection() {
  return (
    <section className="bg-[#1A1A1A] text-white relative overflow-hidden py-12 px-4 md:px-8 lg:px-12">
      {/* Background illustration */}
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none hidden md:block">
        <img
          // src="/placeholder.svg?height=400&width=300"
          src={refinery}
          alt="Oil and gas infrastructure illustration"
          width={300}
          height={400}
          className="object-contain h-full w-full"
        />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-medium mb-3">
          What we do
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Oil & Gas</h2>

        <p className="max-w-2xl mb-12 text-gray-300">
          The oil & gas sector is complex, but we make it simple. We don’t just
          trade petroleum products; we finance E&P projects, explore and ensure
          a steady supply.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-[#333333] rounded-lg p-6 relative">
            <div className="text-4xl font-bold text-[#D1D1D1] mb-8 text-right">
              01
            </div>
            <div className="text-blue-400 mb-4">
              {/* <DropletIcon size={32} className="fill-blue-400" /> */}
              <img src={moneyicon} alt="" />
            </div>
            <h3 className="text-xl font-bold mb-3">Project Financing</h3>
            <p className="text-sm text-[#F9F9F9]">
              Helping businesses secure funding to finance projects across the
              oil and gas value chain.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#333333] rounded-lg p-6 relative">
            <div className="text-4xl font-bold text-[#D1D1D1] mb-8 text-right">
              02
            </div>
            <div className="text-blue-400 mb-4">
              <img src={oilwell} alt="" />
            </div>
            <h3 className="text-xl font-bold mb-3">
              Asset Development Financing
            </h3>
            <p className="text-sm text-[#F9F9F9]">
              Backing businesses that need capital to finance asset development
              and expansion projects.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#333333] rounded-lg p-6 relative">
            <div className="text-4xl font-bold text-[#D1D1D1] mb-8 text-right">
              03
            </div>
            <div className="text-blue-400 mb-4">
              {/* <Truck size={32} /> */}
              <img src={oilcar} alt="" />
            </div>
            <h3 className="text-xl font-bold mb-3">Direct Sales & Delivery</h3>
            <p className="text-sm text-[#F9F9F9]">
              We supply premium petroleum products straight to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
