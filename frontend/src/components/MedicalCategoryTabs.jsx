import React, { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  { name: "อุปกรณ์วัดอุณหภูมิ" },
  { name: "เครื่องวัดความดัน" },
  { name: "เครื่องช่วยหายใจ" },
  { name: "อุปกรณ์ฉุกเฉิน" },
  { name: "สายออกซิเจน" },
  { name: "หน้ากากอนามัย" },
  { name: "ถุงมือแพทย์" },
];

const products = [
  {
    id: 1,
    name: "เครื่องวัดอุณหภูมิหน้าผากอินฟราเรด",
    code: "TEMP001",
    price: 890,
    img: "https://www.neonics.co.th/wp-content/uploads/2020/03/HT-860D-NEW.jpg",
  },
  {
    id: 2,
    name: "เครื่องวัดความดันอัตโนมัติ",
    code: "BP900",
    price: 1290,
    img: "https://www.cumedicalhome.com/sites/6991/files/s/products/o_1hoqvsfbc1eru4sl1tbb1ebbn6fh.png",
  },
  {
    id: 3,
    name: "สายออกซิเจนทางจมูก 2 ทาง",
    code: "OXY123",
    price: 79,
    img: "https://premiummedicalshop.com/wp-content/uploads/2018/04/%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%8B%E0%B8%B4%E0%B9%80%E0%B8%88%E0%B8%99-cannula.png",
  },
  {
    id: 4,
    name: "หน้ากากอนามัย 3 ชั้น (กล่อง 50 ชิ้น)",
    code: "MASK50",
    price: 120,
    img: "https://officework.co.th/upload/product/0911-0200-01.JPG",
  },
  {
    id: 5,
    name: "เครื่องพ่นยาแบบพกพา Nebulizer",
    code: "NEBU111",
    price: 690,
    img: "https://cumedicalhome.com/sites/6991/files/s/products/o_1hptudtp8v8j8l6v8cars1i1kb.png",
  },
  
];

export default function MedicalCategoryTabs() {
  const [activeTab, setActiveTab] = useState("อุปกรณ์วัดอุณหภูมิ");
  const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f5f7f9]  font-prompt">
      <div className="max-w-[1440px] mx-auto bg-white rounded-md p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">หมวดสินค้ายอดนิยม</h2>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 bg-white shadow-sm rounded overflow-hidden">
            <img
              src="https://cms-media.fda.moph.go.th/461115679123316736/2023/05/pa9nfugmuAfeu5gGs5LPZyZ8.jpg"
              alt="หมวดเครื่องมือแพทย์"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md font-semibold text-blue-800 mb-2">อุปกรณ์การแพทย์</h3>
              <a
                href="#"
                className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 inline-block"
              >
                ดูสินค้าทั้งหมด
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 relative">
            {/* Tabs */}
            <div className="flex gap-4 overflow-x-auto text-sm border-b mb-4 scrollbar-hide">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(cat.name)}
                  className={`whitespace-nowrap px-4 py-2 ${
                    activeTab === cat.name
                      ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Product Slider */}
            <div className="relative">
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pr-6"
              >
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="flex-shrink-0 w-[200px] bg-white rounded border hover:shadow transition"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-36 object-contain p-3"
                    />
                    <div className="px-3 pb-3">
                      <div className="text-sm font-medium text-gray-700 line-clamp-2 mt-1 mb-1">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-400 mb-1">{item.code}</div>
                      <div className="text-blue-700 font-bold text-md">
                        ฿ {item.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={scrollRight}
                className="absolute top-[35%] -right-4 bg-white border shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-100"
              >
                <FaArrowRight className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
