import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends React.Component {
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    )
  }
}

export default App
