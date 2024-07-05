"use client";
import React, { useEffect, useState } from "react";
import style from "../../dashboard.module.css";
const Page = () => {
  const [maxWithdraw, setMaxWithdraw] = useState("");

  useEffect(()=>{
    fetchOldDetail()
  },[])
  const fetchOldDetail = async ()=>{
    const res = await fetch ("/api/getglobalstats")
    const response = await res.json()
    setMaxWithdraw(response.data[0].max_withdraw)
  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { maxWithdraw };
    const res = await fetch("/api/updategamedetail", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response.success) {
      setMaxWithdraw("");
    }
  };

  return (
    <div className={`${style.contentContainer}`}>
      <div className="p-6 mx-7 text-xl">Home/dashboard/ads setting</div>
      <div className="flex flex-col mx-2  items-center">
        <div className="w-1/2">
          <label
            htmlFor="withdraw"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Max Withdraw Amount
          </label>
          <input
            name="withdraw"
            value={maxWithdraw}
            onChange={(e) => setMaxWithdraw(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-green-900 rounded-lg py-2 px-3 my-3"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
