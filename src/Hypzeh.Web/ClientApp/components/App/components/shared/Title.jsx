import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { useMousePosition } from '../../hooks';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Container = styled(animated.div)`
  margin: 0 1rem;
  text-transform: uppercase;
  text-align: center;
`;

const Header = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 5em;
`;

const Title = ({ text }) => {
  const { x } = useMousePosition();
  const [spring, setSpring] = useSpring(() => ({
    xy: [0],
    config: { mass: 1, tension: 250, friction: 30 },
  }));
  setSpring({ xy: [x - window.innerWidth / 2] });

  return (
    <Container style={{ transform: spring.xy.interpolate(value => `translateX(${value / 5}px)`) }}>
      <Header>
        {text}
      </Header>
    </Container>
  );
};

Title.propTypes = propTypes;

export default Title;
