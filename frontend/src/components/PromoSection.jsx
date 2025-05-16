import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerMain1 from "../assets/banner-main.jpg";
import bannerMain2 from "../assets/banner-main2.jpeg";
import bannerMain3 from "../assets/banner-main3.jpg";
import bannerRight1 from "../assets/banner-right-12.jpg";
import bannerRight2 from "../assets/banner-right-2.jpg";

export default function PromoSection() {
  return (
    <div className="w-full bg-[#f5f7f9] px-4 py-6 flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col lg:flex-row gap-4">
        {/* ✅ Banner Left: Swiper with custom arrows */}
        <div className="relative flex-1 h-[360px] overflow-hidden">
          {/* Custom Arrows */}
          <div className="absolute top-1/2 left-3 z-10 -translate-y-1/2">
            <button className="custom-prev bg-[#93b3df] hover:bg-[#222880] text-[#ffffff] rounded-md w-9 h-9 flex items-center justify-center shadow">
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
            <button className="custom-next bg-[#93b3df] hover:bg-[#222880] text-[#ffffff] rounded-md w-9 h-9 flex items-center justify-center shadow">
              <FaChevronRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{ clickable: true }}
            loop
            className="h-full w-full"
          >
            {[bannerMain1, bannerMain2, bannerMain3].map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`โปรโมชัน ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ✅ Banner Right */}
        <div className="w-full lg:w-[280px] flex flex-col justify-between gap-4">
          <div className="h-[175px] overflow-hidden">
            <img
              src={bannerRight1}
              alt="โปรโมชันย่อย 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[175px] overflow-hidden">
            <img
              src={bannerRight2}
              alt="โปรโมชันย่อย 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
