import React from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Service from "../components/Service";
import home from "../assets/images/home.jpg";
import box from "../assets/images/box.png";
import plane from "../assets/images/plane.png";
import Linear from "../assets/images/Logo/Linear.png";
import Loom from "../assets/images/Logo/Loom.png";
import Notion from "../assets/images/Logo/Notion.png";
import Raycast from "../assets/images/Logo/Raycast.png";
import Spline from "../assets/images/Logo/Spline.png";

const Home = () => {
  const navigate = useNavigate();
  const post = () => {
    navigate("/post");
  };
  const product = () => {
    navigate("/product");
  };

  return (
    <div className="bg-space">
      <div className="container mx-auto relative">
        <NavBar />
        <div className="lg:flex xl:my-8  xl:h-[675px] ">
          <div className="xl:w-[40%] relative">
            <div className="w-96 mx-auto my-10 xl:my-24 z-10 text-center relative">
              <h1 className="text-7xl xl:text-8xl font-extrabold relative">
                Let's Explore{" "}
                <span className="text-space font-semibold">unique</span>{" "}
                products.
              </h1>
              <div className="mt-5">
                <h1 className="text-lg font-bold text-grey">
                  "Quality never goes out of style."
                </h1>
              </div>
              <div className="mt-10 text-center">
                <button
                  onClick={product}
                  className="bg-grey px-24 py-2.5 rounded text-white font-bold text-md"
                >
                  Shop Now
                </button>
              </div>
            </div>
            <div className="absolute -top-5 xl:top-1 left-0 w-full h-full z-5 flex justify-center items-center">
              <h1
                className="xl:py-12 py-9 bg-grey hover:bg-teal w-72 xl:w-96"
                style={{ transform: "rotate(-5deg)" }}
              ></h1>
            </div>
          </div>
          <div className="hidden lg:block w-[60%] mx-auto">
            <img src={home} alt="Home" className="mx-auto rounded" />
          </div>
        </div>
        <div className="w-full bg-grey relative xl:w-full z-50 py-11">
          <ul className="flex list-none  space-x-5 lg:space-x-32 xl:space-x-40 lg:mx-auto text-white justify-center z-50">
            <li className="z-50">
              <img src={Linear} alt=""  className="h-10  xl:h-auto"/>
              <p className="text-center upper  text-xs  font-bold font-mono pt-2">
                Linear
              </p>
            </li>
            <li className="z-50">
              <img src={Notion} alt=""  className="h-10  xl:h-auto"/>
              <p className="text-center upper  text-xs  font-bold font-mono pt-2">
                Notion
              </p>
            </li>
            <li className="z-50">
              <img src={Loom} alt=""  className="h-10  xl:h-auto"/>
              <p className="text-center upper text-xs  r font-bold font-mono pt-2">Loom</p>
            </li>
            <li className="z-50">
              <img src={Spline} alt=""  className="h-10  xl:h-auto"/>
              <p className="text-center upper  text-xs  font-bold font-mono pt-2">
                Spline
              </p>
            </li>
            <li className="z-50">
              <img src={Raycast} alt=""  className="h-10  xl:h-auto"/>
              <p className="text-center upper f text-xs  ont-bold font-mono pt-2">
                Raycast
              </p>
            </li>
          </ul>
          <div
            className="bg-grey opacity-50 w-full absolute z-10 top-0 py-10"
            style={{ transform: "rotate(-3deg)" }}
          ></div>
          <div
            className="bg-grey opacity-50 w-full absolute z-10 top-0 py-10"
            style={{ transform: "rotate(3deg)" }}
          ></div>
        </div>
        <button
          onClick={post}
          className="fixed bottom-28 right-10 lg:right-52 z-50 bg-teal h-14 lg:h-20 w-14 lg:w-20 rounded-full text-center"
        >
          <img src={plane} alt="" className="h-13 lg:h-16 mt-1 lg:mt-3 px-2 py-2 mx-auto" />
        </button>
        <Service />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
