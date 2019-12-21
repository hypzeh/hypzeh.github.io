import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import { PRIMARY } from '../../utils/style/variables';

const propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  openInNewTab: PropTypes.bool,
};
const defaultProps = {
  children: null,
  text: '',
  openInNewTab: false,
};

const Wrapper = styled.a`
  color: ${PRIMARY.colour};
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${darken(0.15, PRIMARY.highlight)};
  }

  &:active {
    color: ${darken(0.25, PRIMARY.highlight)};
  }
`;

const TextLink = ({
  children,
  to,
  text,
  openInNewTab,
}) => (
  <Wrapper
    href={to}
    aria-label={text}
    target={openInNewTab ? '_blank' : '_self'}
    rel="noopener noreferrer"
  >
    {children || text}
  </Wrapper>
);

TextLink.propTypes = propTypes;
TextLink.defaultProps = defaultProps;

export default TextLink;
