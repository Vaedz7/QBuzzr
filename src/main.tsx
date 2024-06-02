import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./App.tsx";
import "./index.css";

import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const BACKEND_KEY = import.meta.env.REACT_APP_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
         <Home />
      </ClerkProvider>
   </React.StrictMode>
);
