import React from 'react';

class Home extends React.Component {
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  fetchByName = () => {
    const {cocktailName} = this.state;
    const BASE_URL = `www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;
    console.log(BASE_URL);
}

  fetchByIngredient = () => {
    const { ingredientName } = this.state;
    const BASE_URL = `www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`
    console.log(BASE_URL);
}

  render() {
    return (
     <main>
      <form className='form' action="">
        <label htmlFor="">Search by cocktail name
        </label>
        <input placeholder="Search by cocktail name" className="" onChange={ this.handleChange } type="text" name="cocktailName" id="" />
        <button onClick={this.fetchByName} type="button">Buscar</button>
        <label htmlFor="">Search by ingredient
        </label>
        <input placeholder="Search by ingredient" className="" onChange={ this.handleChange } type="text" name="ingredientName" id="" />
        <button onClick={this.fetchByIngredient} type="button">Buscar</button>
        <button>Surprise me with a random cocktail</button>
      </form>
    </main>
    );
  }
}

export default Home;
