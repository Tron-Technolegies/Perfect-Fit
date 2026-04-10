import React from "react";
import FinancialStats from "../components/financial/FinancialStats";
import FinancialActions from "../components/financial/FinancialActions";
import FinancialDistribution from "../components/financial/FinancialDistribution";
import FinancialTable from "../components/financial/FinancialTable";
import FinancialChart from "../components/financial/FinancialCharts";

export default function FinancialManagement() {
  return (
    <div className="space-y-6">
      <FinancialStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <FinancialChart />
          <FinancialTable />
        </div>

        <div className="space-y-6">
          <FinancialActions />
          <FinancialDistribution />
        </div>
      </div>
    </div>
  );
}
