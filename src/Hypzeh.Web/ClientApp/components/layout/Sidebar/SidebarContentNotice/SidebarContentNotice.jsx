import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Styles from './SidebarContentNotice.styles';

const propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string.isRequired,
};

const defaultProps = {
  icon: null,
};

const SidebarContentNotice = ({ icon, message }) => (
  <Styles.Wrapper>
    {!!icon && (<FontAwesomeIcon icon={icon} size="5x" />)}
    <Styles.Message>{message}</Styles.Message>
  </Styles.Wrapper>
);

SidebarContentNotice.propTypes = propTypes;
SidebarContentNotice.defaultProps = defaultProps;

export default SidebarContentNotice;
