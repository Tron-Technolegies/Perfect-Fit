import React from "react";
import DashboardStats from "../components/dashboard/DashboardStats";
import InventoryStatsCard from "../components/Inventorymanagement/InventoryStatsCard";
import InventoryTable from "../components/Inventorymanagement/InventoryTable";

export default function InventoryManagement() {
  return (
    <div className="space-y-6">
      <InventoryStatsCard />
      <InventoryTable />
    </div>
  );
}
