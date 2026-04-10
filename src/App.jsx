import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import InventoryManagement from "./pages/InventoryManagement";
import RentalManagement from "./pages/RentalManagement";
import StitchingManagement from "./pages/StitchingManagement";
import BillingManagement from "./pages/BillingManagement";
import FinancialManagement from "./pages/FinancialManagement";
import Reports from "./pages/Reports";

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
        { path: "stitching", element: <StitchingManagement /> },
        { path: "billing", element: <BillingManagement /> },
        { path: "financial", element: <FinancialManagement /> },
        { path: "reports", element: <Reports /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
