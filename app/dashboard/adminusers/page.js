"use client";
import React, { useEffect, useState } from "react";
import style from "../dashboard.module.css";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const Page = () => {
  const [search, setSearch] = useState("");
  const [adminUsers, setAdminUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const [totalAdminUsers, setTotalAdminUsers] = useState(0);

  useEffect(() => {
    
      const fetchUserData = async () => {
        const res = await fetch(`/api/getadminusers?page=${currentPage}&limit=${usersPerPage}`);
        const data = await res.json();
        if(data.success) {
    
          setTotalAdminUsers(data.count);
          setAdminUsers(data.data);
          setAllUsers(data.data);
        }
        else {
          setAdminUsers([false])
        }
      };
    fetchUserData();
  },[currentPage, usersPerPage]); // Only fetch users once on component mount

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
      fetchUserData()
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
    if (filteredData.length > 0) {
      setAdminUsers(filteredData);
    } else {
      alert("User not found!");
      setSearch("");
    }
  };

  const handleReladData = () => {
    setSearch("");
    setAdminUsers(allUsers);
  };
  const startIndex = (currentPage - 1) * usersPerPage;
  if(!adminUsers[0]) {
    return (
      <div className={`${style.contentContainer} ml-2 mt-2 p-4 min-h-96`}>
      <div className="p-6 text-xl">Sub Admin</div>
          <div>
            <div className={style.searchContainer}>
              <div className={`${style.search} flex items-center`}>
                <input
                  placeholder="Search "
                  type="text"
                  name="search"
                  className={`${style.input} rounded-lg bg-black p-2 m-5`}
                  value={search}
                  onChange={handleChange}
                />
                <div className={`${style.searchButton} flex items-center`}>
                  <button
                    onClick={handleSearch}
                    className="bg-blue-800 text-white p-2 my-5  text-sm rounded-lg"
                  >
                    Search
                  </button>
                  <IoReload
                    onClick={handleReladData}
                    className="cursor-pointer text-xl mx-5"
                  />
                </div>
              </div>
              <Link href="/dashboard/adminusers/add">
                <button className="bg-blue-800 text-white p-3 m-5 text-sm rounded-lg">
                  Add New
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
          <div className="my-10 text-xl">There is no Sub Admins found in the memory!</div>
          </div>
      </div>
    )
  }
  return (
    <>
      {adminUsers.length > 0 ? (
        <div className={`${style.contentContainer}`}>
        <div className="p-6 text-xl">Admin users</div>
          <div>
            <div className={`${style.searchContainer}`}>
              <div className={`${style.search} flex items-center`}>
                <input
                  placeholder="Search"
                  type="text"
                  name="search"
                  className={`${style.input} rounded-lg bg-black p-2 m-5`}
                  value={search}
                  onChange={handleChange}
                />
                <div className={`${style.searchButton} flex items-center`}>
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
                  {adminUsers.map((item ,index) => {
                    return (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={item._id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                        {startIndex + index + 1} {item.name}
                        </th>
                        <td className="px-6 py-4">{item.email} </td>
                        <td className="px-6 py-4 flex items-center">
                          ********
                          <IoEye className="mx-2 text-xl cursor-pointer" />
                        </td>
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
                          <MdDelete
                          onClick={() => handleDelete(item.email)}
                          className="text-2xl cursor-pointer"
                        />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className={`${style.pagination} container flex justify-end items-center pb-10`}>
          <div className="text-sm">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + usersPerPage, totalAdminUsers)} of {totalAdminUsers}{" "}
              entries
            </div>
            <div className="flex flex-row mx-10">
              <button
                type="button"
                className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
                onClick={() =>setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <div className="flex flex-row align-middle">
                  <svg
                    className="w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className="ml-2">Prev</p>
                </div>
              </button>
              <button
                type="button"
                className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={adminUsers.length < usersPerPage || startIndex + usersPerPage >= totalAdminUsers}
              >
                <div className="flex flex-row align-middle">
                  <span className="mr-2">Next</span>
                  <svg
                    className="w-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div role="status" className="flex justify-center items-center h-full">
          <svg
            aria-hidden="true"
            className=" text-center w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Page;
