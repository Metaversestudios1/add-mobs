"use client";
import React, { useEffect, useState } from "react";
import style from "../dashboard.module.css";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const Page = () => {
  const [search, setSearch] = useState("");
  const [adminUsers, setAdminUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []); // Only fetch users once on component mount

  const fetchUserData = async () => {
    const res = await fetch("/api/getadminusers");
    const data = await res.json();
    setAdminUsers(data.data);
    setAllUsers(data.data);
  };

  const handleChange = (e) => {
    if (e.target.name === "search") {
      setSearch(e.target.value);
    }
  };

  const handleDelete = async (email) => {
    const response = await fetch(`/api/deleteadmin?email=${email}`, {
      method: "DELETE",
    });
    const res = await response.json(); // Await the response correctly
    if (res.success) {
      setAdminUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
    } else {
      alert(res.error || "Failed to delete user");
    }
  };

  const handleSearch = () => {
    const lowercaseSearch = search.toLowerCase(); // Convert search query to lowercase
    const filteredData = allUsers.filter((user) => {
      const lowercaseName = user.name.toLowerCase(); // Convert user name to lowercase
      return lowercaseName.includes(lowercaseSearch); // Check if user name includes the search query
    });
    setAdminUsers(filteredData);
  };

  const handleReladData = () => {
    setSearch("");
    setAdminUsers(allUsers);
  };

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
            <button
              onClick={() => {
                handleSearch();
              }}
              className="bg-blue-800 text-white p-2 my-5  text-sm rounded-lg"
            >
              Search
            </button>
            <IoReload
              onClick={() => {
                handleReladData();
              }}
              className="cursor-pointer text-xl mx-5"
            />
          </div>
          <Link href="/dashboard/adminusers/add">
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
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Password
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {adminUsers &&
                adminUsers.map((item) => {
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={item._id}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </th>
                      <td className="px-6 py-4">{item.email} </td>
                      <td className="px-6 py-4 flex items-center">********<IoEye className="mx-2 text-xl cursor-pointer"/></td>
                      <td className="px-6 py-4">{item.role} </td>
                      <td className="flex items-center h-16">
                        <Link
                          href={{
                            pathname: `/dashboard/users/edit/[id]`,
                            query: {
                              id: item._id,
                            },
                          }}
                          as={`/dashboard/adminusers/edit/${item._id}`}
                        >
                          <CiEdit className="text-2xl cursor-pointer mx-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(item.email)}
                          className="px-4 py-3 bg-red-900 rounded-lg "
                        >
                          Delete
                        </button>
                      </td>
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

export default Page;
