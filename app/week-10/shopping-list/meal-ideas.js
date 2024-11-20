"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const meals = await fetchMealIdeas(ingredient);
      setMeals(meals);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h3 className="text-2xl font-bold">Meal Ideas</h3>
      {ingredient && <p>Here are some meal ideas using {ingredient}: </p>}
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="p-2 mb-2">
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}
