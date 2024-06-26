"use client";
import React, { useEffect, useState } from "react";
import style from "../dashboard.module.css";
const Page = () => {
  const [spinCount, setSpinCount] = useState("");
  const [slotCount, setSlotCount] = useState("");
  const [scratchCount, setScratchCount] = useState("");
  const [flipCount, setFlipCount] = useState("");
  const [dailyBonus, setDailyBonus] = useState("");
  const [adsBonus, setAdsBonus] = useState("");
  const [loginBonus, setLoginBonus] = useState("");
  const [slotBonus, setSlotBonus] = useState("");
  const [spinBonus, setSpinBonus] = useState("");
  const [maxWithdraw, setMaxWithdraw] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "spin-count") {
      setSpinCount(value);
    } else if (name == "slot-count") {
      setSlotCount(value);
    } else if (name == "scratch-count") {
      setScratchCount(value);
    } else if (name == "flip-count") {
      setFlipCount(value);
    } else if (name == "daily-bonus") {
      setDailyBonus(value);
    } else if (name == "ads-bonus") {
      setAdsBonus(value);
    } else if (name == "login-bonus") {
      setLoginBonus(value);
    } else if (name == "slot-bonus") {
      setSlotBonus(value);
    } else if (name == "spin-bonus") {
      setSpinBonus(value);
    } else if (name == "withdraw-amt") {
      setMaxWithdraw(value);
    }
  };
  const handleSubmit = async () => {
    const data = {
      spinCount,
      flipCount,
      slotCount,
      scratchCount,
      dailyBonus,
      adsBonus,
      loginBonus,
      slotBonus,
      spinBonus,
      maxWithdraw,
    };
    console.log(data);
    const res = await fetch("/api/updategamedetail", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response.success) {
      setSpinCount("");
      setSlotCount("");
      setScratchCount("");
      setFlipCount("");
      setDailyBonus("");
      setAdsBonus("");
      setLoginBonus("");
      setSlotBonus("");
      setSpinBonus("");
      setMaxWithdraw("");
    }
    console.log(response);
  };
  return (
    <div className={`${style.contentContainer}`}>
      <div className="flex justify-between items-center">
        <h3 className="m-10 text-3xl">&#x2022;Setting</h3>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className={`rounded-lg  px-8 m-5 h-10 bg-green-900`}
        >
          Save
        </button>
      </div>
      <div className="flex">
        <div className="flex-1 mx-16 text-2xl underline">Game/count</div>
        <div className="flex-1 mx-10 mb-10">
          <div>
            <div className="mb-6">
              <label
                htmlFor="spin-count"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set spin count
              </label>
              <input
                type="text"
                name="spin-count"
                value={spinCount}
                onChange={(e) => {
                  handleChange(e);
                }}
                id="spin-count"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="slot-count"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set slot count
              </label>
              <input
                type="text"
                name="slot-count"
                value={slotCount}
                onChange={(e) => {
                  handleChange(e);
                }}
                id="slot-count"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="scratch-count"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set scratch count
              </label>
              <input
                type="text"
                name="scratch-count"
                value={scratchCount}
                onChange={(e) => {
                  handleChange(e);
                }}
                id="scratch-count"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="flip-count"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set flip count
              </label>
              <input
                type="text"
                name="flip-count"
                value={flipCount}
                onChange={(e) => {
                  handleChange(e);
                }}
                id="flip-count"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 mx-16 text-2xl underline">Game/Bonus</div>
        <div className="flex-1 mx-10 mb-10">
          <div>
            <div className="mb-6">
              <label
                htmlFor="daily-bonus"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set daily bonus
              </label>
              <input
                type="text"
                name="daily-bonus"
                value={dailyBonus}
                onChange={(e) => {
                  handleChange(e);
                }}
                id="daily-bonus"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="ads-bonus"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set ads bonus
              </label>
              <input
                type="text"
                name="ads-bonus"
                value={adsBonus}
                onChange={(e) => {
                  handleChange(e);
                }}
                id="ads-bonus"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="login-bonus"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set login bonus
              </label>
              <input
                type="text"
                name="login-bonus"
                value={loginBonus}
                onChange={(e) => {
                  handleChange(e);
                }}
                id="login-bonus"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="slot-bonus"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set slot bonus
              </label>
              <input
                type="text"
                name="slot-bonus"
                value={slotBonus}
                onChange={(e) => {
                  handleChange(e);
                }}
                id="slot-bonus"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="spin-bonus"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set spin bonus
              </label>
              <input
                type="text"
                name="spin-bonus"
                value={spinBonus}
                onChange={(e) => {
                  handleChange(e);
                }}
                id="spin-bonus"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 mx-16 text-2xl underline">
          Game/withdraw amount
        </div>
        <div className="flex-1 mx-10 mb-10">
          <div>
            <div className="mb-6">
              <label
                htmlFor="withdraw-amt"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Set max withdrawal amount
              </label>
              <input
                type="text"
                name="withdraw-amt"
                value={maxWithdraw}
                onChange={(e) => {
                  handleChange(e);
                }}
                id="withdraw-amt"
                className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
