import React from "react";
import NavBar from "../components/NavBar";


import { Link } from "react-router-dom";

const OrderPage = () => {
  return (
    <div class="bg-space h-[100vh] ">
      <div class="container mx-auto ">
        <NavBar />

        <div className="mt-7 h-[55vh] overflow-auto">
          <table className="w-full whitespace-nowrap">
            <thead className="text-center ">
              <tr className=" ">
                <th></th>
                <th className="text-sm text-grey uppercase">Name</th>
                <th className="text-sm text-grey uppercase">Email</th>
                <th className="text-sm text-grey uppercase">Products</th>
                <th className="text-sm text-grey uppercase">Address</th>
                <th className="text-sm text-grey uppercase">Status</th>
                <th className="text-sm text-grey uppercase">CreatedAt</th>
                <th className="text-sm text-grey uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="h-16 border-b ">
                <td>
                  <div className="">
                    <div className="rounded-sm w-6 h-6 flex flex-shrink-0 justify-center items-center relative">
                      <div className="text-grey rounded-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center ">
                    <p className="text-base font-medium leading-none text-grey uppercase mr-2">
                      Priyanshu
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                        stroke="#3B82F6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                        stroke="#3B82F6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </td>
                <td className="overflow-hidden">
                  <div className="flex text-center items-center justify-center">
                    <a
                      className="text-sm leading-none justify-center mt-2 font-bold ml-2 w-96 flex text-grey"
                      href=""
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-mail"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </span>{" "}
                      priyanshu@gmail.com
                    </a>
                  </div>
                </td>
                <td className="flex justify-evenly mt-5 ml-10 ">
                  <div className="flex  items-center justify-center">
                    <p className="text-sm  leading-none text-grey ">paper</p>
                  </div>
                </td>
                <td className="">
                  <div className="flex ml-20">
                    <input
                      type="text"
                      value="143 xyz street"
                      className="text-center text-sm leading-none text-grey bg-transparent border-none focus:outline-none"
                      readOnly
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-5 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Accepted
                  </span>
                </td>
                <td className="">
                  <p className="text-sm leading-none text-grey ml-2">
                    {new Date().toLocaleString()}
                  </p>
                </td>
                <td className="">
                  <div className="flex items-center justify-center ml-5">
                    <Link to={"/updateorder"} className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-grey hover:text-teal cursor-pointer lucide lucide-settings-2"
                      >
                        <path d="M20 7h-9" />
                        <path d="M14 17H5" />
                        <circle cx="17" cy="17" r="3" />
                        <circle cx="7" cy="7" r="3" />
                      </svg>
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      onClick={() => handleDelete(1)}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600 hover:text-red-500 cursor-pointer lucide lucide-trash-2"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      <line x1="10" x2="10" y1="11" y2="17" />
                      <line x1="14" x2="14" y1="11" y2="17" />
                    </svg>
                  </div>
                </td>
              </tr>
         
            </tbody>
          </table>
        </div>
      </div>
    
    </div>
  );
};

export default OrderPage;
