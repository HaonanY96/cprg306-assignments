"use client";

import React, { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, firebaseSignOut } = useUserAuth();

  async function loadItems() {
    try {
      if (user) {
        const items = await getItems(user.uid);
        setItems(items);
      }
    } catch (error) {
      console.error("Error loading items:", error);
      throw error;
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (item) => {
    try {
      if (user) {
        const docId = await addItem(user.uid, item);
        setItems((prevItems) => [...prevItems, { ...item, id: docId }]);
      }
    } catch (error) {
      console.error("Error adding item:", error);
      throw error;
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanName = itemName
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        "\uFFFD"
      )
      .trim()
      .replace(/\uFFFD/g, "");

    setSelectedItemName(cleanName);
  };

  return (
    <div className="m-4">
      {user ? (
        <div>
          <h2 className="my-4 text-3xl font-bold">Shopping List</h2>
          <button
            onClick={firebaseSignOut}
            className="text-lg mb-4 hover:underline"
          >
            Logout
          </button>
          <div className="flex gap-4">
            <div className="flex-1">
              <NewItem onAddItem={handleAddItem} />
              <ItemList onItemSelect={handleItemSelect} items={items} />
            </div>
            <div className="flex-1">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-lg">You need to be signed in to view this page.</p>
        </div>
      )}
    </div>
  );
}
