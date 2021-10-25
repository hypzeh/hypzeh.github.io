import React from 'react';
import PropTypes from 'prop-types';

import Styles from './ButtonLink.styles';
import commonPropTypes from '~utils/common-prop-types';

const propTypes = {
  children: commonPropTypes.CHILDREN,
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  openInNewTab: PropTypes.bool,
  isTextLink: PropTypes.bool,
};

const defaultProps = {
  children: null,
  text: '',
  openInNewTab: false,
  isTextLink: false,
};

const ButtonLink = ({
  children,
  to,
  text,
  openInNewTab,
  isTextLink,
}) => (
  <Styles.Wrapper
    href={to}
    aria-label={text}
    target={openInNewTab ? '_blank' : '_self'}
    rel="noopener noreferrer"
    isTextLink={isTextLink}
  >
    {children || text}
  </Styles.Wrapper>
);

ButtonLink.propTypes = propTypes;
ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
