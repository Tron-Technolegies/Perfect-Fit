import React, { useState } from "react";
import { FiRotateCcw, FiScissors, FiShoppingBag } from "react-icons/fi";
import NewOrderModal from "./NewOrderModal";
import ReceiveReturnModal from "./ReceiveReturnModal";
import ReturnDetailsModal from "./ReturnDetailsModal";

export default function QuickActions() {
  const [orderOpen, setOrderOpen] = useState(false);
  const [returnOpen, setReturnOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="bg-white p-5 rounded-xl border border-[#00000014]">
        <h3 className="text-sm text-gray-400 mb-3 font-semibold">QUICK ACTIONS</h3>

        <div className="grid grid-cols-2 gap-3">
          <div
            onClick={() => setOrderOpen(true)}
            className="border border-[#00000014] rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-[#FFF5F8] cursor-pointer"
          >
            <FiShoppingBag className="text-pink-500" />
            <p className="text-sm">New Order</p>
          </div>

          <div
            onClick={() => setReturnOpen(true)}
            className="border border-[#00000014] rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-[#FFF5F8] cursor-pointer"
          >
            <FiRotateCcw className="text-pink-500" />
            <p className="text-sm">Receive Return</p>
          </div>
          <div
            onClick={() => setReturnOpen(true)}
            className="border border-[#00000014] rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-[#FFF5F8] cursor-pointer"
          >
            <FiScissors className="text-pink-500" />
            <p className="text-sm">Custom Order</p>
          </div>
        </div>
      </div>

      {/* MODALS */}
      {orderOpen && <NewOrderModal onClose={() => setOrderOpen(false)} />}

      {returnOpen && !selected && (
        <ReceiveReturnModal
          onClose={() => setReturnOpen(false)}
          onSelect={(data) => setSelected(data)}
        />
      )}

      {selected && (
        <ReturnDetailsModal
          data={selected}
          onClose={() => {
            setSelected(null);
            setReturnOpen(false);
          }}
        />
      )}
    </>
  );
}
