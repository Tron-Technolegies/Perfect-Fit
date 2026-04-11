import React from "react";
import { FiX } from "react-icons/fi";

export default function AddEditItemModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl border border-[#00000014] overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#00000014]">
          <h2 className="font-semibold">Add New Item</h2>
          <FiX onClick={onClose} className="cursor-pointer" />
        </div>

        {/* BODY */}
        <div className="p-6 space-y-5 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <input className="input" placeholder="Item Name" />
            <input className="input" placeholder="Category" />
            <input className="input" placeholder="SKU" />
            <input className="input" placeholder="Color" />
            <input className="input" placeholder="Material" />
            <input className="input" placeholder="Sizes" />
            <input className="input col-span-2" placeholder="Image URL" />
          </div>

          <textarea className="input h-20" placeholder="Description" />

          <div className="grid grid-cols-3 gap-4">
            <input className="input" placeholder="Total Qty" />
            <input className="input" placeholder="Available Qty" />
            <input className="input" placeholder="Condition" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input className="input" placeholder="Rent Price" />
            <input className="input" placeholder="Purchase Price" />
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-[#00000014]">
          <button onClick={onClose} className="border px-4 py-2 rounded-lg">
            Cancel
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">Add Item</button>
        </div>
      </div>
    </div>
  );
}
