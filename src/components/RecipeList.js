import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

export default class RecipeList extends Component {
  render() {
    const {
      recipes, 
      value,
      handleDetails,
      handleSubmit,
      handleChange,
      error
    } = this.props;

    return (
      <React.Fragment>
        <RecipeSearch 
          value={value} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />
        <div className="container my-5">
        {/* For Nested Elements in Bootstrap I'll Use Nested Rows */}
        {/*  Title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">Recipe List</h1>
            </div>
          </div>
          {/* End of Title */}
          <div className="row">
            {error ? <h1 className="text-danger text-center">{error}</h1> : recipes.map( recipe => {
                return(
                  // recipes being passed now down through <Recipe/> as "recipe". <Recipe /> is where we will display each recipe
                  <Recipe 
                    key={recipe.recipe_id}
                    recipe={recipe}
                    handleDetails={() => handleDetails(0, recipe.recipe_id)}
                  />
                ) 
              })}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
