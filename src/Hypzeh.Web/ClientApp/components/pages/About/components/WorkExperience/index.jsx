import React from 'react';
import styled from 'styled-components';

import experience from '../../../../../lib/experience';
import Position from './components/Position';

const Container = styled.div`
  border: 0px solid blue;
`;

const Timeline = styled.div`
  border: 0px solid red;
`;

const Experience = () => (
  <Container>
    <h2>Experience</h2>
    {experience.map((item, index) => (
      <React.Fragment key={item.company}>
        {index === 0 ? '' : <hr />}
        <Timeline>
          <h3>{item.company}</h3>
          {item.positions.map(position => (
            <Position key={position.title} {...position} />
          ))}
        </Timeline>
      </React.Fragment>
    ))}
  </Container>
);

export default Experience;
