import React from "react";
import {
  FaFacebookF,
  FaLine,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import newsPromoImg from "../assets/news-promo.png"; // 🔁 ใช้ภาพตามต้องการ

export default function Footer() {
  return (
    <footer className="bg-[#f5f7f9] text-gray-700 font-prompt border-t">
        {/* ✅ News Promo CTA Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-6">
        <div className="bg-[#f9fbfd] border border-blue-600 rounded p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={newsPromoImg} alt="promo" className="w-20 h-20 object-contain" />
            <div>
              <h4 className="text-sm md:text-base font-semibold text-blue-900">
                รับส่วนลดสุดพิเศษ เพียงลงทะเบียนรับข่าวสารจากโอสโปร
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                คูปองส่วนลดนี้สำหรับการช้อปที่โฮสโปรออนไลน์เท่านั้น ลงทะเบียนด่วน
              </p>
            </div>
          </div>
          <button className="bg-black hover:bg-gray-900 text-white px-6 py-2 text-sm font-semibold rounded-full whitespace-nowrap">
            ลงทะเบียนรับข่าวสาร
          </button>
        </div>
      </div>
      {/* Top Footer */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-blue-800 mb-3">
            บริษัท โฮสโปรเอ็ก
          </h3>
          <p className="text-sm leading-relaxed">
            ศูนย์รวมอุปกรณ์การแพทย์และเวชภัณฑ์ ครบวงจร ทั้งสำหรับโรงพยาบาล คลินิก และบุคคลทั่วไป
          </p>
        </div>

        {/* Main Menu */}
        <div>
          <h4 className="text-md font-semibold text-blue-800 mb-3">เมนูหลัก</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">หน้าแรก</a></li>
            <li><a href="#" className="hover:underline">สินค้า</a></li>
            <li><a href="#" className="hover:underline">วิธีการสั่งซื้อ</a></li>
            <li><a href="#" className="hover:underline">บทความ</a></li>
            <li><a href="#" className="hover:underline">ติดต่อเรา</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-md font-semibold text-blue-800 mb-3">บริการลูกค้า</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">คำถามที่พบบ่อย</a></li>
            <li><a href="#" className="hover:underline">แจ้งชำระเงิน</a></li>
            <li><a href="#" className="hover:underline">ติดตามสถานะคำสั่งซื้อ</a></li>
            <li><a href="#" className="hover:underline">นโยบายการคืนสินค้า</a></li>
            <li><a href="#" className="hover:underline">เงื่อนไขการใช้งาน</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold text-blue-800 mb-3">ติดต่อเรา</h4>
          <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2"><FiMapPin className="mt-1" /> 123 ถนนแพทย์ เขตสุขภาพ กรุงเทพฯ 10200</li>
            <li className="flex items-center gap-2"><FaPhoneAlt /> 02-123-4567</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@medicalcare.co.th</li>
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF size={20} /></a>
            <a href="#" className="text-green-500 hover:text-green-600"><FaLine size={20} /></a>
          </div>
        </div>
      </div>

      

      {/* Bottom Bar */}
      <div className="bg-white border-t text-center text-sm py-4 text-gray-500">
        © {new Date().getFullYear()} บริษัท ฮอสโปรเอ็ก จำกัด | All rights reserved.
      </div>
    </footer>
  );
}
