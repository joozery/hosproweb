import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa"; // ลูกศรขวา


const flashProducts = [
  {
    name: "เครื่องวัดความดันอัตโนมัติ รุ่น BPM-900",
    code: "BPM9001",
    rating: 4,
    price: 1290,
    oldPrice: 1690,
    percentOff: 24,
    label: "FLASH SALE",
    img: "https://www.cumedicalhome.com/sites/6991/files/s/products/o_1hoqvsfbc1eru4sl1tbb1ebbn6fh.png",
  },
  {
    name: "เก้าอี้นั่งตรวจคนไข้ ปรับระดับได้",
    code: "STOOL9002",
    rating: 5,
    price: 1990,
    oldPrice: 2590,
    percentOff: 23,
    label: "ONLINE ONLY",
    img: "https://www.cleanworld-products.com/uploads/6206/shop/202406/202406-12-150604_O0-0.jpg",
  },
  {
    name: "ชุดปฐมพยาบาลเคลื่อนที่ รุ่น Emergency Box",
    code: "EMBOX03",
    rating: 4,
    price: 890,
    oldPrice: 1290,
    percentOff: 31,
    label: "FLASH SALE",
    img: "https://down-th.img.susercontent.com/file/th-11134207-7r98r-lnte2jtch4c024",
  },
  {
    name: "แผ่นวัดอุณหภูมิหน้าผาก รุ่น Non-Contact",
    code: "TEMP004",
    rating: 5,
    price: 590,
    oldPrice: 790,
    percentOff: 25,
    label: "HOT DEAL",
    img: "https://inwfile.com/s-gf/w1n5ca.png",
  },
  {
    name: "แผ่นวัดอุณหภูมิหน้าผาก รุ่น Non-Contact",
    code: "TEMP004",
    rating: 5,
    price: 590,
    oldPrice: 790,
    percentOff: 25,
    label: "HOT DEAL",
    img: "https://inwfile.com/s-gf/w1n5ca.png",
  },
  {
    name: "แผ่นวัดอุณหภูมิหน้าผาก รุ่น Non-Contact",
    code: "TEMP004",
    rating: 5,
    price: 590,
    oldPrice: 790,
    percentOff: 25,
    label: "HOT DEAL",
    img: "https://inwfile.com/s-gf/w1n5ca.png",
  },
  {
    name: "เครื่องวัดความดันอัตโนมัติ รุ่น BPM-900",
    code: "BPM9001",
    rating: 4,
    price: 1290,
    oldPrice: 1690,
    percentOff: 24,
    label: "FLASH SALE",
    img: "https://www.cumedicalhome.com/sites/6991/files/s/products/o_1hoqvsfbc1eru4sl1tbb1ebbn6fh.png",
  },
];

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(172800); // 2 วัน
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  
    const format = (val) => String(val).padStart(2, "0");
    const d = Math.floor(timeLeft / 86400);
    const h = Math.floor((timeLeft % 86400) / 3600);
    const m = Math.floor((timeLeft % 3600) / 60);
    const s = timeLeft % 60;
  
    return (
      <div className="flex gap-1 text-[11px] font-bold text-white">
        {[{ val: d, label: "วัน", bg: "bg-blue-800" },
          { val: h, label: "ชม.", bg: "bg-blue-700" },
          { val: m, label: "นาที", bg: "bg-blue-600" },
          { val: s, label: "วินาที", bg: "bg-blue-500" }].map(({ val, label, bg }, i) => (
          <div key={i} className={`${bg} px-2 py-1 rounded text-center`}>
            {format(val)}
            <div className="text-[10px]">{label}</div>
          </div>
        ))}
      </div>
    );
  }
  
  export default function FlashSaleSection() {
    const scrollRef = useRef();
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };
  
    return (
      <section className="bg-[#f5f7f9] py-6 px-4 font-prompt">
        <div className="max-w-[1440px] mx-auto bg-white p-6 rounded-md shadow-sm relative">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-blue-800">
                ⚡ FLASH SALE (เฉพาะออนไลน์)
              </h2>
              <CountdownTimer />
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline font-medium">
              ดูทั้งหมด
            </a>
          </div>
  
          {/* Horizontal Scroll Container */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pr-6"
            >
              {flashProducts.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[220px] border rounded-lg bg-white hover:shadow transition"
                >
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-40 object-contain bg-white p-4"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                      -{item.percentOff}%
                    </div>
                    <div className="absolute top-2 right-2 bg-blue-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                      {item.label}
                    </div>
                  </div>
  
                  <div className="p-3">
                    <div className="text-sm font-medium text-gray-800 mb-1 leading-snug min-h-[3rem]">
                      {item.name}
                    </div>
                    <div className="text-[12px] text-gray-400 mb-1">{item.code}</div>
                    <div className="flex mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i <= item.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09L5.64 12.5.763 8.41l6.597-.96L10 2l2.64 5.45 6.597.96-4.877 4.09 1.518 5.59z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-blue-700 font-bold text-lg">
                      ฿ {item.price.toLocaleString()}
                    </div>
                    {item.oldPrice && (
                      <div className="text-xs text-gray-400 line-through">
                        ฿ {item.oldPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
  
            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute top-[40%] -right-2 bg-white border shadow-md rounded-full w-9 h-9 flex items-center justify-center hover:bg-gray-100"
            >
              <FaArrowRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </section>
    );
  }
  