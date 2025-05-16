import React from "react";
import { Link } from "react-router-dom";
import registerImage from "../assets/login-promo.jpg"; // ใช้รูปเดียวกับ login

export default function RegisterPage() {
  return (
    <div className="bg-white py-10 px-4 md:px-0 font-prompt">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row bg-white shadow-md rounded-md overflow-hidden">
        {/* Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src={registerImage}
            alt="register"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            สร้างบัญชี OfficeMate
          </h2>

          <form className="space-y-4 text-sm">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="ชื่อ*"
                className="w-1/2 border rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="นามสกุล*"
                className="w-1/2 border rounded px-4 py-2"
              />
            </div>

            <input
              type="email"
              placeholder="อีเมล*"
              className="w-full border rounded px-4 py-2"
            />

            <input
              type="password"
              placeholder="รหัสผ่าน*"
              className="w-full border rounded px-4 py-2"
            />
            <p className="text-xs text-gray-500">
              ใช้อักษร a-z, A-Z และตัวเลข 0-9 อย่างน้อย 8 ตัว
            </p>

            <div className="space-y-2">
              <label className="flex items-start gap-2 text-xs text-gray-700">
                <input type="checkbox" className="mt-1" />
                ฉันยินยอมรับข่าวสารและโปรโมชั่นจากบริษัท
              </label>
            </div>

            <div className="border rounded px-4 py-2 text-center text-gray-500 text-xs bg-gray-50">
              [ reCAPTCHA Placeholder ]
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded font-semibold"
            >
              สมัครสมาชิก
            </button>

            <p className="text-xs text-center mt-4 text-gray-500">
              เป็นสมาชิกอยู่แล้ว?{" "}
              <Link to="/login" className="text-blue-600 font-semibold hover:underline">
                เข้าสู่ระบบ
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
