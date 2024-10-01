import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <section className="m-2">
      <ul>
        <li className="text-xl font-bold text-left">{name}</li>
        <li className="text-lg text-left">
          Buy {quantity} in {category}
        </li>
      </ul>
    </section>
  );
}
