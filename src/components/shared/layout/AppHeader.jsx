import React from 'react';
import { Link } from 'react-router-dom';

const AppHeader = () => (
  <header>
    <h1>Nick Smirnoff</h1>
    <Link to="/">Home</Link>
    <br />
    <Link to="/about">About</Link>
  </header>
);

export default AppHeader;
