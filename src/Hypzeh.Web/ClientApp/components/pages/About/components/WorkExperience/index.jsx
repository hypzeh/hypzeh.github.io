import React from 'react';
import styled from 'styled-components';

import experience from '../../../../../lib/experience';
import Position from './components/Position';

const Timeline = styled.div`
  margin-bottom: 1rem;
`;

const Experience = () => (
  <div>
    {experience.map(item => (
      <Timeline key={item.company}>
        {item.company}
        {item.positions.map(position => (
          <Position key={position.title} {...position} />
        ))}
      </Timeline>
    ))}
  </div>
);

export default Experience;
