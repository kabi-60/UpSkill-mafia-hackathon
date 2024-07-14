import React, { useState } from "react";

import Card from "../components/products/Card";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

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

  return (
    <div className="bg-space">
      <div className="container  mx-auto ">
        <NavBar />
        <div className=" text-center font-serif">
          <h1 className="text-5xl uppercase text-grey font-extrabold">
            Products
          </h1>
        </div>
        <div className=" grid grid-cols-4 gap-10 my-10 mx-auto">
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
