"use client";

import { useState } from "react";

export default function DogForm({ onAddDog }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = Math.floor(Math.random() * 1000000);
    let dog = { id, name, age };
    onAddDog(dog);

    alert(`Added dog: ${name}, age: ${age}`);
    setName("");
    setAge(0);
  };

  const handleNameChange = (event) => {
    let name = event.target.value;
    name = name.replace(/[^a-zA-Z\s]/g, "");
    setName(name);
  };

  return (
    <div>
      <h2>Dog Form</h2>
      <label>
        Name:
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Dog name"
          required
          className="border-2 border-gray-300 p-2 rounded-lg text-lg w-full"
        />
      </label>
      <label>
        Age:
        <input
          id="age"
          type="number"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          placeholder="Dog age"
          required
          className="border-2 border-gray-300 p-2 rounded-lg text-lg w-full"
        />
      </label>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Submit
      </button>
    </div>
  );
}
