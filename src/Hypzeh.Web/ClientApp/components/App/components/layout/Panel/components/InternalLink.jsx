import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Container = styled.div`
  border: 1px solid red;
`;

const InternalLink = ({ path, title }) => (
  <Container>
    <NavLink to={path}>{title}</NavLink>
  </Container>
);

InternalLink.propTypes = propTypes;

export default InternalLink;
