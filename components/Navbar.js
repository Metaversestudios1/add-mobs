"use client";
import React from "react";
import style from "../style/navbar.module.css";
import { signOut} from "next-auth/react";
import { IoMdNotifications } from "react-icons/io";
const Navbar = () => {
  return (
    <nav>
      <div className={`${style.container} `}>
      <h3 className=" text-xl  border-black text-center">Admin Panel</h3>
        <div className="flex items-center">
          <IoMdNotifications className="text-2xl mx-6 cursor-pointer"/>
          <button onClick={() => signOut({ callbackUrl: "/" })} className="mr-4">log out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
