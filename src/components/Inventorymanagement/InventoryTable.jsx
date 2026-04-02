import React from "react";
import { FiEye, FiEdit, FiTrash2 } from "react-icons/fi";

export default function InventoryTable() {
  const data = [
    {
      name: "Royal Blue Sherwani",
      sku: "SH-001",
      category: "Sherwani",
      stock: "3 / 5",
      price: "3,500",
      condition: "Excellent",
      status: "Available",
      img: "https://via.placeholder.com/40",
    },
    {
      name: "Black Tuxedo",
      sku: "TX-003",
      category: "Suit",
      stock: "0 / 8",
      price: "2,800",
      condition: "Excellent",
      status: "All Rented",
      img: "https://via.placeholder.com/40",
    },
  ];

  const statusStyle = {
    Available: "bg-green-100 text-green-600",
    "All Rented": "bg-red-100 text-red-500",
    Maintenance: "bg-orange-100 text-orange-500",
  };

  const conditionStyle = {
    Excellent: "bg-green-100 text-green-600",
    Good: "bg-blue-100 text-blue-600",
    "Needs Repair": "bg-orange-100 text-orange-500",
  };

  return (
    <div className="bg-white rounded-xl border border-[#00000014] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-3 p-4 border-b border-[#00000014]">
        <input
          placeholder="Search by name or SKU..."
          className="border border-[#00000014] px-4 py-2 rounded-lg w-full md:max-w-md outline-none"
        />

        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">+ Add New Item</button>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 bg-[#F9FAFB] border-b border-[#00000014]">
            <tr>
              <th className="text-left p-3">ITEM</th>
              <th>SKU</th>
              <th>CATEGORY</th>
              <th>TOTAL/AVAILABLE</th>
              <th>RENT PRICE</th>
              <th>CONDITION</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-b border-[#00000014] hover:bg-gray-50">
                <td className="p-3 flex items-center gap-3">
                  <img src={item.img} className="w-10 h-10 rounded" />
                  {item.name}
                </td>

                <td>{item.sku}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>₹{item.price}</td>

                <td>
                  <span className={`px-2 py-1 rounded text-xs ${conditionStyle[item.condition]}`}>
                    {item.condition}
                  </span>
                </td>

                <td>
                  <span className={`px-2 py-1 rounded text-xs ${statusStyle[item.status]}`}>
                    {item.status}
                  </span>
                </td>

                <td className="flex gap-3 justify-center">
                  <FiEye className="cursor-pointer" />
                  <FiEdit className="cursor-pointer" />
                  <FiTrash2 className="cursor-pointer text-red-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden space-y-4 p-4">
        {data.map((item, i) => (
          <div key={i} className="border border-[#00000014] rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <img src={item.img} className="w-10 h-10 rounded" />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-gray-400">{item.sku}</p>
              </div>
            </div>

            <div className="text-sm space-y-1">
              <p>Category: {item.category}</p>
              <p>Stock: {item.stock}</p>
              <p>Price: ₹{item.price}</p>
            </div>

            <div className="flex justify-between mt-3">
              <span className={`text-xs px-2 py-1 rounded ${statusStyle[item.status]}`}>
                {item.status}
              </span>

              <div className="flex gap-3">
                <FiEye className="text-gray-300" />
                <FiEdit className="text-gray-400" />
                <FiTrash2 className="text-red-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
