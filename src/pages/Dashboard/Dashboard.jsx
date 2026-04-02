import React from "react";
import DashboardStats from "../../components/dashboard/DashboardStats";
import OverviewGraph from "../../components/dashboard/OverviewGraph";
import RecentOrders from "../../components/dashboard/RecentOrders";
import QuickActions from "../../components/dashboard/QuickActions";
import ActionRequired from "../../components/dashboard/ActionRequired";
import TodaysFittings from "../../components/dashboard/TodaysFittings";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <OverviewGraph />
          <RecentOrders />
        </div>

        <div className="space-y-6">
          <QuickActions />
          <ActionRequired />
          <TodaysFittings />
        </div>
      </div>
    </div>
  );
}
