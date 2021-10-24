import React from 'react';
import PropTypes from 'prop-types';

import Styles from './BaseLoader.styles';
import NSLogo from '~components/shared/NSLogo';
import commonPropTypes from '~utils/common-prop-types';

const propTypes = {
  children: commonPropTypes.CHILDREN,
  className: PropTypes.string,
  theme: PropTypes.shape(),
  title: PropTypes.string,
  showLoader: PropTypes.bool,
};

const defaultProps = {
  children: null,
  className: '',
  theme: null,
  title: '',
  showLoader: true,
};

const BaseLoader = ({
  children,
  className,
  theme,
  title,
  showLoader,
}) => (
  <Styles.Wrapper className={className} theme={theme}>
    <Styles.Content>
      <Styles.Logo>
        <NSLogo size={80} fill="inherit" />
        <h3>{title}</h3>
      </Styles.Logo>
      {showLoader && (<Styles.Loader theme={theme} />)}
      {children}
    </Styles.Content>
  </Styles.Wrapper>
);

BaseLoader.propTypes = propTypes;
BaseLoader.defaultProps = defaultProps;

export default BaseLoader;
