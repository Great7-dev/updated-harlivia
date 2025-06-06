import { Button } from "../../ui/button";


const Footer = () => {
  return (
    <footer className="relative bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative container mx-auto px-4 pt-16 pb-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[48px] font-bold mb-4 text-[#000000] dark:text-white">
            Let's Work Together!
          </h2>
          <p className="text-black dark:text-white mb-6 text-[18px]">
            Whether you're looking for premium real estate, quality agricultural
            produce, innovative energy solutions, or reliable cargo & logistics
            services, Harlivia is here to serve you.
          </p>
          <Button className="bg-[#005FB8] hover:bg-blue-700 text-white px-8 dark:bg-blue-600 dark:hover:bg-blue-700 text-[18px]">
            Get in touch
          </Button>
        </div>
      </div>
      {/* Gradient Background */}
      <div className="relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, #B4EE4C 0%, #005FB8 100%)",
            opacity: 0.4,
            filter: "blur(150px)",
          }}
        />
        {/* Call to Action Section */}
        {/* Keep the container relative to ensure it sits above the absolute gradient div */}
        <div className="relative container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-4 border-t border-gray-300 dark:border-gray-800">
            {" "}
            {/* Added light mode border color */}
            {/* Company Column */}
            <div>
              <h3 className="text-[16px] tracking-[0.06em] mb-4 text-sm text-[#1A1A1A] dark:text-gray-400">
                COMPANY
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[#1A1A1A] dark:text-gray-200 font-medium text-[18px] hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1A1A1A] dark:text-gray-200 font-medium text-[18px] hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            {/* What We Offer Column */}
            <div>
              <h3 className="text-[16px] tracking-[0.06em] mb-4 text-sm text-[#1A1A1A] dark:text-gray-400">
                WHAT WE OFFER
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[#1A1A1A] dark:text-gray-200 font-medium text-[18px] hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1A1A1A] dark:text-gray-200 font-medium text-[18px] hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Agric
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1A1A1A] dark:text-gray-200 font-medium text-[18px] hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Cargo & Logistics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1A1A1A] dark:text-gray-200 font-medium text-[18px] hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Energy
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal Column */}
            <div>
              <h3 className="text-[16px] tracking-[0.06em] mb-4 text-sm text-[#1A1A1A] dark:text-gray-400">
                LEGAL
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-[#1A1A1A] dark:text-gray-200 font-medium text-[18px] hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#1A1A1A] dark:text-gray-200 font-medium text-[18px] hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            {/* Stay Connected Column */}
            <div>
              <h3 className="text-[16px] tracking-[0.06em] mb-4 text-sm text-[#1A1A1A] dark:text-gray-400">
                STAY CONNECTED
              </h3>
              <div className="flex space-x-4">
                {/* SVG Icons... */}
                <a
                  href="#"
                  className="text-[#1A1A1A] dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {" "}
                  {/* Removed font-bold and text-[16px] from icon wrapper */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="text-[#1A1A1A] dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="text-[#1A1A1A] dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="text-[#1A1A1A] dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
