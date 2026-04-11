import React, { useState } from "react";

export default function AccessSecurityForm() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl border border-[#00000014] space-y-4">
      <h3 className="font-semibold">Access & Security</h3>
      <p className="text-xs text-gray-400">Keep only important system preferences visible.</p>

      <div className="flex justify-between items-center border border-[#00000014] rounded-lg p-4">
        <div>
          <p className="font-medium">Maintenance Mode</p>
          <p className="text-xs text-gray-400">
            Disable access for non-admin users during updates.
          </p>
        </div>

        {/* TOGGLE */}
        <div
          onClick={() => setEnabled(!enabled)}
          className={`w-10 h-5 rounded-full cursor-pointer ${
            enabled ? "bg-pink-500" : "bg-gray-300"
          }`}
        >
          <div
            className={`h-5 w-5 bg-white rounded-full transition ${enabled ? "translate-x-5" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
