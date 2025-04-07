"use client";

import Slider from "react-slick";
import frame1 from "../assets/Frame 5.png";
import frame2 from "../assets/Frame 6.png";
import frame3 from "../assets/Frame 7.png";
import frame4 from "../assets/Frame 11.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { id: 1, image: frame1 },
  { id: 2, image: frame2 },
  { id: 3, image: frame3 },
  { id: 4, image: frame4 },
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
            <div key={service.id} className="px-2">
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg overflow-hidden shadow-md">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={`Slide ${service.id}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
