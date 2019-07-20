import React, { useContext } from 'react';
import styled from 'styled-components';

import media from '../../../utils/style/media';
import { TERTIARY } from '../../../utils/style/variables';
import { NavigationContext } from '../../../contexts/navigation';
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
  z-index: 1;

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

const Group = styled.div`
  position: relative;
`;

const Panel = () => {
  const { navigation } = useContext(NavigationContext);

  return (
    <Container>
      <Scroller width="15rem">
        <Content>
          <Group>
            {navigation.internal.map(item => (
              <InternalLink
                key={item.path}
                path={item.path}
                title={item.title}
              />
            ))}
          </Group>
          <Group>
            {navigation.external.map(item => (<ExternalLink key={item.title} />))}
          </Group>
        </Content>
      </Scroller>
    </Container>
  );
};

export default Panel;
