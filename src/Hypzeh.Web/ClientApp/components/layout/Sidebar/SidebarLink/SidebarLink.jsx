import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Styles from './SidebarLink.styles';
import { getSidebar } from '~redux/layout/layout-selectors';
import { setSidebarCollapsedState } from '~redux/layout/layout-actions';

const propTypes = {
  title: PropTypes.string,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

const defaultProps = {
  title: null,
  icon: null,
};

const SidebarLink = ({ title, to, icon }) => {
  const dispatch = useDispatch();
  const sidebar = useSelector(getSidebar);

  const handleClick = () => {
    if (sidebar.collapsed) return;

    dispatch(setSidebarCollapsedState(true));
  };

  return (
    <Styles.Wrapper to={to} onClick={handleClick}>
      {!!icon && (
        <Styles.Icon>
          <FontAwesomeIcon icon={icon} />
        </Styles.Icon>
      )}
      <span>{title || '?'}</span>
    </Styles.Wrapper>
  );
};

SidebarLink.propTypes = propTypes;
SidebarLink.defaultProps = defaultProps;

export default SidebarLink;
