"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import { ModeToggle } from "../../../lib/mode-toggle";
import { Link } from "react-router-dom";
import prop from "../../../../assets/building-2-fill.svg";
import agric from "../../../../assets/Grain SVG Icon 1.svg";
import energy from "../../../../assets/sun.svg";
import cargo from "../../../../assets/log.svg";

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
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 z-[50] sticky top-0">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 mr-2">
            <a href="/" className="flex items-center">
              <img
                src={logo || "/placeholder.svg"}
                alt="logo"
                className="h-8 w-8"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-2">
            <div className="static" ref={dropdownRef}>
              <button
                className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-100"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                What we offer{" "}
                <ChevronDown className="ml-1 h-4 w-4 leading-[24px]" />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 right-0 mt-6 bg-white dark:bg-gray-800 z-10 border-b border-gray-200 dark:border-gray-700">
                  {/* Inner container (Grid): Centered with max-width */}
                  <div className="px-8 py-4 grid grid-cols-3 gap-4">
                    {/* Properties Link */}
                    <Link
                      to="/properties"
                      className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-blue-600 dark:text-blue-400 pt-1">
                          <img
                            src={prop || "/placeholder.svg"}
                            alt="Properties Icon"
                            className="w-6 h-6"
                          />
                        </span>
                        <div>
                          <div className="font-medium text-base text-[#0E121B] dark:text-gray-100">
                            Properties
                          </div>
                          <div className="text-sm text-[#525866] dark:text-gray-400">
                            We do more than just real estate, <br /> We create
                            elevated living experiences.
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Cargo & Logistics Link */}
                    <Link
                      to="/cargo"
                      className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-green-600 dark:text-green-400 pt-1">
                          <img
                            src={cargo || "/placeholder.svg"}
                            alt="Cargo & Logistics Icon"
                            className="w-6 h-6"
                          />
                        </span>
                        <div>
                          <div className="font-medium text-base text-[#0E121B] dark:text-gray-100">
                            Cargo & Logistics
                          </div>
                          <div className="text-sm text-[#525866] dark:text-gray-400">
                            Our expertise ensures that your goods <br /> reach
                            their destination safely and on time.
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Energy Link */}
                    <Link
                      to="/energy"
                      className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-amber-500 dark:text-amber-400 pt-1">
                          <img
                            src={energy || "/placeholder.svg"}
                            alt="Energy Icon"
                            className="w-6 h-6"
                          />
                        </span>
                        <div>
                          <div className="font-medium text-base text-[#0E121B] dark:text-gray-100">
                            Energy
                          </div>
                          <div className="text-sm text-[#525866] dark:text-gray-400">
                            We meet energy needs of communities and <br />{" "}
                            industries today and in the future.
                          </div>
                        </div>
                      </div>
                    </Link>

                    {/* Agric Link */}
                    <Link
                      to="/agric"
                      className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 dark:text-green-400 pt-1">
                          <img
                            src={agric || "/placeholder.svg"}
                            alt="Agric Icon"
                            className="w-6 h-6"
                          />
                        </span>
                        <div>
                          <div className="font-medium text-base text-gray-900 dark:text-gray-100">
                            Agric
                          </div>
                          <div className="text-sm text-[#525866] dark:text-gray-400">
                            We bring you the finest in quality, taste, and{" "}
                            <br /> satisfaction.
                          </div>
                        </div>
                      </div>
                    </Link>
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

            <Link
              to="/properties"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Explore Our Ecosystem
            </Link>

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
        <div className="md:hidden" ref={dropdownRef}>
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
                <div>
                  {/* Properties Link */}
                  <Link
                    to="/properties"
                    className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 pt-1">
                        <img
                          src={prop || "/placeholder.svg"}
                          alt="Properties Icon"
                          className="w-6 h-6"
                        />
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
                  </Link>

                  {/* Cargo & Logistics Link */}
                  <Link
                    to="/cargo"
                    className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 pt-1">
                        <img
                          src={cargo || "/placeholder.svg"}
                          alt="Cargo & Logistics Icon"
                          className="w-6 h-6"
                        />
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
                  </Link>

                  {/* Energy Link */}
                  <Link
                    to="/energy"
                    className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-amber-500 dark:text-amber-400 pt-1">
                        <img
                          src={energy || "/placeholder.svg"}
                          alt="Energy Icon"
                          className="w-6 h-6"
                        />
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
                  </Link>

                  {/* Agric Link */}
                  <Link
                    to="/agric"
                    className="block py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 dark:text-green-400 pt-1">
                        <img
                          src={agric || "/placeholder.svg"}
                          alt="Agric Icon"
                          className="w-6 h-6"
                        />
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
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              About us
            </a>

            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Blog
            </a>

            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Contact us
            </a>

            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Partner with Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
