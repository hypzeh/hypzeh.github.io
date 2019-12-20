import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../../utils/style/media';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
`;

const Padding = styled.div`
  width: auto;
  padding: .5rem 1rem;
  margin: 0 auto;

  ${media.large`
    width: 820px;
  `}

  ${media.huge`
    width: 1080px;
  `}
`;

const Section = ({ children }) => (
  <Wrapper>
    <Padding>
      {children}
    </Padding>
  </Wrapper>
);

Section.propTypes = propTypes;

export default Section;
