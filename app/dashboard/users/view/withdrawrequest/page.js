"use client"
import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import style from "@/app/dashboard/dashboard.module.css";


const Page = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const router = useRouter()
  const goBack= ()=>{
    router.back()
  }

  const [rows, setRows] = useState([
    {
      name: "Pratham",
      bankName: "Bank of India",
      bankAccount: "25143145",
      ifseCode: "BKID013120",
      amount: 1000,
      upi: "95632@ybl",
      date: "2024-06-01"
    },
    {
      name: "Pratham",
      bankName: "Bank of India",
      bankAccount: "725143145",
      ifseCode: "BKID013120",
      amount: 1000,
      upi: "95632@ybl",
      date: "2024-06-15"
    }
  ]);

  const filteredRows = rows.filter(row => {
    const rowDate = new Date(row.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (
      (!startDate || rowDate >= start) &&
      (!endDate || rowDate <= end)
    );
  });

  return (
    <div className={` ${style.contentContainer}`} >
    <IoIosArrowRoundBack className="text-5xl cursor-pointer" onClick={goBack}/>

      <h2 className="ml-10 text-2xl my-5">Withdraw Requests</h2>
      <div className="ml-10 mb-4 flex">
      <div className="flex flex-col">
      <label htmlFor="startdate" className="text-sm my-2">Start date:</label>
        <input
          type="date"
          placeholder="Start Date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          className="p-2 rounded mr-2 bg-black"
          id="startdate"
        />
        </div>
        <div className="flex flex-col">
        <label htmlFor="enddate" className="text-sm my-2">End date:</label>
        <input
          type="date"
          placeholder="End Date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          className="p-2 rounded bg-black"
          id = "enddate"
        />
        </div>
      </div>
      <div className="relative overflow-x-auto m-10 mt-0 rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Account Holder Name
              </th>
              <th scope="col" className="px-6 py-3">
                Withdraw Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row.name}
                </th>
                <td className="px-6 py-4">{row.amount}</td>
                <td className="px-6 py-4">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
