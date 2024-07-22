"use client"
import React, { useEffect, useState } from "react";
import style from "../../dashboard.module.css";

const Page = () => {
    const [scratchCount, setScratchCount] = useState("")
    const [scratchBonus, setScratchBonus] = useState("")


  
    useEffect(()=>{
      const fetchOldDetail = async ()=>{
        const res = await fetch ("/api/getglobalstats")
        const response = await res.json()
        setScratchCount(response?.data[0]?.scratch_card?.count)
        setScratchBonus(response?.data[0]?.scratch_card?.bonus)
      
      }
      fetchOldDetail()
    },[])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const data = {scratchBonus, scratchCount}
        const res = await fetch("/api/updategamedetail", {
            method:"PUT",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(data) 

        })
        const response = await res.json()
        if(response.success) {
            setScratchCount("")
            setScratchBonus("")
        }

    }
  return (
    <div className={`${style.contentContainer}`}>
      <div className="p-6 text-lg">Scratchcard</div>
      <div className="">
        <div className="flex flex-col m-10 items-center">
          <div className="flex m-5 items-center">
            <label htmlFor="count" className="mx-3 text-xl">Scratch count</label>
            <input value={scratchCount} onChange={(e)=>setScratchCount(e.target.value)} type="text" name="count" id="count" className="rounded-lg bg-black p-3"/>
          </div>
          <div className="flex m-5 items-center">
            <label htmlFor="bonus" className="mx-3 text-xl">Scratch Bonus</label>
            <input value={scratchBonus} onChange={(e)=>setScratchBonus(e.target.value)} type="text" name="bonus" id="bonus" className="rounded-lg bg-black p-3"/>
          </div>
          <button onClick={(e)=>handleSubmit(e)} className="bg-green-900 px-3 py-2 rounded-lg w-20">Save</button>
          </div>
      </div>
    </div>
  );
};

export default Page;
