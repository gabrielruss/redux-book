import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function ingredientReducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      const newIngredient = {
        recipe: action.recipe,
        name: action.name,
        quantity: action.quantity
      };
      return Object.assign({}, state, {
        ingredients: state.ingredients.concat(newIngredient)
      });
      
    default:
      return state;
  }
}