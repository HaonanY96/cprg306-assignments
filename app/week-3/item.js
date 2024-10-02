import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <section className="border border-teal-400 bg-teal-50 w-full max-w-xs m-2 my-3 p-2">
      <ul>
        <li className="text-xl font-bold">{name}</li>
        <li>
          Buy {quantity} in {category}
        </li>
      </ul>
    </section>
  );
}
