import { useState } from "react";
import { ContactDialog } from "../../../contact-dialog";
import { PartnerDialog } from "../../../partner-dialog";
import hero from "../../assets/hero.png";
export default function Hero() {
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
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 dark:bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-3xl mx-auto px-4 text-center -translate-y-30">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-14 dark:text-[#F5F5F5]">
          <span className="block mb-2">Unstoppable Power That</span>
          <span className="block">Drives You Forward</span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-[#767676] max-w-2xl mx-auto dark:text-white">
          Power is more than electricity. It’s the fuel that keeps businesses
          running, homes comfortable and happy, and industries thriving. At
          Harlivia Energy, we don’t just sell energy; we innovate solutions that
          work for you.
        </p>

        <div className="flex space-x-4 mt-6">
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
}
