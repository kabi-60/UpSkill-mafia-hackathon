import React from "react";
import "../globals.css";
import round from "../assets/images/round.png";
import skeleton from "../assets/images/skeletons/1.png";
import skeleton_1 from "../assets/images/skeletons/2.png";
import cloud from "../assets/images/form.png";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import { toast } from "sonner";
import Select from "react-select";

const OrderConfirmation = () => {
  const options = [
    { value: "paper", label: "paper" },
    { value: "Plastic Bottle", label: "Plastic Bottle" },
    { value: "Iron", label: "Iron" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      borderColor: "#grey",
      borderWidth: 2,
      boxShadow: "none",
      "&:hover": {
        borderColor: "#grey",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#393E46",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#grey"
        : state.isFocused
        ? "#grey"
        : null,
      color: "white",
      "&:hover": {
        backgroundColor: "#grey",
        color: "white",
      },
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#grey",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "white",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "white",
      "&:hover": {
        backgroundColor: "transparent",
        color: "red",
      },
    }),
  };

  return (
    <div className="bg-space h-[100vh]">
      <div className="container mx-auto ">
        <NavBar />
        <div className="xl:my-10 relative">
        
          <div className="flex justify-center relative">
           
            <div className="xl:h-[750px] w-full lg:w-[1550px] flex justify-center items-center rounded">
              <div className="flex xl:h-[630px] w-full lg:w-[1400px] relative z-40 flex-col items-center justify-center p-6 text-slate-400/0 xl:text-slate-400">
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
                        Payment Method
                      </h1>
                      <select className="rounded text-center border focus:outline-grey bg-transparent w-full py-2">
                        <option className="bg-grey">Cash on Delivery</option>
                        <option className="bg-grey">Google Pay</option>
                        <option className="bg-grey">Phone Pay</option>
                      </select>
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
                      <img src={skeleton} alt="" className="h-52 xl:h-auto mx-auto"/>
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

                 
                  <div className="col-span-1 xl:col-span-4 row-span-1 bg-grey rounded card flex justify-center py-3 items-center">
                    <div className="text-white w-full mx-10">
                      <h1 className="text-md font-semibold moda text-start">
                        Quantity/Units
                      </h1>
                      <div className="w-full flex justify-center">
                        <select className="rounded text-center border focus:outline-grey bg-transparent w-full py-2">
                          {[1, 2, 3, 4, 5].map((option) => (
                            <option key={option} className="bg-grey">
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
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

export default OrderConfirmation;
