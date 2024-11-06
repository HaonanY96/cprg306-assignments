"use client";

import { useState } from "react";
import dogsJson from "./dogs.json";

export default function Page() {
  const [selectedDogId, setSelectedDogId] = useState(-1);

  let dogs = [...dogsJson]; // Spread the array to make a copy of it and avoid mutating the original data.

  dogs.sort((a, b) => a.name.localeCompare(b.name)); //Sort the array of dogs by name. This is done in place, so no need to reassign the variable. Array is mutated.

  //dogs.reverse(); // Reverse the array of dogs. This is done in place, so no need to reassign the variable. Array is mutated.

  dogs = dogs.filter((dog) => dog.id !== 2); // Remove the bad dog from the array. This is done in place, so no need to reassign the variable.

  const handleClick = (id) => {
    if (selectedDogId === id) {
      setSelectedDogId(-1);
      return;
    }
    setSelectedDogId(id);
  };

  return (
    <main className="m-4">
      <h1 className="text-4xl bold">Week-6</h1>
      <p>Selected dog id: {selectedDogId}</p>
      <ul>
        {dogs.map((dog) => (
          <li
            key={dog.id}
            onClick={() => handleClick(dog.id)}
            className={`flex items-center space-x-4 ${
              dog.id === selectedDogId ? "bg-gray-200" : ""
            }`}
          >
            <img
              src={dog.imageUrl}
              alt={dog.name}
              className="w-24 h-24 object-cover rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{dog.name}</h2>
              <p>{dog.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
