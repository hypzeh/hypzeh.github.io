import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Scroller.styles';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  overflow: PropTypes.oneOf([
    'auto',
    'hidden',
    'scroll',
    'visible',
  ]),
  padding: PropTypes.string,
  contain: PropTypes.string,
};

const defaultProps = {
  className: '',
  width: null,
  height: null,
  maxHeight: null,
  overflow: null,
  padding: null,
  contain: null,
};

const Scroller = ({
  className,
  children,
  width,
  height,
  maxHeight,
  overflow,
  padding,
  contain,
}) => (
  <Styles.Wrapper className={className} width={width} height={height} maxHeight={maxHeight} contain={contain}>
    <Styles.Content overflow={overflow} padding={padding}>
      {children}
    </Styles.Content>
  </Styles.Wrapper>
);

Scroller.propTypes = propTypes;
Scroller.defaultProps = defaultProps;

export default Scroller;
