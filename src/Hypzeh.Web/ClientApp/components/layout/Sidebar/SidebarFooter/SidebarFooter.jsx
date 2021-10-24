import React from 'react';
import PropTypes from 'prop-types';

import Styles from './SidebarFooter.styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const SidebarFooter = ({ children }) => (
  <Styles.Wrapper>
    <Styles.Separator />
    {children}
  </Styles.Wrapper>
);

SidebarFooter.propTypes = propTypes;

export default SidebarFooter;
