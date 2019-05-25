import React from 'react';
import styled from 'styled-components';

import experience from '../../../../../lib/experience';
import Position from './components/Position';

const Timeline = styled.div`
  margin: 0;
`;

const Experience = () => (
  <React.Fragment>
    <h2>Experience</h2>
    <Timeline>
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
    </Timeline>
  </React.Fragment>
);

export default Experience;
