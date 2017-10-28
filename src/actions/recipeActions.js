import * as types from './actionTypes';

export default function addRecipe(name) {
  return { type: types.ADD_RECIPE, name };
}