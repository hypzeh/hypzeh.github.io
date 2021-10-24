import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider as StyleProvider } from 'styled-components';

import { getThemeName } from '~redux/theme/theme-selectors';
import commonPropTypes from '~utils/common-prop-types';
import themes from '../themes';

const propTypes = {
  children: commonPropTypes.CHILDREN.isRequired,
};
const ThemeProvider = ({ children }) => {
  const themeName = useSelector(getThemeName);

  return (
    <StyleProvider theme={themes[themeName]}>
      {children}
    </StyleProvider>
  );
};

ThemeProvider.propTypes = propTypes;

export default ThemeProvider;
