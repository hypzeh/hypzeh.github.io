import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => (
  <header className="AppHeader d-flex">
    <div>
      Nick Smirnoff.
    </div>
    <nav className="d-flex flex-grow-1 justify-content-end">
      <NavLink className="AppHeader__link" to="/">HOME</NavLink>
      <NavLink className="AppHeader__link" to="/about">ABOUT</NavLink>
      <NavLink className="AppHeader__link" to="/projects">PROJECTS</NavLink>
      <NavLink className="AppHeader__link" to="/contact">CONTACT</NavLink>
    </nav>
  </header>
);

export default AppHeader;
