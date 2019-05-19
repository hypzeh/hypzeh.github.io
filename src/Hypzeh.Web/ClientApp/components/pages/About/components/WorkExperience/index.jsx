import React from 'react';

import experience from './experience';
import Position from './components/Position';

const Experience = () => (
  <div>
    {experience.map(item => (
      <div key={item.company}>
        {item.company}
        {item.positions.map(position => (
          <Position key={position.title} {...position} />
        ))}
      </div>
    ))}
  </div>
);

export default Experience;
