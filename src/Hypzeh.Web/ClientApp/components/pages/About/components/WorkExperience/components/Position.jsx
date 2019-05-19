import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  start: PropTypes.shape().isRequired,
  end: PropTypes.shape().isRequired,
};

const Position = ({
  title,
  start,
  end,
  location,
  description,
}) => (
  <div key={title}>
    <strong>{title}</strong>
    <br />
    <span>
      <Moment date={start} format="MMM YYYY" />
      {' - '}
      <Moment date={end} format="MMM YYYY" />
      {' '}
      &bull;
      {' '}
      <Moment date={end} duration={start} />
    </span>
    <br />
    {location}
    <br />
    {description}
  </div>
);

Position.propTypes = propTypes;

export default Position;
