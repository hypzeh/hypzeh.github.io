import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Typist from 'react-typist';

import media from '../../../../styles/media';
import TrackMouse from '../../../shared/TrackMouse';

const Text = styled(animated.h1)`
  margin: 0 1rem;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
  font-size: 10em;
  user-select: none;

  ${media.huge`
    font-size: 10vw;
  `}
`;

const propTypes = {
  title: PropTypes.string.isRequired,
};

const Title = ({ title }) => {
  const [spring, setSpring] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 1, tension: 250, friction: 30 },
  }));

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
  const translateX = x => `translateX(${x / 10}px)`;

  return (
    <TrackMouse>
      {({ x, y }) => setSpring({ xy: calc(x, y) })
        && (
          <Text style={{ transform: spring.xy.interpolate(translateX) }}>
            <Typist cursor={{ element: '_', hideWhenDone: true, hideWhenDoneDelay: 500 }}>
              {title}
            </Typist>
          </Text>
        )
      }
    </TrackMouse>
  );
};

Title.propTypes = propTypes;

export default Title;
