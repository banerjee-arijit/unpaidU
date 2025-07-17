import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./global.css";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root Element Not Found!");

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
