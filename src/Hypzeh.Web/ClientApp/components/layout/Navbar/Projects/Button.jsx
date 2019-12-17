import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { NavLink } from 'react-router-dom';

import { PRIMARY, SECONDARY } from '../../../../utils/style/variables';
import { ViewContext, viewActions } from '../../../../contexts/view';
import { NavigationContext } from '../../../../contexts/navigation';
import Icon from '../../../shared/Icon';

const propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Wrapper = styled(NavLink)`
  border-width: 0 5px;
  border-style: solid;
  border-color: transparent;
  width: 4.5rem;
  height: 4rem;
  min-height: 4rem;
  max-height: 4rem;
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

const Content = styled.div`
  padding: .5rem;
`;

const Button = ({ to, icon }) => {
  const [, viewDispatch] = useContext(ViewContext);
  const [{ activeProject }] = useContext(NavigationContext);

  const handleClick = () => {
    viewDispatch(viewActions.showPagesPanel());
  };

  return (
    <Wrapper to={to} onClick={handleClick} isActive={() => activeProject.path === to}>
      <Content>
        <Icon name={icon} />
      </Content>
    </Wrapper>
  );
};

Button.propTypes = propTypes;

export default Button;
