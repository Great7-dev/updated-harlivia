import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Logo from "../assets/bluebulb.svg";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is Harlivia all about?",
      answer:
        "Harlivia is a multi-industry enterprise committed to excellence across Food Production, Real Estate, Energy, and Logistics. We create solutions that improve everyday life - whether it's through quality food, great homes, sustainable energy, or seamless cargo & logistics services.",
    },
    {
      question: "What is Harlivia all about?",
      answer:
        "We specialize in developing innovative solutions across multiple sectors, focusing on sustainability and quality in everything we do. Our integrated approach allows us to create comprehensive solutions that address modern challenges.",
    },
    {
      question: "What is Harlivia all about?",
      answer:
        "Our mission is to enhance daily living through thoughtful innovation and sustainable practices. We believe in creating lasting value for our customers and communities across all our business sectors.",
    },
    {
      question: "What is Harlivia all about?",
      answer:
        "As a forward-thinking company, we invest in cutting-edge technologies and sustainable practices to ensure we deliver the best possible solutions in food production, real estate development, energy solutions, and logistics services.",
    },
    {
      question: "What is Harlivia all about?",
      answer:
        "We're committed to building a better future through our diverse portfolio of services and solutions. Our integrated approach allows us to create synergies across industries while maintaining the highest standards of quality and sustainability.",
    },
  ];

  return (
    <div className="w-full bg-[#F7F7F7] px-4 py-12 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="bg-white w-full rounded-lg shadow-sm overflow-hidden dark:bg-black min-h-[495px] flex flex-col lg:flex-row relative">
          {/* Button (Inline on Mobile, Absolute on Larger Screens) */}
          <div className="w-full flex justify-start lg:absolute lg:top-6 lg:left-6">
            <button className="flex items-center gap-2 bg-[#F7F7F7] rounded-lg px-4 py-2 dark:bg-black">
              <div className="w-2 h-2 rounded-full bg-[#4CAF50]"></div>
              <h2 className="text-[#333333] text-sm md:text-base lg:text-lg font-semibold dark:text-white">
                Frequently Asked Questions
              </h2>
            </button>
          </div>

          {/* Image Section (Centers on Mobile, Moves Right on Larger Screens) */}
          <div className="w-full flex justify-center items-center lg:w-auto lg:order-2 mt-6 lg:mt-0">
            <img
              src={Logo}
              alt="Blue light bulb illustration"
              className="max-w-[80%] sm:max-w-[60%] lg:max-w-full h-auto object-contain"
            />
          </div>

          {/* FAQ Section (Spacing Adjusted for Mobile) */}
          <div className="px-4 lg:p-8 flex flex-col justify-center lg:flex-1 space-y-6 mt-6 lg:mt-14">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-[#000000] font-medium dark:text-white text-sm md:text-base lg:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#767676] font-light dark:text-white text-xs md:text-sm lg:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
