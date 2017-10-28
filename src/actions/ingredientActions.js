import * as types from './actionTypes';

const addIngredient = (recipe, name, quantity) => ({
  type: types.ADD_INGREDIENT, recipe, name, quantity
});

export default addIngredient;