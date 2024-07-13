import React from "react";
import NavBar from "../components/NavBar";
import Details from "../components/products/Details";

const ProductDetails = () => {
  return (
    <div class="bg-space h-[100vh]">
      <div class="container mx-auto ">
        <NavBar />
        <div className="my-5">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
