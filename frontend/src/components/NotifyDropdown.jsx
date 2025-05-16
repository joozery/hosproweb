import { useState } from "react";
import { FaBell } from "react-icons/fa";

export default function NotifyDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* 🔔 Bell Icon + Badge */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative focus:outline-none"
      >
        <FaBell className="text-xl text-gray-700 hover:text-blue-600" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-[6px] py-[1px] rounded-full font-bold shadow">
          0
        </span>
      </button>

      {/* ▼ Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-lg shadow-xl border z-50 text-sm animate-fade-in">
          {/* 🔼 Arrow tip */}
          <div className="absolute top-[-8px] right-4 w-4 h-4 bg-white border-l border-t rotate-45 shadow-sm z-0" />

          {/* Header */}
          <div className="px-4 py-3 border-b bg-white font-semibold text-gray-800 flex justify-between items-center rounded-t-lg z-10">
            การแจ้งเตือน
            <span className="text-blue-500 font-medium">0 รายการ</span>
          </div>

          {/* Content */}
          <div className="px-6 py-6 text-center text-gray-600 bg-white rounded-b-lg">
            <p className="font-medium mb-3">ยังไม่มีการแจ้งเตือน</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-full shadow-sm transition-all">
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
