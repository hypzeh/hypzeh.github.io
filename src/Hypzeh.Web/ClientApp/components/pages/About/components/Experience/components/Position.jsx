import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';

import { PRIMARY } from '../../../../../../styles/variables';

const Container = styled.div`
  position: relative;
  padding-bottom: 1rem;
  padding-left: 4rem;

  &::before {
    content: '';
    position: absolute;
    left: 1.3rem;
    border: .25rem solid ${PRIMARY.colour};
    top: .75rem;
    border-radius: 50%;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    width: .15rem;
    background-color: ${PRIMARY.colour};
    left: 1.5rem;
    top: 2rem;
    bottom: 0;
  }
`;

const Title = styled.h4`
  margin: 0;
`;

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  start: PropTypes.shape().isRequired,
  end: PropTypes.shape().isRequired,
  isPresent: PropTypes.bool.isRequired,
};

const Position = ({
  title,
  start,
  end,
  isPresent,
  description,
}) => (
  <Container>
    <Title>{title}</Title>
    <em>
      <Moment date={start} format="MMM YYYY" />
      {' - '}
      {isPresent ? 'Present' : <Moment date={end} format="MMM YYYY" /> }
    </em>
    <p>{description}</p>
  </Container>
);

Position.propTypes = propTypes;

export default Position;