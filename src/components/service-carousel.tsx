"use client";
import React from "react"
import Slider from "react-slick";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import light from "../assets/light.jpeg";
import cargo from "../assets/cargo.jpeg";
import energy from "../assets/energy.jpeg";
import agric from "../assets/agric.png";
import "../assets/slick/slick.css"
import "../assets/slick/slick-theme.css"

const services = [
  {
    id: 1,
    image: light,
    title: "Properties",
    description: "We do more than just real estate,  We create elevated living experiences.",
    link: "/properties",
    titleColor: "bg-[#335CFF]", // blue
  },
  {
    id: 2,
    image: cargo,
    title: "Cargo & Logistics",
    description: "Our expertise ensures that your goods reach their destination safely and on time.",
    link: "/cargo",
    titleColor: "bg-[#B3E951]", // green
  },
  {
    id: 3,
    image: energy,
    title: "Energy",
    description:
      "We meet energy needs of communities and industries today and in the future.",
    link: "/energy",
    titleColor: "bg-[#B3E951]", // green
  },
  {
    id: 4,
    image: agric,
    title: "Agric",
    description: "We bring you the finest in quality, taste, and satisfaction.",
    link: "/agric",
    titleColor: "bg-[#335CFF]", // blue
  },
];

export default function ServiceCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // below large screens
        settings: {
          slidesToShow: 2,
          autoplay: true,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <div className="w-full py-8 md:py-12 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
      <Slider {...settings}>
          {services.map((service) => (
            <div key={service.id} className="px-3">
              <Link to={service.link}>
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md cursor-pointer">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={`Slide ${service.id}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 rounded-lg"></div>
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <div className="text-white py-4 px-2">
                      <span
                        className={`px-4 py-2 ${service.titleColor} text-black text-sm font-medium rounded-[8px] uppercase`}
                      >
                        {service.title}
                      </span>
                      <p className="text-white font-medium max-w-[80%] text-sm md:text-xl mt-6 lowercase">
                        {service.description}
                      </p>
                    </div>
                    <div className="text-white text-xs md:text-sm font-medium">
                      Explore {service.title} →
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
