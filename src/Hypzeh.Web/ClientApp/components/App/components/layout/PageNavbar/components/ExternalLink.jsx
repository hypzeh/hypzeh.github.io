import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

const ExternalLink = ({ name, path }) => (
  <a href={path}>{name}</a>
);

ExternalLink.propTypes = propTypes;

export default ExternalLink;
