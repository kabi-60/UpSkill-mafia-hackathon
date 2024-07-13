import React from "react";
import logo from "../assets/images/Logo.png";

const NavBar = () => {
  return (
    <header className="py-5">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="flex space-x-5 " href="/">
              <span className="sr-only">Home</span>
              <img src={logo} alt="" className="h-10" />
              <h1 className="font-mono font-bold mt-2 text-xl">SELLER SPOT</h1>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 ">
                <li>
                  <a
                    className="text-grey font-bold text-md transition uppercase hover:text-teal"
                    href="#"
                  >
                    catalouge
                  </a>
                </li>

                <li>
                  <a
                    className="text-grey font-bold text-md transition uppercase hover:text-teal"
                    href="/product"
                  >
                    Products
                  </a>
                </li>

                <li>
                  <a
                    className="text-grey font-bold text-md transition uppercase hover:text-teal"
                    href="/order"
                  >
                    Orders
                  </a>
                </li>

                <li>
                  <a
                    className="text-grey font-bold text-md transition uppercase hover:text-teal"
                    href="/user/dashboard"
                  >
                    my Account
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal hover:bg-transparent hover:border hover:text-grey px-5 py-2.5 text-md font-semibold text-white shadow "
                  href="/auth/signup"
                >
                  Signup
                </a>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-grey transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
