import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

// Main state is going to be in App and past down to RecipeList
class App extends Component {
  state = {
    recipes: recipes, // is a temp API call, API limits to 50 an hour
    url: "https://www.food2fork.com/api/search?key=f42946af5e7d8514c9c65074da2c433d&q=chicken%20breast&page=2"
  };


  // Will Not be making actual API calls while in develoopment. Will be using the /tempList instead

  // async getRecipes(){
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
      
  //     this.setState({
  //       recipes: jsonData.recipes
  //     })
  //   } catch(error){
  //     console.log(error);
  //   }
  // }

  // componentDidMount(){
  //   this.getRecipes();
  // }

  
  render(){
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
          <RecipeList recipes={this.state.recipes} />
          <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;