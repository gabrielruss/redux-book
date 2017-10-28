import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import addIngredient from './actions/ingredientActions';
import addRecipe from './actions/recipeActions';

const store = configureStore();
store.dispatch(addRecipe('Pancake'));
store.dispatch(addIngredient('Pancake', 'Eggs', 3));

ReactDOM.render(
  <Provider store={store}>
    <div>test</div>
  </Provider>,
  document.getElementById('root')
);
