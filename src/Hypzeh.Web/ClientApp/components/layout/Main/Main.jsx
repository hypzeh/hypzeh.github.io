import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Wrapper = styled.main`
  min-height: 0;
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
`;

const Main = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Main.propTypes = propTypes;

export default Main;
