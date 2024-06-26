import React from "react";

const Page = () => {
  return (
    <div>
      <div class="bg-gray-900 p-5 my-10">
        <div class="mx-auto mt-8 max-w-screen-lg px-2">
          <div class="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p class="flex-1 text-base font-bold text-white">
              Latest Payments
            </p>

            
          </div>

          <div class="mt-6 overflow-hidden rounded-xl border shadow">
            <table class="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead class="hidden border-b lg:table-header-group">
                <tr class="">
                  <td
                    width="50%"
                    class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
                  >
                    Invoice
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Date
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Amount
                  </td>

                  <td class="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Status
                  </td>
                </tr>
              </thead>

              <tbody class="lg:border-gray-300">
                <tr class="">
                  <td
                    width="50%"
                    class="whitespace-no-wrap py-4 text-sm font-bold text-white sm:px-6"
                  >
                    Standard Plan - Feb 2022
                    <div class="mt-1 lg:hidden">
                      <p class="font-normal text-gray-500">07 February, 2022</p>
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    07 February, 2022
                  </td>

                  <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $59.00
                    <div class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div class="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>

                <tr class="">
                  <td
                    width="50%"
                    class="whitespace-no-wrap py-4 text-sm font-bold text-white sm:px-6"
                  >
                    Standard Plan - Jan 2022
                    <div class="mt-1 lg:hidden">
                      <p class="font-normal text-gray-500">09 January, 2022</p>
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    09 January, 2022
                  </td>

                  <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $59.00
                    <div class="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-200 py-1 px-2 text-left font-medium text-red-500 lg:hidden">
                      Canceled
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div class="inline-flex items-center rounded-full bg-red-200 py-1 px-2 text-red-500">
                      Canceled
                    </div>
                  </td>
                </tr>

                <tr class="">
                  <td
                    width="50%"
                    class="whitespace-no-wrap py-4 text-sm font-bold text-white sm:px-6"
                  >
                    Basic Plan - Dec 2021
                    <div class="mt-1 lg:hidden">
                      <p class="font-normal text-gray-500">15 December, 2021</p>
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    15 December, 2021
                  </td>

                  <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $29.00
                    <div class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div class="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>

                <tr class="">
                  <td
                    width="50%"
                    class="whitespace-no-wrap py-4 text-sm font-bold text-white sm:px-6"
                  >
                    Basic Plan - Nov 2021
                    <div class="mt-1 lg:hidden">
                      <p class="font-normal text-gray-500">14 November, 2021</p>
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    14 November, 2021
                  </td>

                  <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $29.00
                    <div class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-200 py-1 px-2 text-left font-medium text-blue-500 lg:hidden">
                      Pending
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div class="inline-flex items-center rounded-full bg-blue-200 py-1 px-2 text-blue-500">
                      Pending
                    </div>
                  </td>
                </tr>

                <tr class="">
                  <td
                    width="50%"
                    class="whitespace-no-wrap py-4 text-sm font-bold text-white sm:px-6"
                  >
                    Basic Plan - Oct 2021
                    <div class="mt-1 lg:hidden">
                      <p class="font-normal text-gray-500">15 October, 2021</p>
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    15 October, 2021
                  </td>

                  <td class="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $29.00
                    <div class="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>

                  <td class="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div class="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
