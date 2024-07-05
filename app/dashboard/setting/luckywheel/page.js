"use client"
import React, { useEffect, useState } from "react";
import style from "../../dashboard.module.css";

const Page = () => {

  const [wheelCount, setWheelCount] = useState("")
    const [wheelBonus, setWheelBonus] = useState("")
useEffect(()=>{
  fetchOldDetail()
},[])
const fetchOldDetail = async ()=>{
  const res = await fetch ("/api/getglobalstats")
  const response = await res.json()
  setWheelCount(response.data[0].spin_wheel.spin_count)
  setWheelBonus(response.data[0].spin_wheel.spin_bonus)
}
  const handleSubmit = async(e) =>{
        e.preventDefault()
        const data = {wheelCount, wheelBonus}
        const res = await fetch("/api/updategamedetail", {
            method:"PUT",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(data) 

        })
        const response = await res.json()
        if(response.success) {
            setWheelBonus("")
            setWheelCount("")
        }

    }
  return (
    <div className={`${style.contentContainer}`}>
      <div className="p-6 text-lg">Luckywheel</div>
      <div className="">
        <div className="flex flex-col m-10 items-center">
          <div className="flex m-5 items-center">
            <label htmlFor="count" className="mx-3 text-xl">Spin count</label>
            <input value={wheelCount} onChange={(e)=>setWheelCount(e.target.value)} type="text" name="count" id="count" className="rounded-lg bg-black p-3"/>
          </div>
          <div className="flex m-5 items-center">
            <label htmlFor="bonus" className="mx-3 text-xl">Spin Bonus</label>
            <input value={wheelBonus} onChange={(e)=>setWheelBonus(e.target.value)} type="text" name="bonus" id="bonus" className="rounded-lg bg-black p-3"/>
          </div>
          <button onClick={(e)=>handleSubmit(e)} className="bg-green-900 px-3 py-2 rounded-lg w-20">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
