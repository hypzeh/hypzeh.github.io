import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Styles from './NavbarLink.styles';
import areas from '~components/areas';
import commonPropTypes from '~utils/common-prop-types';
import { getSidebar } from '~redux/layout/layout-selectors';
import { setSidebarCollapsedState } from '~redux/layout/layout-actions';

const propTypes = {
  children: commonPropTypes.CHILDREN.isRequired,
  to: PropTypes.string.isRequired,
};

const NavbarLink = ({ children, to }) => {
  const dispatch = useDispatch();
  const sidebar = useSelector(getSidebar);

  const handleClick = () => {
    if (!sidebar.collapsed) return;

    dispatch(setSidebarCollapsedState(false));
  };

  const handleIsActive = (match, location) => {
    if (!match) return false;

    if (to === '/') {
      return (areas[0]?.urls || []).includes(location.pathname);
    }

    return true;
  };

  return (
    <Styles.Wrapper to={to} onClick={handleClick} isActive={handleIsActive}>
      {children}
    </Styles.Wrapper>
  );
};

NavbarLink.propTypes = propTypes;

export default NavbarLink;
