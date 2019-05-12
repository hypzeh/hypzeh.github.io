import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../../../../styles/media';

const Wrapper = styled.footer`
  width: 100%;
  line-height: normal;
  font-size: 250%;
  border: 1px solid darkgreen;

  ${media.large`
    font-size: 200%;
  `}

  ${media.medium`
    font-size: 150%;
  `}

  ${media.small`
    font-size: 100%;
  `}
`;

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Footer = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
