import React from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Service from "../components/Service";

import home from "../assets/images/home.jpg";
import box from "../assets/images/box.png";
import plane from "../assets/images/plane.png";

const Home = () => {
  const navigate = useNavigate();
  const post = () => {
    navigate("/post");
  };

  return (
    <div className="bg-space">
      <div className="container mx-auto relative">
        <NavBar />
        <div className="flex my-8 h-[675px] ">
          <div className="w-[40%] relative">
            <div className="w-96 mx-auto my-24 z-10 text-center relative">
              <h1 className="text-8xl font-extrabold relative">
                Let's Explore unique products.
              </h1>
              <div className="mt-5">
                <h1 className="text-lg font-bold text-grey">
                  "Quality never goes out of style."
                </h1>
              </div>
              <div className="mt-10 text-center">
                <button className="bg-teal px-24 py-2.5 rounded text-white font-bold text-md">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full z-0 flex justify-center items-center">
              <img src={box} alt="Box" className="opacity-100" />
            </div>
          </div>
          <div className="w-[60%] mx-auto">
            <img src={home} alt="Home" className="mx-auto  rounded" />
          </div>
        </div>
        <div className="bg-teal relative w-full z-50 py-11">
          <ul className="flex list-none space-x-10 mx-auto text-white  justify-center">
            <li>logo</li>
            <li>logo</li>
            <li>logo</li>
            <li>logo</li>
          </ul>
          <div
            className="bg-teal opacity-50 w-full absolute z-10 top-0 py-10"
            style={{ transform: "rotate(-3deg)" }}
          ></div>
          <div
            className="bg-teal opacity-50 w-full absolute z-10 top-0 py-10"
            style={{ transform: "rotate(3deg)" }}
          ></div>
        </div>
        <button
          onClick={post}
          className="fixed bottom-10 right-52 z-50  bg-grey h-20  w-20 rounded-full text-center "
        >
          <img src={plane} alt="" className="h-16 mt-3 px-2 py-2 mx-auto" />
        </button>

        <Service />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
