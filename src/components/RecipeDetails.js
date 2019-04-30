import React, { Component } from 'react'
import { recipe } from '../tempDetails';

export default class RecipeDetails extends Component {
  /* Must create a constructor func so I can access the deatils_id I passd down through APP component = this.props.id. This sets it up so that I can use props dynamically */

  /*-----------------------------------------------------------------*/
  //   Version 1 - Using constructor(){}
  /*----------------------------------------------------------------- */
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     recipe: recipe,
  //     url: `https://www.food2fork.com/api/get?key=f42946af5e7d8514c9c65074da2c433d&rId=${this.props.id}`
  //   }
  // }

  // async componentDidMount(){
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();    
  //     this.setState({
  //       recipe: jsonData.recipe
  //     })
  //   } catch(error){
  //     console.log(error);
  //   }
  // }

  /*-----------------------------------------------------------------*/
  //   Version 2 - Using componentDidMount Instead of constructor(){}
  /*----------------------------------------------------------------- */

  state = {
    recipe: recipe
  }

  async componentDidMount(){
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=f42946af5e7d8514c9c65074da2c433d&rId=${id}`

    try {
      const data = await fetch(url);
      const jsonData = await data.json();  
      // this.setState is asynchronous and it accepts a callback func
      this.setState((state, props)=>{
        return { recipe: jsonData.recipe }
        }, 
        () => {}
      );
    } catch(error){
      console.log(error);
    }
  }

  render() {
    // console.log(this.state.recipe);
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;

    
    return (
      <React.Fragment>
        {/* Two column layout */}
        <div className="container">
          <div className="row">
          {/* First Column - Button and Image Section */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <button type="button" className="btn btn-warning mb-5 text-capitalize">back to recipe list</button>
              <img src={image_url} className="d-block w-100" alt="recipe"></img>
            </div>
            {/* Second Column - Details Section */}
            <div className="col-10 mx-auto col-md-6 my-3">
              <h6 className="text-uppercase">{title}</h6>
              <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
              <a href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-2 text-capitialize"
              >publisher webpage
              </a>
              <a href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-2 mx-3 text-capitialize"
              >recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {
                  ingredients.map((ingredient, index) => {
                    return (
                      <li key={index} className="list-group-item text-slanted">
                        {ingredient}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


