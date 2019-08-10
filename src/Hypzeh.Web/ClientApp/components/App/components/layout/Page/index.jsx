import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import types from '../../../types';
import { Scroller } from '../../shared';

const propTypes = {
  children: types.children,
  title: PropTypes.string,
};

const defaultProps = {
  children: null,
  title: '',
};

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Page = ({ children, title }) => (
  <Wrapper>
    <Helmet title={title} />
    <Scroller>
      {children}
    </Scroller>
  </Wrapper>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
