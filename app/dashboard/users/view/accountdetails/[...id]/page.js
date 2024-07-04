"use client";
import React, { useEffect, useState } from "react";
import style from "../../../../dashboard.module.css";
const Page = ({ params }) => {
  const param = params.id[0];

  const [bank, setBank] = useState([]);
  const [email, setEmail] = useState("");
  console.log(email);

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
    const response = await fetch(`/api/getbankdetails?${email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const detail = await response.json();
    console.log(detail.details)
    setBank(detail.details);
  };
  return (
    <div className={`${style.contentContainer}`}>
      <div>
        <div className="pt-10 pl-10 text-xl">Account Details</div>
        <div className=" overflow-x-auto p-10 pt-6 rounded-lg ">
          <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
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
              {bank.map((item, index) => {
                return (
                  <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >{item?.ac_holder_name}</th>
                    <td className="px-6 py-4">{item?.bank_name}</td>
                    <td className="px-6 py-4">{item?.ac_number}</td>
                    <td className="px-6 py-4">{item?.ifsc_code}</td>
                    <td className="px-6 py-4">{item?.ac_type}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
