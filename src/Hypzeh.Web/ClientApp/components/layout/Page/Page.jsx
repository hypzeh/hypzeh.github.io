import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Scroller from '../../shared/Scroller';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
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

export default Page;
