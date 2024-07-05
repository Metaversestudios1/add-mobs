"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./dashboard.module.css"


const Page =  () => {
  const [userCount, setUserCount] = useState(0)
  const [adminCount, setAdminCount] = useState(0)
  useEffect(()=>{
    fetchCount()
  },[])
  const fetchCount = async() =>{
    const res = await fetch ("/api/getadminusers")
    const response = await res.json() 
    setAdminCount(response.count)
    const res2 = await fetch ("/api/alluserdata")
    const response2 = await res2.json() 
    setUserCount(response2.count)
  }
  return (
    <div>
      <div className={`${style.contentContainer} p-6 ml-2 mt-2 bg-gray-900`} >
      <div className=" m-2 mb-5 text-xl">Dashboard</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-800 rounded-md border  p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-6">
              <div>
                <div className="flex items-center mb-1">
                  <div className="text-2xl font-semibold">{userCount}</div>
                </div>
                <div className="text-sm font-medium text-gray-400">Users</div>
              </div>
            </div>

            <Link
              href="/dashboard/users"
              className="text-[#f84525] font-medium text-sm hover:text-red-800"
            >
              View
            </Link>
          </div>
          <div className="bg-gray-800 rounded-md border  p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-4">
              <div>
                <div className="flex items-center mb-1">
                  <div className="text-2xl font-semibold">4</div>
                </div>
                <div className="text-sm font-medium text-gray-400">Game Counts</div>
              </div>
            </div>
            <a
              href=""
              className="text-[#f84525] font-medium text-sm hover:text-red-800"
            >
              View
            </a>
          </div>
          <div className="bg-gray-800 rounded-md border  p-6 shadow-md shadow-black/5">
            <div className="flex justify-between mb-6">
              <div>
                <div className="text-2xl font-semibold mb-1">20</div>
                <div className="text-sm font-medium text-gray-400">Withdraws</div>
              </div>
            </div>
            <Link
              href=""
              className="text-[#f84525] font-medium text-sm hover:text-red-800"
            >
              View
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="p-6 relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words dark:bg-gray-800 w-full shadow-lg rounded border-[1px]  border-white">
            <div className="rounded-t mb-0 px-0 border-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                    Users
                  </h3>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Role
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Amount
                      </th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        Login Users
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {userCount} 
                      </td>
                    </tr>
                    <tr className="text-gray-700 dark:text-gray-100">
                      <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        Sub Admin
                      </th>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {adminCount}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*<div className="bg-gray-800 border shadow-md shadow-black/5 p-6 rounded-md ">
            <div className="flex justify-between mb-4 items-start">
              <div className="font-medium">Activities</div>
              <div className="dropdown">
                <button
                  type="button"
                  className="dropdown-toggle text-white hover:text-gray-600"
                >
                  <i className="ri-more-fill"></i>
                </button>
                <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    >
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="overflow-hidden ">
              <table className="w-full min-w-[540px] ">
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50 ">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-white ml-2 truncate"
                        >
                          Lorem Ipsum
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <div className="flex items-center">
                        <a
                          href="#"
                          className="text-gray-600 text-sm font-medium hover:text-white blue-500 ml-2 truncate"
                        >
                          Lorem Ipsum
                        </a>
                      </div>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        02-02-2024
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50">
                      <span className="text-[13px] font-medium text-gray-400">
                        17.45
                      </span>
                    </td>
                    <td className="py-2 px-4 border-b border-b-gray-50"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Page;
