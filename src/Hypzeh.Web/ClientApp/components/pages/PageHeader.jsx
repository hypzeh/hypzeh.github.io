import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';

const Header = styled.header`
  position: sticky;
  width: 100%;
  margin: 0;
  top: 0;
  text-align: center;
  line-height: normal;
  font-size: 500%;
  color: red;
  border: 1px solid lightgreen;

  ${media.large`
    font-size: 400%;
  `}

  ${media.medium`
    font-size: 300%;
  `}

  ${media.small`
    font-size: 200%;
  `}
`;

const PageHeader = ({ children }) => (
  <Header>
    {children}
  </Header>
);

export default PageHeader;
