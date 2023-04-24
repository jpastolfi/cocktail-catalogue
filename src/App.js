import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; 

class App extends React.Component {
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
