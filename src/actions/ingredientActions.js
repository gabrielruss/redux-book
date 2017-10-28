import * as types from './actionTypes';

export default function addIngredient(recipe, name, quantity) {
  return { type: types.ADD_INGREDIENT, recipe, name, quantity };
}