"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { ModeToggle } from "../../../lib/mode-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 z-[50] relative">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-2">
            <a href="/" className="flex items-center">
              <img src={logo} alt="logo" className="h-8 w-8" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-2">
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                What we offer{" "}
                <ChevronDown className="ml-1 h-4 w-4 leading-[24px]" />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-[900px] rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 z-10">
                  <div className="p-4 grid grid-cols-3 gap-4">
                    <a
                      href="/properties"
                      className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-blue-600 dark:text-blue-400">
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
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path d="M3 9h18"></path>
                          </svg>
                        </span>
                        <div>
                          <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                            Properties
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            We do more than just real estate, We create elevated
                            living experiences.
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/cargo"
                      className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-green-600 dark:text-green-400">
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
                          >
                            <path d="M4 11a9 9 0 0 1 9 9"></path>
                            <path d="M4 4a16 16 0 0 1 16 16"></path>
                            <circle cx="5" cy="19" r="2"></circle>
                          </svg>
                        </span>
                        <div>
                          <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                            Cargo & Logistics
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Our expertise ensures that your goods reach their
                            destination safely and on time.
                          </div>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/energy"
                      className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-amber-500 dark:text-amber-400">
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
                          >
                            <circle cx="12" cy="12" r="5"></circle>
                            <path d="M12 1v2"></path>
                            <path d="M12 21v2"></path>
                            <path d="M4.2 4.2l1.4 1.4"></path>
                            <path d="M18.4 18.4l1.4 1.4"></path>
                            <path d="M1 12h2"></path>
                            <path d="M21 12h2"></path>
                            <path d="M4.2 19.8l1.4-1.4"></path>
                            <path d="M18.4 5.6l1.4-1.4"></path>
                          </svg>
                        </span>
                        <div>
                          <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                            Energy
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            We meet energy needs of communities and industries
                            today and in the future.
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="col-span-3">
                      <a
                        href="/agric"
                        className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-green-500 dark:text-green-400">
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
                            >
                              <path d="M6.8 22 12 13l5.2 9H6.8Z"></path>
                              <path d="M9 9h6l-3 4.5L9 9Z"></path>
                              <path d="M12 2v2"></path>
                              <path d="M4.93 5.93l1.41 1.41"></path>
                              <path d="M2 13h2"></path>
                              <path d="M19.07 5.93l-1.41 1.41"></path>
                              <path d="M20 13h2"></path>
                            </svg>
                          </span>
                          <div>
                            <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                              Agric
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              We bring you the finest in quality, taste, and
                              satisfaction.
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-gray-900 dark:text-gray-100 leading-[24px] text-sm font-medium"
            >
              About us
            </a>

            <a
              href="#"
              className="text-gray-900 dark:text-gray-100 leading-[24px] text-sm font-medium"
            >
              Blog
            </a>

            <a
              href="#"
              className="text-gray-900 dark:text-gray-100 leading-[24px] text-sm font-medium"
            >
              Contact us
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <a
              href="#"
              className="text-gray-900 dark:text-gray-100 leading-[24px] text-sm font-medium"
            >
              Partner with Us
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Explore Our Ecosystem
            </a>

            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto flex items-center space-x-4">
            <ModeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-400 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative">
              <button
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex items-center justify-between">
                  What we offer
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              </button>

              {isDropdownOpen && (
                <div className="pl-4">
                  <a
                    href="/properties"
                    className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">
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
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M3 9h18"></path>
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                          Properties
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          We do more than just real estate, We create elevated
                          living experiences.
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/cargo"
                    className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-green-600 dark:text-green-400">
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
                        >
                          <path d="M4 11a9 9 0 0 1 9 9"></path>
                          <path d="M4 4a16 16 0 0 1 16 16"></path>
                          <circle cx="5" cy="19" r="2"></circle>
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                          Cargo & Logistics
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Our expertise ensures that your goods reach their
                          destination safely and on time.
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="/energy"
                    className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-amber-500 dark:text-amber-400">
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
                        >
                          <circle cx="12" cy="12" r="5"></circle>
                          <path d="M12 1v2"></path>
                          <path d="M12 21v2"></path>
                          <path d="M4.2 4.2l1.4 1.4"></path>
                          <path d="M18.4 18.4l1.4 1.4"></path>
                          <path d="M1 12h2"></path>
                          <path d="M21 12h2"></path>
                          <path d="M4.2 19.8l1.4-1.4"></path>
                          <path d="M18.4 5.6l1.4-1.4"></path>
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                          Energy
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          We meet energy needs of communities and industries
                          today and in the future.
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 dark:text-green-400">
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
                        >
                          <path d="M6.8 22 12 13l5.2 9H6.8Z"></path>
                          <path d="M9 9h6l-3 4.5L9 9Z"></path>
                          <path d="M12 2v2"></path>
                          <path d="M4.93 5.93l1.41 1.41"></path>
                          <path d="M2 13h2"></path>
                          <path d="M19.07 5.93l-1.41 1.41"></path>
                          <path d="M20 13h2"></path>
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                          Agric
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          We bring you the finest in quality, taste, and
                          satisfaction.
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              About us
            </a>

            <a
              href="/blog"
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Blog
            </a>

            <a
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Contact us
            </a>

            <a
              href="/partner"
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Partner with Us
            </a>

            <a
              href="/explore"
              className="block px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Explore Our Ecosystem
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
