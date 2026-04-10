import React, { useState } from "react";
import { FiX } from "react-icons/fi";

export default function RecordPaymentModal({ onClose }) {
  const [method, setMethod] = useState("Cash");
  const [amount, setAmount] = useState("");

  const methods = ["Cash", "UPI", "Credit/Debit Card", "Bank Transfer", "Cheque"];

  return (
    <div
      className="fixed inset-0 bg-black/40 min-h-screen
     flex justify-center items-center z-50"
    >
      <div className="bg-white w-full max-w-2xl rounded-xl max-h-[80vh] border border-[#00000014] overflow-hidden overflow-y-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-[#00000014]">
          <h2 className="font-semibold text-lg">Record Payment</h2>
          <FiX className="cursor-pointer text-gray-500" onClick={onClose} />
        </div>

        {/* BODY */}
        <div className="p-6 space-y-5 text-sm">
          {/* INFO CARD */}
          <div className="border border-[#00000014] rounded-lg p-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400">Invoice ID</p>
              <p className="font-medium">#INV-1002</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Customer</p>
              <p className="font-medium">Amit Kumar</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Total Amount</p>
              <p className="font-medium">₹12,000</p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Already Paid</p>
              <p className="font-medium text-green-600">₹6,000</p>
            </div>

            <div className="col-span-2">
              <p className="text-xs text-gray-400">Outstanding Amount</p>
              <p className="font-semibold text-lg text-red-500">₹6,000</p>
            </div>
          </div>

          {/* PAYMENT DETAILS */}
          <div>
            <p className="font-medium mb-2">Payment Details</p>

            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="₹ 0"
              className="border border-[#00000014] rounded-lg px-3 py-2 w-full"
            />

            <div className="flex justify-between mt-2 text-xs">
              <button onClick={() => setAmount("6000")} className="text-pink-500 cursor-pointer">
                Pay Full Amount
              </button>
              <span className="text-gray-400">Remaining: ₹6,000</span>
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div>
            <p className="font-medium mb-2">Payment Method *</p>

            <div className="grid grid-cols-3 gap-3">
              {methods.map((m, i) => (
                <div
                  key={i}
                  onClick={() => setMethod(m)}
                  className={`border border-[#00000014] rounded-lg p-3 text-center cursor-pointer transition
                  ${
                    method === m ? "bg-[#FFF5F8] border-pink-300 text-pink-600" : "hover:bg-gray-50"
                  }`}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>

          {/* DATE */}
          <div>
            <p className="font-medium mb-2">Payment Date *</p>
            <input className="border border-[#00000014] rounded-lg px-3 py-2 w-full" />
          </div>

          {/* TRANSACTION */}
          <div>
            <p className="font-medium mb-2">Transaction/Reference ID</p>
            <input
              placeholder="Enter transaction ID"
              className="border border-[#00000014] rounded-lg px-3 py-2 w-full"
            />
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-[#00000014]">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#00000014] rounded-lg cursor-pointer"
          >
            Cancel
          </button>

          <button className="px-4 py-2 bg-gray-300 text-white rounded-lg cursor-not-allowed">
            Record Payment
          </button>
        </div>
      </div>
    </div>
  );
}
