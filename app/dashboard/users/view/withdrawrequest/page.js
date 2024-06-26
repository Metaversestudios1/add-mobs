
import React from "react";

const Page = () => {
  

  return (
        <div className="bg-gray-900 rounded-lg mt-5">
          <h2 className="ml-10 text-2xl my-5">Withdraw Requests</h2>
            <div class="relative overflow-x-auto m-10 mt-0 rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      account Holder name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      bank name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      bank account
                    </th>
                    <th scope="col" class="px-6 py-3">
                      ifse code
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Withdraw amount
                    </th>
                    <th scope="col" class="px-6 py-3">
                      UPI  id(optional)
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
                    <td class="px-6 py-4">Bank of India</td>
                    <td class="px-6 py-4">25143145</td>
                    <td class="px-6 py-4">BKID013120</td>
                    <td class="px-6 py-4">1000</td>
                    <td class="px-6 py-4">95632@ybl</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    Pratham
                    </th>
                    <td class="px-6 py-4">Bank of India</td>
                    <td class="px-6 py-4">725143145</td>
                    <td class="px-6 py-4">BKID013120</td>
                    <td class="px-6 py-4">1000</td>
                    <td class="px-6 py-4">95632@ybl</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
      
  );
};

export default Page;
