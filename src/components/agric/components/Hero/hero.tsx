import { useState } from "react";
import { ContactDialog } from "../../../contact-dialog";
import { PartnerDialog } from "../../../partner-dialog";
import hero from "../../assets/hero agric.png";

const Hero = () => {
  const [isPartnerDialogOpen, setIsPartnerDialogOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const handlePartnerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPartnerDialogOpen(true);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactDialogOpen(true);
  };
  return (
    <section className="relative h-[100vh] md:h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 dark:bg-black/60" />
      </div>

      {/* Content on top of the image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black z-10 px-4 mb-[25em]">
        <h1 className="text-4xl font-bold mb-2 dark:text-[#F5F5F5]">
          Delivering the Finest in Quality,
        </h1>
        <h1 className="text-4xl font-bold mb-4 dark:text-[#F5F5F5]">
          Flavour, and Satisfaction
        </h1>
        <p className="text-lg mb-4 dark:text-white">
          Africa grows some of the richest, most flavorful produce, but it often
          goes unnoticed globally. <br />
          We're here to change that.
        </p>
        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer"
            onClick={handleContactClick}
          >
            Contact Us
          </button>
          <button
            className="px-5 py-2 text-black rounded-md border bg-[#F5F5F5] hover:border-gray-400 transition cursor-pointer"
            onClick={handlePartnerClick}
          >
            Partner with Us
          </button>
        </div>
      </div>
      <PartnerDialog
        open={isPartnerDialogOpen}
        onOpenChange={setIsPartnerDialogOpen}
      />
      <ContactDialog
        open={isContactDialogOpen}
        onOpenChange={setIsContactDialogOpen}
      />
    </section>
  );
};

export default Hero;
