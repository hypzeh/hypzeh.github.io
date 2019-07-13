import React, { useContext } from 'react';
import styled from 'styled-components';

import media from '../../../../../utils/style/media';
import { ViewContext, viewActions } from '../../../../../contexts/view';
import { Scroller } from '../../../../shared';

const Container = styled.div`
  border: 5px solid green;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #2f3136;
  overflow: hidden;
  z-index: 1;

  ${media.medium`
    position: absolute;
    top: 0;
    bottom: 0;
  `}
`;

const Button = styled.button`
  width: 100%;
`;

const placeholder = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

const Panel = () => {
  const { dispatch } = useContext(ViewContext);

  return (
    <Container>
      <Scroller width="15rem">
        {placeholder.map(value => (<Button key={value} type="button" onClick={() => dispatch(viewActions.closePanel())}>{value}</Button>))}
      </Scroller>
    </Container>
  );
};

export default Panel;
