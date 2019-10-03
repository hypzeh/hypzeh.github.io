import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { NavLink } from 'react-router-dom';

import { PRIMARY, SECONDARY } from '../../../../utils/style/variables';
import { ViewContext, viewActions } from '../../../../contexts/view';
import { Icon } from '../../../shared';

const propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setAsActivePath: PropTypes.func.isRequired,
};

const Wrapper = styled(NavLink)`
  border-width: 0 5px;
  border-style: solid;
  border-color: transparent;
  width: 4.5rem;
  min-height: 3.9rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Text = styled.span`
  text-align: center;
  line-height: initial;
  font-size: x-small;
`;

const ProjectLink = ({
  title,
  path,
  icon,
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
      <Icon name={icon} height="24px" />
      <Text>{title}</Text>
    </Wrapper>
  );
};

ProjectLink.propTypes = propTypes;

export default ProjectLink;
