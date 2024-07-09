"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import style from "@/app/dashboard/dashboard.module.css";

const Page = ({ params }) => {
  const [adsCount, setAdsCount] = useState("");
  const [name, setName] = useState("");
  const [walletBalance, setWalletBalance] = useState("");
  const [email, setEmail] = useState("");
  const param = params.id;
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  useEffect(() => {
    const getData = async () => {
      await fetchEmail();
    };
    getData();
  }, []);

  useEffect(() => {
    if (email) {
      fetchAdsData();
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
      setEmail(response.data[0].email);
      setName(response.data[0].name);
      setWalletBalance(response.data[0].wallet_balance);
      
    } catch (err) {
      console.log("something wrong", err);
    }
  };

  const fetchAdsData = async () => {
    const res = await fetch("/api/userdetail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const response = await res.json();
    console.log(response?.data?.ads_count)
    setAdsCount(response?.data?.ads_count);
  };
  return (
    <div className={` ${style.contentContainer}`}>
      <IoIosArrowRoundBack
        className="text-5xl cursor-pointer"
        onClick={goBack}
      />
      <h2 className="ml-10 text-2xl my-5">Ads Count</h2>
      <div class="relative overflow-x-auto m-10 mt-0 rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                sr no.
              </th>
              <th scope="col" class="px-6 py-3">
                user name
              </th>
              <th scope="col" class="px-6 py-3">
                Interestitial ads
              </th>
              <th scope="col" class="px-6 py-3">
                native ads
              </th>
              <th scope="col" class="px-6 py-3">
                wallet ballance
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {adsCount?.update_interstitial_ads}
              </th>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {name}
              </th>
              <td class="px-6 py-4">{adsCount?.update_interstitial_ads}</td>
              <td class="px-6 py-4">{adsCount?.update_native_ads}</td>
              <td class="px-6 py-4">{(walletBalance).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
