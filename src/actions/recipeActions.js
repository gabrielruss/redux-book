import * as types from './actionTypes';

const addRecipe = (name) => ({
  type: types.ADD_RECIPE, name
});

export default addRecipe;