import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

const fade = keyframes`
  0% { opacity: 0; }
  100% { opacity: .5; }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  animation: .5s ease 1 ${fade};
  animation-fill-mode: forwards;
  z-index: -1;
`;

const Backdrop = ({ onClick }) => (
  <Wrapper onClick={onClick} />
);

Backdrop.propTypes = propTypes;

export default Backdrop;
