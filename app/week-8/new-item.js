"use client";

import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleNameChange = (event) => {
    let name = event.target.value;
    name = name.replace(/[^a-zA-Z\s]/g, "");
    setName(name);
  };

  const increment = () => {
    if (quantity < 20) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleCategoryChange = (event) => {
    let category = event.target.value;
    setCategory(category);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = crypto.randomUUID();

    let item = { id, name, quantity, category };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="flex">
      <form className="flex flex-col p-2 m-2 w-full max-w-md">
        <div className="mb-2">
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Item name"
            required
            className="border-2 border-gray-300 p-2 rounded-lg text-lg w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 p-2 mt-1 mb-1 ">
          <div className="flex justify-between items-center bg-white border-2 border-gray-300 p-2 rounded-lg">
            <p className="text-lg font-bold">{quantity}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={decrement}
                disabled={quantity <= 1}
                className="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 active:bg-blue-200 disabled:bg-gray-400 text-lg text-white font-bold w-10 h-10 rounded-lg flex items-center justify-center"
              >
                -
              </button>
              <button
                type="button"
                onClick={increment}
                disabled={quantity >= 20}
                className="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 active:bg-blue-200 disabled:bg-gray-400 text-lg text-white font-bold w-10 h-10 rounded-lg flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <select
              value={category}
              onChange={handleCategoryChange}
              className="border-2 border-gray-300 p-2 rounded-lg text-lg w-full"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="mt-2">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-200 text-lg text-white rounded-lg p-2 w-full"
          >
            Add an item
          </button>
        </div>
      </form>
    </div>
  );
}
