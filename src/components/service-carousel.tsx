"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import frame1 from "../assets/Frame 5.png";
import frame2 from "../assets/Frame 6.png";
import frame3 from "../assets/Frame 7.png";
import frame4 from "../assets/Frame 11.png";

// Define the service card data
const services = [
  {
    id: 1,
    image: frame1,
  },
  {
    id: 2,
    image: frame2,
  },
  {
    id: 3,
    image: frame3,
  },
  {
    id: 4,
    image: frame4,
  },
];

export default function ServiceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Update scroll position when activeIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 2.5;
      carouselRef.current.scrollTo({
        left: activeIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // Mouse and touch event handlers for manual scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    // Snap to nearest card
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 2.5;
      const index = Math.round(carouselRef.current.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), services.length - 1));
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier

    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;

    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    // Snap to nearest card
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / 2.5;
      const index = Math.round(carouselRef.current.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(index, 0), services.length - 1));
    }
  };

  return (
    <div className="w-full py-8 md:py-12 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="relative">
          {/* Carousel container */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="min-w-[85%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] p-2 snap-start"
              >
                <div className={`relative h-64 rounded-lg overflow-hidden`}>
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.image || "Placeholder"}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-[#335CFF]" : "w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
