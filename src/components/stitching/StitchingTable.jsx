import React from "react";

export default function StitchingTable() {
  const data = [
    {
      id: "#ORD-8012",
      name: "Rahul Sharma",
      phone: "+91 98223 10293",
      type: "Custom Stitch",
      item: "3-Piece Suit (Navy Blue)",
      fabric: "Premium Wool Blend",
      status: "In Progress",
      due: "Oct 28",
    },
    {
      id: "#ORD-8013",
      name: "Amit Singh",
      phone: "+91 91234 56789",
      type: "Custom Stitch",
      item: "Wedding Sherwani",
      fabric: "Silk with Zari work",
      status: "Trial Ready",
      due: "Oct 25",
    },
    {
      id: "#ORD-8014",
      name: "Sneha Verma",
      phone: "+91 99887 76655",
      type: "Direct Sale",
      item: "Designer Lehenga",
      fabric: "SKU: DLH-402",
      status: "Completed",
      due: "Oct 24",
    },
  ];

  const statusStyle = {
    "In Progress": "bg-pink-100 text-pink-600",
    "Trial Ready": "bg-orange-100 text-orange-500",
    Completed: "bg-gray-200 text-gray-600",
    "Cutting Phase": "bg-yellow-100 text-yellow-600",
    Ready: "bg-green-100 text-green-600",
  };

  return (
    <div className="bg-white rounded-xl border border-[#00000014] overflow-hidden">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-3 p-4 border-b border-[#00000014]">
        <input
          placeholder="Search orders, customers, items..."
          className="border border-[#00000014] px-4 py-2 rounded-lg w-full md:max-w-md outline-none"
        />

        <div className="flex gap-3">
          <button className="border px-4 py-2 rounded-lg text-sm border-[#00000014]">
            Filters
          </button>

          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">+ New Order</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-[#00000014]">
            <tr>
              <th className="text-left p-3">ORDER ID</th>
              <th>CUSTOMER</th>
              <th>TYPE</th>
              <th>GARMENT DETAILS</th>
              <th>STATUS</th>
              <th>DUE DATE</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {data.map((o, i) => (
              <tr key={i} className="border-b border-[#00000014]  hover:bg-gray-50">
                <td className="p-6">{o.id}</td>

                <td>
                  <p className="font-medium">{o.name}</p>
                  <p className="text-xs text-gray-400">{o.phone}</p>
                </td>

                <td>
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">{o.type}</span>
                </td>

                <td>
                  <p>{o.item}</p>
                  <p className="text-xs text-gray-400">{o.fabric}</p>
                </td>

                <td>
                  <span className={`px-2 py-1 rounded-full text-xs ${statusStyle[o.status]}`}>
                    {o.status}
                  </span>
                </td>

                <td className="text-sm">{o.due}</td>

                <td>⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center p-4 text-xs text-gray-400">
        <p>Showing 1-5 of 86 orders</p>
        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded">Previous</button>
          <button className="border px-3 py-1 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
