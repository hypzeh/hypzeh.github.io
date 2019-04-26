import React from 'react';

import { propTypes, defaultProps } from '../../types/layout/appMain';

const AppMain = ({ children }) => (
  <main>
    {children}
  </main>
);

AppMain.propTypes = propTypes;
AppMain.defaultProps = defaultProps;

export default AppMain;
