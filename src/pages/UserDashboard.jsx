import React from "react";
import round from "../assets/images/round.png";
import skeleton from "../assets/images/skeletons/coin.png";
import NavBar from "../components/NavBar";
import { toast } from "sonner";

const UserDashboard = () => {
  return (
    <div className="bg-space h-screen">
      <div className="container mx-auto">
        <NavBar />
        <div className="my-10 relative">
          <div className="flex justify-center relative">
            <div className="w-full lg:w-[1400px] xl:w-full flex justify-center items-center rounded p-6 text-slate-400/0 xl:text-slate-400">
              <div className="w-full xl:w-[1400px] relative z-40 flex flex-col items-center justify-center">
                <div class="flex  mb-5 lg:hidden">
                  <div class="px-2">
                    <div class="w-40 flex items-center px-5 py-6 shadow-sm rounded card ">
                      <div class="p-3 rounded-full bg-orange-600 bg-opacity-75">
                        <svg
                          class="h-5 w-5 text-white"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-white text-lg font-bold font-mono ml-2">
                          sales
                        </h1>
                        <h1 className="text-white text-xl font-bold font-mono ml-2">
                          500+
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div class="px-2">
                    <div class="w-40 flex items-center px-5 py-6 shadow-sm rounded card ">
                      <div class="p-3 rounded-full bg-orange-600 bg-opacity-75">
                        <svg
                          class="h-5 w-5 text-white"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h1 className="text-white text-lg ml-2 font-bold font-mono ">
                          Products
                        </h1>
                        <h1 className="text-white text-xl font-bold font-mono ml-2">
                          500+
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid h-full w-full grid-cols-1 gap-2 xl:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10">
                  <div className="col-span-1 xl:col-span-3 row-span-1 flex justify-center items-center py-3 bg-grey rounded card">
                    <div className="text-white">
                      <h1 className="text-md font-semibold moda">User Name</h1>
                      <input
                        type="text"
                        className="focus:outline-grey focus:shadow-lg bg-transparent border-space border w-80 px-2 py-2.5 rounded placeholder:text-white"
                        placeholder="User name...."
                      />
                    </div>
                  </div>
                  <div className="col-span-1 xl:col-span-3 row-span-1 bg-grey rounded py-3 card flex justify-center items-center">
                    <div className="text-white">
                      <h1 className="text-md font-semibold moda">User Email</h1>
                      <input
                        type="text"
                        className="focus:outline-grey focus:shadow-lg bg-transparent border-space border w-80 px-2 py-2.5 rounded placeholder:text-white"
                        placeholder="User Email...."
                      />
                    </div>
                  </div>
                  <div className="col-span-1 xl:col-span-4 row-span-2 bg-grey rounded py-3 card flex justify-center items-center">
                    <div className="text-white w-full mx-10">
                      <h1 className="text-md font-semibold moda text-start">
                        Bio-Data
                      </h1>
                      <textarea
                        rows={7}
                        type="text"
                        className="focus:outline-grey focus:shadow-lg bg-transparent border-space border w-80 lg:w-full px-2 py-2.5 rounded placeholder:text-white"
                        placeholder="Bio Data...."
                      />
                    </div>
                  </div>
                  <div className="col-span-1 xl:col-span-4 py-3 row-span-4 bg-grey rounded card flex justify-center items-center">
                    <div className="text-white">
                      <div className="mx-5">
                        <div className="">
                          <label
                            htmlFor="address"
                            className="block text-md font-semibold text-white mb-1"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            id="address"
                            className="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent"
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="city"
                            className="block text-md font-semibold text-white mb-1"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            className="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="state"
                              className="block text-md font-semibold text-white mb-1"
                            >
                              State
                            </label>
                            <input
                              type="text"
                              id="state"
                              className="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="zip"
                              className="block text-md font-semibold text-white mb-1"
                            >
                              ZIP Code
                            </label>
                            <input
                              type="text"
                              id="zip"
                              className="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 xl:col-span-2 row-span-4 bg-grey rounded card flex justify-center items-center">
                    <div className="text-white w-full my-2">
                      <h1 className="text-md font-semibold moda text-center ml-2 mb-2">
                        Profile
                      </h1>
                      <img
                        src={skeleton}
                        alt=""
                        className="h-52 xl:h-auto mx-auto"
                      />
                    </div>
                  </div>
                  <div className="col-span-1 xl:col-span-4 row-span-3 bg-grey rounded card flex justify-center items-center">
                    <div className="text-white w-full py-3 mx-10">
                      <h1 className="text-md font-semibold moda text-start">
                        Mobile No
                      </h1>
                      <input
                        type="text"
                        id="zip"
                        placeholder="Mobile No"
                        className="w-full rounded placeholder:text-white border py-2 focus:outline-grey px-3 text-white bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="col-span-1 hidden lg:block xl:col-span-2 row-span-1 bg-grey rounded card flex justify-center py-3 items-center">
                    <div className="text-white w-full mx-10">
                      <h1 className="text-md font-semibold  justify-center moda text-center">
                        Sales{" "}
                        <span className="flex justify-center">
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
                            class="lucide lucide-shopping-cart"
                          >
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                          </svg>
                          500+
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className="col-span-1 hidden lg:block xl:col-span-2 row-span-1 bg-grey rounded card flex justify-center py-3 items-center">
                    <div className="text-white w-full mx-10">
                      <h1 className="text-md font-semibold  justify-center moda text-center">
                        Products{" "}
                        <span className="flex justify-center">
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
                            class="lucide lucide-shield-check"
                          >
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                          500+
                        </span>
                      </h1>
                    </div>
                  </div>
                  <button
                    className="col-span-1 xl:col-span-6 row-span-1 bg-teal rounded py-2 flex justify-center items-center cursor-pointer"
                    onClick={() => toast("Order Successfully")}
                  >
                    <div className="text-white w-full mx-10">
                      <h1 className="text-xl font-bold moda text-center">
                        Submit
                      </h1>
                    </div>
                  </button>
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
