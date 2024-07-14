import React from "react";

import round from "../assets/images/round.png";
import skeleton from "../assets/images/skeletons/coin.png";
import NavBar from "../components/NavBar";
import { toast } from "sonner";

const UserDashboard = () => {
  return (
    <div class="bg-space h-[100vh]">
      <div class="container mx-auto ">
        <NavBar />
        <div className="my-10 relative">
          <div className="absolute top-48 right-0">
            <img src={round} alt="" />
          </div>
          <div className="absolute top-72 z-10 left-0">
            <img src={round} alt="" />
          </div>
          <div className="absolute top-[550px] z-10 left-10">
            <img src={round} alt="" className="h-44" />
          </div>
          <div className="flex justify-center relative">
            <div className=" h-[750px] w-[1550px] flex justify-center items-center rounded">
              <div className="flex h-[630px] w-[1400px] relative z-40 flex-col items-center justify-center p-6 text-slate-400/0 xl:text-slate-400">
                <div className="grid h-full w-full grid-cols-10 gap-4">
                  <div className="col-span-3 row-span-1 flex justify-center items-center py-2.5 bg-grey rounded card">
                    <div className="text-white">
                      <h1 className="text-md font-semibold moda">User Name</h1>
                      <input
                        type="text"
                        className="focus:outline-grey focus:shadow-lg bg-transparent border-space border w-80 px-2 py-2.5 rounded placeholder:text-white"
                        placeholder="User name...."
                      />
                    </div>
                  </div>
                  <div className="col-span-3 row-span-1 bg-grey rounded card flex justify-center items-center">
                    <div className="text-white">
                      <h1 className="text-md font-semibold moda">User Email</h1>
                      <input
                        type="text"
                        className="focus:outline-grey focus:shadow-lg bg-transparent border-space border w-80 px-2 py-2.5 rounded placeholder:text-white"
                        placeholder="User Email...."
                      />
                    </div>
                  </div>
                  <div className="col-span-4 row-span-2 bg-grey rounded py-2.5 card flex justify-center items-center">
                    <div className="text-white">
                      <h1 className="text-md font-semibold moda">Bio-Data</h1>
                      <textarea
                        rows={7}
                        type="text"
                        id="address"
                        class=" rounded border py-2 w-96 focus:outline-grey px-3 text-white bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="col-span-4 row-span-4 bg-grey rounded card flex justify-center items-center">
                    <div className="text-white">
                      <div className="mx-5">
                        <div class="">
                          <label
                            for="address"
                            class="block text-md font-semibold text-white mb-1"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            class="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent"
                          />
                        </div>
                        <div class="">
                          <label
                            for="city"
                            class="block text-md font-semibold text-white mb-1"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            class="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent"
                          />
                        </div>
                        <div class="grid grid-cols-2 gap-4 ">
                          <div>
                            <label
                              for="state"
                              class="block text-md font-semibold text-white mb-1"
                            >
                              State
                            </label>
                            <input
                              type="text"
                              id="state"
                              class="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent"
                            />
                          </div>
                          <div>
                            <label
                              for="zip"
                              class="block text-md font-semibold text-white mb-1"
                            >
                              ZIP Code
                            </label>
                            <input
                              type="text"
                              id="zip"
                              class="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 row-span-4 bg-grey rounded card flex justify-center items-center">
                    <div className="text-white w-full my-2">
                      <h1 className="text-md font-semibold moda text-center ml-2 mb-2">
                        Profile
                      </h1>
                      <img src={skeleton} alt="" />
                    </div>
                  </div>
                  <div className="col-span-4 row-span-3 bg-grey rounded card flex justify-center items-center">
                    <div className="text-white w-full mx-10">
                      <h1 className="text-md font-semibold moda text-start">
                        Mobile No
                      </h1>
                      <input
                        type="text"
                        id="zip"
                        placeholder="Mobile No"
                        class="w-full rounded placeholder:text-white border py-2 focus:outline-grey px-3 text-white bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="col-span-3 row-span-1 card rounded flex justify-center items-center cursor-pointer">
                    <div className="text-white w-full mx-10">
                     
                      <div className="flex justify-center">
                        <div className=" text-2xl  flex space-x-4">
                          <h1 className="text-2xl font-extrabold moda text-center ">
                            Post
                          </h1>
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
                            class="lucide lucide-shopping-cart mt-1"
                          >
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                          </svg>
                          500+
                        </div>
                    
                      </div>
                    </div>
                  </div>
                  <div className="col-span-3 row-span-1 card rounded flex justify-center items-center cursor-pointer">
                    <div className="text-white w-full mx-10">
                     
                      <div className="flex justify-center">
                   
                        <div className="text-2xl  flex space-x-4 ">
                          <h1 className="text-2xl font-extrabold ">
                            Sales
                          </h1>
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
                            class="lucide lucide-badge-check mt-1 "
                          >
                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          500+
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
