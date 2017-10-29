import React from 'react';

const IngredientList = ({ ingredients }) => {
  console.log(ingredients);
  return (
    <div>
      <h2>Ingredients</h2>
      {
        ingredients.map(ingredient => {
          return <li>{ingredient.name}</li>
        })
      }
    </div>
  );
}

export default IngredientList;