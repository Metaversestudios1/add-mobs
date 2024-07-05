"use client";
import React, { useEffect, useState } from "react";
import style from "../../../../dashboard.module.css";
const Page = ({ params }) => {
  const param = params.id[0];

  const [bank, setBank] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getData = async () => {
      await fetchEmail();
    };
    getData();
  }, []);

  useEffect(() => {
    if (email) {
      fetchAccDetails();
    }
  }, [email]);

  const fetchEmail = async () => {
    try {
      const res = await fetch("/api/getolduserdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ param }),
      });
      const response = await res.json();
      setEmail(response?.data[0]?.email);
    } catch (err) {
      console.log("something wrong", err);
    }
  };
  const fetchAccDetails = async () => {
    const response = await fetch(`/api/getbankdetails/${email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const detail = await response.json();
    setBank(detail.details);
  };
  return (
    <div className={`${style.contentContainer}`}>
      <div>
        <div className="pt-10 pl-10 text-xl">Account Details</div>
        <div className="pt-10 pl-10 text-xl">Bank detail</div>
        <div className=" overflow-x-auto p-10 pt-3 rounded-lg ">
          <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" className="px-6 py-3">SR no.</th>
                <th scope="col" className="px-6 py-3">
                  A/C Holder name
                </th>
                <th scope="col" className="px-6 py-3">
                  Bank name
                </th>
                <th scope="col" className="px-6 py-3">
                  Account Number
                </th>
                <th scope="col" className="px-6 py-3">
                  IFSC Code
                </th>
                <th scope="col" className="px-6 py-3">
                  account type
                </th>
              </tr>
            </thead>
            <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th className="px-6 py-4">1.</th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >happy</th>
                    <td className="px-6 py-4">Bank of india</td>
                    <td className="px-6 py-4">54354311</td>
                    <td className="px-6 py-4">boi96878</td>
                    <td className="px-6 py-4">saving</td>
                  </tr>
                
            </tbody>
          </table>
        </div>
        <div>
        <div className="pt-10 pl-10 text-xl">UPI detail</div>
        <div className=" overflow-x-auto p-10 pt-3 rounded-lg ">
          <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
              <th scope="col" className="px-6 py-3">SR no.</th>
                <th scope="col" className="px-6 py-3">
                  A/C Holder name
                </th>
                <th scope="col" className="px-6 py-3">
                  UPI id
                </th>

              </tr>
            </thead>
            <tbody>
                  <tr  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th className="px-6 py-4">1.</th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >happy</th>
                    <td className="px-6 py-4">9034590347@ybl</td>
                  </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
