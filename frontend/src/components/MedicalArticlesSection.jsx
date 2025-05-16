import React from "react";

const articles = [
  {
    id: 1,
    title: "5 วิธีดูแลสุขภาพผู้สูงอายุให้แข็งแรงในฤดูร้อน",
    excerpt: "ช่วงฤดูร้อนอาจทำให้ผู้สูงอายุเสี่ยงต่อการเป็นลมแดด ควรดูแลอย่างไรให้ปลอดภัย...",
    image: "https://modernformhealthcare.co.th/wp-content/uploads/2024/05/MDFHC-1-1024x536.jpg",
  },
  {
    id: 2,
    title: "อัปเดต! เครื่องวัดความดันรุ่นใหม่ที่ใช้งานง่าย",
    excerpt: "รู้หรือไม่? เครื่องวัดความดันที่มี Bluetooth ช่วยส่งข้อมูลสุขภาพให้แพทย์ได้แบบเรียลไทม์...",
    image: "https://s359.kapook.com/pagebuilder/6d47f641-c939-4bc0-b948-c9bc331641d6.jpg",
  },
  {
    id: 3,
    title: "วิธีเลือกเก้าอี้นั่งตรวจที่ดีต่อสุขภาพหลัง",
    excerpt: "เก้าอี้ที่รองรับกระดูกสันหลังจะช่วยลดอาการปวดหลังของบุคลากรทางการแพทย์ระหว่างการตรวจ...",
    image: "https://mlvrv2qgedqb.i.optimole.com/cb:xWmv.59b11/w:1024/h:536/q:mauto/f:best/https://livdesk.com/wp-content/uploads/2025/03/update-cover-07.jpg",
  },
  {
    id: 4,
    title: "ต้องรู้! วิธีใช้เครื่องวัดอุณหภูมิอินฟราเรดให้แม่นยำ",
    excerpt: "การวัดอุณหภูมิที่หน้าผากจะต้องอยู่ห่างในระยะที่เหมาะสม เพื่อผลลัพธ์ที่ถูกต้องที่สุด...",
    image: "https://www.tools.in.th/wp-content/uploads/2023/03/use-infrared-thermometer.jpg",
  },
];

export default function MedicalArticlesSection() {
  return (
    <section className="bg-[#f5f7f9] py-8 font-prompt">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-blue-800">บทความ</h2>
          <a href="#" className="text-sm text-blue-600 hover:underline font-medium">ดูทั้งหมด</a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded shadow-sm overflow-hidden hover:shadow-md transition">
              <img src={article.image} alt={article.title} className="w-full h-36 object-cover" />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">{article.title}</h3>
                <p className="text-xs text-gray-500 mt-2 mb-3 line-clamp-3">{article.excerpt}</p>
                <button className="text-xs text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded">
                  อ่านต่อ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
