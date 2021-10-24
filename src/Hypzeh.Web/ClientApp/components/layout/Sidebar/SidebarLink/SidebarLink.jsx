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
  openInNewTab: PropTypes.bool,
  icon: PropTypes.string,
  iconPrefix: PropTypes.string,
  exact: PropTypes.bool,
};

const defaultProps = {
  title: null,
  openInNewTab: false,
  icon: null,
  iconPrefix: 'fas',
  exact: false,
};

const SidebarLink = ({
  title,
  to,
  openInNewTab,
  icon,
  iconPrefix,
  exact,
}) => {
  const dispatch = useDispatch();
  const sidebar = useSelector(getSidebar);

  const handleClick = () => {
    if (sidebar.collapsed) return;

    dispatch(setSidebarCollapsedState(true));
  };

  return (
    <Styles.Wrapper to={to.startsWith('/') ? to : { pathname: to }} target={openInNewTab ? '_blank' : null} onClick={handleClick} exact={exact}>
      {!!icon && (
        <Styles.Icon>
          <FontAwesomeIcon icon={{ prefix: iconPrefix, iconName: icon }} />
        </Styles.Icon>
      )}
      <span>{title || '?'}</span>
    </Styles.Wrapper>
  );
};

SidebarLink.propTypes = propTypes;
SidebarLink.defaultProps = defaultProps;

export default SidebarLink;
