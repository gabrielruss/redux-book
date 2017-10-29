import React from 'react';
import { connect } from 'react-redux';

import IngredientList from '../components/IngredientList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredients: Object.assign({}, props.ingredients)
    };
  }

  saveIngredient(event) {
    event.preventDefault();
    this.props.actions
  }

  render() {
    const { ingredients } = this.props.ingredients;
    return (
      <div>
        <h2>Add Ingredient</h2>
        <input type='text'></input>
        <button
          onClick={this.saveIngredient}
        >Add</button>
        <IngredientList ingredients={ingredients} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { ingredients: state.ingredients }
}

export default connect(mapStateToProps)(App);