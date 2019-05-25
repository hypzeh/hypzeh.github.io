import React from 'react';
import styled from 'styled-components';

import experience from '../../../../../lib/experience';
import Position from './components/Position';

const Container = styled.div`
  border: 0px solid blue;
`;

const Experience = () => (
  <Container>
    {experience.map((item, index) => (
      <React.Fragment key={item.company}>
        {index === 0 ? '' : <hr />}
        <div>
          <h3>{item.company}</h3>
          {item.positions.map(position => (
            <Position key={position.title} {...position} />
          ))}
        </div>
      </React.Fragment>
    ))}
  </Container>
);

export default Experience;
