import React from 'react';

import S from '../../styles/components/layout/appHeader';

const AppHeader = () => (
  <S.Header>
    <S.Title>Nick Smirnoff</S.Title>
    <S.NavigationBar>
      <S.Link to='/'>Home</S.Link>
      <S.Link to='/about'>About</S.Link>
      <S.Link to='/projects'>Projects</S.Link>
    </S.NavigationBar>
  </S.Header>
);

export default AppHeader;
