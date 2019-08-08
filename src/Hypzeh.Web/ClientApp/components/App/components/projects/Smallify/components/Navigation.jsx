import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { internal, external } from '../utils/routing';

const Container = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Internal = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const External = styled.div`
  display: flex;
  flex-direction: column;
`;

const Navigation = () => (
  <Container>
    <Internal>
      {internal.map(link => (
        <NavLink key={link.path} to={link.path}>{link.name}</NavLink>
      ))}
    </Internal>
    <External>
      {external.map(link => (
        <NavLink key={link.path} to={link.path}>{link.name}</NavLink>
      ))}
    </External>
  </Container>
);

export default Navigation;
