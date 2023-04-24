import React from 'react';
import SearchResults from './SearchResults';

class Home extends React.Component {
  state = {
    result: [],
    loaded: false,
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  fetchByName = async () => {
    const { cocktailName } = this.state;
    const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    this.setState({
      result: data,
      loaded: true,
    })
  }

  fetchByIngredient = async () => {
    const { ingredientName } = this.state;
    const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`
    const response = await fetch(BASE_URL);
    const data = await response.json();
    this.setState({
      result: data,
      loaded: true,
    })
  }

  fetchRandomCocktail = async () => {
    const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    this.setState({
      result: data.drinks[0],
      loaded: true,
    })
  }

  render() {
    const { result, loaded } = this.state;
    return (
      <main className="main-content">
        <form className="form" action="">
          <label htmlFor="">Search by cocktail name
          </label>
          <input placeholder="Search by cocktail name" className="" onChange={ this.handleChange } type="text" name="cocktailName" id="" />
          <button onClick={ this.fetchByName } type="button">Buscar</button>
          <label htmlFor="">Search by ingredient
          </label>
          <input placeholder="Search by ingredient" className="" onChange={ this.handleChange } type="text" name="ingredientName" id="" />
          <button onClick={ this.fetchByIngredient } type="button">Buscar</button>
        </form>
          <button onClick={ this.fetchRandomCocktail } type="button" >Surprise me with a random cocktail</button>
        { loaded === true && <SearchResults result={ result }/>}
      </main>
    );
  }
}

export default Home;
