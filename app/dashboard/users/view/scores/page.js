"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import style from "@/app/dashboard/dashboard.module.css";

const Page = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [gameName, setGameName] = useState("Lucky Wheel")
  const router = useRouter()
  const goBack= ()=>{
    router.back()
  }

  return (
    <div className={` ${style.contentContainer}`} >
    <IoIosArrowRoundBack className="text-5xl cursor-pointer" onClick={goBack}/>
      <h2 className="ml-10 text-2xl my-5">Scores</h2>
      <div className="ml-10 mb-4 flex items-end">
        <div className="flex flex-col">
          <label htmlFor="startdate" className="text-sm my-2">
            Start date:
          </label>
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 rounded mr-2 bg-black"
            id="startdate"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="enddate" className="text-sm my-2">
            End date:
          </label>
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 rounded bg-black"
            id="enddate"
          />
        </div>
        <div className="mx-16">
          <button
            id="dropdownDefaultButton"
            onClick={() => {
              const dropdown = document.getElementById("dropdown");
              dropdown.classList.toggle("hidden");
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Games{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className=" absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li
                onClick={() => {
                  const dropdown = document.getElementById("dropdown");
                  dropdown.classList.toggle("hidden");
                  setGameName("Lucky Wheel")
                }}
              >
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Lucky Wheel
                </a>
              </li>
              <li
                onClick={() => {
                  const dropdown = document.getElementById("dropdown");
                  dropdown.classList.toggle("hidden");
                  setGameName("Flip Card")
                }}
              >
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Flip Card
                </a>
              </li>
              <li
                onClick={() => {
                  const dropdown = document.getElementById("dropdown");
                  dropdown.classList.toggle("hidden");
                  setGameName("Lucky Slot")
                }}
              >
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Lucky slot
                </a>
              </li>
              <li
                onClick={() => {
                  const dropdown = document.getElementById("dropdown");
                  dropdown.classList.toggle("hidden");
                  setGameName("Scratch Card")
                }}
              >
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Scratch Card
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto m-10 mt-5 rounded-lg">
        <div className="my-5 text-xl">{gameName}</div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Bonus
              </th>
              <th scope="col" className="px-6 py-3">
                High Score
              </th>
              <th scope="col" className="px-6 py-3">
                Wallet Balance
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                01-7-2024
              </th>
              <td className="px-6 py-4">1000</td>
              <td className="px-6 py-4">6500</td>
              <td className="px-6 py-4">5500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
