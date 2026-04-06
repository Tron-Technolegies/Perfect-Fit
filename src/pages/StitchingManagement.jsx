import React from "react";
import StitchingStats from "../components/stitching/StitchingStats";
import StitchingTable from "../components/stitching/StitchingTable";
import StitchingQuickActions from "../components/stitching/StitchingQuickActions";
import StitchingSchedule from "../components/stitching/StitchingSchedule";

export default function StitchingManagement() {
  return (
    <div className="space-y-6">
      {/* STATS */}
      <StitchingStats />

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2">
          <StitchingTable />
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <StitchingQuickActions />
          <StitchingSchedule />
        </div>
      </div>
    </div>
  );
}
