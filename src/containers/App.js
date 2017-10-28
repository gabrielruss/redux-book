import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ingredients = this.props.ingredients.ingredients;
    return (
      <div>
        {
          ingredients.map(ingredient => {
            console.log(ingredient.name);
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { ingredients: state.ingredients }
}

export default connect(mapStateToProps)(App);