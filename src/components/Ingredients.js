import React from 'react';

const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map(ingredient => {
        <div>ingredient.name</div>
      })}
    </div>
  );
}

export default Ingredients;