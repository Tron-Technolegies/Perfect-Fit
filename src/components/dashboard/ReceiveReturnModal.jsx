import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function ReceiveReturnModal({ onClose, onSelect }) {
  const [search, setSearch] = useState("");

  const orders = [
    {
      id: "#ORD-9025",
      name: "Neha Kapoor",
      item: "Gold Embroidered Sherwani",
      returnDate: "2026-10-24",
      amount: "4200",
      deposit: "6000",
    },
    {
      id: "#ORD-9023",
      name: "Sneha Desai",
      item: "Black Tuxedo",
      returnDate: "2026-10-25",
      amount: "2800",
      deposit: "4000",
    },
  ];

  const filtered = orders.filter((o) => o.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center h-screen justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-xl border border-[#00000014] flex flex-col max-h-[80vh]">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#00000014]">
          <h2 className="font-semibold">Receive Return</h2>
          <FiX className="cursor-pointer text-gray-500" onClick={onClose} />
        </div>

        {/* CONTENT */}
        <div className="p-6 flex-1 overflow-y-auto">
          {/* SEARCH */}
          <div className="flex items-center border border-[#00000014] rounded-lg px-3 py-2 mb-4">
            <FiSearch className="text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by order ID, customer name, or item..."
              className="ml-2 w-full outline-none text-sm"
            />
          </div>

          {/* LIST */}
          <div className="space-y-3">
            {filtered.map((o, i) => (
              <div
                key={i}
                onClick={() => onSelect(o)}
                className="border border-[#00000014] rounded-lg p-4 cursor-pointer hover:bg-[#FFF5F8] transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-sm">
                      {o.id} • {o.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">{o.item}</p>

                    <p className="text-xs text-gray-400 mt-1">Return: {o.returnDate}</p>
                  </div>

                  <div className="text-right text-sm">
                    <p className="font-medium">₹{o.amount}</p>
                    <p className="text-xs text-gray-400">Deposit ₹{o.deposit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-[#00000014]">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#00000014] rounded-lg text-sm cursor-pointer"
          >
            Cancel
          </button>

          <button className="px-4 py-2 bg-gray-300 text-white rounded-lg text-sm cursor-not-allowed">
            Process Return & Refund
          </button>
        </div>
      </div>
    </div>
  );
}
