import React from "react";
import router from "./routes";

import { RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { Toaster } from "sonner";

import { VITE_CLERK_KEY } from "./constants/utils.js";

if (!VITE_CLERK_KEY) {
  throw new Error("CLERK_KEY was not found");
}

const App = () => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: "light",
        variables: {
          colorBackground: "#EEEEEE",
        },
        elements: {
          button: {
            backgroundColor: "#00ADB5",
            color: "#FFFFFF",
            boxShadow: "none",
            border: "none",
          },
          buttonPrimary: {
            backgroundColor: "#00ADB5",
            color: "#FFFFFF",
            boxShadow: "none",
            border: "none",
          },
        },
      }}
      publishableKey={VITE_CLERK_KEY}
    >
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  );
};

export default App;
