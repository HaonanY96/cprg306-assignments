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
    <div class="flex flex-row bg-white gap-4 m-4 items-center">
      <p className="text-lg font-bold">{quantity}</p>

      <div class="flex-1">
        <button
          onClick={decrement}
          disabled={quantity <= 1}
          class={`${
            quantity <= 1 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
          } text-white font-bold p-4 rounded-lg transition`}
        >
          -
        </button>
      </div>
      <div class="flex-1">
        <button
          onClick={increment}
          disabled={quantity >= 20}
          className={`${
            quantity >= 20 ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
          } text-white font-bold p-4 rounded-lg transition`}
        >
          +
        </button>
      </div>
    </div>
  );
}
