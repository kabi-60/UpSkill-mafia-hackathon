import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Details from "../components/products/Details";

const ProductDetails = () => {
  return (
    <div class="bg-space h-[100vh]">
      <div class="container mb-24 mx-auto ">
        <NavBar />
        <div className="my-5">
          <Details />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
