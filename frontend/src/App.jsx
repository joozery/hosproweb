import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TrustFeatures from "./components/TrustFeatures";
import RegisterPage from "./pages/RegisterPage";

// Pages
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

// ✅ เพิ่ม Live Chat Button
import LiveChatButton from "./components/LiveChatButton";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-prompt relative">
        {/* Navbar อยู่ทุกหน้า */}
        <Navbar />

        {/* Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </div>

        {/* ส่วนล่างอยู่ทุกหน้า */}
        <TrustFeatures />
        <Footer />

        {/* ✅ ปุ่ม Live Chat ลอย */}
        <LiveChatButton />
      </div>
    </Router>
  );
}

export default App;
