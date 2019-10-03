import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../../utils/style/media';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  text-transform: uppercase;
  text-align: center;
`;

const Header = styled.h1`
  margin: 0;
  line-height: 1;
  font-size: 5em;

  ${media.large`
    font-size: 7vw;
  `}

  ${media.medium`
    font-size: 10vw;
  `}
`;

const Title = ({ text }) => (
  <Wrapper>
    <Header>{text}</Header>
  </Wrapper>
);

Title.propTypes = propTypes;

export default Title;
