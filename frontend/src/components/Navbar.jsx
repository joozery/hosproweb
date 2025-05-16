import { useState } from "react";
import {
  FaSearch, FaBell, FaHeart, FaShoppingCart, FaUser, FaBars, FaChevronRight,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { Link } from "react-router-dom"; // ⬅️ เพิ่ม
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsQrCode } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import logo from '../assets/LOGO.png';

import NotifyDropdown from "./NotifyDropdown";

const categories = [
  {
    name: "อุปกรณ์การแพทย์พื้นฐาน",
    subcategories: [
      {
        name: "เครื่องมือวัด",
        items: ["เครื่องวัดความดัน", "เครื่องวัดระดับน้ำตาล", "เครื่องวัดออกซิเจนปลายนิ้ว", "เทอร์โมมิเตอร์อินฟราเรด"],
      },
      {
        name: "อุปกรณ์ช่วยชีวิต",
        items: ["ถังออกซิเจน", "ชุดปฐมพยาบาล", "เครื่องกระตุกหัวใจ (AED)"],
      },
    ],
  },
  {
    name: "เครื่องมือใช้ในคลินิก",
    subcategories: [
      {
        name: "เครื่องมือผ่าตัด",
        items: ["กรรไกรผ่าตัด", "คีมหนีบ", "ใบมีดผ่าตัด", "แหนบ"],
      },
      {
        name: "อุปกรณ์ทำแผล",
        items: ["สำลี", "ผ้าก๊อซ", "แอลกอฮอล์", "เบตาดีน", "เทปพลาสเตอร์"],
      },
    ],
  },
  {
    name: "อุปกรณ์ผู้ป่วย",
    subcategories: [
      {
        name: "สำหรับผู้สูงอายุ",
        items: ["ไม้เท้า", "รถเข็นผู้ป่วย", "เตียงผู้ป่วย", "เบาะลมป้องกันแผลกดทับ"],
      },
      {
        name: "สุขอนามัย",
        items: ["แพมเพิร์สผู้ใหญ่", "ผ้าอ้อม", "สายสวนปัสสาวะ", "ถุงเก็บปัสสาวะ"],
      },
    ],
  },
];


export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  return (
    <div className="sticky top-0 z-50 font-prompt bg-white shadow-md">
      {/* Topbar */}
      <div className="px-4 md:px-6 py-3 flex flex-col md:flex-row md:justify-between md:items-center gap-3 backdrop-blur">
        {/* Logo & Search */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:max-w-[60%]">
          <img src={logo} alt="Logo" className="h-10 object-contain" />
          <div className="flex items-center border border-gray-300 rounded bg-gray-100 overflow-hidden w-full max-w-lg">
            <input
              type="text"
              placeholder="ค้นหาสินค้า"
              className="px-4 py-2 w-full bg-transparent focus:outline-none text-sm"
            />
            <button className="p-2">
              <FaSearch className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex flex-wrap justify-between md:justify-end items-center gap-4 text-gray-700 text-sm relative">
          <div className="flex items-center gap-1">
            <FiGlobe className="text-xl" />
            <span className="hidden sm:inline">TH</span>
          </div>

          {/* ✅ ใช้งาน NotifyDropdown แทน FaBell */}
          <NotifyDropdown />

          <Link to="/login" className="flex items-center gap-1 hover:text-blue-600 transition">
            <FaUser />
            <span className="hidden sm:inline">เข้าสู่ระบบ | สมัครสมาชิก</span>
          </Link>
          <div className="flex items-center gap-1">
            <FaHeart />
            <span className="hidden sm:inline">รายการโปรด</span>
          </div>
          <div className="flex items-center gap-1">
            <FaShoppingCart />
            <span className="hidden sm:inline">ตะกร้าสินค้า</span>
          </div>
        </div>
      </div>

      {/* Gradient Line */}
      <div className="h-[2px] bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300" />

      {/* Bottom Navigation */}
      <div className="relative flex flex-wrap gap-4 md:gap-6 px-4 md:px-6 py-2 items-center bg-white text-sm shadow-sm z-10">
        {/* Dropdown */}
        <div className="group relative">
          <div className="flex items-center gap-2 text-blue-800 font-medium cursor-pointer">
            <FaBars />
            <span>หมวดหมู่สินค้า</span>
          </div>

          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 hidden group-hover:flex bg-white border z-50 shadow-lg">
            {/* Main Categories */}
            <ul className="w-64 border-r overflow-y-auto max-h-[400px]">
              {categories.map((cat, i) => (
                <li
                  key={i}
                  className="p-3 hover:bg-blue-100 cursor-pointer flex justify-between items-center"
                  onMouseEnter={() => {
                    setActiveCategory(i);
                    setActiveSubcategory(null);
                  }}
                >
                  {cat.name}
                  <FaChevronRight className="text-xs" />
                </li>
              ))}
            </ul>

            {/* Subcategories */}
            {activeCategory !== null && (
              <ul className="w-64 border-r overflow-y-auto max-h-[400px]">
                {categories[activeCategory].subcategories.map((sub, i) => (
                  <li
                    key={i}
                    className="p-3 hover:bg-blue-100 cursor-pointer flex justify-between items-center"
                    onMouseEnter={() => setActiveSubcategory(i)}
                  >
                    {sub.name}
                    <FaChevronRight className="text-xs" />
                  </li>
                ))}
              </ul>
            )}

            {/* Items */}
            {activeCategory !== null && activeSubcategory !== null && (
              <ul className="w-64 overflow-y-auto max-h-[400px]">
                {categories[activeCategory].subcategories[activeSubcategory].items.map((item, i) => (
                  <li key={i} className="p-3 hover:bg-blue-100 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Static Menu */}
        <div className="flex items-center gap-2 text-blue-800 cursor-pointer">
          <HiOutlineDocumentText />
          <span>สั่งซื้อจากใบสั่งซื้อเดิม</span>
        </div>
        <div className="flex items-center gap-2 text-blue-800 cursor-pointer">
          <BsQrCode />
          <span>สั่งซื้อด้วยรหัสสินค้า</span>
        </div>
        <div className="flex items-center gap-2 text-blue-800 cursor-pointer">
          <GoLocation />
          <span>สาขาของเรา</span>
        </div>
      </div>
    </div>
  );
}
