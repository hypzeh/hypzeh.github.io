import React from 'react';

const AppHeader = () => (
  <header className="AppHeader d-flex">
    <div>
      Nick Smirnoff.
    </div>
    <nav className="d-flex flex-grow-1 justify-content-end">
      <button>Home</button>
      <button>Projects</button>
    </nav>
  </header>
);

export default AppHeader;
