"use client";

import * as React from "react";
import { Separator } from "./ui/separator";

const TermOfUse = () => {
  const [activeTab, setActiveTab] = React.useState<
    "properties" | "agric" | "cargo" | "energy"
  >("properties");

  const handleTabClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    tab: "properties" | "agric" | "cargo" | "energy"
  ) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Table of Contents - Sidebar */}
        <aside className="w-full md:w-64 shrink-0 bg-[#F9F9F9] dark:bg-gray-700 p-4 md:py-2 h-72">
          <div className="sticky top-8">
            <h2 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-4 tracking-wide">
              Table of Contents
            </h2>
            <nav className="flex flex-col space-y-2">
              <a
                href="#properties"
                className={`text-sm ${
                  activeTab === "properties"
                    ? "text-blue-600 dark:text-blue-400 font-medium underline"
                    : "text-gray-700 dark:text-gray-200"
                } hover:text-blue-600 dark:hover:text-blue-400 transition`}
                onClick={(e) => handleTabClick(e, "properties")}
              >
                Header copy
              </a>
              <a
                href="#agric"
                className={`text-sm ${
                  activeTab === "agric"
                    ? "text-blue-600 dark:text-blue-400 font-medium underline"
                    : "text-gray-700 dark:text-gray-200"
                } hover:text-blue-600 dark:hover:text-blue-400 transition`}
                onClick={(e) => handleTabClick(e, "agric")}
              >
                Header copy
              </a>
              <a
                href="#cargo"
                className={`text-sm ${
                  activeTab === "cargo"
                    ? "text-blue-600 dark:text-blue-400 font-medium underline"
                    : "text-gray-700 dark:text-gray-200"
                } hover:text-blue-600 dark:hover:text-blue-400 transition`}
                onClick={(e) => handleTabClick(e, "cargo")}
              >
                Header copy
              </a>
              <a
                href="#energy"
                className={`text-sm ${
                  activeTab === "energy"
                    ? "text-blue-600 dark:text-blue-400 font-medium underline"
                    : "text-gray-700 dark:text-gray-200"
                } hover:text-blue-600 dark:hover:text-blue-400 transition`}
                onClick={(e) => handleTabClick(e, "energy")}
              >
                Header copy
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <article className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-3xl font-semibold mb-2 dark:text-white">
              {activeTab === "properties"
                ? "Privacy Policy"
                : activeTab === "agric"
                ? "Agriculture Policy"
                : activeTab === "cargo"
                ? "Cargo Policy"
                : "Energy Policy"}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Last updated: April 9th, 2025
            </p>

            <Separator className="mb-6" />

            {activeTab === "properties" ? (
              <>
                <section id="intro" className="mb-10">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">
                    Harlivia Properties
                  </h2>
                  <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
                    Harlivia Properties – Redefining Luxury, One Home at a Time.
                    At Harlivia Properties, we don't just deal in real estate—we
                    bring homes to life. We're builders, creators, and
                    visionaries who take an empty plot of land and turn it into
                    something worth living in, worth investing in, and worth
                    calling home. Whether you want to own a property, develop
                    one from scratch, or find a shortlet that feels like home,
                    we're here to make that happen.
                  </p>
                </section>

                <section id="what-we-do" className="mb-10">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">
                    What We Do
                  </h2>
                  <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
                    <strong>We Build from the Ground Up</strong> - We don't
                    resell properties that others have built—we construct them
                    ourselves. Every brick, every fixture, and every finish is
                    carefully thought out to ensure top-tier quality,
                    durability, and style. Whether it's a luxurious home, a
                    smart investment property, or a commercial space, we handle
                    everything from design to development, so you know exactly
                    what you're getting.
                  </p>
                </section>
              </>
            ) : (
              <>
                <section id="agric-intro" className="mb-10">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">
                    Harlivia Properties
                  </h2>
                  <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
                    Harlivia Properties – Redefining Luxury, One Home at a Time.
                    At Harlivia Properties, we don't just deal in real estate—we
                    bring homes to life. We're builders, creators, and
                    visionaries who take an empty plot of land and turn it into
                    something worth living in, worth investing in, and worth
                    calling home. Whether you want to own a property, develop
                    one from scratch, or find a shortlet that feels like home,
                    we're here to make that happen.
                  </p>
                </section>

                <section id="agric-services" className="mb-10">
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">
                    What We Do
                  </h2>
                  <p className="mb-4 text-[#333333] dark:text-gray-200 text-base leading-relaxed font-medium">
                    <strong>We Build from the Ground Up</strong> - We don't
                    resell properties that others have built—we construct them
                    ourselves. Every brick, every fixture, and every finish is
                    carefully thought out to ensure top-tier quality,
                    durability, and style. Whether it's a luxurious home, a
                    smart investment property, or a commercial space, we handle
                    everything from design to development, so you know exactly
                    what you're getting.
                  </p>
                </section>
              </>
            )}
          </article>
        </main>
      </div>
    </div>
  );
};

export default TermOfUse;
