import React from "react";
import { FaLock, FaUser, FaQrcode } from "react-icons/fa";
import loginImage from "../assets/login-promo.jpg"; // รูปโปรโมชันฝั่งซ้าย
import { Link } from "react-router-dom";


export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center px-4 py-12 font-prompt">
      <div className="w-full max-w-6xl bg-white grid md:grid-cols-2 gap-6 shadow-lg rounded-lg overflow-hidden">
        {/* Left: Promo */}
        <div className="hidden md:block">
          <img
            src={loginImage}
            alt="Login Promo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Login Form */}
        <div className="p-8 sm:p-10">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">เข้าสู่ระบบ</h2>
            <div className="text-sm text-blue-600 flex items-center gap-2 cursor-pointer mt-1">
              <FaQrcode className="text-blue-500" />
              เข้าสู่ระบบด้วย QR code
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-4 text-xs rounded text-gray-700 leading-relaxed">
            หากคุณเป็นสมาชิกเว็บไซต์ www.officemate.co.th และยังไม่ได้ตั้งรหัสผ่านใหม่
            โปรดดำเนินการให้เรียบร้อยก่อนเลือกซื้อสินค้า คลิก <span className="text-blue-600 font-medium cursor-pointer">"ลืมรหัสผ่าน"</span>
          </div>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อสมาชิก *</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="customer@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">รหัสผ่าน *</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <FaLock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                บันทึกการเข้าสู่ระบบ
              </label>
              <a href="#" className="text-blue-600 hover:underline">ลืมรหัสผ่าน</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 rounded font-semibold hover:from-blue-700 hover:to-blue-500"
            >
              เข้าสู่ระบบ
            </button>

            <p className="text-[13px] text-gray-500 text-center mt-3">
              การคลิกที่ปุ่มเข้าสู่ระบบ ถือว่าท่านได้ยอมรับ
              <a href="#" className="text-blue-500 underline ml-1">ข้อกำหนดเงื่อนไข</a> และ
              <a href="#" className="text-blue-500 underline ml-1">นโยบายความเป็นส่วนตัว</a>
            </p>

            <div className="text-center mt-6">
            <p className="text-sm">
  ยังไม่เคยเป็นสมาชิก?{" "}
  <Link to="/register" className="text-blue-600 font-semibold hover:underline">
    สมัครสมาชิก
  </Link>
</p>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
