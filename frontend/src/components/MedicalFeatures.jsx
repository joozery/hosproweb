import React from "react";
import {
  FaStethoscope,
  FaSyringe,
  FaThermometerHalf,
  FaLungs,
  FaBriefcaseMedical,
  FaBed,
  FaXRay,
  FaTools,
  FaUserNurse,
  FaWheelchair
} from "react-icons/fa";

const features = [
  { icon: <FaStethoscope />, label: "ตรวจร่างกาย" },
  { icon: <FaSyringe />, label: "อุปกรณ์ฉีดยา" },
  { icon: <FaThermometerHalf />, label: "เครื่องวัดไข้" },
  { icon: <FaLungs />, label: "ออกซิเจน" },
  { icon: <FaBriefcaseMedical />, label: "ชุดปฐมพยาบาล" },
  { icon: <FaBed />, label: "เตียงผู้ป่วย" },
  { icon: <FaXRay />, label: "เครื่องเอกซเรย์" },
  { icon: <FaTools />, label: "เครื่องมือผ่าตัด" },
  { icon: <FaUserNurse />, label: "หน้ากากอนามัย" },
  { icon: <FaWheelchair />, label: "รถเข็นผู้ป่วย" },
];

export default function MedicalFeatures() {
  return (
    <div className="w-full bg-[#f5f7f9]  px-4 md:px-6 lg:px-2 flex justify-center font-prompt">
      <div className="w-full max-w-[1440px] bg-white rounded-Sm shadow-sm border px-6 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-y-8 gap-x-4 justify-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
            >
              <div className="w-[72px] h-[72px] bg-gradient-to-br from-blue-100 to-blue-200 text-[#1e3a8a] rounded-full shadow ring-1 ring-blue-300 flex items-center justify-center text-2xl transition-all duration-300 group-hover:ring-2 group-hover:ring-blue-500">
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-gray-800 mt-2 leading-tight tracking-tight w-24">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
