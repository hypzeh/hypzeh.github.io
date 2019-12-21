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
  display: flex;
  justify-content: center;
  background-color: ${PRIMARY.highlight};
  color: black;
  border-radius: .25rem;
  padding: .5rem 1rem;
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${darken(0.15, PRIMARY.highlight)};
  }

  &:active {
    background-color: ${darken(0.25, PRIMARY.highlight)};
  }
`;

const ButtonLink = ({
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

ButtonLink.propTypes = propTypes;
ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
