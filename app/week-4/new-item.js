"use client";

import React, { useState } from "react";

export function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div class="flex justify-center items-center">
      <div class="grid grid-cols-3 gap-4 m-4 items-center bg-white">
        <p className="text-lg font-bold  text-center">{quantity}</p>
        <button
          onClick={decrement}
          disabled={quantity <= 1}
          class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 active:bg-blue-200 disabled:bg-gray-400 text-center text-white font-bold p-4 h-10 rounded-lg"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity >= 20}
          class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 active:bg-blue-200 disabled:bg-gray-400 text-center text-white font-bold p-4 h-10 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
