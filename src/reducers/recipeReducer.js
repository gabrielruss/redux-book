import initialState from './initialState';
import { ADD_RECIPE } from '../actions/actionTypes';

export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RECIPE:
      return Object.assign({}, state, {
        recipes: state.recipes.concat({ name: action.name })
      });
    default:
    return state;
  }
}