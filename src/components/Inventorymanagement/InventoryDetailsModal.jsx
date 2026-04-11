import React from "react";
import { FiX, FiEdit } from "react-icons/fi";

export default function InventoryDetailsModal({ item, onClose, onEdit }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-3xl rounded-xl border border-[#00000014] overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#00000014]">
          <div>
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-xs text-gray-400">Complete item details and analytics</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onEdit}
              className="bg-pink-500 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2"
            >
              <FiEdit /> Edit
            </button>
            <FiX onClick={onClose} className="cursor-pointer text-gray-500" />
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6 text-sm">
          {/* TOP */}
          <div className="flex gap-6">
            <img src={item.img} className="w-28 h-28 rounded-lg object-cover" />

            <div className="flex-1 space-y-2">
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                  {item.status}
                </span>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                  {item.condition}
                </span>
              </div>

              <p className="text-gray-500">Premium item description goes here...</p>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400">Total Rentals</p>
                  <p className="font-semibold">45</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-400">Revenue Generated</p>
                  <p className="font-semibold">₹157,500</p>
                </div>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-pink-50 p-3 rounded-lg">
              <p className="text-xs text-gray-400">Available</p>
              <p className="font-semibold">{item.stock}</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-xs text-gray-400">Rent Price</p>
              <p className="font-semibold">₹{item.price}</p>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-xs text-gray-400">Purchase Price</p>
              <p className="font-semibold">₹25,000</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-xs text-gray-400">Last Rented</p>
              <p className="font-semibold">Oct 20, 2024</p>
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400">SKU</p>
              <p>{item.sku}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Category</p>
              <p>{item.category}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Color</p>
              <p>Royal Blue</p>
            </div>
            <div>
              <p className="text-xs text-gray-400">Size(s)</p>
              <p>L, XL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
