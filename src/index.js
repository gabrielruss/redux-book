import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import addIngredient from './actions/ingredientActions';
import addRecipe from './actions/recipeActions';

import App from './containers/App';

const store = configureStore();
store.dispatch(addRecipe('Pancake'));
store.dispatch(addIngredient('Pancake', 'Flour', 3));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
