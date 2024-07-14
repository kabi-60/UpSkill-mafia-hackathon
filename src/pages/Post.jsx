import React from "react";

import round from "../assets/images/round.png";
import skeleton_1 from "../assets/images/skeletons/2.png";
import cloud from "../assets/images/form.png";
import NavBar from "../components/NavBar";

import { toast } from "sonner";

const Post = () => {
  return (
    <div className="bg-space h-[100vh]">
      <div className="container mx-auto">
        <NavBar />
        <div className="md:my-10 relative">
          
          <div className="flex justify-center relative">
            
            <div className="xl:h-[750px] w-full lg:w-[1550px] flex justify-center items-center rounded">
              <div className="flex xl:h-[630px] w-full lg:w-[1400px] relative z-40 flex-col items-center justify-center p-6 text-slate-400/0 xl:text-slate-400">
                <div className="grid h-full w-full grid-cols-1 gap-2 xl:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10">
                  <div className="col-span-1 xl:col-span-3 row-span-1 flex justify-center items-center py-2.5 bg-grey rounded card">
                    <div className="text-white">
                      <h1 className="text-md font-semibold moda">Product Name</h1>
                      <input
                        type="text"
                        className="focus:outline-grey focus:shadow-lg bg-transparent border-space border w-80 px-2 py-2.5 rounded placeholder:text-white"
                        placeholder="Enter the Product name...."
                      />
                    </div>
                  </div>
                  <div className="col-span-1 py-2.5 xl:col-span-3 row-span-1 bg-grey rounded card flex justify-center items-center">
                    <div className="text-white">
                      <h1 className="text-md font-semibold moda">Price</h1>
                      <input
                        type="text"
                        className="focus:outline-grey focus:shadow-lg bg-transparent border-space border w-80 px-2 py-2.5  rounded placeholder:text-white"
                        placeholder="Enter the Price...."
                      />
                    </div>
                  </div>
                  <div className="col-span-1 xl:col-span-4 row-span-2 bg-grey rounded py-2.5 card flex justify-center items-center">
                    <div className="text-white ">
                      <h1 className="text-md font-semibold moda">Description</h1>
                      <textarea
                        rows={6}
                        className="bg-transparent py-2 border-space border outline-none px-5 rounded w-80 xl:w-96 placeholder:text-white"
                        placeholder="Type the description..."
                      />
                    </div>
                  </div>
                  <div className="col-span-1 xl:col-span-4 w-full row-span-4 bg-grey py-3 rounded card flex justify-center items-center">
                    <div className="text-white">
                      <div className="xl:mx-5">
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
                            className="w-80 xl:w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent placeholder:text-white"
                            placeholder="Enter the Address...."
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="city"
                            className="block text-md font-semibold text-white mt-1"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            className="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent placeholder:text-white"
                            placeholder="Enter the City...."
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="state"
                              className="block text-md font-semibold text-white mt-2"
                            >
                              State
                            </label>
                            <input
                              type="text"
                              id="state"
                              className="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent placeholder:text-white"
                              placeholder="Enter the State ...."
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="zip"
                              className="block text-md font-semibold text-white mt-2"
                            >
                              PinCode
                            </label>
                            <input
                              type="text"
                              id="zip"
                              className="w-full rounded border py-2 focus:outline-grey px-3 text-white bg-transparent placeholder:text-white"
                              placeholder="Enter the Pincode...."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 xl:col-span-2 row-span-4 bg-grey rounded  card flex justify-center items-center">
                    <div className="text-white w-full my-2">
                      <h1 className="text-md font-semibold moda text-center ml-2 mb-2">
                        Product Image
                      </h1>
                      <div className="border border-space mx-5 relative">
                        <input
                          type="file"
                          multiple
                          className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
                        />
                        <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
                          <h4 className="font-bold">
                            Drop files anywhere to upload
                            <br />
                            or
                          </h4>
                          <p className="font-bold">Select Files</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-1 xl:col-span-4 row-span-3 bg-grey rounded card py-2.5 flex justify-center items-center">
                    <div className="text-white w-full mx-10">
                      <h1 className="text-md font-semibold moda text-start">Mobile No</h1>
                      <input
                        type="text"
                        id="zip"
                        placeholder="Mobile No"
                        className=" w-80 xl:w-full rounded placeholder:text-white border py-2 focus:outline-grey px-3 text-white bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="col-span-1 xl:col-span-4 row-span-1 bg-grey rounded card flex justify-center py-3 items-center">
                    <div className="text-white space-x-5 flex w-full mx-10">
                      <div className="w-full">
                        <h1 className="text-md font-semibold moda text-start">
                          Units/Quantity
                        </h1>
                        <input
                          type="text"
                          id="zip"
                          placeholder="Enter the Unit/Quantity"
                          className="w-80 xl:w-full rounded placeholder:text-white border py-2 focus:outline-grey px-3 text-white bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    className="col-span-1 xl:col-span-6 row-span-1 py-2 xl:py-0 bg-teal rounded flex justify-center items-center cursor-pointer"
                    onClick={() => toast("Order Successfully")}
                  >
                    <div className="text-white w-full mx-10">
                      <h1 className="text-xl font-bold moda text-center">Submit</h1>
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

export default Post;
