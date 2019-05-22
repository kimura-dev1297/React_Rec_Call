import React, { Component } from 'react';
import './App.css';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

// API KEY Food2Fork - f42946af5e7d8514c9c65074da2c433d

// Main state is going to be in App and past down to RecipeList
class App extends Component {
  state = {
    recipes: recipes, // is a temp API call, API limits to 50 an hour
    url: "https://www.food2fork.com/api/search?key=f42946af5e7d8514c9c65074da2c433d",
    details_id: 35373,
    pageIndex: 1
  };


  // Will Not be making actual API calls while in develoopment. Will be using the /tempList instead

  async getRecipes(){
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      
      this.setState({
        recipes: jsonData.recipes
      })
    } catch(error){
      console.log(error);
    }
  }

  // componentDidMount(){
  //   this.getRecipes();
  // }

  displayPage = (index) => {
    switch(index){
      default:
      case 1:
        return(
          <RecipeList recipes={this.state.recipes} 
              handleDetails={this.handleDetails}/>
        )
      case 0:
        return (
          <RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>
        )
    }
  };

  handleIndex = (index) => {
    this.setState({
      pageIndex: index
    });
  };

  handleDetails = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };

  render(){
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
        {/* Every time the app is rendered we want to run this function */}
        {this.displayPage(this.state.pageIndex)}

      </React.Fragment>
    );
  }
}

export default App;