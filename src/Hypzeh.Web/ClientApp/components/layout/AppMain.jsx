import React from 'react';

import AppMainTypes from '../../types/layout/appMain';

const AppMain = ({ children }) => (
  <main className="AppMain">
    {children}
  </main>
);

AppMain.propTypes = AppMainTypes;

export default AppMain;
