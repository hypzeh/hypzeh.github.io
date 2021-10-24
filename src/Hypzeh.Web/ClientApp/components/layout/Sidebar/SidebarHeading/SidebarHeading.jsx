import React from 'react';
import PropTypes from 'prop-types';

import Styles from './SidebarHeading.styles';

const propTypes = {
  title: PropTypes.string,
};

const defaultProps = {
  title: null,
};

const SidebarHeading = ({ title }) => (
  <Styles.Wrapper>
    <h2>{title}</h2>
  </Styles.Wrapper>
);

SidebarHeading.propTypes = propTypes;
SidebarHeading.defaultProps = defaultProps;

export default SidebarHeading;
