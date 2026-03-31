import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layouts from "./layouts/Layouts";

export default function () {
  const router = createBrowserRouter([{ path: "/", element: <Layouts /> }]);
  return <RouterProvider router={router} />;
}
