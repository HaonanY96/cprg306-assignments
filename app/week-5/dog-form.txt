"use client";
import { useState } from "react";

export default function DogForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name[0] < "A" || name[0] > "Z") {
      console.log("Name must start with a capital letter");
      return;
    }

    let dog = { name: name, breed: breed, age: age };
    console.log(dog);
    setName("");
    setBreed("");
    setAge(0);
  };

  const handleNameChange = (event) => {
    let name = event.target.value;
    // name = name.replace(/[^a-zA-Z\s]/g, "");
    // capitalize the first letter of each word
    name = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setName(name);
  };

  return (
    <div>
      <h1 className=" text-2xl font-bold">Dog Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => handleNameChange(e)}
          className="border border-gray-400 p-1 m-1"
        />
        <div className="text-red-500">
          {(name[0] < "A" || name[0] > "Z") &&
            `Name must start with a capital letter. ${name[0]}`}
        </div>
        <label htmlFor="breed">Breed:</label>
        <input type="breed"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
