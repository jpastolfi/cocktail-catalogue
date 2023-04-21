import React from 'react';

class Home extends React.Component {
  render() {
    return (
     <div>
      <label htmlFor="">Search by cocktail name
      <input placeholder="Search by cocktail name" className="" onChange={ this.handleChange } type="text" name="" id="" />
      </label>
      <label htmlFor="">Search by ingredient
      <input placeholder="Search by ingredient" className="" onChange={ this.handleChange } type="text" name="" id="" />
      </label>
      <button>Surprise me with a random cocktail</button>
    </div>
    );
  }
}

export default Home;
