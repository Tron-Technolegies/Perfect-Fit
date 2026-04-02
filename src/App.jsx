import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import InventoryManagement from "./pages/InventoryManagement";
import RentalManagement from "./pages/RentalManagement";

export default function () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "inventory", element: <InventoryManagement /> },
        { path: "rental", element: <RentalManagement /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
