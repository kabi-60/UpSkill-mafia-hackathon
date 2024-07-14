import React from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const order = () => {
    navigate("/orderconfirmation");
  };

  return (
    <div className="bg-space">
      <div className="py-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8"></div>

        <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-64 md:h-80 rounded-lg bg-grey mb-4 flex items-center justify-center">
                <span className="text-5xl">1</span>
              </div>

              <div className="flex -mx-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-1 px-2">
                    <button className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-grey flex items-center justify-center">
                      <span className="text-2xl">{i}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:flex-1 items-center pt-10 px-4">
              <h2 className="mb-2 leading-tight tracking-tight  text-grey font-extrabold text-2xl md:text-4xl">
              Shop Name
              </h2>
              <p className="text-gray-500 text-sm">
                By{" "}
                <a href="#" className="text-grey hover:underline">
                  Shop OwnerName
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                 
                </div>
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
              </div>

              <p className="text-gray-500">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae
                exercitationem porro saepe ea harum corrupti vero id laudantium
                enim, libero blanditiis expedita cupiditate a est.
              </p>

             
              <div className="mt-5">
                <h1 className="mb-5 text-xl font-extrabold leading-tight tracking-tight text-grey">
                  Shop Details
                </h1>
                <div className="grid xl:grid-cols-2 gap-5 mx-2 ">
                  <h1 className="text-md font-bold leading-tight tracking-tight text-gray-500 flex">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide font-extrabold  text-grey  lucide-user"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    : priyanshu
                  </h1>
                  <h1 className="text-md font-bold leading-tight tracking-tight text-gray-500 flex">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide font-extrabold  text-grey  lucide-mail"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    : sdsdjaosdod@gmail.com
                  </h1>
                  <h1 className="text-md font-bold leading-tight tracking-tight text-gray-500 flex">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide font-extrabold  text-grey  lucide-phone-call"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                        <path d="M14.05 6A5 5 0 0 1 18 10" />
                      </svg>
                    </span>
                    :1234567890
                  </h1>
                  <h1 className="text-md font-bold leading-tight tracking-tight text-gray-500 flex">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide font-extrabold  text-grey  lucide-map-pin"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    :xyz street
                  </h1>
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
