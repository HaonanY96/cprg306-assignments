import React from "react";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="m-4">
      <h2 className="my-4 text-4xl font-bold">Shopping List</h2>
      <ItemList />
    </main>
  );
}
