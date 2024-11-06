"use client";

import DogList from "./dog-list";
import DogForm from "./dog-form.";
import dogData from "./dog-data.json";
import { useState } from "react";

export default function Page() {
  const [dogs, setDogs] = useState(dogData);

  const handleAddDog = (dog) => {
    setDogs([...dogs, dog]);
  };

  const handleDeleteDog = (id) => {
    setDogs(dogs.filter((dog) => dog.id !== id)); // filter out the dog with the matching id
  };

  return (
    <div>
      <h1>Week 7</h1>
      <DogList dogs={dogs} onDeleteDog={handleDeleteDog} />
      <DogForm onAddDog={handleAddDog} />
    </div>
  );
}
