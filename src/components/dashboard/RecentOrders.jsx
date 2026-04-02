import React, { useState } from "react";
import RecentOrdersModal from "./RecentOrdersModal";

export default function RecentOrders() {
  const [open, setOpen] = useState(false);

  const orders = [
    {
      id: "#ORD-9021",
      name: "Priya Sharma",
      type: "Rental",
      amount: "3,500",
      status: "Completed",
    },
    {
      id: "#ORD-9022",
      name: "Amit Kumar",
      type: "Custom Stitching",
      amount: "12,000",
      status: "In Progress",
    },
    {
      id: "#ORD-9023",
      name: "Sneha Desai",
      type: "Rental",
      amount: "2,800",
      status: "Reserved",
    },
  ];

  const statusStyle = {
    Completed: "bg-green-100 text-green-600",
    "In Progress": "bg-orange-100 text-orange-500",
    Reserved: "bg-pink-100 text-pink-500",
  };

  return (
    <>
      <div className="bg-white p-5 rounded-xl border border-[#00000014]">
        <div className="flex justify-between mb-4">
          <h3 className="font-semibold">Recent Orders</h3>
          <button onClick={() => setOpen(true)} className="text-pink-500 text-sm cursor-pointer">
            View All
          </button>
        </div>

        <div className="space-y-4">
          <table className="w-full text-sm">
            <thead className="text-gray-400 text-xs border-b border-[#00000014] items-center">
              <tr>
                <th className="text-left py-2">ORDER ID</th>
                <th className="text-left">CUSTOMER</th>
                <th>TYPE</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o, i) => (
                <tr key={i} className="border-b border-[#00000014] items-center">
                  <td className="py-4">{o.id}</td>

                  <td>
                    <p className="font-medium">{o.name}</p>
                    <p className="text-xs text-gray-400">{o.phone}</p>
                  </td>

                  <td>
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs">{o.type}</span>
                  </td>

                  <td>₹ {o.amount}</td>

                  <td>
                    <span className={`px-2 py-1 rounded-full text-xs ${statusStyle[o.status]}`}>
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {open && <RecentOrdersModal onClose={() => setOpen(false)} />}
    </>
  );
}
