import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import style from "./dashboard.module.css"
import Footer from "@/components/Footer";
export default function dashboardLayout({ children }) {
  return (
    <div className={`${style.container}`}>
      <div className={`${style.sidebar}`}>
        <Sidebar />
      </div>
      <div className={`${style.content}`}>
        <Navbar />
        {children}
        <Footer/>
      </div>
    </div>
  );
}
