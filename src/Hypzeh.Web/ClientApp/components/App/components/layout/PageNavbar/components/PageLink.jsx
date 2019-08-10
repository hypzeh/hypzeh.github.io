import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

const PageLink = ({ name, path }) => (
  <NavLink to={path}>{name}</NavLink>
);

PageLink.propTypes = propTypes;

export default PageLink;
