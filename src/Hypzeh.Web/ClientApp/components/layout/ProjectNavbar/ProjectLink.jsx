import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { NavLink } from 'react-router-dom';

import { PRIMARY, SECONDARY } from '../../../utils/style/variables';
import NSLogo from './ns.svg';

const propTypes = {
  to: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onActive: PropTypes.func.isRequired,
};

const Wrapper = styled(NavLink)`
  border-width: 0 5px;
  border-style: solid;
  border-color: transparent;
  width: 4.5rem;
  height: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
  color: ${SECONDARY.colour};

  &:hover {
    background-color: ${darken(0.25, PRIMARY.highlight)};
    color: ${PRIMARY.colour};
  }

  &.active {
    border-left-color: ${lighten(0.15, PRIMARY.highlight)};
    background-color: ${darken(0.2, PRIMARY.highlight)};
    color: ${PRIMARY.colour};

    &:hover {
      background-color: ${darken(0.15, PRIMARY.highlight)};
    }
  }
`;

const Icon = styled.img`
  width: 4rem;
  height: 3.5rem;
`;

const ProjectLink = ({ to, isActive, onActive }) => {
  const handleClick = () => {
    if (!isActive) {
      onActive();
    }
  };

  return (
    <Wrapper to={to} onClick={handleClick} isActive={() => isActive}>
      <Icon src={NSLogo} alt="" />
    </Wrapper>
  );
};

ProjectLink.propTypes = propTypes;

export default ProjectLink;
