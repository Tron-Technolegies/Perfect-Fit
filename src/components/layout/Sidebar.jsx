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

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
    isActive ? "bg-pink-100 text-pink-600 font-medium" : "text-gray-600 hover:bg-gray-100"
  }`;

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-[#FFF7F9] border-r border-[#00000014] flex flex-col">
      {/* LOGO */}
      <div className="p-4 border-b border-[#00000014]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white">
            <MdOutlineDashboard />
          </div>
          <div>
            <h1 className="font-semibold text-gray-800">Perfect Fit</h1>
            <p className="text-xs text-gray-500">Management System</p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* DASHBOARD */}
        <NavLink to="/dashboard" className={linkClass}>
          <MdOutlineDashboard /> Dashboard
        </NavLink>

        {/* CORE */}
        <div>
          <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">Core Modules</p>
          <div className="space-y-1">
            <NavLink to="/inventory" className={linkClass}>
              <FiBox /> Inventory Management
            </NavLink>

            <NavLink to="/rental" className={linkClass}>
              <FiCalendar /> Rental Management
            </NavLink>

            <NavLink to="/stitching" className={linkClass}>
              <FiScissors /> Sales & Custom Stitching
            </NavLink>
          </div>
        </div>

        {/* FINANCE */}
        <div>
          <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">Finance & Analytics</p>
          <div className="space-y-1">
            <NavLink to="/billing" className={linkClass}>
              <FiCreditCard /> Billing & Payments
            </NavLink>

            <NavLink to="/sales" className={linkClass}>
              <FiCreditCard /> Financial Management
            </NavLink>

            <NavLink to="/reports" className={linkClass}>
              <FiFileText /> Reports
            </NavLink>
          </div>
        </div>

        {/* ADMIN */}
        <div>
          <p className="text-xs font-semibold text-gray-400 mb-2 uppercase">Administration</p>
          <div className="space-y-1">
            <NavLink to="/branches" className={linkClass}>
              <FiLayers /> Multi-Branch Setup
            </NavLink>

            <NavLink to="/settings" className={linkClass}>
              <FiSettings /> System Settings
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
