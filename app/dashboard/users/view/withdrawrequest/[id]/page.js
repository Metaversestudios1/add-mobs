"use client"
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import style from "@/app/dashboard/dashboard.module.css";
import { FcApprove } from "react-icons/fc";
import { FcDisapprove  } from "react-icons/fc";


const Page = ({params}) => {
  const {id} = params
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [requests, setRequests] = useState([])
  const router = useRouter()
  const goBack= ()=>{
    router.back()
  }
  useEffect(()=>{
    const fetchRequests = async()=>{
      const res = await fetch("/api/getwithdrawrequests",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({id})
      })
      const response = await res.json()
      if(response.success){
        setRequests(response.data)
      }
    }
    fetchRequests()
  },[id])

  // const [rows, setRows] = useState([
  //   {
  //     name: "happy",
  //     bankName: "Bank of India",
  //     bankAccount: "25143145",
  //     ifseCode: "BKID013120",
  //     amount: 1000,
  //     upi: "95632@ybl",
  //     date: "2024-06-01"
  //   },
  // ]);

  // const filteredRows = rows.filter(row => {
  //   const rowDate = new Date(row.date);
  //   const start = new Date(startDate);
  //   const end = new Date(endDate);
  //   return (
  //     (!startDate || rowDate >= start) &&
  //     (!endDate || rowDate <= end)
  //   );
  // });

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
              sr no.
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
              <th scope="col" className="px-6 py-3">
                Account Holder Name
              </th>
              <th scope="col" className="px-6 py-3">
                Withdraw Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {requests.map((item, index) => (
              <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                  15-07-2024
                </th>
                <td className="px-6 py-4">{item?.ac_holder_name ||"-" }</td>
                <td className="px-6 py-4">{item?.withdraw_amt || "-"}</td>
                <td className="px-6 py-4 flex"><FcApprove className="text-2xl cursor-pointer" /><FcDisapprove className="text-2xl cursor-pointer"/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
