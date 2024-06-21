"use client";
import React from "react";
import style from "../style/navbar.module.css";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {

  const session =   useSession()
  const username = session?.data?.user?.name
  return (
    <nav>
    <div className={`${style.container}`}>
    <h3 className="text-xl">{username && username.charAt(0).toUpperCase() + username.slice(1)}</h3>
      <button onClick={() => signOut({ callbackUrl: '/' })}>
      log out
    </button>
      </div>
    </nav>
  );
};

export default Navbar;
