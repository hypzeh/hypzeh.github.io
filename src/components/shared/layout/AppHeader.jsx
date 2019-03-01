import React from 'react';
import { Link } from 'react-router-dom';

const HeaderStyle = {
  display: 'flex',
  background: 'black',
};

const TitleStyle = {
  width: '100%',
};

const NavStyle = {
  display: 'flex',
  alignItems: 'center',
};

const LinkStyle = {
  padding: '0rem 1rem',
  border: '1px red solid',
};

const AppHeader = () => (
  <header style={HeaderStyle}>
    <h1 style={TitleStyle}>Nick Smirnoff</h1>
    <nav style={NavStyle}>
      <Link style={LinkStyle} to='/'>
        Home
      </Link>
      <Link style={LinkStyle} to='/about'>
        About
      </Link>
      <Link style={LinkStyle} to='/projects'>
        Projects
      </Link>
    </nav>
  </header>
);

export default AppHeader;
