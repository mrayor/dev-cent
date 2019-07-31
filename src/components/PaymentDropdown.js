import React from "react";

const PaymentDropdown = () => {
  return (
    <div class="w-full my-6">
      <label class="text-black font-bold mb-2">Select Mode of Payment</label>
      <div class="relative">
        <select
          class="w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 appearance-none  focus:bg-white"
          id="grid-state"
        >
          <option>Pay Online</option>
          <option>Pay Cash</option>
          <option>Pay to Bank</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PaymentDropdown;
