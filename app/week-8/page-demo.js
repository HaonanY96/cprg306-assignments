"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [randomDog, setRandomDog] = useState(null);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  const getRandomDog = async (breed) => {
    const response = breed
      ? await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      : await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const url = data.message;
    setRandomDog(url);
  };

  const getBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json(); // data is an object with a message property
    const message = data.message; // message is an object with breed names as keys
    const breeds = Object.keys(message); // Object.keys returns an array of keys which are the breed names
    setBreeds(breeds);
  };

  useEffect(() => {
    getRandomDog();
    getBreeds();
  }, []); // [] means it will only run once when the component is displayed

  useEffect(() => {
    getRandomDog(selectedBreed);
  }, [selectedBreed]); // [selectedBreed] means it will run whenever selectedBreed changes

  return (
    <div>
      <h1>Week 8</h1>
      <div>
        <select
          value={selectedBreed}
          onChange={(e) => setSelectedBreed(e.target.value)}
        >
          <option value="">Select a breed</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>
      <div>
        <img src={randomDog} alt="Random dog" />
      </div>
    </div>
  );
}
