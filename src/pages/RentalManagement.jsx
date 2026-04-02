import React from "react";
import RentalStats from "../components/rental/RentalStats";
import RentalTable from "../components/rental/RentalTable";
import RentalActionRequired from "../components/rental/RentalActionRequired";

export default function RentalManagement() {
  return (
    <div className="space-y-6">
      <RentalStats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RentalTable />
        </div>
        <RentalActionRequired />
      </div>
    </div>
  );
}
