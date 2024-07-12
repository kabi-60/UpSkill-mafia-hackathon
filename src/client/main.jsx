import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";

const clerk_key = import.meta.env.VITE_CLERK_KEY;

console.log(clerk_key);

if (!clerk_key) throw new Error("key was not found");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{
        baseTheme: 'light',
        variables: {
          colorBackground: '#EEEEEE',
        },
        elements: {
          button: {
            backgroundColor: '#00ADB5',
            color: '#FFFFFF',
            boxShadow: 'none',
            border: 'none',
          },
          buttonPrimary: {
            backgroundColor: '#00ADB5',
            color: '#FFFFFF',
            boxShadow: 'none',
            border: 'none',
          },
        },
      }}
      publishableKey={clerk_key}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>,
);
