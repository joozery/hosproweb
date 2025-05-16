import { FaTruck, FaRedoAlt, FaCheckCircle, FaCalendarAlt, FaReceipt } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck />,
    title: "ส่งฟรี ทั่วไทย*",
    desc: "เมื่อช้อป 499.-*",
  },
  {
    icon: <FaRedoAlt />,
    title: "รับประกันความพึงพอใจ",
    desc: "เปลี่ยน/คืนสินค้าใน 30 วัน*",
  },
  {
    icon: <FaCheckCircle />,
    title: "ตั้งค่าระบบอนุมัติ",
    desc: "ตามนโยบายบริษัทคุณ",
  },
  {
    icon: <FaCalendarAlt />,
    title: "รับเครดิตเทอม",
    desc: "สูงสุด 60 วัน*",
  },
  {
    icon: <FaReceipt />,
    title: "ปฏิบัติภาษีถูกต้อง",
    desc: "",
  },
];

export default function TrustFeatures() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-6 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-3 min-w-[180px]">
            <div className="bg-white text-blue-600 rounded-full p-3 shadow text-lg">
              {item.icon}
            </div>
            <div className="text-sm leading-snug">
              <p className="font-semibold">{item.title}</p>
              {item.desc && <p className="text-[13px]">{item.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
