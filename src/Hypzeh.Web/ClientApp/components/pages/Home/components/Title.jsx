import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Typist from 'react-typist';

import TrackMouse from '../../../shared/TrackMouse';

const Text = styled(animated.h1)`
  margin: 0;
  line-height: normal;
  text-transform: uppercase;
  font-size: 10em;
  user-select: none;
`;

const Title = () => {
  const [spring, setSpring] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 1, tension: 250, friction: 30 },
  }));

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
  const trans1 = x => `translateX(${Math.floor(x / 10)}px)`;

  return (
    <TrackMouse>
      {({ x, y }) => {
        setSpring({ xy: calc(x, y) });
        return (
          <Text style={{ transform: spring.xy.interpolate(trans1) }}>
            <Typist cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 500 }}>
              {'HOME'}
            </Typist>
          </Text>
        );
      }}
    </TrackMouse>
  );
};

export default Title;
