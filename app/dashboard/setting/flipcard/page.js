"use client";
import React, { useEffect, useState } from "react";
import style from "../../dashboard.module.css";

const Page = () => {
  const [flipCount, setFlipCount] = useState("");
  const [flipBonus, setFlipBonus] = useState("");

  useEffect(()=>{
    const fetchOldDetail = async ()=>{
      const res = await fetch ("/api/getglobalstats")
      const response = await res.json()
      console.log(response)
      setFlipCount(response?.data[0]?.flip_card?.count)
      setFlipBonus(response?.data[0]?.flip_card?.bonus)
    
    }
    fetchOldDetail()
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { flipCount, flipBonus };
    const res = await fetch("/api/updategamedetail", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    if (response.success) {
      setFlipBonus("");
      setFlipCount("");
    }
  };
  return (
    <div className={`${style.contentContainer}`}>
      <div className=" p-6 text-lg">Flipcard</div>
      <div className="">
        <div className="flex flex-col m-10 items-center">
          <div className="flex m-5 items-center">
            <label htmlFor="count" className="mx-3 text-xl">
              Flip count
            </label>
            <input
              value={flipCount}
              onChange={(e) => setFlipCount(e.target.value)}
              type="text"
              name="count"
              id="count"
              className="rounded-lg bg-black p-3"
            />
          </div>
          <div className="flex m-5 items-center">
            <label htmlFor="bonus" className="mx-3 text-xl">
              Flip Bonus
            </label>
            <input
              value={flipBonus}
              onChange={(e) => setFlipBonus(e.target.value)}
              type="text"
              name="bonus"
              id="bonus"
              className="rounded-lg bg-black p-3"
            />
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-green-900 px-3 py-2 rounded-lg w-20"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
