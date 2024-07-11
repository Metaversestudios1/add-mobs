import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import style from "./dashboard.module.css";
import Footer from "@/components/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style.content}>
        <div className={style.sidebar}>
          <Sidebar />
        </div>
        <div className={style.main}>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
