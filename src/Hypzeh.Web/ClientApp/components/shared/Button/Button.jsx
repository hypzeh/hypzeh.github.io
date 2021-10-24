import React from 'react';
import PropTypes from 'prop-types';

import Styles from './Button.styles';
import variants from './variants';
import types from './types';
import commonPropTypes from '~utils/common-prop-types';

const propTypes = {
  className: PropTypes.string,
  children: commonPropTypes.CHILDREN,
  variant: PropTypes.oneOf(Object.values(variants)),
  type: PropTypes.oneOf(Object.values(types)),
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  className: '',
  children: null,
  variant: variants.STANDARD,
  type: types.BUTTON,
  disabled: false,
  active: false,
  onClick: null,
};

const Button = ({
  className,
  children,
  text,
  type,
  variant,
  disabled,
  active,
  onClick,
}) => (
  <Styles.Wrapper
    className={`${className}${active ? ' active' : ''}`}
    type={type.toLowerCase()}
    variant={variant.toUpperCase()}
    disabled={disabled}
    onClick={onClick}
  >
    {children || text}
  </Styles.Wrapper>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
