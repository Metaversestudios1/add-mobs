"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const [permission, setPermission] = useState({ role: "", permission: "" });

  useEffect(() => {
    if (status === "authenticated") {
      setPermission({
        role: session?.user?.role,
        permission: session?.user?.permission,
      });
    }
  }, [session, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
        <div className="bg-gray-900 rounded-lg mt-5">
          <h2 className="ml-10 text-2xl my-5">Transaction History</h2>
            <div class="relative overflow-x-auto m-10 mt-0 rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Credit amount
                    </th>
                    <th scope="col" class="px-6 py-3">
                      debit amount
                    </th>
                    <th scope="col" class="px-6 py-3">
                      wallet ballance
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Withdraw amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    22-06-24
                    </th>
                    <td class="px-6 py-4">--</td>
                    <td class="px-6 py-4">500</td>
                    <td class="px-6 py-4">500</td>
                    <td class="px-6 py-4">500</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    21-06-24
                    </th>
                    <td class="px-6 py-4">--</td>
                    <td class="px-6 py-4">700</td>
                    <td class="px-6 py-4">800</td>
                    <td class="px-6 py-4">700</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
      
  );
};

export default Page;
