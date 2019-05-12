import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../../styles/media';

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  text-align: center;
  line-height: normal;
  font-size: 250%;
  border: 1px solid green;

  ${media.large`
    font-size: 200%;
  `}

  ${media.medium`
    font-size: 150%;
  `}

  ${media.small`
    font-size: 100%;
  `}
`;

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const PageContent = ({ children }) => (
  <Content>
    {children}
  </Content>
);

PageContent.propTypes = propTypes;
PageContent.defaultProps = defaultProps;

export default PageContent;
