"use client";
import React, { useState } from "react";

const Page = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [transactions, setTransactions] = useState([
    {
      date: "2024-06-22",
      credit: "--",
      debit: 500,
      walletBalance: 300,
      withdrawAmount: 500
    },
    {
      date: "2024-06-21",
      credit: "--",
      debit: 700,
      walletBalance: 800,
      withdrawAmount: 700
    }
  ]);

  const filteredTransactions = transactions.filter(transaction => {
    const transactionDate = new Date(transaction.date);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (
      (!startDate || transactionDate >= start) &&
      (!endDate || transactionDate <= end)
    );
  });

  return (
    <div className="bg-gray-900 rounded-lg mt-5">
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
            {filteredTransactions.map((transaction, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {transaction.date}
                </th>
                <td className="px-6 py-4">{transaction.credit}</td>
                <td className="px-6 py-4">{transaction.debit}</td>
                <td className="px-6 py-4">{transaction.walletBalance}</td>
                <td className="px-6 py-4">{transaction.withdrawAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
