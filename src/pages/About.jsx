import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="bg-space h-[100vh]">
      <div className="container mx-auto">
        <NavBar />

        <div className="flex items-center justify-start rounded-lg bg-cover p-6 md:p-24 text-grey">
          <div className="flex w-full flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <h2 className="mb-6 text-2xl text-grey font-bold md:text-4xl lg:text-6xl">
              Welcome to Seller Spot
            </h2>

            <p className="text-sm md:text-xl">
              Seller Spot is your trusted platform for connecting with rag pickers to sell and recycle your unused items. We aim to promote sustainable living by helping you declutter your space and support the recycling community.
            </p>
            <p className="text-sm md:text-xl">
              Founded in 2024, our mission is to make it easy for people to find reliable rag pickers in their area. Whether you're looking to sell old clothes, electronics, or any other items, Seller Spot is here to help.
            </p>
            <p className="text-sm md:text-xl">
              Our team is dedicated to providing a seamless experience for both sellers and rag pickers. We believe in creating a community where everyone can benefit from a cleaner environment and a more organized life.
            </p>
            <p className="text-sm md:text-xl">
              Join us in our journey to make a positive impact on the environment. Together, we can reduce waste and promote recycling.
            </p>
            <p className="text-sm md:text-xl">
              If you have any questions or need assistance, feel free to contact us at info@sellerspot.com.
            </p>

            <p className="text-sm md:text-xl">✌🏻 The Seller Spot Team</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
