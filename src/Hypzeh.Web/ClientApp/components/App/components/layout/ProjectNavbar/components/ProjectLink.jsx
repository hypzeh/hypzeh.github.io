import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { PRIMARY, SECONDARY } from '../../../../utils/style/variables';
import { ViewContext, viewActions } from '../../../../contexts/view';
import GithubIcon from './github.svg';

const propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setAsActivePath: PropTypes.func.isRequired,
};

const hue = 240;
const Wrapper = styled(NavLink)`
  border-width: 0 5px;
  border-style: solid;
  border-color: transparent;
  width: 4.5rem;
  height: 3.9rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: ${SECONDARY.colour};
  fill: ${SECONDARY.colour};

  &:hover {
    background-color: hsl(${hue}, 10%, 30%);
    color: ${PRIMARY.colour};
    fill: ${PRIMARY.colour};
  }

  &.active {
    border-left-color: hsl(${hue}, 50%, 90%);
    background-color: hsl(${hue}, 20%, 30%);
    color: ${PRIMARY.colour};
    fill: ${PRIMARY.colour};

    &:hover {
      background-color: hsl(${hue}, 20%, 40%)
    }
  }
`;

const Text = styled.span`
  text-align: center;
  line-height: initial;
  font-size: x-small;
`;

const ProjectLink = ({
  title,
  path,
  isActive,
  setAsActivePath,
}) => {
  const [, viewDispatch] = useContext(ViewContext);

  const handleClick = () => {
    if (!isActive) {
      setAsActivePath();
    }

    viewDispatch(isActive ? viewActions.togglePanel() : viewActions.openPanel());
  };

  return (
    <Wrapper
      to={isActive ? window.location.pathname : path}
      onClick={handleClick}
      isActive={() => isActive}
    >
      <GithubIcon height="24px" />
      <Text>{title}</Text>
    </Wrapper>
  );
};

ProjectLink.propTypes = propTypes;

export default ProjectLink;
