import React from "react";

export default function Item({ id, name, quantity, category }) {
  return (
    <li className="p-2 m-4 max-w-sm border border-teal-400 bg-teal-50 ">
      <h2 id={id} className="text-xl font-bold">
        {name}
      </h2>
      <div className="text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
}
