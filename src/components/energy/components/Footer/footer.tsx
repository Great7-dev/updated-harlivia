const FooterSection = () => {
  return (
    <footer className="relative text-white py-6 px-4 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-1/2 before:h-1/3 before:bg-green-300 before:rounded-full before:blur-3xl before:opacity-50 before:-z-10 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-1/2 after:h-1/3 after:bg-blue-300 after:rounded-full after:blur-3xl after:opacity-50 after:-z-10">
      {/* Main content section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-black dark:text-white">
            Let's Work Together!
          </h2>
          <p className="text-[#767676] max-w-3xl mx-auto text-center dark:text-white">
            Whether you're looking for premium real estate, quality agricultural
            produce, innovative energy solutions, or reliable cargo & logistics
            services, Hartivia is here to serve you.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <a
            href="#"
            className="bg-[#335CFF] text-white py-3 px-8 rounded-[10px] font-medium"
          >
            Get in touch
          </a>
        </div>

        <hr className="border-[#E1E4EA] mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gray-800 font-medium uppercase text-sm mb-4 dark:text-white">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#1A1A1A] font-medium text-xl dark:text-white"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#1A1A1A] font-medium text-xl dark:text-white"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium uppercase text-sm mb-4 dark:text-white">
              WHAT WE OFFER
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#1A1A1A] font-medium text-xl dark:text-white"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#1A1A1A] font-medium text-xl dark:text-white"
                >
                  Agric
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#1A1A1A] font-medium text-xl dark:text-white"
                >
                  Cargo & Logistics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#1A1A1A] font-medium text-xl dark:text-white"
                >
                  Energy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium uppercase text-sm mb-4 dark:text-white">
              LEGAL
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#1A1A1A] font-medium text-xl dark:text-white"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#1A1A1A] font-medium text-xl dark:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium uppercase text-sm mb-4 dark:text-white">
              STAY CONNECTED
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-600 hover:text-blue-600 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-600 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-600 hover:text-blue-600 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-600 hover:text-blue-600 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to right, #B4EE4C, #005FB8)",
          opacity: "0.1",
        }}
      />
    </footer>
  );
};

export default FooterSection;
