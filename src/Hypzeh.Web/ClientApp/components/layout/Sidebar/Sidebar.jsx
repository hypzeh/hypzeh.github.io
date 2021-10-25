import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Styles from './Sidebar.styles';
import Scroller from '~components/layout/Scroller';
import { getSidebar } from '~redux/layout/layout-selectors';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

const defaultProps = {
  title: null,
};

const Sidebar = ({ children, title }) => {
  const sidebar = useSelector(getSidebar);

  if (!sidebar.enabled) return null;

  return (
    <Styles.Wrapper collapsed={sidebar.collapsed}>
      <Scroller>
        {!!title && (
          <Styles.Header>
            <h1>{title}</h1>
          </Styles.Header>
        )}
        {children}
      </Scroller>
    </Styles.Wrapper>
  );
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
