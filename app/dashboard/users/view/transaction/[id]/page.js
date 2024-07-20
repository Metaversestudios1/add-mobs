"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import style from "@/app/dashboard/dashboard.module.css";

const Page = ({params}) => {
  const {id} = params
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [history, setHistory] = useState([])
  const router = useRouter()
  const goBack= ()=>{
    router.back()
  }
  useEffect(()=>{
    const fetchHistory = async()=>{
      const res = await fetch("/api/getwithdrawalhistory",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({id})
      })
      const response = await res.json()
      console.log(response.data)
      if(response.success){
        setHistory(response.data)
      }
    }
    fetchHistory()
  },[])


  return (
    <div className={` ${style.contentContainer}`} >
    <IoIosArrowRoundBack className="text-5xl cursor-pointer" onClick={goBack}/>
      <h2 className="ml-10 text-2xl my-5">Transaction History</h2>
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
          id="enddate"
        />
        </div>
      </div>
      <div className="relative overflow-x-auto m-10 mt-0 rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                sr no.
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Credit Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Debit Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Wallet Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Withdraw Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {history.map((transaction, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {index+1}{"."}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 "
                >
                  {(transaction?.date).split('T')[0]}
                </th>
                <td className="px-6 py-4">{transaction?.credit_amt || "-"}</td>
                <td className="px-6 py-4">{transaction?.debit_amt || "-"}</td>
                <td className="px-6 py-4">{transaction?.wallet_balance || "-" }</td>
                <td className="px-6 py-4">{transaction?.withdraw_amt || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
