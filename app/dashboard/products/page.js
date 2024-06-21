"use client";
import React, { useEffect, useState } from "react";
import style from "../dashboard.module.css";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { IoReload } from "react-icons/io5";

const page = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [allproducts, setAllproducts] = useState([]);
  
  useEffect(() => {
    fetchUserData();
  }, []); // Only fetch products once on component mount

  const fetchUserData = async () => {
    const res = await fetch("/api/getproducts");
    const data = await res.json();
    setProducts(data.products);
    setAllproducts(data.products)
  };

  const handleChange = (e) => {
    if (e.target.name === "search") {
      setSearch(e.target.value);
    }
  };

  const handleDelete = async (title) => {
    const response = await fetch(`/api/deleteproduct?title=${title}`, {
      method: "DELETE",
    });
    const res = await response.json(); // Await the response correctly
    if (res.success) {
      setProducts((prevproducts) => prevproducts.filter((product) => product.title !== title));
    } else {
      alert(res.error || "Failed to delete user");
    }
  };

  const handleSearch = () => {
    const lowercaseSearch = search.toLowerCase(); // Convert search query to lowercase
    const filteredData =   allproducts.filter((product) => {
      const lowercaseName = product.title.toLowerCase(); // Convert user name to lowercase
      return lowercaseName.includes(lowercaseSearch); // Check if user name includes the search query
    });
    setProducts(filteredData);
  };

  const handleReladData=()=>{
    setSearch("")
    setProducts(allproducts)
  }
  return (
    <div className={`${style.contentContainer}`}>
      <div>
        <div className={`${style.search}`}>
        <div className="flex items-center">
          <input
            placeholder="Search "
            type="text"
            name="search"
            className={`${style.input} rounded-lg bg-black p-2 m-5`}
            value={search}
            onChange={handleChange}
          />
          <button onClick={()=>{handleSearch()}} className="bg-blue-800 text-white p-2 my-5  text-sm rounded-lg">Search</button>
          <IoReload onClick={()=>{handleReladData()}} className="cursor-pointer text-xl mx-5"/>
          </div>
          <Link href="/dashboard/products/add">
            <button className="bg-blue-800 text-white p-3 m-5 text-sm rounded-lg">
              Add New
            </button>
          </Link>
        </div>
      </div>
      <div className={`${style.userTable} `}>
        <div className="relative overflow-x-auto m-5 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-10">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  title
                </th>
                <th scope="col" className="px-6 py-3">
                  description
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Created at
                </th>
                <th scope="col" className="px-6 py-3">
                  Stock
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item, i) => {
                  return(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={i}>
                      <th
                        scope="row"
                        className="flex items-center  px-2 py-4 mx-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img src={`${item.mediaUrl}`} alt="img" className="h-10 mx-1  rounded-full"/>{item.title}
                      </th>
                      <td className="px-6 py-4 mx-2">{item.description} </td>
                      <td className="px-6 py-4">{item.price} </td>
                      <td className="px-6 py-4">{item.createdAt} </td>
                      <td className="px-6 py-4">{item.stock} </td>
                      <td className="flex items-center h-32"><Link href={{
                        pathname: `/dashboard/products/edit/[title]`,
                        query: {
                          title: item.title, // should be `title` not `id`
                        },
                      }}
                      as={`/dashboard/products/edit/${item.title}`}><CiEdit className="text-2xl cursor-pointer mx-4"/></Link><button onClick={()=>handleDelete(item.title)} className="px-6 py-4 bg-red-900 rounded-lg -p-5  ">Delete</button></td>

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

export default page;
