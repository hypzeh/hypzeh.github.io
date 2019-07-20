import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import types from '../../types';

const Container = styled.div`
  width: ${props => props.width};
  contain: layout paint style;
  position: relative;
  display: flex;
  height: 100%;
  flex: 1 1 auto;
  min-height: 0;
`;

const Content = styled.div`
  overflow-x: hidden;
  overflow-y: ${props => props.overflow};
  flex: 1 1 auto;
  min-height: 0;
`;

const propTypes = {
  children: types.children,
  width: PropTypes.string,
  overflow: PropTypes.string,
};

const defaultProps = {
  children: null,
  width: 'auto',
  overflow: 'auto',
};

const Scroller = ({ children, width, overflow }) => (
  <Container width={width}>
    <Content overflow={overflow}>
      {children}
    </Content>
  </Container>
);

Scroller.propTypes = propTypes;
Scroller.defaultProps = defaultProps;

export default Scroller;
