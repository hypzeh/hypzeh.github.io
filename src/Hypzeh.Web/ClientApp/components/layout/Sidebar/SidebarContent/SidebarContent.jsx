import React from 'react';
import PropTypes from 'prop-types';

import Styles from './SidebarContent.styles';
import Scroller from '~components/layout/Scroller';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const SidebarContent = ({ children }) => (
  <Styles.Wrapper>
    <Scroller>
      {children}
    </Scroller>
  </Styles.Wrapper>
);

SidebarContent.propTypes = propTypes;

export default SidebarContent;
