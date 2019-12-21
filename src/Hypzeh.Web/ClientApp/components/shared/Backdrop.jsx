import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { fadeIn } from '../../utils/style/animations';

const propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.5);
  animation: .5s ease 1 ${fadeIn};
  animation-fill-mode: forwards;
  z-index: -1;
`;

const Backdrop = ({ onClick }) => (
  <Wrapper onClick={onClick} />
);

Backdrop.propTypes = propTypes;

export default Backdrop;
