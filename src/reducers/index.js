import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import ingredientReducer from './ingredientReducer';

const rootReducer = combineReducers({
  recipes: recipeReducer,
  ingredients: ingredientReducer
});

export default rootReducer;