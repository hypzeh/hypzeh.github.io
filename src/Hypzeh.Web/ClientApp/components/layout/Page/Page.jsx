import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Styles from './Page.styles';
import Scroller from '../Scroller';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      language: PropTypes.string,
    }),
  ]).isRequired,
  hideHeading: PropTypes.bool,
  padding: PropTypes.string,
};

const defaultProps = {
  hideHeading: false,
  padding: '0 .5rem',
};

const Page = ({
  children,
  title,
  hideHeading,
  padding,
}) => (
  <Styles.Wrapper>
    <Helmet title={title} />
    <Scroller padding={padding}>
      {!hideHeading && (<Styles.Heading>{title}</Styles.Heading>)}
      {children}
    </Scroller>
  </Styles.Wrapper>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
