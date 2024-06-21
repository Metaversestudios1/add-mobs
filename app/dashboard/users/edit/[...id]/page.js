"use client";
import React, { useEffect, useState } from "react";
import style from "../../../dashboard.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const Page = ({params}) => {
  const param = (params.id[0]).replace("%20", " "); 
  const router = useRouter()
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [oldData, setOldData] = useState("")

  useEffect(()=>{
    const fetchOldData = async () => {
      try {
        const response = await fetch("/api/getolduserdata", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ param }),
        });
        const result = await response.json();
        if (result.data[0]) {
          const userData = result.data[0];
          setName(userData.name || "");
          setEmail(userData.email || "");
          setRole(userData.role || "");
          setContact(userData.contact || "");
        } else {
          console.error("No data found for the given parameter.");
        }
      } catch (error) {
        console.error("Failed to fetch old data:", error);
      }
    };
  
    fetchOldData()

  },[])
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "contact") {
      setContact(e.target.value);
    } else if (e.target.name == "role") {
      setRole(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { param, name, email, contact, role };
    const res = await fetch("/api/edituser", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const response = await res.json();
    console.log(response)
    if (response.success) {
      setName("");
      setEmail("");
      setContact("");
      setRole("");
      
      setTimeout(() => {
        router.push("/dashboard/users");
      }, 1000);
    } else {
      alert("Invalid Credentials")
    }
  };
  return (
    <div className={`${style.addContainer}`}>
    <Link href="/dashboard/users" className="text-5xl"><IoIosArrowRoundBack  /></Link>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full name
            </label>
            <input
              type="text"
              id="full_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={oldData.name}
              required
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={oldData.email}
              required
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Role
            </label>
            <input
              type="text"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={oldData.role}
              required
              name="role"
              value={role}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={oldData.contact}
              required
              name="contact"
              value={contact}
              onChange={handleChange}
            />
          </div>
          
        </div>
       
        
        <div className="flex items-start mb-6">
          
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Page;
