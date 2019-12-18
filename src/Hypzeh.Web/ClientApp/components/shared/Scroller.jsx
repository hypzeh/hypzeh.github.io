import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  overflow: PropTypes.string,
};
const defaultProps = {
  width: null,
  overflow: null,
};

const Wrapper = styled.div`
  width: ${({ width }) => (width || '100%')};
  height: 100%;
  contain: layout paint style;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
`;

const Content = styled.div`
  overflow-x: hidden;
  overflow-y: ${({ overflow }) => (overflow || 'auto')};
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
  z-index: 100;
`;

const Scroller = ({ children, width, overflow }) => (
  <Wrapper width={width}>
    <Content overflow={overflow}>
      {children}
    </Content>
  </Wrapper>
);

Scroller.propTypes = propTypes;
Scroller.defaultProps = defaultProps;

export default Scroller;
