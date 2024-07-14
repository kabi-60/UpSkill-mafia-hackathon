import React from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis explicabo corrupti sint iusto repudiandae, nemo enim mollitia rerum ut repellendus iste amet doloremque impedit non fugiat nostrum quod. Adipisci!";
  const maxLength = 100; // Set the maximum length of characters to display
  const navigate = useNavigate();
  const viewpage = () => {
    navigate("/productdetails");
  };
  return (
    <>
      <section>
        <div className="max-w-sm  w-full bg-space  shadow-xl rounded-xl duration-500 hover:scale-105 p-5">
          <div className="flex flex-col">
            <div className="">
              <div className="relative h-62 w-full mb-3">
                <img
                  src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                  alt="Just a flower"
                  className="w-full object-fill rounded-2xl"
                />
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap">
                  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                    <span className="mr-2 text-grey flex">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-map-pin"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>{" "}
                      Shop_Location
                    </span>
                  </div>
                  <div className="flex items-center w-full justify-between min-w-0">
                    <h2 className="text-xl font-bold mr-auto cursor-pointer text-grey">
                      Product_Name
                    </h2>
                  </div>
                </div>
                <div className="text-2xl text-white font-semibold mt-1">
                  <div className="mt-2 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-grey">$449</span>
                    </p>
                    <div className="grid grid-cols-1 ">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                      <div className="text-black">
                        <h1 className="text-xs text-end text-grey">5,76,234</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="lg:flex  mb-5 text-sm text-grey">
                  <div className="flex ">
                    <p>
                      {description.length > maxLength ? (
                        <>{description.substring(0, maxLength)}...</>
                      ) : (
                        description
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-5 text-sm font-medium justify-center">
                  <button
                    onClick={viewpage}
                    className="transition ease-in duration-300 inline-flex items-center text-sm font-bold mb-2 md:mb-0 bg-grey hover:bg-teal  px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-[#00ADB5]"
                  >
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
