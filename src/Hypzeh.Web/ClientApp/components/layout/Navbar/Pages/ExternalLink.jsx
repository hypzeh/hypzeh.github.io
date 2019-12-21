import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const Link = styled.a`
  padding: .5rem;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #181818;
  }

  &.active {
    background-color: #212121;
  }
`;

const ExternalLink = ({ name, to }) => (
  <Link href={to} aria-label={name} target="_blank" rel="noopener noreferrer">{name}</Link>
);

ExternalLink.propTypes = propTypes;

export default ExternalLink;
