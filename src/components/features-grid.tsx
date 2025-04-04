import badge from "../assets/badge.svg";
import Thumb from "../assets/Thumb.svg";
import bulb from "../assets/bulb.svg";
import man from "../assets/man.svg";
import rocket from "../assets/rocket.svg";

const FeaturesGrid = () => {
  const features = [
    {
      icon: badge,
      title: "Quality You Can Trust",
      description:
        "We only partner with brands you can trust. Our rigorous quality control ensures that every product meets our high standards before it reaches your home.",
    },
    {
      icon: Thumb,
      title: "Reliability Every Step of the Way",
      description:
        "We have built our reputation on consistency and dependability. From order to delivery, we ensure a seamless experience every time.",
    },
    {
      icon: bulb,
      title: "Innovation That Matters",
      description:
        "We're not just about today, we're building solutions that will serve you better tomorrow. Our innovations are practical and purposeful.",
    },
    {
      icon: man,
      title: "People First, Always",
      description:
        "Behind every service, every product, every success story is our commitment to people. We care, and we take care of our customers.",
    },
    {
      icon: rocket,
      title: "A Sustainable Future",
      description:
        "We're committed to sustainable practices that minimize our carbon footprint. Future-minded people and businesses choose us for the value this creates.",
    },
  ];

  return (
    <section className="w-full py-12 bg-[#F7F7F7] dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          {/* Badge Section */}
          <div className="flex justify-center mb-3">
            {" "}
            {/* Added mb-3 for spacing */}
            <button className="inline-flex items-center px-4 py-2 border border-[#E8E8E8] text-[18px] leading-[24px] font-medium rounded-md text-[#333333] bg-white transition-colors dark:text-white dark:border-white/20 hover:bg-[#F5F7FA] dark:hover:bg-black dark:bg-black">
              <span className="w-2 h-2 bg-[#B4EE4C] rounded-full mr-2"></span>
              Why should you trust us?
            </button>
          </div>

          {/* Body Text */}
          <p className="text-[24px] text-[#1A1A1A] max-w-3xl mx-auto dark:text-white">
            We are committed to delivering world-class products and services,
            maintaining the highest standards of quality, and driving positive
            transformation across the industries within which we do business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-100 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]"
            >
              <div className="flex flex-col items-start">
                <div className="mb-2 p-3">
                  <img
                    src={feature.icon || "/placeholder.svg"}
                    alt=""
                    className="w-12 h-16"
                  />
                </div>
                <h3 className="text-[24px] font-bold mb-2 text-black dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-[16px] font-medium text-[#767676] dark:text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 2 centered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <div
              key={index + 3}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-[0px_2px_6px_rgba(0,0,0,0.12)] transition-all dark:bg-[#E2E2E240] dark:border-gray-700 dark:shadow-[0px_2px_6px_rgba(255,255,255,0.12)]"
            >
              <div className="flex flex-col items-start">
                <div className="mb-2 p-3">
                  <img
                    src={feature.icon || "/placeholder.svg"}
                    alt=""
                    className="w-12 h-16"
                  />
                </div>
                <h3 className="text-[24px] font-bold mb-2 text-black dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-[16px] font-medium text-[#767676] dark:text-white">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
