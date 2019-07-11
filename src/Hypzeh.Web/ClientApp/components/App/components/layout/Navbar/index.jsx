import React, { useContext } from 'react';
import styled from 'styled-components';

import { ViewContext, actions } from '../../../contexts/view';
import { Scroller } from '../../shared';

const Container = styled.nav`
  border: 5px solid blue;
  width: 4.5rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #202225;
  overflow: hidden;
`;

const Button = styled.button`
  width: 100%;
`;

const placeholder = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

const Navbar = () => {
  const { dispatch } = useContext(ViewContext);

  return (
    <Container>
      <Scroller width="5.625rem">
        {placeholder.map(value => (<Button key={value} type="button" onClick={() => dispatch(actions.openPanel())}>{value}</Button>))}
      </Scroller>
    </Container>
  );
};

export default Navbar;
