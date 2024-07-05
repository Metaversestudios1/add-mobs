"use client"
import React, {useEffect, useState} from "react";
import style from "../../dashboard.module.css";

const Page = () => {
    const [slotCount, setSlotCount] = useState("")
    const [slotBonus, setSlotBonus] = useState("")

    useEffect(()=>{
      fetchOldDetail()
    },[])
    const fetchOldDetail = async ()=>{
      const res = await fetch ("/api/getglobalstats")
      const response = await res.json()
      setSlotCount(response.data[0].lucky_slot.lucky_count)
      setSlotBonus(response.data[0].lucky_slot.slot_bonus)
    
    }

  const handleSubmit = async(e) =>{
        e.preventDefault()
        const data = {slotCount, slotBonus}
        const res = await fetch("/api/updategamedetail", {
            method:"PUT",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(data) 

        })
        const response = await res.json()
        if(response.success) {
            setSlotBonus("")
            setSlotCount("")
        }

    }

  return (
    <div className={`${style.contentContainer}`}>
      <div className=" p-6 text-lg">Luckyslot</div>
      <div className="">
        <div className="flex flex-col m-10 items-center">
          <div className="flex m-5 items-center">
            <label htmlFor="count" className="mx-3 text-xl">Slot count</label>
            <input value={slotCount} onChange={(e)=>setSlotCount(e.target.value)} type="text" name="count" id="count" className="rounded-lg bg-black p-3"/>
          </div>
          <div className="flex m-5 items-center">
            <label htmlFor="bonus" className="mx-3 text-xl">Slot Bonus</label>
            <input value={slotBonus} onChange={(e)=>setSlotBonus(e.target.value)} type="text" name="bonus" id="bonus" className="rounded-lg bg-black p-3"/>
          </div>
          <button onClick={(e)=>{handleSubmit(e)}} className="bg-green-900 px-3 py-2 rounded-lg w-20">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
