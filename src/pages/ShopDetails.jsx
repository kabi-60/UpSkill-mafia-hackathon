import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Shop from "../components/products/Shop";

const ShopDetails = () => {
  return (
    <div class="bg-space h-[100vh]">
      <div class="container mb-24 mx-auto ">
        <NavBar />
        <div className="my-10">
          <Shop />
        </div>
        <div className="mt-28"> 

      <Footer/>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
