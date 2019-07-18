import React, { useContext } from 'react';
import styled from 'styled-components';

import media from '../../../utils/style/media';
import { TERTIARY } from '../../../utils/style/variables';
import { ViewContext, viewActions } from '../../../contexts/view';
import { Scroller } from '../../shared';
import InternalLink from './components/InternalLink';
import ExternalLink from './components/ExternalLink';

const Container = styled.div`
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${TERTIARY.background};
  overflow: hidden;

  ${media.medium`
    position: absolute;
    top: 0;
    bottom: 0;
  `}
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const internal = [
  { path: '/', title: 'Home' },
  { path: '/test', title: 'Test Page' },
  { path: '/test', title: 'Test Page1' },
  { path: '/test', title: 'Test Page2' },
  { path: '/test', title: 'Test Page3' },
  { path: '/test', title: 'Test Page4' },
  { path: '/test', title: 'Test Page5' },
  { path: '/test', title: 'Test Page6' },
  { path: '/test', title: 'Test Page7' },
  { path: '/test', title: 'Test Page8' },
  { path: '/test', title: 'Test Page9' },
  { path: '/test', title: 'Test Page10' },
  { path: '/test', title: 'Test Page11' },
  { path: '/test', title: 'Test Page12' },
  { path: '/test', title: 'Test Page13' },
  { path: '/test', title: 'Test Page14' },
  { path: '/test', title: 'Test Page15' },
];

const external = [
  { path: 'http://www.google.co.uk', title: 'Google' },
];

const Panel = () => {
  const { dispatch } = useContext(ViewContext);

  return (
    <Container>
      <Scroller width="15rem">
        <Content>
          <div>
            {internal.map(item => (<InternalLink key={item.title} />))}
          </div>
          <div>
            {external.map(item => (<ExternalLink key={item.title} />))}
          </div>
        </Content>
      </Scroller>
    </Container>
  );
};

export default Panel;
