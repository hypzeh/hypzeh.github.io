import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import types from '../../types';
import Scroller from './Scroller';

const propTypes = {
  children: types.children,
  title: PropTypes.string,
};

const defaultProps = {
  children: null,
  title: '',
};

const Container = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.div`
  margin: .5rem;
`;

const Page = ({ children, title }) => (
  <Container>
    <Helmet title={title} />
    <Scroller>
      <Content>
        {children}
      </Content>
    </Scroller>
  </Container>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
