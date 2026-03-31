import React from "react";
import {
  FiBox,
  FiCalendar,
  FiCreditCard,
  FiFileText,
  FiLayers,
  FiScissors,
  FiSettings,
} from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#FFF7F9] border-[#00000014] border-r flex flex-col justify-between p-4 ">
      <div className="border-[#00000014] border-b">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
            <MdOutlineDashboard />
          </div>
          <div>
            <h1 className="font-semibold text-gray-800">Perfect Fit</h1>
            <p className="text-xs text-gray-500">Management System</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <NavLink
          to="#"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
              isActive ? "bg-pink-100 text-pink-600 font-medium" : "text-gray-600 hover:bg-gray-100"
            }`
          }
        >
          <MdOutlineDashboard /> Dashboard
        </NavLink>
        <p className="text-xs uppercase font-semibold text-gray-400"> Core modules</p>
        <div className="space-y-1">
          <NavLink to="/inventory" className="menu">
            <FiBox /> Inventory Management
          </NavLink>

          <NavLink to="/rental" className="menu">
            <FiCalendar /> Rental Management
          </NavLink>

          <NavLink to="/stitching" className="menu">
            <FiScissors /> Sales & Custom Stitching
          </NavLink>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-2">FINANCE & ANALYTICS</p>
        <div className="space-y-1">
          <NavLink to="/billing" className="menu">
            <FiCreditCard /> Billing & Payments
          </NavLink>
          <NavLink to="/sales" className="menu">
            <FiCreditCard /> Financial Management
          </NavLink>
          <NavLink to="/reports" className="menu">
            <FiFileText /> Reports
          </NavLink>
        </div>
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-2">ADMINISTRATION</p>
        <div className="space-y-1">
          <NavLink to="/branches" className="menu">
            <FiLayers /> Multi-Branch Setup
          </NavLink>
          <NavLink to="/settings" className="menu">
            <FiSettings /> System Settings
          </NavLink>
        </div>
      </div>

      <div className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm">
        <img src="https://i.pravatar.cc/40" alt="" className="w-8 h-8 rounded-full" />
        <div>
          <p className="text-sm font-medium">Admin</p>
          <p className="text-xs text-gray-500">Store Administrator</p>
        </div>
      </div>
    </div>
  );
}
