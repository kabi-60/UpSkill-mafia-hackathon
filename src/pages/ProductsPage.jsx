import React, { useState } from "react";

import Card from "../components/products/Card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// Sample data for products
const products = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  const navigate = useNavigate();
  const map = () => {
    navigate("/map");
  };

  return (
    <div className="bg-space">
      <div className="container  mx-auto ">
        <NavBar />
        <div className=" text-center font-serif">
          <h1 className="text-5xl uppercase text-grey font-extrabold">
            Products
          </h1>
        </div>
        <div className="flex justify-end mr-10">
          <button onClick={map} className="flex border px-5 py-2 rounded bg-grey text-white font-bold space-x-2 border-grey">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Show near me</span  >
            </button>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10 mx-5 xl:mx-auto">
          {currentProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div className="flex  py-5 justify-center ">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 mx-1 border ${
                currentPage === i + 1
                  ? "bg-teal text-white"
                  : "bg-grey text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductsPage;
