import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../src/logo.svg';

const Header = props => {
  const {
    title = 'Welcome to React',
    url = 'http://localhost:3001'
  } = props;

  return (
    <header className="App-header">
      <a href={url}>
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <h1 className="App-title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;
