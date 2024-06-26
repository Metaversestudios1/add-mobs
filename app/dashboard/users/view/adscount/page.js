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
          <h2 className="ml-10 text-2xl my-5">Ads Count</h2>
            <div class="relative overflow-x-auto m-10 mt-0 rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      user name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Interestitial ads
                    </th>
                    <th scope="col" class="px-6 py-3">
                      native ads
                    </th>
                    <th scope="col" class="px-6 py-3">
                      wallet ballance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    Pratham 
                    </th>
                    <td class="px-6 py-4">5</td>
                    <td class="px-6 py-4">3</td>
                    <td class="px-6 py-4">465</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
      
  );
};

export default Page;
