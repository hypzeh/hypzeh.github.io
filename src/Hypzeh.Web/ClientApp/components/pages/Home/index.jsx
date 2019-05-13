import React from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';

import { PRIMARY } from '../../../styles/variables';
import Page from '../../shared/Page';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Link = styled(NavLink)`
  color: ${PRIMARY.colour};
`;

const Title = styled.h1`
  position: sticky;
  top: 0;
  margin: 0;
  font-size: 10em;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  opacity: .25;
`;

const WrapperOne = styled.header`
  position: absolute;
  height: 100%;
  line-height: 1;
`;

const WrapperTwo = styled.div`
  flex-grow: 1;
  line-height: normal;
  padding-left: 11rem;
`;

const Home = () => (
  <Page title="Home">
    <WrapperOne>
      <Title>
        <Typist cursor={{ show: false }}>
          {'HOME'}
        </Typist>
      </Title>
    </WrapperOne>

    <WrapperTwo>
      <Section>
        {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}
      </Section>
    </WrapperTwo>
  </Page>
);

export default Home;
