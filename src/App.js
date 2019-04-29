import React from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

// Main state is going to be in App and past down to RecipeList
class App extends Component() {
  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=f42946af5e7d8514c9c65074da2c433d&q=chicken%20breast&page=2"
  };

  async getRecipes(){
    
  }

  render(){
    return (
      <React.Fragment>
          <RecipeList />
          <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
