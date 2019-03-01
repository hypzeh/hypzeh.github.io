import React from 'react';
import { Link } from 'react-router-dom';

const HeaderStyle = {
  display: 'flex',
};

const TitleStyle = {
  margin: '0rem 1rem',
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
    <div style={TitleStyle}>
      <h1>Nick Smirnoff</h1>
    </div>
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
