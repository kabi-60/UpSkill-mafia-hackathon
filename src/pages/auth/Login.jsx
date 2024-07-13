import React from "react";
import skeleton from "../../assets/images/skeleton.png";
import round from "../../assets/images/round.png";
import logo from "../../assets/images/Logo.png";

import { Link } from "react-router-dom";

import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className=" container mx-auto  w-full">
      <div className="border-8 relative mt-28 rounded-xl  flex   mx-auto">
        <div className="absolute -top-10 -right-10">
          <img src={round} alt="" />
        </div>
        <div className="w-1/2 relative">
          <img src={skeleton} alt="" className="rounded-l-md" />
          <div className="absolute bottom-20 left-24  text-xl font-extrabold text-space">
            <h1>
              Explore, buy, and sell with confidence in your local community.
            </h1>
          </div>
          <div className="absolute -top-5 -left-5">
            <img src={round} alt="" />
          </div>
          <div className="absolute -bottom-24 right-0">
            <img src={round} alt="" />
          </div>
        </div>
        <div className="  w-1/2">
          <div className="flex justify-center h-full bg-space items-center ">
            <div>
              <div className="flex space-x-4">
                <img src={logo} alt="" className="h-10 mb-6" />
                <h1 className="mt-2 text-2xl uppercase font-bold font-mono">
                  SellerSpot
                </h1>
              </div>
              <SignIn />
              <div className="absolute bottom-[170px] text-teal bg-[#e6e6e6] text-md   font-bold right-[280px]">
                <Link to="/auth/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
