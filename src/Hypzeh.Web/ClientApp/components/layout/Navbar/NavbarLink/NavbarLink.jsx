import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Styles from './NavbarLink.styles';
import NSLogo from '~components/shared/NSLogo';
import { getSidebar } from '~redux/layout/layout-selectors';
import { setSidebarCollapsedState } from '~redux/layout/layout-actions';

const propTypes = {
  to: PropTypes.string.isRequired,
};

const defaultProps = {
};

const NavbarLink = ({ to }) => {
  const dispatch = useDispatch();
  const sidebar = useSelector(getSidebar);

  const handleClick = () => {
    if (!sidebar.collapsed) return;

    dispatch(setSidebarCollapsedState(false));
  };

  return (
    <Styles.Wrapper to={to} onClick={handleClick}>
      <NSLogo size={50} />
    </Styles.Wrapper>
  );
};

NavbarLink.propTypes = propTypes;
NavbarLink.defaultProps = defaultProps;

export default NavbarLink;
