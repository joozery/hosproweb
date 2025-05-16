import React from "react";
import banner from "../assets/banner.jpg"; // ✅ นำเข้าไฟล์แบนเนอร์
import PromoSection from "../components/PromoSection"; // ✅ นำเข้า Section โปรโมชัน
import MedicalFeatures from "../components/MedicalFeatures";
import PromoBannerSection from "../components/PromoBannerSection";
import FlashSaleSection from "../components/FlashSaleSection";
import MedicalArticlesSection from "../components/MedicalArticlesSection";
import MedicalCategoryTabs from "../components/MedicalCategoryTabs"; 


export default function Home() {
  return (
    <div className="w-full">
      {/* ✅ Banner Section */}
      <div className="w-full">
        <img
          src={banner}
          alt="โปรโมชั่นลดราคา"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* ✅ Promo Section ที่เพิ่มเข้ามา */}
      <PromoSection />
      <MedicalFeatures />
      <PromoBannerSection />
      <FlashSaleSection />
      <MedicalCategoryTabs />
      <MedicalArticlesSection />
    </div>
  );
}
