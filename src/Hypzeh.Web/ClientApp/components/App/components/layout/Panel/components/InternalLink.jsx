import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Container = styled.div`
  display: flex;
`;

const Link = styled(NavLink)`
  width: 100%;
  border-radius: .5rem 0 0 .5rem;
  padding: .5rem;
  margin-left: .5rem;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #181818;
  }

  &.active {
    background-color: #212121;
  }
`;

const InternalLink = ({ path, title }) => (
  <Container>
    <Link to={path} exact>{title}</Link>
  </Container>
);

InternalLink.propTypes = propTypes;

export default InternalLink;
