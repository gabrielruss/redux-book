import initialState from './initialState';
import * as types from '../actions/actionTypes';

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      return Object.assign({}, state, {
        recipes: state.recipes.concat({ name: action.name })
      });
    default:
    return state;
  }
};

export default recipeReducer;