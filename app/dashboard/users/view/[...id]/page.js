"use client";
import React, { useEffect, useState } from "react";
import style from "@/app/dashboard/dashboard.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const Page = ({ params }) => {
  const param = params.id[0];
  const [email, setEmail] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const [gameDetail, setGameDetail] = useState("");

  useEffect(() => {
    const getData = async () => {
      await fetchEmail();
    };
    getData();
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/userdetail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const response = await res.json();
        setUserDetail(response.data);
      } catch (err) {
        console.log("something wrong", err);
      }
    };
    const fetchGameDetail = async () => {
      try {
        const res = await fetch(`/api/getgamedetail/${email}`);
        const response = await res.json();
        setGameDetail(response.data);
      } catch (err) {
        console.log("something happen" + err);
      }
    };
    if (email) {
      fetchData();
      fetchGameDetail();
    }
  }, [email]);

  const fetchEmail = async () => {
    try {
      const res = await fetch("/api/getolduserdata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ param }),
      });
      const response = await res.json();
      setEmail(response.data[0].email);
    } catch (err) {
      console.log("something wrong", err);
    }
  };

  return (
    <>
      {gameDetail ? (
        <div className={` ${style.contentContainer}`} >
        <Link href="/dashboard/users" className="text-5xl">
        <IoIosArrowRoundBack />
      </Link>
          <div className={`${style.detailContainer}`}>
            <div className={`${style.detailImage}`}>
              <div className="rounded-lg bg-white my-4 ml-10 h-60 w-60">
                <Image
                  src="/avatar.webp"
                  width={500}
                  height={500}
                  className="h-60 w-60"
                  alt="img"
                />
              </div>
            </div>
            <div className={`${style.userDetail}`}>
              <div className="flex justify-between">
                <p className="text-center text-2xl my-5 underline ml-6">
                  User Detail
                </p>
              </div>
              <div className="flex flex-wrap">
                <div>
                  <div className="flex text-2xl mb-5">
                    <div className="mx-5">Email:</div>
                    <div className="mx-5">{userDetail?.email}</div>
                  </div>
                  <div className="flex text-2xl mb-5">
                    <div className="mx-5">Wallet balance:</div>
                    <div className="mx-5">{(userDetail?.wallet_balance) && (userDetail?.wallet_balance).toFixed(2)}</div>
                  </div>
                  <div className="flex text-2xl mb-5">
                    <div className="mx-5">Spin count:</div>
                    <div className="mx-5">
                      {gameDetail?.spin_wheel_count}
                    </div>
                  </div>
                  <div className="flex text-2xl mb-5">
                    <div className="mx-5">Slot count:</div>
                    <div className="mx-5">
                      {gameDetail?.lucky_slot_count}
                    </div>
                  </div>
                  <div className="flex text-2xl mb-5">
                    <div className="mx-5">Flip count:</div>
                    <div className="mx-5">
                      {gameDetail?.flip_card_count}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex text-2xl mb-5">
                    <div className="mx-5">Scratch count:</div>
                    <div className="mx-5">
                      {gameDetail?.scratch_card_count}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end flex-wrap">
          <Link
                          href={{
                            pathname: `/dashboard/users/view/accountdetails/[id]`,
                            query: {
                              id: param,
                            },
                          }}
                          as={`/dashboard/users/view/accountdetails/${param}`}
                        >
          <button className="rounded-lg  py-2 px-8 m-5 bg-green-900">
            Account details
          </button>
        </Link>
          <Link href={`/dashboard/users/view/scores`}>
          <button className="rounded-lg  py-2 px-8 m-5 bg-green-900">
            Scores
          </button>
        </Link>
            <Link href={`/dashboard/users/view/transaction`}>
              <button className="rounded-lg  py-2 px-8 m-5 bg-green-900">
                Transaction History
              </button>
            </Link>
            <Link href={`/dashboard/users/view/withdrawrequest`}>
              <button className="rounded-lg  py-2 px-8 m-5 bg-green-900">
                Withdraw Requests
              </button>
            </Link>
            <Link
                          href={{
                            pathname: `/dashboard/users/view/adscount/[id]`,
                            query: {
                              id: param,
                            },
                          }}
                          as={`/dashboard/users/view/adscount/${param}`}
                        >
              <button className="rounded-lg  py-2 px-8 m-5 bg-green-900">
                Ads Count
              </button>
            </Link>
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
