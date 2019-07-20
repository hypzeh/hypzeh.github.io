import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Container = styled.div`
  display: flex;
`;

const Link = styled.a`
  width: 100%;
  padding: .5rem;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #181818;
  }
`;

const ExternalLink = ({ path, title }) => (
  <Container>
    <Link href={path} aria-label={title} target="_blank" rel="noopener noreferrer">{title}</Link>
  </Container>
);

ExternalLink.propTypes = propTypes;

export default ExternalLink;
