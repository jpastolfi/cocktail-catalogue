import React from 'react';

class SearchResults extends React.Component {
    render() {
        const result = this.props;
        const { strAlcoholic, strDrink, strDrinkThumb, strInstructions } = result;
        return (
            <div>
                <p>{}</p>
                <p>{}</p>
                <p>{}</p>
                <img src={strDrinkThumb} alt={strDrink} />
            </div>
        );
    }
}

export default SearchResults;
