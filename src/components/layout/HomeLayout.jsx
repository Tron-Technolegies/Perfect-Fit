import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-gray-50 min-h-screen">
          <Header />

          <div className="p-6 bg-[#FFFDFC]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
