import React from "react";

import round from "../assets/images/round.png";
import skeleton from "../assets/images/skeletons/1.png";
import skeleton_1 from "../assets/images/skeletons/2.png";
import cloud from "../assets/images/form.png";
import NavBar from "../components/NavBar";

import Select from "react-select";
import { toast } from "sonner";

const BuyerDashboard = () => {
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
      <div className="container mx-auto">
        <NavBar />
        <div className="relative my-10">
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
            <div className="absolute top-10 z-50 -left-10">
              <img src={skeleton_1} alt="" className="h-52" />
            </div>
            <div className="absolute -top-5 z-50 left-[120px]">
              <img src={cloud} alt="" className="h-28" />
            </div>
            <div className="h-[750px] w-[1550px] flex justify-center items-center rounded">
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
                      <h1 className="text-md font-semibold moda">Shop Name</h1>
                      <input
                        type="text"
                        className="focus:outline-grey focus:shadow-lg bg-transparent border-space border w-80 px-2 py-2.5 rounded placeholder:text-white"
                        placeholder="Shop Name...."
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
                  <div className="col-span-4 row-span-2 bg-grey rounded card flex justify-center items-center">
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
                  <div className="col-span-4 row-span-1 bg-grey rounded card flex justify-center items-center">
                    <div className="text-white w-full mx-10">
                      <h1 className="text-md font-semibold moda text-start">
                        Requriment
                      </h1>
                      <Select
                        defaultValue={[options[0], options[1]]}
                        isMulti
                        name="Requirement"
                        options={options}
                        className="bg-transparent"
                        classNamePrefix="select"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <button
                    className="col-span-6 row-span-1 bg-teal rounded flex justify-center items-center cursor-pointer"
                    onClick={() => toast("Upload Successfully")}
                  >
                    <div className="text-white w-full mx-10">
                      <h1 className="text-xl font-bold moda text-center">
                        Submit
                      </h1>
                    </div>
                  </button>
                  <div className="col-span-4 row-span-1 bg-grey rounded card flex justify-center py-3 items-center">
                    <div className="text-white w-full mx-10">
                      <h1 className="text-md font-semibold moda text-start">
                        Current Location
                      </h1>
                      <input
                        type="text"
                        id="zip"
                        placeholder="Current Location"
                        class="w-full rounded placeholder:text-white border py-2 focus:outline-grey px-3 text-white bg-transparent"
                      />
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

export default BuyerDashboard;
