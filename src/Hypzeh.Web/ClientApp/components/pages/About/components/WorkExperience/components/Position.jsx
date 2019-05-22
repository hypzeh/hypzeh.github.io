import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';

import { PRIMARY } from '../../../../../../styles/variables';

const Container = styled.div`
  padding: 10px 40px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: .8rem;
    border: .25rem solid ${PRIMARY.colour};
    top: 1.25rem;
    border-radius: 50%;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    width: .15rem;
    background-color: ${PRIMARY.colour};
    left: 1rem;
    top: 3rem;
    bottom: 0;
  }
`;

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
  <Container>
    <strong>{title}</strong>
    <br />
    <Moment date={start} format="MMM YYYY" />
    {' - '}
    <Moment date={end} format="MMM YYYY" />
    <br />
    {location}
    <br />
    {description}
  </Container>
);

Position.propTypes = propTypes;

export default Position;
