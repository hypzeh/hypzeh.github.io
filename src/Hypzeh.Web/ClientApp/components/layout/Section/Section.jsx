import React from 'react';

import Styles from './Section.styles';
import commonPropTypes from '~utils/common-prop-types';

const propTypes = {
  children: commonPropTypes.CHILDREN.isRequired,
};

const Section = ({ children }) => (
  <Styles.Wrapper>
    <Styles.Padding>
      {children}
    </Styles.Padding>
  </Styles.Wrapper>
);

Section.propTypes = propTypes;

export default Section;
