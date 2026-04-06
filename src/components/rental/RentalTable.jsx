import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function RentalTable() {
  const data = [
    {
      id: "#RNT-5042",
      name: "Sanjay Patel",
      phone: "+91 98223 10293",
      item: "Maroon Velvet Sherwani",
      period: "Out: Oct 20",
      due: "Due: Oct 23",
      status: "Overdue",
    },
    {
      id: "#RNT-5043",
      name: "Neha Sharma",
      phone: "+91 91234 56789",
      item: "Pink Bridal Lehenga",
      period: "Out: Oct 22",
      due: "Due: Oct 26",
      status: "Active",
    },
    {
      id: "#RNT-5044",
      name: "Anil Kumar",
      phone: "+91 99887 76655",
      item: "Blue Jodhpuri Suit",
      period: "Pickup: Oct 24",
      due: "Return: Oct 28",
      status: "Reserved",
    },
  ];

  const statusStyle = {
    Overdue: "bg-red-100 text-red-500",
    Active: "bg-green-100 text-green-600",
    Reserved: "bg-pink-100 text-pink-500",
    Returned: "bg-gray-100 text-gray-500",
  };

  return (
    <div className="bg-white rounded-xl border border-[#00000014] overflow-hidden">
      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row justify-between gap-3 p-4 border-b border-[#00000014]">
        <input
          placeholder="Search by customer, order ID..."
          className="border border-[#00000014] px-4 py-2 rounded-lg w-full md:max-w-md outline-none"
        />

        <div className="flex gap-3">
          <button className="border flex items-center gap-2 border-[#00000014] px-4 py-2 rounded-lg text-sm">
            All <IoIosArrowDown />
          </button>

          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">+ New Rental</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-[#00000014]">
            <tr>
              <th className="text-left p-3">ORDER ID</th>
              <th>CUSTOMER</th>
              <th>ITEM DETAILS</th>
              <th>RENTAL PERIOD</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {data.map((r, i) => (
              <tr key={i} className="border-b border-[#00000014] hover:bg-gray-50">
                <td className="p-6">{r.id}</td>

                <td>
                  <p className="font-medium">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.phone}</p>
                </td>

                <td>{r.item}</td>

                <td>
                  <p>{r.period}</p>
                  <p className="text-xs text-red-500">{r.due}</p>
                </td>

                <td>
                  <span className={`px-2 py-1 rounded-full text-xs ${statusStyle[r.status]}`}>
                    {r.status}
                  </span>
                </td>

                <td>⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center p-4 text-xs text-gray-400">
        <p>Showing 1-5 of 124 rentals</p>
        <div className="flex gap-2">
          <button className="border px-3 py-1 rounded">Previous</button>
          <button className="border px-3 py-1 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}
