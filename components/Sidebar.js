"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import style from "../style/sidebar.module.css"

const Sidebar = () => {
  const gameSetting = [
    {
      name: "Lucky Wheel",
      href: "/dashboard/setting/luckywheel",
    },
    {
      name: "Lucky slot",
      href: "/dashboard/setting/luckyslot",
    },
    {
      name: "Scratch Card",
      href: "/dashboard/setting/scratchcard",
    },
    {
      name: "Flip Card",
      href: "/dashboard/setting/flipcard",
    },
  ];

  const [gameSection, setGameSection] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  console.log(sidebarOpen);
  return (
    <div className="bg-gray-900 ">
    <button
    onClick={toggleSidebar}
        className={`${style.sidebarBtn} absolute top-1 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
  
  >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6 z-50"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
      className={` ${style.aside} ${sidebarOpen?"max-[930px]::translate-x-full absolute z-50":"max-[930px]:-translate-x-full"} z-10 w-64 h-screen  bg-gray-50 dark:bg-gray-900 `}
      aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 ">
          <ul className="space-y-2 font-medium">
            <li onClick={toggleSidebar}>
              <Link
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            
            <li onClick={toggleSidebar}>
              <Link
                href="/dashboard/users"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </Link>
            </li>

            <li onClick={toggleSidebar}>
              <Link
                href="/dashboard/adminusers"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Admin users
                </span>
              </Link>
            </li>
            <li
              onClick={() => {
                setGameSection(!gameSection);
              }}
            >
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                <IoSettingsOutline className="text-2xl" />
                <span className="flex items-center justify-between flex-1 ms-3 whitespace-nowrap">
                  Game Setting{" "}
                  {gameSection ? <FaAngleDown /> : <FaAngleRight />}
                </span>
              </div>
            </li>
            {gameSection && (
              <ul>
              {gameSetting.map((game, i)=>{
                  return (<li key={i} onClick={toggleSidebar}>
                    <Link
                      href={game.href}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ml-14 whitespace-nowrap">
                      {game.name}
                      </span>
                    </Link>
                  </li>)
                }) }
                
                </ul>
              )}
              <li onClick={toggleSidebar}>
              <Link href="/dashboard/adssetting">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                  <IoSettingsOutline className="text-2xl" />
                  <span className="flex items-center justify-between flex-1 ms-3 whitespace-nowrap">
                    Ads Setting{" "}
                  </span>
                </div>
              </Link>
              </li>
              <li onClick={toggleSidebar}>
              <Link href= "/dashboard/setting/maxwithdraw">
                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                  <MdOutlineAttachMoney className="text-2xl" />
                  <span className="flex items-center justify-between flex-1 ms-3 whitespace-nowrap">
                    Max Withdraw{" "}
                  </span>
                </div>
              </Link>
              </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
