import React from "react";

import hatariImg from "../assets/banners/fan-hatari.jpg";
import sothingImg from "../assets/banners/fan-sothing.jpg";
import jisulifeImg from "../assets/banners/fan-jisulife.jpg";

const promoBanners = [
  { id: 1, img: hatariImg, alt: "Hatari Promotion" },
  { id: 2, img: sothingImg, alt: "Sothing Promotion" },
  { id: 3, img: jisulifeImg, alt: "JisuLife Promotion" },
];

export default function PromoBannerSection() {
  return (
    <section className="bg-[#f5f7f9] py-6 px-4 font-prompt">
      <div className="max-w-[1440px] mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 min-w-full">
          {promoBanners.map((banner) => (
            <div
              key={banner.id}
              className="flex-shrink-0 w-full md:w-1/3 rounded overflow-hidden shadow-sm border"
            >
              <img
                src={banner.img}
                alt={banner.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
