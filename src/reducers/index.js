import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import ingredientReducer from './ingredientReducer';

const rootReducer = combineReducers({
  recipeReducer,
  ingredientReducer
});

export default rootReducer;