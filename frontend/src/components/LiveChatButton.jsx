import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ✅ ปุ่มแชทมุมล่างขวา */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-50 bg-white text-[#2d4885] rounded-xl shadow-lg px-4 py-2 flex items-center gap-2 hover:brightness-95"
        >
          <FaRegCommentDots className="text-xl" />
          <span className="text-[15px] font-semibold">Chat</span>
        </button>
      )}

      {/* ✅ Popup กล่องสนทนา */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-[600px] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b bg-[#f5f5f5] text-[#2d4885] font-bold text-md">
            Chat
            <button onClick={() => setIsOpen(false)}>
              <IoMdClose className="text-xl text-gray-500 hover:text-blue-500" />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-1">
            {/* Sidebar */}
            <div className="w-1/3 border-r flex flex-col items-center p-2 bg-white">
              <input
                type="text"
                placeholder="ค้นหาชื่อ"
                className="w-full px-2 py-1 text-sm border rounded mb-2"
              />
              <div className="text-xs text-gray-400">ไม่พบการสนทนา</div>
            </div>

            {/* Chat Area */}
            <div className="w-2/3 flex flex-col items-center justify-center text-center px-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1247/1247758.png"
                alt="Laptop Chat"
                className="w-24 h-24 opacity-80 mb-3"
              />
              <h3 className="font-bold text-sm text-gray-800 mb-1">ยินดีต้อนรับสู่ Live Chat</h3>
              <p className="text-xs text-gray-500">
                พูดคุยกับผู้ดูแลระบบของคุณได้ที่นี่
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
