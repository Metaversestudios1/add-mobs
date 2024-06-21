"use client";
import React, { useState } from "react";
import style from "../../../dashboard.module.css";
import { useRouter} from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

const page = ({params}) => {
  const param = (params.id[0]).replace("%20", " "); 
  const router = useRouter()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleChange = (e) => {
    if (e.target.name == "title") {
      setTitle(e.target.value);
    } else if (e.target.name == "description") {
      setDescription(e.target.value);
    } else if (e.target.name == "stock") {
      setStock(e.target.value);
    } else if (e.target.name == "price") {
      setPrice(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { param, title, description, stock, price };
    const res = await fetch("/api/updateproduct", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const response = await res.json();
    console.log(response)
    if (response.success) {
      setTitle("");
      setDescription("");
      setPrice("");
      setStock("");
      
      setTimeout(() => {
        router.push("/dashboard/products");
      }, 1000);
    } else {
      alert("Invalid Credentials")
    }
    
  };
  return (
    <div className={`${style.addContainer}`}>
    <Link href="/dashboard/products" className="text-5xl"><IoIosArrowRoundBack  /></Link>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Title
            </label>
            <input
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="description"
              value={description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="price"
              value={price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Stock
            </label>
            <input
              type="text"
              id="stock"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              name="stock"
              value={stock}
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

export default page;
