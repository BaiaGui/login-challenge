import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignUpPage } from "./Pages/SignUpPage.jsx";
import { LoginPage } from "./Pages/LoginPage.jsx";
import { DashboardPage } from "./Pages/DashboardPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signUp",
    element: <SignUpPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
