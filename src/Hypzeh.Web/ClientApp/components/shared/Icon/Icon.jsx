import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import library from './library';

const propTypes = {
  name: PropTypes.string.isRequired,
};

const Wrapper = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

const Icon = ({ name }) => {
  const icon = library.getByName(name);
  if (!icon) return null;

  return (
    <Wrapper src={icon} alt={name} />
  );
};

Icon.propTypes = propTypes;

export default Icon;
