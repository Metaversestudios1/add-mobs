"use client";
import React, { useEffect, useState } from "react";
import style from "../dashboard.module.css";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import { GrFormView } from "react-icons/gr";
import { ImBlocked } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { CgUnblock } from "react-icons/cg";
import { FaAngleRight } from "react-icons/fa";

const Page = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [block, setBlock] = useState(false);
  const [entry, setEntry] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  useEffect(() => {
    fetchUserData();
  }, [currentPage, usersPerPage]); // Only fetch users once on component mount

  const fetchUserData = async () => {
    try {
      const res = await fetch(
        `/api/alluserdata?page=${currentPage}&limit=${usersPerPage}`
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      if (data && data.data) {
        setUsers(data.data);
        setAllUsers(data.data);
        setBlock(data.data[0].is_blocked);
      } else {
        console.error("Empty or malformed data received:", data);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "search") {
      setSearch(e.target.value);
    } else if (e.target.name === "entry") {
      setEntry(e.target.value);
    }
  };

  const handleDelete = async (email) => {
    const response = await fetch(`/api/deleteuser?email=${email}`, {
      method: "DELETE",
    });
    const res = await response.json();
    if (res.success) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
    } else {
      alert(res.error || "Failed to delete user");
    }
  };

  const handleSearch = () => {
    const lowercaseSearch = search.toLowerCase();
    const filteredData = allUsers.filter((user) =>
      user.name.toLowerCase().includes(lowercaseSearch)
    );
    setUsers(filteredData);
  };

  const handleReladData = () => {
    setSearch("");
    setUsers(allUsers);
  };

  const handleBlock = async (email) => {
    try {
      const response = await fetch("/api/edituser", {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const res = await response.json();
      setBlock(!block);
    } catch (err) {
      console.log(err);
    }
  };
  // Pagination functions
  // const indexOfLastUser = currentPage * usersPerPage;
  // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // console.log(currentPage);
  return (
    <>
      {users.length > 0 ? (
        <div className={style.contentContainer}>
          <div>
            <div className={style.search}>
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
              <Link href="/dashboard/users/add">
                <button className="bg-blue-800 text-white p-3 m-5 text-sm rounded-lg">
                  Add New
                </button>
              </Link>
            </div>
            <div className="flex mx-7 items-center">
              <div>Showing</div>
              <input
                type="text"
                name="entry"
                className="w-8 text-xs mx-2 rounded h-7 bg-black"
                value={entry}
                onChange={handleChange}
              />
              <div className="flex items-center">
                enteries
                <FaAngleRight onClick={(e) => {
                  e.preventDefault();
                  setUsersPerPage(entry);
                }} className="text-xl ml-1 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className={style.userTable}>
            <div className="relative overflow-x-auto m-5 mb-0">
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
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Created at
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item) => (
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
                      <td className="px-6 py-4">{item.contact} </td>
                      <td className="px-6 py-4">{item.createdAt} </td>
                      <td className="flex items-center h-16">
                        <Link
                          href={{
                            pathname: `/dashboard/users/view/[id]`,
                            query: { id: item._id },
                          }}
                          as={`/dashboard/users/view/${item._id}`}
                        >
                          <GrFormView className="text-3xl cursor-pointer" />
                        </Link>
                        <Link
                          href={{
                            pathname: `/dashboard/users/edit/[id]`,
                            query: {
                              id: item._id,
                            },
                          }}
                          as={`/dashboard/users/edit/${item._id}`}
                        >
                          <CiEdit className="text-2xl cursor-pointer mx-4" />
                        </Link>
                        <MdDelete
                          onClick={() => handleDelete(item.email)}
                          className="text-2xl cursor-pointer"
                        />
                        {block ? (
                          <CgUnblock
                            onClick={() => handleBlock(item.email)}
                            className="text-2xl cursor-pointer ml-3"
                          />
                        ) : (
                          <ImBlocked
                            onClick={() => handleBlock(item.email)}
                            className="text-xl cursor-pointer ml-3"
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="container flex justify-end">
            <div className="flex flex-row mx-10 mb-10">
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
                disabled={users.length<usersPerPage }
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

