import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header-nav">
          <a target="_blank" href="#about-me">About Me</a>
          <a target="_blank" href="https://www.thecocktaildb.com/" rel="noreferrer">API Used</a>
          <a target="_blank" href="https://www.linkedin.com/in/jpastolfi/" rel="noreferrer">LinkedIn</a>
        </nav>
      </header>
    );
  }
}

export default Header;
