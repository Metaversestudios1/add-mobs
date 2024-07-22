"use client";
import React, { useEffect, useState } from "react";
import style from "../../dashboard.module.css";

const Page = () => {
  const [wheelCount, setWheelCount] = useState("");
  const [wheelBonus, setWheelBonus] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOldDetail = async () => {
      try {
        const res = await fetch("/api/getglobalstats");
        if (!res.ok) {
          throw new Error(`Error: ${res.statusText}`);
        }
        const response = await res.json();
        setWheelCount(response?.data[0]?.spin_wheel?.count || "");
        setWheelBonus(response?.data[0]?.spin_wheel?.bonus || "");
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };
    fetchOldDetail();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { wheelCount, wheelBonus };
    try {
      const res = await fetch("/api/updategamedetail", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error(`Error: ${res.statusText}`);
      }
      const response = await res.json();
      if (response.success) {
        setWheelBonus("");
        setWheelCount("");
      }
    } catch (error) {
      setError(error.message);
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className={style.contentContainer}>
      <div className="p-6 text-lg">Lucky Wheel</div>
      <div>
        <div className="flex flex-col m-10 items-center">
          <div className="flex m-5 items-center">
            <label htmlFor="count" className="mx-3 text-xl">Spin Count</label>
            <input
              value={wheelCount}
              onChange={(e) => setWheelCount(e.target.value)}
              type="text"
              name="count"
              id="count"
              className="rounded-lg bg-black p-3"
            />
          </div>
          <div className="flex m-5 items-center">
            <label htmlFor="bonus" className="mx-3 text-xl">Spin Bonus</label>
            <input
              value={wheelBonus}
              onChange={(e) => setWheelBonus(e.target.value)}
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
          {error && <div className="mt-3 text-red-600">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Page;
