import React from "react";

const Service = () => {
  return (
    <div className="bg-space my-10 ">
      <div className="container mx-auto ">
          <div className="text-center   w-[600px] mx-auto">
            <h1 className="text-5xl font-extrabold text-grey"><span className="text-teal">Service</span> We Offer</h1>
            <p className="mt-2 font-semibold text-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero temporibus eos mollitia eaque. Illo, distinctio sed. Porro laboriosam qui explicabo facere, delectus voluptates, amet nostrum maiores consequatur modi saepe consectetur!</p>
          </div>
        <div className="flex items-center justify-center rounded-lg  p-6 text-grey md:p-12  ">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-1 text-center md:items-start md:text-left">
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
                class="lucide lucide-lock-open"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 9.9-1" />
              </svg>
              <h3 className="text-lg font-semibold">Security</h3>
              <p>Advanced security features to protect your data.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 text-center md:items-start md:text-left">
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
                class="lucide lucide-cloud-lightning"
              >
                <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
                <path d="m13 12-3 5h4l-3 5" />
              </svg>
              <h3 className="text-lg font-semibold">Cloud Storage</h3>
              <p>Unlimited storage for all your files in the cloud.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 text-center md:items-start md:text-left">
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
                class="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
              <h3 className="text-lg font-semibold">Global Access</h3>
              <p>Access your account from anywhere in the world.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 text-center md:items-start md:text-left">
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
                class="lucide lucide-sparkles"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                <path d="M20 3v4" />
                <path d="M22 5h-4" />
                <path d="M4 17v2" />
                <path d="M5 18H3" />
              </svg>
              <h3 className="text-lg font-semibold">Easy Integration</h3>
              <p>Seamlessly integrate with your existing tools.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 text-center md:items-start md:text-left">
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
                class="lucide lucide-cog"
              >
                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M12 2v2" />
                <path d="M12 22v-2" />
                <path d="m17 20.66-1-1.73" />
                <path d="M11 10.27 7 3.34" />
                <path d="m20.66 17-1.73-1" />
                <path d="m3.34 7 1.73 1" />
                <path d="M14 12h8" />
                <path d="M2 12h2" />
                <path d="m20.66 7-1.73 1" />
                <path d="m3.34 17 1.73-1" />
                <path d="m17 3.34-1 1.73" />
                <path d="m11 13.73-4 6.93" />
              </svg>
              <h3 className="text-lg font-semibold">Customization</h3>
              <p>Fully customizable settings to suit your needs.</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 text-center md:items-start md:text-left">
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
                class="lucide lucide-clock"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <h3 className="text-lg font-semibold">24/7 Support</h3>
              <p>Round-the-clock customer support for any issues.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
